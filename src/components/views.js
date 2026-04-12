import { plantFamilies, allPlants } from '@/data/plants'
import { badge, stat, sectionHeader, plantCard, faqList } from '@/components/ui'

export function homeView() {
  return `
    <main class="page page--home">
      <section class="shell-card hero-shell">
        <div class="hero-copy">
          ${badge('Pocket Tropical Plant Atlas')}
          <h1>把热植资料，重构成更清楚的移动端植物图鉴。</h1>
          <p>这版重心不是堆视觉，而是让用户快速看懂一株植物值不值得养、应该放哪、怎么养。目前已整理 ${allPlants.length} 个热植条目。</p>
          <div class="hero-actions">
            <a href="/araceae" data-link class="btn btn-primary">先看天南星科</a>
            <a href="#families" class="btn btn-secondary">浏览全部科属</a>
          </div>
        </div>
        <div class="hero-panel">
          ${stat('已收录植物', `${allPlants.length} 个`)}
          ${stat('按科浏览', `${plantFamilies.length} 类`)}
          ${stat('每个植物', '独立 URL')}
        </div>
      </section>

      <section class="section-block" id="families">
        ${sectionHeader({ badgeLabel: 'Families', title: '按科浏览', description: '先按科定位植物气质，再进入具体品种页。' })}
        <div class="family-grid">
          ${plantFamilies.map((family) => `
            <a class="shell-card family-card family-card--${family.heroTone}" href="/${family.slug}" data-link>
              <div class="card-topline">${badge(family.nameEn)}</div>
              <h3>${family.nameCn}</h3>
              <p>${family.summary}</p>
              <span class="card-link">进入科属页 →</span>
            </a>
          `).join('')}
        </div>
      </section>

      <section class="section-block">
        ${sectionHeader({ badgeLabel: 'Featured', title: '精选植物', description: '先展示辨识度高、适合做首页入口的热植。' })}
        <div class="plant-grid">
          ${allPlants.slice(0, 8).map(plantCard).join('')}
        </div>
      </section>
    </main>
  `
}

export function familyView(family) {
  const familyPlants = family.genera.flatMap((genus) =>
    genus.plants.map((plant) => ({
      ...plant,
      familySlug: family.slug,
      familyNameCn: family.nameCn,
      genusSlug: genus.slug,
      genusNameCn: genus.nameCn,
    })),
  )

  return `
    <main class="page">
      <section class="shell-card page-head">
        <a href="/" class="back-link" data-link>← 返回首页</a>
        <div class="section-header section-header--tight">
          <div>
            ${badge(family.nameEn)}
            <h1>${family.nameCn}</h1>
          </div>
          <p>${family.summary}</p>
        </div>
      </section>

      <section class="section-block">
        ${sectionHeader({ badgeLabel: 'Genera', title: '属级介绍' })}
        <div class="genus-list">
          ${family.genera.map((genus) => `
            <article class="shell-card genus-card">
              <div class="card-topline">${badge(genus.nameEn)}</div>
              <h3>${genus.nameCn}</h3>
              <p>${genus.intro}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="section-block">
        ${sectionHeader({ badgeLabel: 'Species', title: '品种页', description: '每个植物一个独立 URL，方便后续继续扩充资料。' })}
        <div class="plant-grid">
          ${familyPlants.map(plantCard).join('')}
        </div>
      </section>
    </main>
  `
}

export function plantView(plant) {
  return `
    <main class="page page--plant">
      <section class="shell-card plant-hero-card">
        <div class="plant-hero-media"><img src="${plant.cover}" alt="${plant.nameCn}" class="plant-hero-image" /></div>
        <div class="plant-hero-copy">
          <a href="/${plant.familySlug}" class="back-link" data-link>← 返回${plant.familyNameCn}</a>
          <div class="card-topline">${badge(plant.familyNameCn)}${badge(plant.genusNameCn)}</div>
          <h1>${plant.nameCn}</h1>
          <p class="latin">${plant.nameLatin}</p>
          <p class="lead">${plant.headline}</p>
        </div>
      </section>

      <section class="stats-grid section-block section-block--tight">
        ${stat('一句话概览', plant.summary)}
        ${stat('养护难度', plant.difficulty)}
        ${stat('推荐摆放', plant.placement)}
      </section>

      <section class="section-block">
        <article class="shell-card voice-card voice-card--clean">
          ${sectionHeader({ badgeLabel: 'Audio Guide', title: '语音介绍', description: '点击播放后可以直接听这株植物的简明介绍。' })}
          <div class="voice-actions">
            <button class="btn btn-primary" id="speak-btn" data-audio="${encodeURIComponent(plant.audioText)}">▶ 播放语音</button>
            <button class="btn btn-secondary" id="stop-btn">■ 停止</button>
          </div>
          <p class="voice-status" id="voice-status">未播放</p>
        </article>
      </section>

      <section class="section-block">
        <article class="shell-card content-card">
          ${sectionHeader({ badgeLabel: 'Overview', title: '植物介绍' })}
          <p class="body-copy">${plant.description}</p>
        </article>
      </section>

      <section class="section-block two-column">
        <article class="shell-card content-card">
          ${sectionHeader({ badgeLabel: 'Care', title: '养护要点' })}
          <ul class="care-list">
            <li><strong>光照</strong><span>${plant.care.light}</span></li>
            <li><strong>浇水</strong><span>${plant.care.water}</span></li>
            <li><strong>湿度</strong><span>${plant.care.humidity}</span></li>
            <li><strong>温度</strong><span>${plant.care.temperature}</span></li>
            <li><strong>基质</strong><span>${plant.care.substrate}</span></li>
          </ul>
        </article>

        <article class="shell-card content-card">
          ${sectionHeader({ badgeLabel: 'People', title: '适合人群' })}
          <p class="body-copy">${plant.people}</p>
        </article>
      </section>

      <section class="section-block">
        <article class="shell-card content-card">
          ${sectionHeader({ badgeLabel: 'FAQ', title: '常见问题' })}
          ${faqList(plant.faq)}
        </article>
      </section>

      <section class="section-block">
        ${sectionHeader({ badgeLabel: 'Gallery', title: '植物图片' })}
        <div class="gallery-grid">
          ${plant.images.map((image) => `<figure class="shell-card gallery-card"><img src="${image}" alt="${plant.nameCn}" /></figure>`).join('')}
        </div>
      </section>
    </main>
  `
}

export function notFoundView() {
  return `
    <main class="page page--center">
      <section class="shell-card empty-state">
        ${badge('404')}
        <h1>这个植物页面还没长出来</h1>
        <p>你访问的 URL 暂时不存在，可以先回首页继续浏览。</p>
        <a href="/" class="btn btn-primary" data-link>回到首页</a>
      </section>
    </main>
  `
}
