import './style.css'

const plantFamilies = [
  {
    slug: 'araceae',
    nameCn: '天南星科',
    nameEn: 'Araceae',
    summary: '叶形变化丰富，观叶性极强，是室内热植爱好者最常接触的一科。',
    heroTone: 'emerald',
    genera: [
      {
        slug: 'monstera',
        nameCn: '龟背竹属',
        nameEn: 'Monstera',
        intro:
          '以开裂叶和穿孔叶闻名，视觉识别度极高，适合作为家居空间中的主角型植物。',
        plants: [
          {
            slug: 'monstera-deliciosa',
            nameCn: '龟背竹',
            nameLatin: 'Monstera deliciosa',
            cover:
              'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
            images: [
              'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80'
            ],
            headline: '大型裂叶，自带空间气场的经典热植。',
            description:
              '龟背竹是室内热带植物中最具代表性的品种之一。成熟叶片会逐渐出现深裂和穿孔，随着株龄增长，观赏性会越来越强。它既能做客厅主景，也适合和木质家具、自然风空间搭配，形成非常稳定的视觉锚点。',
            care: {
              light: '明亮散射光最佳，能耐半阴，但长期缺光会导致叶片不开背。',
              water: '土表 2 到 3 厘米干后再浇透，避免长期积水。',
              humidity: '喜欢较高湿度，空气干燥时新叶容易展开不完整。',
              temperature: '18 到 30°C 生长舒适，低于 12°C 容易停滞。',
              substrate: '建议使用疏松颗粒型基质，兼顾保水与透气。'
            },
            people:
              '适合想要打造客厅氛围感、愿意给植物留出生长空间的入门到进阶玩家。',
            faq: [
              {
                q: '为什么叶子一直不开裂？',
                a: '通常和光照不足、植株还不够成熟、支撑条件不够有关。'
              },
              {
                q: '可以水培吗？',
                a: '短期可以，但长期还是更适合透气基质环境。'
              }
            ],
            audioText:
              '龟背竹是室内热植里最经典的品种之一。它喜欢明亮散射光，土壤干一些再浇透，湿度足够时新叶会更完整地展开。随着株龄增长，叶片会慢慢出现开裂和穿孔，是非常适合打造空间氛围感的一种植物。'
          },
          {
            slug: 'monstera-adansonii',
            nameCn: '仙洞龟背竹',
            nameLatin: 'Monstera adansonii',
            cover:
              'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80',
            images: [
              'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80'
            ],
            headline: '孔洞感更强，线条更轻盈的藤本型龟背竹。',
            description:
              '仙洞龟背竹比龟背竹更轻盈，也更适合做垂吊或爬藤造型。它的叶面孔洞更早出现，整体气质更灵动，特别适合小空间做层次点缀。',
            care: {
              light: '偏明亮环境更容易保持节间紧凑。',
              water: '保持微湿但不要积水，过干容易卷叶。',
              humidity: '湿度高时状态会更舒展。',
              temperature: '20 到 28°C 更稳定。',
              substrate: '适合轻质透气基质，帮助根系健康。'
            },
            people: '适合想做垂吊绿植墙或希望植物更灵动的人。',
            faq: [
              {
                q: '为什么节间越长越丑？',
                a: '大多是缺光导致徒长，可以增加光照并配合修剪。'
              }
            ],
            audioText:
              '仙洞龟背竹是一种更轻盈的龟背竹属植物。它适合明亮环境，湿度高时状态更好，很适合做垂吊或爬藤造型，能给空间带来更细腻的热带感。'
          }
        ]
      },
      {
        slug: 'anthurium',
        nameCn: '花烛属',
        nameEn: 'Anthurium',
        intro:
          '从厚革质叶到天鹅绒叶，花烛属是观叶玩家最容易上头的门类之一。',
        plants: [
          {
            slug: 'anthurium-warocqueanum',
            nameCn: '皇后花烛',
            nameLatin: 'Anthurium warocqueanum',
            cover:
              'https://images.unsplash.com/photo-1593691509543-c55fb32dbd2b?auto=format&fit=crop&w=1200&q=80',
            images: [
              'https://images.unsplash.com/photo-1593691509543-c55fb32dbd2b?auto=format&fit=crop&w=1200&q=80'
            ],
            headline: '长叶天鹅绒质感，是很多观叶玩家的梦中情草。',
            description:
              '皇后花烛最迷人的地方，在于它夸张的狭长叶片和强烈的丝绒反光。它的美很高级，但养护条件也更挑剔，对湿度、通风和根系状态都比较敏感。',
            care: {
              light: '柔和明亮散射光，不适合暴晒。',
              water: '保持均匀湿润，但基质必须足够透气。',
              humidity: '建议维持较高湿度，越稳定越好。',
              temperature: '20 到 28°C，怕冷也怕闷。',
              substrate: '适合苔藓、树皮、珍珠岩等高透气组合。'
            },
            people: '适合已经有基础养护经验，愿意做环境管理的进阶玩家。',
            faq: [
              {
                q: '为什么新叶容易卡住？',
                a: '多数与湿度不稳定、空气太干或根系状态不佳有关。'
              }
            ],
            audioText:
              '皇后花烛是一种非常典型的高颜值观叶植物。它的叶片狭长，带有明显丝绒质感，但对环境稳定性要求较高，尤其需要较好的湿度、通风和透气基质。'
          }
        ]
      }
    ]
  },
  {
    slug: 'marantaceae',
    nameCn: '竹芋科',
    nameEn: 'Marantaceae',
    summary: '叶片纹样丰富，适合做室内氛围型搭配，但对空气湿度更敏感。',
    heroTone: 'amber',
    genera: [
      {
        slug: 'calathea',
        nameCn: '肖竹芋属',
        nameEn: 'Calathea',
        intro: '以高对比纹样和夜间合叶动作闻名，是视觉派家居绿植代表。',
        plants: [
          {
            slug: 'calathea-ornata',
            nameCn: '白纹肖竹芋',
            nameLatin: 'Calathea ornata',
            cover:
              'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=1200&q=80',
            images: [
              'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=1200&q=80'
            ],
            headline: '粉白细线像手绘笔触，是非常典型的精致型热植。',
            description:
              '白纹肖竹芋的重点不是体量，而是纹理。它很适合放在桌面、边几、玄关等近距离观赏的位置，越靠近看，越能感受到叶面的细节和层次。',
            care: {
              light: '适合柔和散射光，避免直晒。',
              water: '喜欢稳定湿润，不宜忽干忽湿。',
              humidity: '湿度不足时容易焦边。',
              temperature: '18 到 28°C。',
              substrate: '建议使用保水但不板结的轻质基质。'
            },
            people: '适合偏爱叶纹细节、愿意精细照料的人。',
            faq: [
              {
                q: '叶缘发焦怎么办？',
                a: '通常与空气干燥、水质偏硬或浇水不稳定有关。'
              }
            ],
            audioText:
              '白纹肖竹芋的魅力主要在细腻叶纹。它适合柔和散射光和稳定湿润的环境，空气干燥时很容易焦边，所以更适合愿意细心养护的人。'
          }
        ]
      }
    ]
  }
]

