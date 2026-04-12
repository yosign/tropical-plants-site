import { useEffect, useMemo, useState } from 'react'
import { plantFamilies, allPlants } from '@/data/plants'
import { HomePage, FamilyPage, PlantPage, NotFoundPage } from '@/components/pages'

function getRoute(pathname) {
  const path = pathname.replace(/\/$/, '') || '/'
  const parts = path.split('/').filter(Boolean)

  if (parts.length === 0) return { type: 'home' }
  if (parts.length === 1) {
    const family = plantFamilies.find((item) => item.slug === parts[0])
    if (family) return { type: 'family', family }
  }
  if (parts.length === 2) {
    const plant = allPlants.find((item) => item.familySlug === parts[0] && item.slug === parts[1])
    if (plant) return { type: 'plant', plant }
  }
  return { type: 'not-found' }
}

export function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setPathname(to)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const route = useMemo(() => getRoute(pathname), [pathname])

  if (route.type === 'home') return <HomePage navigate={navigate} families={plantFamilies} plants={allPlants} />
  if (route.type === 'family') return <FamilyPage navigate={navigate} family={route.family} />
  if (route.type === 'plant') return <PlantPage navigate={navigate} plant={route.plant} />
  return <NotFoundPage navigate={navigate} />
}
