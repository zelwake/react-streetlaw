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
      <header className="max-lg:hidden m-auto bg-streetlaw-500 w-[1008px] xl:w-[1260px] 2xl:w-[1290px] h-[453px] xl:h-[567px] 2xl:h-[580px] relative">
        {/* photo */}
        <div className="relative h-full w-auto flex items-center justify-center">
          <img src={hero.url} alt={hero.title} className="h-full w-auto" />
        </div>

        {/* top green line */}
        <div className="bg-streetlaw-500 h-12 w-fit absolute top-0 left-0">
          <h2 className="text-2xl font-semibold text-streetlaw-500 select-none px-5 text-left z-10">
            {hero.title}
          </h2>
          <div className="w-0 h-0 border-l-[32px] border-l-transparent border-t-[48px] border-t-streetlaw-500 border-r-[32px] border-r-transparent absolute -right-8 top-0 z-0"></div>
        </div>
        {/* bottom green line */}
        <div className="bg-streetlaw-500 h-12 w-fit absolute bottom-0 right-0 flex items-center justify-end">
          {/* text inside bottom line */}
          <h2 className="text-2xl font-semibold text-white pr-5 z-10">{hero.title}</h2>
          <div className="w-0 h-0 border-l-[32px] border-l-transparent border-b-[48px] border-b-streetlaw-500 border-r-[32px] border-r-transparent absolute -left-8 z-0"></div>
        </div>
      </header>
    </>
  )
}

export default MainHero
