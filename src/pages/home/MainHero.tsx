import { PhotosProps, landingPhoto } from '@/data/landingPhoto'
import { useMemo, useState } from 'react'

const MainHero = () => {
  const [hero, setHero] = useState<PhotosProps | null>(null)
  useMemo(() => setHero(landingPhoto()), [])

  if (!hero) return <p>Načítání fotografie...</p>

  return (
    <div>
      <p>{hero.title}</p>
      <img src={hero.url} alt={hero.title} />
      <p>{hero.title}</p>
    </div>
  )
}

export default MainHero
