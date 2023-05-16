import NewsBlock from '@/components/ui/Elements/NewsBlock'

const NewsPage = () => {
  return (
    <>
      <header className="bg-streetlaw-500 text-white flex items-center justify-center h-20">
        <h1 className="text-4xl font-semibold">Aktuality</h1>
      </header>
      <section className="px-8 my-8 flex flex-col gap-10">
        <NewsBlock url="https://streetlaw.eu/wp-json/wp/v2/posts?per_page=10&categories=2" />
        {/* Pagination */}
      </section>
    </>
  )
}

export default NewsPage
