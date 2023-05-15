import { PhotosProps, landingPhoto } from '@/data/landingPhoto'
import { useMemo, useState } from 'react'

const MainHero = () => {
  const [hero, setHero] = useState<PhotosProps | null>(null)
  useMemo(() => setHero(landingPhoto()), [])

  if (!hero) return <p>Načítání fotografie...</p>

  return (
    <>
      {/* Mobile Hero */}
      <div>
        <image className="block bg-streetlaw-500 w-screen pt-1">
          <img src={hero.url} alt={hero.title} className="m-auto max-w-xs md:max-w-2xl" />
        </image>
        <p className="w-full bg-streetlaw-500 text-center text-white text-2xl font-bold py-6 px-10">
          {hero.title}
        </p>
        {/* PC Hero */}
      </div>
      <div className="max-lg:hidden">
        <p>{hero.title}</p>
        <img src={hero.url} alt={hero.title} />
        <p>{hero.title}</p>
      </div>
    </>
  )
}

export default MainHero
