'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import ContactModal from './contact-modal'

interface ContactContextType {
  openContact: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openContact = () => setIsOpen(true)

  return (
    <ContactContext.Provider value={{ openContact }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ContactContext.Provider>
  )
}

export const useContact = () => {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error('useContact must be used within ContactProvider')
  }
  return context
}


