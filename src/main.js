import './style.css'

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

function createPlant({
  slug,
  nameCn,
  nameLatin,
  cover,
  images,
  headline,
  description,
  light,
  water,
  humidity,
  temperature,
  substrate,
  people,
  audioText,
  faq = defaultFaq,
}) {
  return {
    slug,
    nameCn,
    nameLatin,
    cover,
    images: images?.length ? images : [cover],
    headline,
    description,
    care: {
      light,
      water,
      humidity,
      temperature,
      substrate,
    },
    people,
    faq,
    audioText,
  }
}

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
          createPlant({
            slug: 'monstera-deliciosa',
            nameCn: '龟背竹',
            nameLatin: 'Monstera deliciosa',
            cover:
              'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1200&q=80',
            images: [
              'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=1200&q=80'
            ],
            headline: '大型裂叶，自带空间气场的经典热植。',
            description:
              '龟背竹是室内热带植物中最具代表性的品种之一。成熟叶片会逐渐出现深裂和穿孔，随着株龄增长，观赏性会越来越强。它既能做客厅主景，也适合和木质家具、自然风空间搭配。',
            light: '明亮散射光最佳，能耐半阴，但长期缺光会导致叶片不开背。',
            water: '土表 2 到 3 厘米干后再浇透，避免长期积水。',
            humidity: '喜欢较高湿度，空气干燥时新叶容易展开不完整。',
            temperature: '18 到 30°C 生长舒适，低于 12°C 容易停滞。',
            substrate: '建议使用疏松颗粒型基质，兼顾保水与透气。',
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
              '龟背竹是室内热植里最经典的品种之一。它喜欢明亮散射光，土壤干一些再浇透，湿度足够时新叶会更完整地展开。随着株龄增长，叶片会慢慢出现开裂和穿孔。'
          }),
          createPlant({
            slug: 'monstera-adansonii',
            nameCn: '仙洞龟背竹',
            nameLatin: 'Monstera adansonii',
            cover:
              'https://images.unsplash.com/photo-1620127252536-2ebd6c1f8f71?auto=format&fit=crop&w=1200&q=80',
            headline: '孔洞感更强，线条更轻盈的藤本型龟背竹。',
            description:
              '仙洞龟背竹比龟背竹更轻盈，也更适合做垂吊或爬藤造型。它的叶面孔洞更早出现，整体气质更灵动，特别适合小空间做层次点缀。',
            light: '偏明亮环境更容易保持节间紧凑。',
            water: '保持微湿但不要积水，过干容易卷叶。',
            humidity: '湿度高时状态会更舒展。',
            temperature: '20 到 28°C 更稳定。',
            substrate: '适合轻质透气基质，帮助根系健康。',
            people: '适合想做垂吊绿植墙或希望植物更灵动的人。',
            faq: [
              {
                q: '为什么节间越长越丑？',
                a: '大多是缺光导致徒长，可以增加光照并配合修剪。'
              }
            ],
            audioText:
              '仙洞龟背竹是一种更轻盈的龟背竹属植物。它适合明亮环境，湿度高时状态更好，很适合做垂吊或爬藤造型。'
          }),
          createPlant({
            slug: 'monstera-standleyana-albo',
            nameCn: '白锦龟背竹蔓绿绒',
            nameLatin: 'Monstera standleyana Albo Variegata',
            cover:
              'https://images.unsplash.com/photo-1632207691143-643e2a79b5be?auto=format&fit=crop&w=1200&q=80',
            headline: '斑锦叶片清爽利落，适合做轻奢感点缀。',
            description:
              '这类斑锦型龟背竹叶片相对修长，白色斑纹分布不规则，既有观叶热植的存在感，也比大型裂叶植物更节制。',
            light: '需要更明亮的散射光，帮助维持稳定斑锦。',
            water: '基质微干后再浇水，避免长期闷根。',
            humidity: '中高湿环境更稳定。',
            temperature: '18 到 28°C。',
            substrate: '颗粒比例高一些，有利于斑锦类根系健康。',
            people: '适合喜欢斑锦植物、但不想空间太满的人。',
            audioText:
              '白锦龟背竹蔓绿绒适合明亮环境，斑纹稳定时观赏性很强。养护重点是不要太阴，也不要长期积水。'
          })
        ]
      },
      {
        slug: 'anthurium',
        nameCn: '花烛属',
        nameEn: 'Anthurium',
        intro:
          '从厚革质叶到天鹅绒叶，花烛属是观叶玩家最容易上头的门类之一。',
        plants: [
          createPlant({
            slug: 'anthurium-warocqueanum',
            nameCn: '皇后花烛',
            nameLatin: 'Anthurium warocqueanum',
            cover:
              'https://images.unsplash.com/photo-1586802978403-6406fb3ddfff?auto=format&fit=crop&w=1200&q=80',
            headline: '长叶天鹅绒质感，是很多观叶玩家的梦中情草。',
            description:
              '皇后花烛最迷人的地方，在于它夸张的狭长叶片和强烈的丝绒反光。它的美很高级，但养护条件也更挑剔，对湿度、通风和根系状态都比较敏感。',
            light: '柔和明亮散射光，不适合暴晒。',
            water: '保持均匀湿润，但基质必须足够透气。',
            humidity: '建议维持较高湿度，越稳定越好。',
            temperature: '20 到 28°C，怕冷也怕闷。',
            substrate: '适合苔藓、树皮、珍珠岩等高透气组合。',
            people: '适合已经有基础养护经验，愿意做环境管理的进阶玩家。',
            faq: [
              {
                q: '为什么新叶容易卡住？',
                a: '多数与湿度不稳定、空气太干或根系状态不佳有关。'
              }
            ],
            audioText:
              '皇后花烛是一种非常典型的高颜值观叶植物。它的叶片狭长，带有明显丝绒质感，但对环境稳定性要求较高。'
          }),
          createPlant({
            slug: 'anthurium-crystallinum',
            nameCn: '水晶花烛',
            nameLatin: 'Anthurium crystallinum',
            cover:
              'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80',
            headline: '心形叶配银白叶脉，是观叶花烛里的高辨识度代表。',
            description:
              '水晶花烛的叶片更偏心形，叶脉对比强烈，兼具天鹅绒质感和热带感，是很多人入门观叶花烛的第一站。',
            light: '适合明亮柔和散射光。',
            water: '保持均匀湿润，但不要积水。',
            humidity: '湿度稳定时叶片更舒展。',
            temperature: '20 到 28°C。',
            substrate: '树皮、珍珠岩、泥炭混合的高透气基质更稳。',
            people: '适合喜欢明显叶脉和丝绒质感的玩家。',
            audioText:
              '水晶花烛是花烛属里非常经典的丝绒观叶品种。它的重点在于心形叶和明亮叶脉，湿度稳定时状态会非常漂亮。'
          }),
          createPlant({
            slug: 'anthurium-clarinervium',
            nameCn: '白脉花烛',
            nameLatin: 'Anthurium clarinervium',
            cover:
              'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=1200&q=80',
            headline: '叶片更厚，白脉更硬朗，气质沉稳利落。',
            description:
              '白脉花烛相比水晶花烛更厚实，叶型更紧凑，白色主脉更像被描边，整体观感更雕塑化。',
            light: '明亮散射光最佳。',
            water: '偏干一点也能接受，但不能长期缺水。',
            humidity: '中高湿更有利于新叶展开。',
            temperature: '18 到 28°C。',
            substrate: '建议颗粒型、透气性强的观叶花烛基质。',
            people: '适合偏爱厚叶、硬朗叶型的人。',
            audioText:
              '白脉花烛的叶片更厚，白脉也更醒目。它适合明亮散射光，基质透气是关键。'
          }),
          createPlant({
            slug: 'anthurium-veitchii',
            nameCn: '国王花烛',
            nameLatin: 'Anthurium veitchii',
            cover:
              'https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&w=1200&q=80',
            headline: '褶皱叶面非常夸张，是空间感很强的展示型植物。',
            description:
              '国王花烛最大的特点是纵向褶皱的长叶，成熟后非常有雕塑感，适合做高级感观叶陈列。',
            light: '柔和明亮环境最佳。',
            water: '保持稳定湿润，避免过干过湿剧烈波动。',
            humidity: '较高湿度会让叶片状态更好。',
            temperature: '20 到 28°C。',
            substrate: '适合粗颗粒、透气度高的介质。',
            people: '适合喜欢夸张叶型和展示感的人。',
            audioText:
              '国王花烛以夸张的褶皱叶闻名，适合柔和明亮环境和较高湿度，是展示效果很强的观叶花烛。'
          })
        ]
      },
      {
        slug: 'philodendron',
        nameCn: '喜林芋属',
        nameEn: 'Philodendron',
        intro: '叶型跨度大，从细裂到荧光色系，几乎能覆盖所有室内热植风格。',
        plants: [
          createPlant({
            slug: 'philodendron-gloriosum',
            nameCn: '荣耀喜林芋',
            nameLatin: 'Philodendron gloriosum',
            cover:
              'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80',
            headline: '趴地型大心叶，丝绒感和白脉并存。',
            description:
              '荣耀喜林芋以大尺寸心形丝绒叶著称，叶脉清晰，整体存在感很强。它不是向上攀援，而是沿着盆面横向生长。',
            light: '明亮散射光。',
            water: '保持微湿，避免持续积水。',
            humidity: '湿度越稳定，叶片越完整。',
            temperature: '20 到 30°C。',
            substrate: '疏松透气、适合横向根茎延展。',
            people: '适合喜欢大叶丝绒感的人。',
            audioText:
              '荣耀喜林芋是非常有代表性的丝绒大叶热植，喜欢明亮散射光，也需要较稳定的湿度。'
          }),
          createPlant({
            slug: 'philodendron-micans',
            nameCn: '绒叶蔓绿绒',
            nameLatin: 'Philodendron hederaceum var. hederaceum',
            cover:
              'https://images.unsplash.com/photo-1637967887999-f6b65d2f7f0d?auto=format&fit=crop&w=1200&q=80',
            headline: '细小绒叶带铜色反光，适合做垂吊层次。',
            description:
              '绒叶蔓绿绒叶片不大，但丝绒反光很细腻，挂起来很柔和，适合和大型植物搭配出高低层次。',
            light: '明亮到中等散射光都能适应。',
            water: '见干见湿，避免长期潮湿。',
            humidity: '中等湿度即可，偏高更好。',
            temperature: '18 到 28°C。',
            substrate: '轻质透气型基质。',
            people: '适合想增加垂吊感和层次感的人。',
            audioText:
              '绒叶蔓绿绒是一种很适合垂吊的热植。它叶片小，但有柔和丝绒感，比较容易融入家居场景。'
          }),
          createPlant({
            slug: 'philodendron-billietiae',
            nameCn: '橙柄喜林芋',
            nameLatin: 'Philodendron billietiae',
            cover:
              'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80',
            headline: '细长叶搭配醒目橙色叶柄，辨识度很高。',
            description:
              '橙柄喜林芋属于很容易靠结构取胜的品种，叶片狭长舒展，叶柄色彩鲜明，适合现代风空间。',
            light: '明亮散射光。',
            water: '基质半干后再浇透。',
            humidity: '中高湿更稳定。',
            temperature: '20 到 30°C。',
            substrate: '通气性好的颗粒型基质。',
            people: '适合喜欢线性叶型和高识别度植物的人。',
            audioText:
              '橙柄喜林芋最大的特征是狭长叶和橙色叶柄，适合明亮环境，也需要良好通风和透气基质。'
          }),
          createPlant({
            slug: 'philodendron-pink-princess',
            nameCn: '粉公主蔓绿绒',
            nameLatin: 'Philodendron erubescens Pink Princess',
            cover:
              'https://images.unsplash.com/photo-1602923668104-8f6ea6f0f3d5?auto=format&fit=crop&w=1200&q=80',
            headline: '深色叶面配粉色斑块，是热植圈很强的视觉符号。',
            description:
              '粉公主蔓绿绒兼具深色叶底和粉色斑锦，天然很适合做社交媒体传播型植物，也很容易成为桌面焦点。',
            light: '需要较明亮散射光帮助维持斑锦。',
            water: '见干见湿，避免闷根。',
            humidity: '中高湿更有利于生长。',
            temperature: '18 到 28°C。',
            substrate: '透气颗粒基质。',
            people: '适合喜欢斑锦和高反差观赏效果的人。',
            audioText:
              '粉公主蔓绿绒以粉色斑锦著称，适合放在明亮的位置，控制好浇水和通风，状态会更稳定。'
          }),
          createPlant({
            slug: 'philodendron-birkin',
            nameCn: '白锦蔓绿绒',
            nameLatin: 'Philodendron Birkin',
            cover:
              'https://images.unsplash.com/photo-1593691531788-8d8c35ed8c48?auto=format&fit=crop&w=1200&q=80',
            headline: '深绿叶面带白色细纹，干净、整齐、现代。',
            description:
              'Birkin 的视觉重点是规则的白色条纹，很适合极简和现代家居风格，比很多大型热植更适合小空间。',
            light: '柔和明亮光线更利于纹路清晰。',
            water: '土表干后浇透即可。',
            humidity: '中等湿度即可。',
            temperature: '18 到 28°C。',
            substrate: '疏松透气型基质。',
            people: '适合偏爱简洁、规则叶纹的人。',
            audioText:
              '白锦蔓绿绒的特点是规则白纹，整体干净利落，很适合现代风格室内空间。'
          })
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
          createPlant({
            slug: 'calathea-ornata',
            nameCn: '白纹肖竹芋',
            nameLatin: 'Calathea ornata',
            cover:
              'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=1200&q=80',
            headline: '粉白细线像手绘笔触，是非常典型的精致型热植。',
            description:
              '白纹肖竹芋的重点不是体量，而是纹理。它很适合放在桌面、边几、玄关等近距离观赏的位置。',
            light: '适合柔和散射光，避免直晒。',
            water: '喜欢稳定湿润，不宜忽干忽湿。',
            humidity: '湿度不足时容易焦边。',
            temperature: '18 到 28°C。',
            substrate: '建议使用保水但不板结的轻质基质。',
            people: '适合偏爱叶纹细节、愿意精细照料的人。',
            faq: [
              {
                q: '叶缘发焦怎么办？',
                a: '通常与空气干燥、水质偏硬或浇水不稳定有关。'
              }
            ],
            audioText:
              '白纹肖竹芋的魅力主要在细腻叶纹。它适合柔和散射光和稳定湿润的环境，空气干燥时很容易焦边。'
          }),
          createPlant({
            slug: 'calathea-makoyana',
            nameCn: '孔雀竹芋',
            nameLatin: 'Calathea makoyana',
            cover:
              'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1200&q=80',
            headline: '像羽毛和孔雀尾屏一样的叶纹，非常灵动。',
            description:
              '孔雀竹芋的叶纹具有很强装饰感，叶背带紫色调，随着叶片开合会呈现出细腻变化。',
            light: '柔和散射光。',
            water: '保持稳定湿润，但避免积水。',
            humidity: '偏高湿环境会更漂亮。',
            temperature: '20 到 28°C。',
            substrate: '轻质、保水、透气兼顾。',
            people: '适合偏爱图案型观叶植物的人。',
            audioText:
              '孔雀竹芋是一种叶纹非常强的室内热植，适合放在可以近距离观看的位置。'
          }),
          createPlant({
            slug: 'calathea-lancifolia',
            nameCn: '剑叶竹芋',
            nameLatin: 'Calathea lancifolia',
            cover:
              'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=1200&q=80',
            headline: '长叶波纹感明显，比圆叶竹芋更有动势。',
            description:
              '剑叶竹芋的长条叶面搭配深浅斑纹和紫色叶背，很适合打造带节奏感的绿植角落。',
            light: '避免暴晒，柔和散射光最好。',
            water: '土壤不宜完全干透。',
            humidity: '喜欢较高湿度。',
            temperature: '18 到 28°C。',
            substrate: '轻质保湿型基质。',
            people: '适合想让植物线条更生动的人。',
            audioText:
              '剑叶竹芋的长叶形态很有动势，适合偏柔和光线的空间，也比较需要湿度。'
          }),
          createPlant({
            slug: 'ctenanthe-burle-marxii',
            nameCn: '鱼骨竹芋',
            nameLatin: 'Ctenanthe burle-marxii',
            cover:
              'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=1200&q=80',
            headline: '鱼骨状叶纹有很强节奏感，是小空间里的精致选手。',
            description:
              '鱼骨竹芋叶片相对轻盈，纹路清晰，也比一些大型竹芋更适合放在书桌和边柜上。',
            light: '柔和散射光。',
            water: '维持轻微湿润。',
            humidity: '较高湿更有利于状态稳定。',
            temperature: '18 到 28°C。',
            substrate: '排水良好、含有机质的轻质基质。',
            people: '适合想要小体量叶纹植物的人。',
            audioText:
              '鱼骨竹芋的重点是规则纹样和轻盈株型，很适合做桌面和边柜植物。'
          })
        ]
      }
    ]
  },
  {
    slug: 'moraceae',
    nameCn: '桑科',
    nameEn: 'Moraceae',
    summary: '体量感和结构感很强，是现代室内空间里非常经典的一类热植。',
    heroTone: 'emerald',
    genera: [
      {
        slug: 'ficus',
        nameCn: '榕属',
        nameEn: 'Ficus',
        intro: '从琴叶榕到橡皮树，榕属承担了很多室内植物的体量和轮廓。',
        plants: [
          createPlant({
            slug: 'ficus-lyrata',
            nameCn: '琴叶榕',
            nameLatin: 'Ficus lyrata',
            cover:
              'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
            headline: '大叶竖向生长，是客厅型室内植物经典。',
            description:
              '琴叶榕因提琴形叶片得名，视觉体量大，适合做空间竖向结构支点。',
            light: '需要较充足散射光。',
            water: '盆土微干后再浇。',
            humidity: '中等即可，通风更重要。',
            temperature: '18 到 30°C。',
            substrate: '透气排水型基质。',
            people: '适合想让空间更有主景感的人。',
            audioText:
              '琴叶榕是非常典型的客厅植物，需要比较好的光照条件，也适合做空间主景。'
          }),
          createPlant({
            slug: 'ficus-elastica-tineke',
            nameCn: '花叶橡皮树',
            nameLatin: 'Ficus elastica Tineke',
            cover:
              'https://images.unsplash.com/photo-1600411833115-6f88b9f5e2e5?auto=format&fit=crop&w=1200&q=80',
            headline: '奶油绿与粉色调斑叶，很适合清爽系家居。',
            description:
              '花叶橡皮树比普通橡皮树更明亮，斑叶让它更适合做浅色空间的植物搭配。',
            light: '明亮散射光有利于维持斑叶。',
            water: '土壤偏干一点再浇。',
            humidity: '中等湿度即可。',
            temperature: '18 到 30°C。',
            substrate: '疏松透气型基质。',
            people: '适合喜欢清爽配色和斑叶的人。',
            audioText:
              '花叶橡皮树比普通橡皮树更轻盈，适合放在明亮环境里维持好看的斑叶层次。'
          }),
          createPlant({
            slug: 'ficus-elastica-burgundy',
            nameCn: '黑金刚橡皮树',
            nameLatin: 'Ficus elastica Burgundy',
            cover:
              'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=1200&q=80',
            headline: '深色厚叶很稳重，适合深色系室内空间。',
            description:
              '黑金刚橡皮树叶片厚实，颜色接近酒红黑色，能够给空间带来更沉稳的重量感。',
            light: '明亮散射光到半日照都可。',
            water: '干透一些再浇水更稳。',
            humidity: '普通室内湿度即可。',
            temperature: '18 到 30°C。',
            substrate: '通用透气型观叶基质。',
            people: '适合想要更沉稳、更有重量感植物的人。',
            audioText:
              '黑金刚橡皮树叶片厚而深色，比较耐看，也适合现代和深色调空间。'
          })
        ]
      }
    ]
  },
  {
    slug: 'asparagaceae',
    nameCn: '天门冬科',
    nameEn: 'Asparagaceae',
    summary: '许多耐看又适合室内陈列的品种都在这一科，线条感和雕塑感突出。',
    heroTone: 'amber',
    genera: [
      {
        slug: 'alocasia-lookalikes',
        nameCn: '龙血树与虎尾兰系',
        nameEn: 'Dracaena & Sansevieria',
        intro: '更强调线条和结构，适合作为现代空间里的稳定背景植物。',
        plants: [
          createPlant({
            slug: 'dracaena-fragrans-massangeana',
            nameCn: '巴西木',
            nameLatin: 'Dracaena fragrans Massangeana',
            cover:
              'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=1200&q=80',
            headline: '非常经典的室内大型绿植，存在感稳定。',
            description:
              '巴西木叶片修长下垂，整体气质放松，适合客厅、办公室等需要体量又不想过度张扬的场景。',
            light: '明亮散射光到中等光都能适应。',
            water: '偏干养护更安全。',
            humidity: '普通室内湿度即可。',
            temperature: '18 到 30°C。',
            substrate: '通用观叶基质即可。',
            people: '适合希望省心一些的大型绿植用户。',
            audioText:
              '巴西木是非常稳的室内大型植物，对光照要求不算苛刻，也比较适合办公室和客厅。'
          }),
          createPlant({
            slug: 'sansevieria-laurentii',
            nameCn: '金边虎尾兰',
            nameLatin: 'Dracaena trifasciata Laurentii',
            cover:
              'https://images.unsplash.com/photo-1593691531788-8d8c35ed8c48?auto=format&fit=crop&w=1200&q=80',
            headline: '线条笔直、耐受度高，是非常稳的入门型热植。',
            description:
              '金边虎尾兰几乎是所有室内植物里最稳定的一类，适合光线一般、照料频率不高的空间。',
            light: '明亮到较弱光线都能活。',
            water: '宁干勿湿。',
            humidity: '对湿度要求不高。',
            temperature: '16 到 30°C。',
            substrate: '排水性要好。',
            people: '适合新手、办公室、低维护场景。',
            audioText:
              '金边虎尾兰是一种很稳的室内植物，怕积水不怕轻微缺水，非常适合新手。'
          }),
          createPlant({
            slug: 'dracaena-marginata',
            nameCn: '红边龙血树',
            nameLatin: 'Dracaena marginata',
            cover:
              'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
            headline: '叶片线性而轻盈，很适合现代空间做轮廓植物。',
            description:
              '红边龙血树体态轻，轮廓感强，比很多大叶植物更适合极简和现代空间。',
            light: '明亮散射光最好。',
            water: '基质干后再浇。',
            humidity: '普通室内湿度即可。',
            temperature: '18 到 30°C。',
            substrate: '透气排水型基质。',
            people: '适合喜欢线性结构和轻体量植物的人。',
            audioText:
              '红边龙血树的重点在于线条感，它适合现代空间，也比较适合中等维护频率。'
          })
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
            适合手机浏览的热植介绍站。把植物品种、图文说明和语音介绍放进统一结构里，目前已扩展到 ${allPlants.length} 个热植条目。
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
          ${allPlants.slice(0, 8).map(createPlantCard).join('')}
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
