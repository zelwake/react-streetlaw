const Article = ({ data }: { data: string }) => {
  return (
    <article
      className="px-6 py-4 lg:py-10 md:max-w-3xl xl:max-w-4xl m-auto"
      dangerouslySetInnerHTML={{ __html: data }}></article>
  )
}

export default Article
