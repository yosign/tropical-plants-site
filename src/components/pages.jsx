import { useEffect, useMemo, useRef, useState } from 'react'
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, PlantCard, SectionHeader, StatCard } from '@/components/primitives'
import { faqList } from '@/components/ui'

function CardTopline({ items }) {
  return <div className="card-topline">{items.map((item) => <Badge key={item}>{item}</Badge>)}</div>
}

export function HomePage({ navigate, families, plants }) {
  return (
    <main className="page page--home">
      <section className="shell-card hero-shell">
        <div className="hero-copy">
          <Badge>Pocket Tropical Plant Atlas</Badge>
          <h1>把热植资料，重构成更清楚的移动端植物图鉴。</h1>
          <p>这版重心不是堆视觉，而是让用户快速看懂一株植物值不值得养、应该放哪、怎么养。目前已整理 {plants.length} 个热植条目。</p>
          <div className="hero-actions">
            <Button onClick={() => navigate('/araceae')}>先看天南星科</Button>
            <Button variant="secondary" onClick={() => document.getElementById('families')?.scrollIntoView({ behavior: 'smooth' })}>浏览全部科属</Button>
          </div>
        </div>
        <div className="hero-panel">
          <StatCard label="已收录植物" value={`${plants.length} 个`} />
          <StatCard label="按科浏览" value={`${families.length} 类`} />
          <StatCard label="每个植物" value="独立 URL" />
        </div>
      </section>

      <section className="section-block" id="families">
        <SectionHeader badgeLabel="Families" title="按科浏览" description="先按科定位植物气质，再进入具体品种页。" />
        <div className="family-grid">
          {families.map((family) => (
            <Card key={family.slug} className={`family-card family-card--${family.heroTone}`} clickable onClick={() => navigate(`/${family.slug}`)}>
              <CardContent>
                <CardTopline items={[family.nameEn]} />
                <h3>{family.nameCn}</h3>
                <p>{family.summary}</p>
                <span className="card-link">进入科属页 →</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeader badgeLabel="Featured" title="精选植物" description="先展示辨识度高、适合做首页入口的热植。" />
        <div className="plant-grid">
          {plants.slice(0, 8).map((plant) => <PlantCard key={plant.slug} plant={plant} onClick={() => navigate(`/${plant.familySlug}/${plant.slug}`)} />)}
        </div>
      </section>
    </main>
  )
}

export function FamilyPage({ navigate, family }) {
  const familyPlants = useMemo(
    () => family.genera.flatMap((genus) =>
      genus.plants.map((plant) => ({ ...plant, familySlug: family.slug, familyNameCn: family.nameCn, genusSlug: genus.slug, genusNameCn: genus.nameCn })),
    ),
    [family],
  )

  return (
    <main className="page">
      <section className="shell-card page-head">
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
              <CardContent>
                <CardTopline items={[genus.nameEn]} />
                <h3>{genus.nameCn}</h3>
                <p>{genus.intro}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeader badgeLabel="Species" title="品种页" description="每个植物一个独立 URL，方便后续继续扩充资料。" />
        <div className="plant-grid">
          {familyPlants.map((plant) => <PlantCard key={plant.slug} plant={plant} onClick={() => navigate(`/${plant.familySlug}/${plant.slug}`)} />)}
        </div>
      </section>
    </main>
  )
}

function useSpeech(text) {
  const [status, setStatus] = useState('未播放')
  const [isSupported, setIsSupported] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const utteranceRef = useRef(null)

  useEffect(() => {
    const supported = 'speechSynthesis' in window
    setIsSupported(supported)
    if (!supported) setStatus('当前浏览器不支持语音播放')
  }, [])

  const play = () => {
    if (!isSupported) return
    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      setStatus('已停止')
      return
    }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-CN'
    utterance.rate = 1
    utterance.pitch = 1
    utterance.onstart = () => {
      setIsPlaying(true)
      setStatus('播放中…')
    }
    utterance.onend = () => {
      setIsPlaying(false)
      setStatus('播放完成')
    }
    utterance.onerror = () => {
      setIsPlaying(false)
      setStatus('语音播放失败')
    }
    utteranceRef.current = utterance
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  }

  const stop = () => {
    if (!isSupported) return
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setStatus('已停止')
  }

  return { status, isSupported, isPlaying, play, stop }
}

export function PlantPage({ navigate, plant }) {
  const speech = useSpeech(plant.audioText)

  return (
    <main className="page page--plant">
      <section className="shell-card plant-hero-card">
        <div className="plant-hero-media"><img src={plant.cover} alt={plant.nameCn} className="plant-hero-image" /></div>
        <div className="plant-hero-copy">
          <button className="back-link button-reset" onClick={() => navigate(`/${plant.familySlug}`)}>← 返回{plant.familyNameCn}</button>
          <CardTopline items={[plant.familyNameCn, plant.genusNameCn]} />
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

      <section className="section-block">
        <Card className="voice-card voice-card--clean">
          <CardHeader>
            <SectionHeader badgeLabel="Audio Guide" title="语音介绍" description="点击播放后可以直接听这株植物的简明介绍。" compact />
          </CardHeader>
          <CardContent>
            <div className="voice-actions">
              <Button onClick={speech.play}>{speech.isPlaying ? '⏸ 停止语音' : '▶ 播放语音'}</Button>
              <Button variant="secondary" onClick={speech.stop}>■ 停止</Button>
            </div>
            <p className="voice-status">{speech.status}</p>
          </CardContent>
        </Card>
      </section>

      <section className="section-block">
        <Card className="content-card">
          <CardHeader>
            <SectionHeader badgeLabel="Overview" title="植物介绍" compact />
          </CardHeader>
          <CardContent>
            <p className="body-copy">{plant.description}</p>
          </CardContent>
        </Card>
      </section>

      <section className="section-block two-column">
        <Card className="content-card">
          <CardHeader>
            <SectionHeader badgeLabel="Care" title="养护要点" compact />
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
            <SectionHeader badgeLabel="People" title="适合人群" compact />
          </CardHeader>
          <CardContent>
            <p className="body-copy">{plant.people}</p>
          </CardContent>
        </Card>
      </section>

      <section className="section-block">
        <Card className="content-card">
          <CardHeader>
            <SectionHeader badgeLabel="FAQ" title="常见问题" compact />
          </CardHeader>
          <CardContent>
            <div dangerouslySetInnerHTML={{ __html: faqList(plant.faq) }} />
          </CardContent>
        </Card>
      </section>

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
        <CardContent>
          <Badge>404</Badge>
          <h1>这个植物页面还没长出来</h1>
          <p>你访问的 URL 暂时不存在，可以先回首页继续浏览。</p>
          <Button onClick={() => navigate('/')}>回到首页</Button>
        </CardContent>
      </Card>
    </main>
  )
}
