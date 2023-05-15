export type PhotosProps = {
  url: string
  title: string
}

export const landingPhoto = (): PhotosProps => {
  const randomizer = Math.floor(Math.random() * photos.length)

  return photos[randomizer]
}

const photos: PhotosProps[] = [
  {
    title: 'Učit právo nás baví!',
    url: 'https://streetlaw.eu/wp-content/uploads/cropped-2016_04_23a-4-scaled-1-e1649063933974.jpg',
  },
  {
    title: 'Právo učíme zábavně a interaktivně',
    url: 'https://streetlaw.eu/wp-content/uploads/20220323_085737-scaled.jpg',
  },
  {
    title: 'Učíme na středních i základních školách',
    url: 'https://streetlaw.eu/wp-content/uploads/cropped-20220323_095748-scaled-1.jpg',
  },
  {
    title: 'Uspořádali jsme letní školu lidských práv',
    url: 'https://streetlaw.eu/wp-content/uploads/IMG-20210727-WA0002_o.jpg',
  },
  {
    title: 'Učíme právo na středních školách',
    url: 'https://streetlaw.eu/wp-content/uploads/IMG_3677.jpg',
  },
  {
    title: 'Nabízíme semináře pro učitele',
    url: 'https://streetlaw.eu/wp-content/uploads/2017_03_28-1.jpg',
  },
  {
    title: 'Podílíme se na soutěži Mezinárodní Středoškolský Moot Court',
    url: 'https://streetlaw.eu/wp-content/uploads/2018_04_06MCC-fakultni-54-scaled.jpg',
  },
  {
    title: 'Street Law nabízí sérii seminářů pro seniory',
    url: 'https://streetlaw.eu/wp-content/uploads/2017_12_16-6-scaled.jpg',
  },
  {
    title: 'Pořádáme workshopy pro děti z vyloučených lokalit',
    url: 'https://streetlaw.eu/wp-content/uploads/2017_12_16-5-scaled.jpg',
  },
  {
    title: 'Zorganizovali jsme akademii třetího věku',
    url: 'https://streetlaw.eu/wp-content/uploads/2017_05_26-3-scaled.jpg',
  },
  {
    title: 'Spolupracujeme se Street Lawyery ze zahraničí',
    url: 'https://streetlaw.eu/wp-content/uploads/2017_04_24-2-scaled.jpg',
  },
]
