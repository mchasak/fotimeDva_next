'use client'

import Link from 'next/link'
import Icon from '../blocks/ui/Icon'
import { ContactFormProps } from '@/types/blocks'
import { useState } from 'react'
import Snackbar from '../ui/snackbar'

export const ContactForm = ({ title, socials }: Readonly<ContactFormProps>) => {
  const [loading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    variant: 'success' as 'success' | 'error',
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Request failed')
      }
      setSnackbar({
        open: true,
        message: 'Zpráva úspěšně odeslána 🎉',
        variant: 'success',
      })
      e.currentTarget.reset()
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Něco se pokazilo. Zkuste to prosím znovu.',
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto mt-[60px] max-w-[1200px] px-3 md:mt-[80px] md:px-12 xl:px-0">
      <h2>{title}</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-md flex-col gap-4"
      >
        <input
          name="name"
          placeholder="Vaše jméno"
          className="rounded border p-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Váš email"
          className="rounded border p-2"
          required
        />
        <textarea
          name="message"
          placeholder="Vaše zpráva"
          className="h-32 rounded border p-2"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded bg-primary p-2 text-white"
        >
          {loading ? 'Odesílám...' : 'Odeslat zprávu'}
        </button>

        <Snackbar
          open={snackbar.open}
          message={snackbar.message}
          variant={snackbar.variant}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        />
      </form>
      {Array.isArray(socials) && socials.length ? (
        <div className="mx-auto mt-10 flex max-w-[200px] justify-between">
          {socials.map((link) => (
            <Link
              key={link.link?.id}
              href={link.link?.url}
              className="flex items-center transition-transform duration-300 hover:scale-125"
            >
              <Icon icon={link.icon} className="h-10 w-auto" />
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}