const allPlants = plantFamilies.flatMap((family) =>
  family.genera.flatMap((genus) =>
    genus.plants.map((plant) => ({
      ...plant,
      familySlug: family.slug,
      familyNameCn: family.nameCn,
      familyNameEn: family.nameEn,
      genusSlug: genus.slug,
      genusNameCn: genus.nameCn,
      genusNameEn: genus.nameEn,
      genusIntro: genus.intro,
      familySummary: family.summary,
      heroTone: family.heroTone,
    })),
  ),
)

const app = document.querySelector('#app')

function getRoute() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const parts = path.split('/').filter(Boolean)

  if (parts.length === 0) return { type: 'home' }
  if (parts.length === 1) {
    const family = plantFamilies.find((item) => item.slug === parts[0])
    if (family) return { type: 'family', family }
  }
  if (parts.length === 2) {
    const plant = allPlants.find(
      (item) => item.familySlug === parts[0] && item.slug === parts[1],
    )
    if (plant) return { type: 'plant', plant }
  }

  return { type: 'not-found' }
}

function navigate(path) {
  window.history.pushState({}, '', path)
  render()
  window.scrollTo({ top: 0, behavior: 'instant' })
}

window.addEventListener('popstate', render)

document.addEventListener('click', (event) => {
  const link = event.target.closest('[data-link]')
  if (!link) return
  event.preventDefault()
  navigate(link.getAttribute('href'))
})

