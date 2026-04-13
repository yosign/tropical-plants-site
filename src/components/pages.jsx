import { useEffect, useRef, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { plantFamilies, allPlants } from '@/data/plants'

function VoicePlayer({ text }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSupported, setIsSupported] = useState(true)
  const [tooltipText, setTooltipText] = useState('正在播放')
  const [showTooltip, setShowTooltip] = useState(false)
  const isCancellingRef = useRef(false)
  const tooltipTimerRef = useRef(null)

  useEffect(() => {
    const supported = typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window
    setIsSupported(supported)

    return () => {
      if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current)
    }
  }, [])

  const showMessage = (message) => {
    setTooltipText(message)
    setShowTooltip(true)
    if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current)
    tooltipTimerRef.current = setTimeout(() => setShowTooltip(false), 2200)
  }

  const togglePlay = () => {
    if (!isSupported) {
      showMessage('当前浏览器不支持语音播放')
      return
    }

    if (isPlaying) {
      isCancellingRef.current = true
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      setShowTooltip(false)
      return
    }

    try {
      isCancellingRef.current = false
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'zh-CN'
      utterance.rate = 1
      utterance.pitch = 1

      utterance.onstart = () => {
        setIsPlaying(true)
        setTooltipText('正在播放')
        setShowTooltip(true)
      }
      utterance.onend = () => {
        if (!isCancellingRef.current) {
          setIsPlaying(false)
          setShowTooltip(false)
        }
      }
      utterance.onerror = () => {
        if (!isCancellingRef.current) {
          setIsPlaying(false)
          showMessage('当前浏览器暂不支持语音播放')
        }
      }

      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(utterance)
    } catch {
      setIsPlaying(false)
      showMessage('当前浏览器暂不支持语音播放')
    }
  }

  return (
    <div className="voice-fab">
      <Button
        size="icon"
        onClick={togglePlay}
        className="voice-fab-btn"
        title={isPlaying ? '正在播放，点击停止' : '播放语音介绍'}
        aria-label={isPlaying ? '停止播放语音介绍' : '播放语音介绍'}
      >
        {isPlaying ? (
          <span className="voice-icon">⏸</span>
        ) : (
          <span className="voice-icon">▶</span>
        )}
      </Button>
      {showTooltip && (
        <div className="voice-tooltip">{tooltipText}</div>
      )}
    </div>
  )
}

