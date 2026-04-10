'use client'

import { useState, useEffect } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const copyEmail = () => {
    navigator.clipboard.writeText('bijaybhattrarai5544@gmail.com')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Contact Info</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl font-bold p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition">
            ×
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
            <div className="flex items-center gap-2">
              <span className="text-slate-900 dark:text-white font-mono text-lg">bijaybhattrarai5544@gmail.com</span>
              <button onClick={copyEmail} className="px-3 py-1 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition">
                Copy
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone</label>
            <span className="block text-slate-900 dark:text-white font-mono text-lg">📱 9844638143</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Address</label>
            <span className="block text-slate-900 dark:text-white">📍 Kathmandu, Nepal</span>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <button onClick={onClose} className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactModal

