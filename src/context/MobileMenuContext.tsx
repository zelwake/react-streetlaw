/* eslint-disable @typescript-eslint/no-empty-function */
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

interface MobileMenuContextType {
  isMobileMenuOpen: boolean
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileMenuContext = createContext<MobileMenuContextType>({
  isMobileMenuOpen: false,
  setMobileMenuOpen: () => {},
})

const Context = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export default Context