export function HomePage({ navigate }) {
  return (
    <main className="page">
      <header className="site-header">
        <div className="brand">
          <span className="brand-name">vivilimo</span>
          <span className="brand-divider">/</span>
          <span className="brand-subtitle">热植图鉴</span>
        </div>
      </header>

      <Card className="hero-card">
        <CardHeader>
          <Badge>Pocket Tropical Plant Atlas</Badge>
          <CardTitle className="hero-title">把热植资料，重构成更清楚的移动端植物图鉴。</CardTitle>
          <CardDescription>这版重心不是堆视觉，而是让用户快速看懂一株植物值不值得养、应该放哪、怎么养。目前已整理 {allPlants.length} 个热植条目。</CardDescription>
        </CardHeader>
        <CardContent className="hero-actions">
          <Button onClick={() => navigate('/araceae')}>先看天南星科</Button>
          <Button variant="secondary" onClick={() => document.getElementById('families')?.scrollIntoView({ behavior: 'smooth' })}>浏览全部科属</Button>
        </CardContent>
      </Card>

      <div className="stats-grid">
        <Card>
          <CardContent className="stat-content">
            <span className="stat-label">已收录植物</span>
            <strong className="stat-value">{allPlants.length} 个</strong>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="stat-content">
            <span className="stat-label">按科浏览</span>
            <strong className="stat-value">{plantFamilies.length} 类</strong>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="stat-content">
            <span className="stat-label">每个植物</span>
            <strong className="stat-value">独立 URL</strong>
          </CardContent>
        </Card>
      </div>

      <section id="families">
        <h2 className="section-title">按科浏览</h2>
        <p className="section-desc">先按科定位植物气质，再进入具体品种页。</p>
        <div className="family-grid">
          {plantFamilies.map((family) => (
            <Card key={family.slug} className="clickable" onClick={() => navigate(`/${family.slug}`)}>
              <CardHeader>
                <Badge variant="secondary">{family.nameEn}</Badge>
                <CardTitle>{family.nameCn}</CardTitle>
                <CardDescription>{family.summary}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">精选植物</h2>
        <p className="section-desc">先展示辨识度高、适合做首页入口的热植。</p>
        <div className="plant-grid">
          {allPlants.slice(0, 8).map((plant) => (
            <Card key={plant.slug} className="clickable" onClick={() => navigate(`/${plant.familySlug}/${plant.slug}`)}>
              <div className="plant-image">
                <img src={plant.cover} alt={plant.nameCn} />
              </div>
              <CardHeader>
                <div className="plant-tags">
                  <Badge variant="secondary">{plant.familyNameCn}</Badge>
                  <Badge variant="secondary">{plant.genusNameCn}</Badge>
                </div>
                <CardTitle>{plant.nameCn}</CardTitle>
                <CardDescription className="plant-latin">{plant.nameLatin}</CardDescription>
                <p className="plant-headline">{plant.headline}</p>
              </CardHeader>
              <CardContent className="plant-meta">
                <span>难度：{plant.difficulty}</span>
                <span>{plant.placement}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

export function FamilyPage({ navigate, family }) {
  const familyPlants = family.genera.flatMap((genus) =>
    genus.plants.map((plant) => ({ ...plant, familySlug: family.slug, familyNameCn: family.nameCn, genusSlug: genus.slug, genusNameCn: genus.nameCn })),
  )

  return (
    <main className="page">
      <header className="site-header">
        <button className="brand brand-link button-reset" onClick={() => navigate('/')}>
          <span className="brand-name">vivilimo</span>
          <span className="brand-divider">/</span>
          <span className="brand-subtitle">热植图鉴</span>
        </button>
      </header>

      <Card>
        <CardHeader>
          <button className="back-link button-reset" onClick={() => navigate('/')}>← 返回首页</button>
          <Badge>{family.nameEn}</Badge>
          <CardTitle>{family.nameCn}</CardTitle>
          <CardDescription>{family.summary}</CardDescription>
        </CardHeader>
      </Card>

      <section>
        <h2 className="section-title">属级介绍</h2>
        <div className="genus-grid">
          {family.genera.map((genus) => (
            <Card key={genus.slug}>
              <CardHeader>
                <Badge variant="secondary">{genus.nameEn}</Badge>
                <CardTitle>{genus.nameCn}</CardTitle>
                <CardDescription>{genus.intro}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">品种页</h2>
        <p className="section-desc">每个植物一个独立 URL，方便后续继续扩充资料。</p>
        <div className="plant-grid">
          {familyPlants.map((plant) => (
            <Card key={plant.slug} className="clickable" onClick={() => navigate(`/${plant.familySlug}/${plant.slug}`)}>
              <div className="plant-image">
                <img src={plant.cover} alt={plant.nameCn} />
              </div>
              <CardHeader>
                <div className="plant-tags">
                  <Badge variant="secondary">{plant.familyNameCn}</Badge>
                  <Badge variant="secondary">{plant.genusNameCn}</Badge>
                </div>
                <CardTitle>{plant.nameCn}</CardTitle>
                <CardDescription className="plant-latin">{plant.nameLatin}</CardDescription>
                <p className="plant-headline">{plant.headline}</p>
              </CardHeader>
              <CardContent className="plant-meta">
                <span>难度：{plant.difficulty}</span>
                <span>{plant.placement}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

export function PlantPage({ navigate, plant }) {
  return (
    <main className="page">
      <header className="site-header">
        <button className="brand brand-link button-reset" onClick={() => navigate('/')}>
          <span className="brand-name">vivilimo</span>
          <span className="brand-divider">/</span>
          <span className="brand-subtitle">热植图鉴</span>
        </button>
      </header>

      <Card className="plant-hero">
        <div className="plant-hero-image">
          <img src={plant.cover} alt={plant.nameCn} />
        </div>
        <CardHeader>
          <button className="back-link button-reset" onClick={() => navigate(`/${plant.familySlug}`)}>← 返回{plant.familyNameCn}</button>
          <div className="plant-tags">
            <Badge variant="secondary">{plant.familyNameCn}</Badge>
            <Badge variant="secondary">{plant.genusNameCn}</Badge>
          </div>
          <CardTitle>{plant.nameCn}</CardTitle>
          <CardDescription className="plant-latin">{plant.nameLatin}</CardDescription>
          <p className="plant-headline">{plant.headline}</p>
        </CardHeader>
      </Card>

      <div className="stats-grid">
        <Card>
          <CardContent className="stat-content">
            <span className="stat-label">一句话概览</span>
            <strong className="stat-value">{plant.summary}</strong>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="stat-content">
            <span className="stat-label">养护难度</span>
            <strong className="stat-value">{plant.difficulty}</strong>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="stat-content">
            <span className="stat-label">推荐摆放</span>
            <strong className="stat-value">{plant.placement}</strong>
          </CardContent>
        </Card>
      </div>

      <VoicePlayer text={plant.audioText} />

      <Card>
        <CardHeader>
          <CardTitle>植物介绍</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{plant.description}</p>
        </CardContent>
      </Card>

      <div className="two-column">
        <Card>
          <CardHeader>
            <CardTitle>养护要点</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="care-list">
              <div className="care-item">
                <strong>光照</strong>
                <span>{plant.care.light}</span>
              </div>
              <div className="care-item">
                <strong>浇水</strong>
                <span>{plant.care.water}</span>
              </div>
              <div className="care-item">
                <strong>湿度</strong>
                <span>{plant.care.humidity}</span>
              </div>
              <div className="care-item">
                <strong>温度</strong>
                <span>{plant.care.temperature}</span>
              </div>
              <div className="care-item">
                <strong>基质</strong>
                <span>{plant.care.substrate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>适合人群</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{plant.people}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>常见问题</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {plant.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Separator />

      <section>
        <h2 className="section-title">植物图片</h2>
        <div className="gallery-grid">
          {plant.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={plant.nameCn} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export function NotFoundPage({ navigate }) {
  return (
    <main className="page page-center">
      <Card className="empty-card">
        <CardHeader>
          <Badge>404</Badge>
          <CardTitle>这个植物页面还没长出来</CardTitle>
          <CardDescription>你访问的 URL 暂时不存在，可以先回首页继续浏览。</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => navigate('/')}>回到首页</Button>
        </CardContent>
      </Card>
    </main>
  )
}
