import PageHeading from '@/components/ui/Layout/PageHeading'
import { fetchData } from '@/utils/fetchData'
import { useQuery } from '@tanstack/react-query'

type UserProps = {
  ID: number
  image_src: string
  image_alt: string
  content: string
  title: string
}

const Team = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['singleNewsPage'],
    queryFn: () => fetchData<UserProps[]>('https://streetlaw.eu/wp-json/custom/v1/team'),
  })

  if (isLoading) {
    return <span>Načítání...</span>
  }

  if (isError) {
    return <span>Vyskytla se chyba</span>
  }
  return (
    <>
      <PageHeading title="Náš tým" />
      <ul className="py-4 px-8">
        {data.map((user) => (
          <li key={user.ID} className="first:mt-10 mt-20 flex flex-col gap-5">
            <img
              src={user.image_src}
              alt={'profilová fotografie ' + user.image_alt}
              className="w-48 h-48 rounded-full self-center"></img>
            <h2 className="text-4xl font-semibold">{user.title}</h2>
            <p
              className="text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: user.content }}></p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Team
