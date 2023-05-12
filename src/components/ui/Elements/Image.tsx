type ImageProps = {
  src: string
  className?: string
  alt: string
  footerImage?: boolean
  onClick?: () => void
}

const Image = ({ src, className, alt, footerImage, onClick }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={` ${className} ${footerImage && 'h-32 w-32'}`}
      onClick={onClick}
    />
  )
}

export default Image
