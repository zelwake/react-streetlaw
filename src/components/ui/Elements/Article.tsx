const Article = ({ data }: { data: string }) => {
  return (
    <article
      className="px-6 py-4 md:max-w-3xl m-auto"
      dangerouslySetInnerHTML={{ __html: data }}></article>
  )
}

export default Article
