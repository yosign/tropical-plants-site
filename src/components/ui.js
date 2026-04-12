export function badge(label) {
  return `<span class="badge">${label}</span>`
}

export function stat(label, value) {
  return `<article class="stat-card"><span>${label}</span><strong>${value}</strong></article>`
}

export function sectionHeader({ badgeLabel, title, description = '' }) {
  return `
    <div class="section-header">
      <div>
        ${badge(badgeLabel)}
        <h2>${title}</h2>
      </div>
      ${description ? `<p>${description}</p>` : ''}
    </div>
  `
}

export function plantCard(plant) {
  return `
    <a class="plant-card" href="/${plant.familySlug}/${plant.slug}" data-link>
      <div class="plant-card__media"><img src="${plant.cover}" alt="${plant.nameCn}" class="plant-card__image" /></div>
      <div class="plant-card__body">
        <div class="card-topline">${badge(plant.familyNameCn)}${badge(plant.genusNameCn)}</div>
        <h3>${plant.nameCn}</h3>
        <p class="latin">${plant.nameLatin}</p>
        <p>${plant.headline}</p>
        <div class="plant-card__meta"><span>难度：${plant.difficulty}</span><span>${plant.placement}</span></div>
      </div>
    </a>
  `
}

export function faqList(items) {
  return `
    <div class="faq-list">
      ${items.map((item) => `<details><summary>${item.q}</summary><p>${item.a}</p></details>`).join('')}
    </div>
  `
}
