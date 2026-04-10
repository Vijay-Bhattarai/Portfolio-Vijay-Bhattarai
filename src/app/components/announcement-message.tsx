"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const AnnouncementMessage = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 5000) // 5 seconds
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="sticky top-0 left-0 w-full z-40 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2.5 px-4 shadow-lg border-b-2 border-white/20 backdrop-blur-md animate-slide-in">
      <div className="text-xs leading-tight max-w-4xl mx-auto">
        📢 For better viewing experience, please open this site on a desktop device. For contact, <Link href="tel:+9779844638143" className="font-semibold hover:underline">call 9844638143</Link> or <Link href="mailto:bijaybhattrarai5544@gmail.com" className="font-semibold hover:underline">email bijaybhattrarai5544@gmail.com</Link>
      </div>
    </div>
  )
}

export default AnnouncementMessage
