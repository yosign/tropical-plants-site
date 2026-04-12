const defaultFaq = [
  {
    q: '适合新手吗？',
    a: '如果能保证明亮散射光、通风和不过度浇水，大多数热植都能稳定养活。'
  },
  {
    q: '需要很高湿度吗？',
    a: '观叶热植普遍喜欢较高湿度，但普通家庭环境里，稳定通风和正确浇水往往更重要。'
  }
]

const plantImagePool = {
  lushCanopy: '/plants/lush-canopy.svg',
  velvetLeaf: '/plants/velvet-leaf.svg',
  stripedLeaf: '/plants/striped-leaf.svg',
  sculpturalLeaf: '/plants/sculptural-leaf.svg',
  variegatedLeaf: '/plants/variegated-leaf.svg'
}

function createPlant(config) {
  const { light, water, humidity, temperature, substrate, ...rest } = config
  return {
    faq: defaultFaq,
    difficulty: '中等',
    placement: '客厅或书房的明亮散射光位置',
    summary: '适合做室内观叶陈列的热带植物。',
    ...rest,
    care: {
      light: light || '明亮散射光',
      water: water || '土表干后浇透',
      humidity: humidity || '中高湿度',
      temperature: temperature || '18-28°C',
      substrate: substrate || '透气性好的基质',
    },
    images: config.images?.length ? config.images : [config.cover],
  }
}

