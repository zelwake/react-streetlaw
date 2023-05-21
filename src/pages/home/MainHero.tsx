import { PhotosProps, landingPhoto } from '@/data/landingPhoto'
import { useMemo, useState } from 'react'

const MainHero = () => {
  const [hero, setHero] = useState<PhotosProps | null>(null)
  useMemo(() => setHero(landingPhoto()), [])

  if (!hero) return <p>Načítání fotografie...</p>

  return (
    <>
      {/* Mobile Hero */}
      <header className="lg:hidden">
        <div role="img-bg" className="bg-streetlaw-500 w-full pt-1 sm:pt-4">
          <img
            src={hero.url}
            alt={hero.title}
            className="m-auto max-w-xs sm:max-w-lg md:max-w-2xl"
          />
        </div>
        <p className="w-full bg-streetlaw-500 text-center text-white text-2xl sm:text-3xl font-semibold py-6 sm:py-4 px-10">
          {hero.title}
        </p>
      </header>

      {/* PC Hero */}
      <header className="max-lg:hidden">
        <p>{hero.title}</p>
        <img src={hero.url} alt={hero.title} />
        <p>{hero.title}</p>
      </header>
    </>
  )
}

export default MainHero