function createPlantCard(plant) {
  return `
    <a class="plant-card" href="/${plant.familySlug}/${plant.slug}" data-link>
      <img src="${plant.cover}" alt="${plant.nameCn}" class="plant-card__image" />
      <div class="plant-card__body">
        <div class="eyebrow">${plant.familyNameCn} · ${plant.genusNameCn}</div>
        <h3>${plant.nameCn}</h3>
        <p class="latin">${plant.nameLatin}</p>
        <p>${plant.headline}</p>
      </div>
    </a>
  `
}

function homeView() {
  return `
    <main class="page page--home">
      <section class="hero hero--home">
        <div class="hero__content">
          <div class="eyebrow">Mobile Tropical Plant Library</div>
          <h1>热植图鉴，一个科属一页，一个品种一个 URL。</h1>
          <p class="hero__text">
            适合手机浏览的热植介绍站。把植物品种、图文说明和语音介绍放进统一结构里，后续可以持续扩充。
          </p>
          <div class="hero__actions">
            <a href="/araceae" data-link class="button button--primary">先看天南星科</a>
            <a href="#families" class="button button--ghost">浏览全部科属</a>
          </div>
        </div>
      </section>

      <section class="section" id="families">
        <div class="section-heading">
          <div>
            <div class="eyebrow">Plant Families</div>
            <h2>按科浏览</h2>
          </div>
        </div>
        <div class="family-grid">
          ${plantFamilies
            .map(
              (family) => `
                <a class="family-card family-card--${family.heroTone}" href="/${family.slug}" data-link>
                  <div class="eyebrow">${family.nameEn}</div>
                  <h3>${family.nameCn}</h3>
                  <p>${family.summary}</p>
                  <span>进入科属页</span>
                </a>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section section--soft">
        <div class="section-heading">
          <div>
            <div class="eyebrow">Featured Species</div>
            <h2>精选植物</h2>
          </div>
        </div>
        <div class="plant-grid">
          ${allPlants.slice(0, 4).map(createPlantCard).join('')}
        </div>
      </section>
    </main>
  `
}

function familyView(family) {
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
      <section class="hero hero--family hero--${family.heroTone}">
        <a href="/" class="back-link" data-link>← 返回首页</a>
        <div class="eyebrow">${family.nameEn}</div>
        <h1>${family.nameCn}</h1>
        <p class="hero__text">${family.summary}</p>
      </section>

      <section class="section">
        <div class="section-heading">
          <div>
            <div class="eyebrow">Genus Structure</div>
            <h2>属级介绍</h2>
          </div>
        </div>
        <div class="genus-list">
          ${family.genera
            .map(
              (genus) => `
                <article class="genus-card">
                  <div class="eyebrow">${genus.nameEn}</div>
                  <h3>${genus.nameCn}</h3>
                  <p>${genus.intro}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section section--soft">
        <div class="section-heading">
          <div>
            <div class="eyebrow">Species Pages</div>
            <h2>品种介绍页</h2>
          </div>
        </div>
        <div class="plant-grid">
          ${familyPlants.map(createPlantCard).join('')}
        </div>
      </section>
    </main>
  `
}

function plantView(plant) {
  return `
    <main class="page page--plant">
      <section class="plant-hero">
        <img src="${plant.cover}" alt="${plant.nameCn}" class="plant-hero__image" />
        <div class="plant-hero__overlay"></div>
        <div class="plant-hero__content">
          <a href="/${plant.familySlug}" class="back-link back-link--light" data-link>← 返回${plant.familyNameCn}</a>
          <div class="eyebrow eyebrow--light">${plant.familyNameCn} · ${plant.genusNameCn}</div>
          <h1>${plant.nameCn}</h1>
          <p class="latin latin--light">${plant.nameLatin}</p>
          <p class="hero__text hero__text--light">${plant.headline}</p>
        </div>
      </section>

      <section class="section section--compact">
        <div class="voice-card">
          <div>
            <div class="eyebrow">Audio Guide</div>
            <h2>语音介绍</h2>
            <p>点击播放，直接听这株植物的简明介绍。</p>
          </div>
          <button class="button button--primary" id="speak-btn" data-audio="${encodeURIComponent(
            plant.audioText,
          )}">
            播放语音
          </button>
        </div>
      </section>

      <section class="section section--compact">
        <article class="content-card">
          <div class="eyebrow">Overview</div>
          <h2>植物介绍</h2>
          <p>${plant.description}</p>
        </article>
      </section>

      <section class="section section--compact two-column">
        <article class="content-card">
          <div class="eyebrow">Care Guide</div>
          <h2>养护要点</h2>
          <ul class="care-list">
            <li><strong>光照</strong><span>${plant.care.light}</span></li>
            <li><strong>浇水</strong><span>${plant.care.water}</span></li>
            <li><strong>湿度</strong><span>${plant.care.humidity}</span></li>
            <li><strong>温度</strong><span>${plant.care.temperature}</span></li>
            <li><strong>基质</strong><span>${plant.care.substrate}</span></li>
          </ul>
        </article>
        <article class="content-card">
          <div class="eyebrow">Good For</div>
          <h2>适合人群</h2>
          <p>${plant.people}</p>
          <div class="eyebrow eyebrow--spaced">FAQ</div>
          <div class="faq-list">
            ${plant.faq
              .map(
                (item) => `
                  <details>
                    <summary>${item.q}</summary>
                    <p>${item.a}</p>
                  </details>
                `,
              )
              .join('')}
          </div>
        </article>
      </section>

      <section class="section section--compact">
        <div class="section-heading">
          <div>
            <div class="eyebrow">Gallery</div>
            <h2>植物图片</h2>
          </div>
        </div>
        <div class="gallery-grid">
          ${plant.images
            .map(
              (image) => `
                <figure class="gallery-card">
                  <img src="${image}" alt="${plant.nameCn}" />
                </figure>
              `,
            )
            .join('')}
        </div>
      </section>
    </main>
  `
}

function notFoundView() {
  return `
    <main class="page page--center">
      <section class="empty-state">
        <div class="eyebrow">404</div>
        <h1>这个植物页面还没长出来</h1>
        <p>你访问的 URL 暂时不存在，可以先回首页继续浏览。</p>
        <a href="/" class="button button--primary" data-link>回到首页</a>
      </section>
    </main>
  `
}

function attachSpeech() {
  const button = document.querySelector('#speak-btn')
  if (!button) return

  button.addEventListener('click', () => {
    const text = decodeURIComponent(button.dataset.audio || '')
    if (!('speechSynthesis' in window)) {
      window.alert('当前浏览器不支持语音播放，可后续接入真实音频文件。')
      return
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-CN'
    utterance.rate = 1
    utterance.pitch = 1
    window.speechSynthesis.speak(utterance)
  })
}

function render() {
  const route = getRoute()

  if (route.type === 'home') app.innerHTML = homeView()
  if (route.type === 'family') app.innerHTML = familyView(route.family)
  if (route.type === 'plant') app.innerHTML = plantView(route.plant)
  if (route.type === 'not-found') app.innerHTML = notFoundView()

  attachSpeech()
}

render()