export const plantFamilies = [
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
        intro: '以开裂叶和穿孔叶闻名，视觉识别度极高，适合作为家居空间中的主角型植物。',
        plants: [
          createPlant({ slug: 'monstera-deliciosa', nameCn: '龟背竹', nameLatin: 'Monstera deliciosa', cover: plantImagePool.lushCanopy, images: [plantImagePool.lushCanopy, plantImagePool.sculpturalLeaf], headline: '大型裂叶，自带空间气场的经典热植。', description: '龟背竹是室内热带植物中最具代表性的品种之一。成熟叶片会逐渐出现深裂和穿孔，随着株龄增长，观赏性会越来越强。它既能做客厅主景，也适合和木质家具、自然风空间搭配。', light: '明亮散射光最佳，能耐半阴，但长期缺光会导致叶片不开背。', water: '土表 2 到 3 厘米干后再浇透，避免长期积水。', humidity: '喜欢较高湿度，空气干燥时新叶容易展开不完整。', temperature: '18 到 30°C 生长舒适，低于 12°C 容易停滞。', substrate: '建议使用疏松颗粒型基质，兼顾保水与透气。', people: '适合想要打造客厅氛围感、愿意给植物留出生长空间的入门到进阶玩家。', summary: '最经典的室内大型热植之一，适合做空间主景。', faq: [{ q: '为什么叶子一直不开裂？', a: '通常和光照不足、植株还不够成熟、支撑条件不够有关。' }, { q: '可以水培吗？', a: '短期可以，但长期还是更适合透气基质环境。' }], audioText: '龟背竹是室内热植里最经典的品种之一。它喜欢明亮散射光，土壤干一些再浇透，湿度足够时新叶会更完整地展开。随着株龄增长，叶片会慢慢出现开裂和穿孔。' }),
          createPlant({ slug: 'monstera-adansonii', nameCn: '仙洞龟背竹', nameLatin: 'Monstera adansonii', cover: plantImagePool.sculpturalLeaf, headline: '孔洞感更强，线条更轻盈的藤本型龟背竹。', description: '仙洞龟背竹比龟背竹更轻盈，也更适合做垂吊或爬藤造型。它的叶面孔洞更早出现，整体气质更灵动，特别适合小空间做层次点缀。', light: '偏明亮环境更容易保持节间紧凑。', water: '保持微湿但不要积水，过干容易卷叶。', humidity: '湿度高时状态会更舒展。', temperature: '20 到 28°C 更稳定。', substrate: '适合轻质透气基质，帮助根系健康。', people: '适合想做垂吊绿植墙或希望植物更灵动的人。', summary: '适合垂吊或爬藤造型的小体量热植。', faq: [{ q: '为什么节间越长越丑？', a: '大多是缺光导致徒长，可以增加光照并配合修剪。' }], audioText: '仙洞龟背竹是一种更轻盈的龟背竹属植物。它适合明亮环境，湿度高时状态更好，很适合做垂吊或爬藤造型。' }),
          createPlant({ slug: 'monstera-standleyana-albo', nameCn: '白锦龟背竹蔓绿绒', nameLatin: 'Monstera standleyana Albo Variegata', cover: plantImagePool.variegatedLeaf, headline: '斑锦叶片清爽利落，适合做轻奢感点缀。', description: '这类斑锦型龟背竹叶片相对修长，白色斑纹分布不规则，既有观叶热植的存在感，也比大型裂叶植物更节制。', light: '需要更明亮的散射光，帮助维持稳定斑锦。', water: '基质微干后再浇水，避免长期闷根。', humidity: '中高湿环境更稳定。', temperature: '18 到 28°C。', substrate: '颗粒比例高一些，有利于斑锦类根系健康。', people: '适合喜欢斑锦植物、但不想空间太满的人。', summary: '更适合做小体量精致点缀的斑锦型热植。', audioText: '白锦龟背竹蔓绿绒适合明亮环境，斑纹稳定时观赏性很强。养护重点是不要太阴，也不要长期积水。' })
        ]
      },
      {
        slug: 'anthurium',
        nameCn: '花烛属',
        nameEn: 'Anthurium',
        intro: '从厚革质叶到天鹅绒叶，花烛属是观叶玩家最容易上头的门类之一。',
        plants: [
          createPlant({ slug: 'anthurium-warocqueanum', nameCn: '皇后花烛', nameLatin: 'Anthurium warocqueanum', cover: plantImagePool.velvetLeaf, headline: '长叶天鹅绒质感，是很多观叶玩家的梦中情草。', description: '皇后花烛最迷人的地方，在于它夸张的狭长叶片和强烈的丝绒反光。它的美很高级，但养护条件也更挑剔，对湿度、通风和根系状态都比较敏感。', light: '柔和明亮散射光，不适合暴晒。', water: '保持均匀湿润，但基质必须足够透气。', humidity: '建议维持较高湿度，越稳定越好。', temperature: '20 到 28°C，怕冷也怕闷。', substrate: '适合苔藓、树皮、珍珠岩等高透气组合。', people: '适合已经有基础养护经验，愿意做环境管理的进阶玩家。', difficulty: '偏高', placement: '高湿环境的展示位', summary: '高颜值但也更考验环境控制的丝绒观叶品种。', faq: [{ q: '为什么新叶容易卡住？', a: '多数与湿度不稳定、空气太干或根系状态不佳有关。' }], audioText: '皇后花烛是一种非常典型的高颜值观叶植物。它的叶片狭长，带有明显丝绒质感，但对环境稳定性要求较高。' }),
          createPlant({ slug: 'anthurium-crystallinum', nameCn: '水晶花烛', nameLatin: 'Anthurium crystallinum', cover: plantImagePool.velvetLeaf, images: [plantImagePool.velvetLeaf, plantImagePool.lushCanopy], headline: '心形叶配银白叶脉，是观叶花烛里的高辨识度代表。', description: '水晶花烛的叶片更偏心形，叶脉对比强烈，兼具天鹅绒质感和热带感，是很多人入门观叶花烛的第一站。', light: '适合明亮柔和散射光。', water: '保持均匀湿润，但不要积水。', humidity: '湿度稳定时叶片更舒展。', temperature: '20 到 28°C。', substrate: '树皮、珍珠岩、泥炭混合的高透气基质更稳。', people: '适合喜欢明显叶脉和丝绒质感的玩家。', difficulty: '中高', placement: '书房、植物柜、边几', summary: '心形丝绒叶和白色叶脉是它最强的视觉记忆点。', audioText: '水晶花烛是花烛属里非常经典的丝绒观叶品种。它的重点在于心形叶和明亮叶脉，湿度稳定时状态会非常漂亮。' }),
          createPlant({ slug: 'anthurium-clarinervium', nameCn: '白脉花烛', nameLatin: 'Anthurium clarinervium', cover: plantImagePool.velvetLeaf, headline: '叶片更厚，白脉更硬朗，气质沉稳利落。', description: '白脉花烛相比水晶花烛更厚实，叶型更紧凑，白色主脉更像被描边，整体观感更雕塑化。', light: '明亮散射光最佳。', water: '偏干一点也能接受，但不能长期缺水。', humidity: '中高湿更有利于新叶展开。', temperature: '18 到 28°C。', substrate: '建议颗粒型、透气性强的观叶花烛基质。', people: '适合偏爱厚叶、硬朗叶型的人。', difficulty: '中高', placement: '靠近光源的展示位', summary: '更厚、更硬朗，也更有雕塑感的白脉系花烛。', audioText: '白脉花烛的叶片更厚，白脉也更醒目。它适合明亮散射光，基质透气是关键。' }),
          createPlant({ slug: 'anthurium-veitchii', nameCn: '国王花烛', nameLatin: 'Anthurium veitchii', cover: plantImagePool.sculpturalLeaf, headline: '褶皱叶面非常夸张，是空间感很强的展示型植物。', description: '国王花烛最大的特点是纵向褶皱的长叶，成熟后非常有雕塑感，适合做高级感观叶陈列。', light: '柔和明亮环境最佳。', water: '保持稳定湿润，避免过干过湿剧烈波动。', humidity: '较高湿度会让叶片状态更好。', temperature: '20 到 28°C。', substrate: '适合粗颗粒、透气度高的介质。', people: '适合喜欢夸张叶型和展示感的人。', difficulty: '偏高', placement: '客厅展示角或植物柜', summary: '成熟后叶片气势很强，适合作为展示型主角。', audioText: '国王花烛以夸张的褶皱叶闻名，适合柔和明亮环境和较高湿度，是展示效果很强的观叶花烛。' })
        ]
      }
    ]
  }
]

export const allPlants = plantFamilies.flatMap((family) =>
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
