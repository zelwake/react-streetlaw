import { PageProps } from '@/components/ui/Elements/interface'

export const replaceURL = (data: PageProps[]) => {
  const pattern = /https:\/\/streetlaw\.eu\/(?!.*wp-content)/g
  const replace = import.meta.env.VITE_BASE_URL + '/'

  return data[0].content.rendered.replace(pattern, replace)
}
