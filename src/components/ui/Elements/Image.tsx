type ImageProps = {
  src: string
  className?: string
  alt: string
  footerImage?: boolean
}

const Image = ({ src, className, alt, footerImage }: ImageProps) => {
  return <img src={src} alt={alt} className={` ${className} ${footerImage && 'h-32 w-32'}`} />
}

export default Image
