import { useEffect, useRef, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { plantFamilies, allPlants } from '@/data/plants'

function Topline({ items }) {
  return (
    <div className="card-topline">
      {items.map((item) => (
        <Badge key={item} variant="secondary">{item}</Badge>
      ))}
    </div>
  )
}

function SectionHeader({ badgeLabel, title, description }) {
  return (
    <div className="section-header">
      <div>
        <Badge>{badgeLabel}</Badge>
        <h2>{title}</h2>
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <Card className="stat-card">
      <CardContent>
        <span>{label}</span>
        <strong>{value}</strong>
      </CardContent>
    </Card>
  )
}

function PlantCard({ plant, onClick }) {
  return (
    <Card className="plant-card is-clickable" onClick={onClick}>
      <div className="plant-card__media">
        <img src={plant.cover} alt={plant.nameCn} className="plant-card__image" />
      </div>
      <CardContent className="plant-card__body">
        <Topline items={[plant.familyNameCn, plant.genusNameCn]} />
        <CardTitle>{plant.nameCn}</CardTitle>
        <CardDescription className="latin">{plant.nameLatin}</CardDescription>
        <p>{plant.headline}</p>
        <div className="plant-card__meta">
          <span>难度：{plant.difficulty}</span>
          <span>{plant.placement}</span>
        </div>
      </CardContent>
    </Card>
  )
}

function useSpeech(text) {
  const [status, setStatus] = useState('未播放')
  const [isSupported, setIsSupported] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const isCancellingRef = useRef(false)

  useEffect(() => {
    const supported = 'speechSynthesis' in window
    setIsSupported(supported)
    if (!supported) setStatus('当前浏览器不支持语音播放')
  }, [])

  const play = () => {
    if (!isSupported) return
    if (isPlaying) {
      isCancellingRef.current = true
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      setStatus('已停止')
      return
    }
    isCancellingRef.current = false
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-CN'
    utterance.rate = 1
    utterance.pitch = 1
    utterance.onstart = () => {
      setIsPlaying(true)
      setStatus('播放中…')
    }
    utterance.onend = () => {
      if (!isCancellingRef.current) {
        setIsPlaying(false)
        setStatus('播放完成')
      }
    }
    utterance.onerror = (event) => {
      if (!isCancellingRef.current) {
        setIsPlaying(false)
        setStatus('语音播放失败')
      }
    }
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  }

  const stop = () => {
    if (!isSupported) return
    isCancellingRef.current = true
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setStatus('已停止')
  }

  return { status, isSupported, isPlaying, play, stop }
}

export function HomePage({ navigate }) {
  return (
    <main className="page page--home">
      <header className="site-header">
        <div className="brand">
          <span className="brand-name">vivilimo</span>
          <span className="brand-divider">/</span>
          <span className="brand-subtitle">热植图鉴</span>
        </div>
      </header>
      <section className="hero-shell shell-card">
        <div className="hero-copy">
          <Badge>Pocket Tropical Plant Atlas</Badge>
          <h1>把热植资料，重构成更清楚的移动端植物图鉴。</h1>
          <p>这版重心不是堆视觉，而是让用户快速看懂一株植物值不值得养、应该放哪、怎么养。目前已整理 {allPlants.length} 个热植条目。</p>
          <div className="hero-actions">
            <Button onClick={() => navigate('/araceae')}>先看天南星科</Button>
            <Button variant="secondary" onClick={() => document.getElementById('families')?.scrollIntoView({ behavior: 'smooth' })}>浏览全部科属</Button>
          </div>
        </div>
        <div className="hero-panel">
          <StatCard label="已收录植物" value={`${allPlants.length} 个`} />
          <StatCard label="按科浏览" value={`${plantFamilies.length} 类`} />
          <StatCard label="每个植物" value="独立 URL" />
        </div>
      </section>

      <section className="section-block" id="families">
        <SectionHeader badgeLabel="Families" title="按科浏览" description="先按科定位植物气质，再进入具体品种页。" />
        <div className="family-grid">
          {plantFamilies.map((family) => (
            <Card key={family.slug} className={`family-card family-card--${family.heroTone} is-clickable`} onClick={() => navigate(`/${family.slug}`)}>
              <CardHeader>
                <Topline items={[family.nameEn]} />
                <CardTitle>{family.nameCn}</CardTitle>
                <CardDescription>{family.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="card-link">进入科属页 →</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeader badgeLabel="Featured" title="精选植物" description="先展示辨识度高、适合做首页入口的热植。" />
        <div className="plant-grid">
          {allPlants.slice(0, 8).map((plant) => (
            <PlantCard key={plant.slug} plant={plant} onClick={() => navigate(`/${plant.familySlug}/${plant.slug}`)} />
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
      <section className="page-head shell-card">
        <button className="back-link button-reset" onClick={() => navigate('/')}>← 返回首页</button>
        <div className="section-header section-header--tight">
          <div>
            <Badge>{family.nameEn}</Badge>
            <h1>{family.nameCn}</h1>
          </div>
          <p>{family.summary}</p>
        </div>
      </section>

      <section className="section-block">
        <SectionHeader badgeLabel="Genera" title="属级介绍" />
        <div className="genus-list">
          {family.genera.map((genus) => (
            <Card key={genus.slug} className="genus-card">
              <CardHeader>
                <Topline items={[genus.nameEn]} />
                <CardTitle>{genus.nameCn}</CardTitle>
                <CardDescription>{genus.intro}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeader badgeLabel="Species" title="品种页" description="每个植物一个独立 URL，方便后续继续扩充资料。" />
        <div className="plant-grid">
          {familyPlants.map((plant) => (
            <PlantCard key={plant.slug} plant={plant} onClick={() => navigate(`/${plant.familySlug}/${plant.slug}`)} />
          ))}
        </div>
      </section>
    </main>
  )
}

export function PlantPage({ navigate, plant }) {
  const speech = useSpeech(plant.audioText)

  return (
    <main className="page page--plant">
      <header className="site-header">
        <button className="brand brand-link button-reset" onClick={() => navigate('/')}>
          <span className="brand-name">vivilimo</span>
          <span className="brand-divider">/</span>
          <span className="brand-subtitle">热植图鉴</span>
        </button>
      </header>
      <section className="plant-hero-card shell-card">
        <div className="plant-hero-media"><img src={plant.cover} alt={plant.nameCn} className="plant-hero-image" /></div>
        <div className="plant-hero-copy">
          <button className="back-link button-reset" onClick={() => navigate(`/${plant.familySlug}`)}>← 返回{plant.familyNameCn}</button>
          <Topline items={[plant.familyNameCn, plant.genusNameCn]} />
          <h1>{plant.nameCn}</h1>
          <p className="latin">{plant.nameLatin}</p>
          <p className="lead">{plant.headline}</p>
        </div>
      </section>

      <section className="stats-grid section-block section-block--tight">
        <StatCard label="一句话概览" value={plant.summary} />
        <StatCard label="养护难度" value={plant.difficulty} />
        <StatCard label="推荐摆放" value={plant.placement} />
      </section>

      <div className="voice-fab">
        <Button 
          size="icon" 
          className="voice-fab__button" 
          onClick={speech.play}
          title={speech.isPlaying ? '停止语音' : '播放语音介绍'}
        >
          {speech.isPlaying ? '⏸' : '▶'}
        </Button>
        {speech.status !== '未播放' && (
          <span className="voice-fab__status">{speech.status}</span>
        )}
      </div>

      <section className="section-block">
        <Card className="content-card">
          <CardHeader>
            <SectionHeader badgeLabel="Overview" title="植物介绍" />
          </CardHeader>
          <CardContent>
            <p className="body-copy">{plant.description}</p>
          </CardContent>
        </Card>
      </section>

      <section className="section-block two-column">
        <Card className="content-card">
          <CardHeader>
            <SectionHeader badgeLabel="Care" title="养护要点" />
          </CardHeader>
          <CardContent>
            <ul className="care-list">
              <li><strong>光照</strong><span>{plant.care.light}</span></li>
              <li><strong>浇水</strong><span>{plant.care.water}</span></li>
              <li><strong>湿度</strong><span>{plant.care.humidity}</span></li>
              <li><strong>温度</strong><span>{plant.care.temperature}</span></li>
              <li><strong>基质</strong><span>{plant.care.substrate}</span></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="content-card">
          <CardHeader>
            <SectionHeader badgeLabel="People" title="适合人群" />
          </CardHeader>
          <CardContent>
            <p className="body-copy">{plant.people}</p>
          </CardContent>
        </Card>
      </section>

      <section className="section-block">
        <Card className="content-card">
          <CardHeader>
            <SectionHeader badgeLabel="FAQ" title="常见问题" />
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {plant.faq.map((item, index) => (
                <AccordionItem key={`${plant.slug}-${index}`} value={`${plant.slug}-${index}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-4" />

      <section className="section-block">
        <SectionHeader badgeLabel="Gallery" title="植物图片" />
        <div className="gallery-grid">
          {plant.images.map((image, index) => (
            <Card key={`${plant.slug}-${index}`} className="gallery-card">
              <CardContent><img src={image} alt={plant.nameCn} /></CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

export function NotFoundPage({ navigate }) {
  return (
    <main className="page page--center">
      <Card className="empty-state">
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
