const PageHeading = ({ title }: { title: string }) => {
  document.title = title
  return (
    <header className="bg-streetlaw-500 text-white px-6 py-3">
      <h1 className="text-3xl font-semibold text-center">{title}</h1>
    </header>
  )
}

export default PageHeading
