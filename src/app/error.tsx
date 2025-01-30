'use client'
import { useEffect } from 'react'
import Icon from '@/components/blocks/ui/Icon'

export const metadata = {
  title: 'Chyba',
}

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center lg:min-h-[calc(100vh-77px)]">
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <Icon
          icon="camera-slash"
          className="h-[120px] w-[120px] text-foreground"
        />
        <h1 className="text-4xl font-bold text-foreground">
          Ups! Něco se pokazilo.
        </h1>
        <p className="text-lg text-foreground">
          Vyskytla se nějaká chyba, kterou se snažíme vyřešit. Zkuste to prosím
          později.
        </p>
        <p className="italic text-button">{error.message}</p>
      </div>
    </div>
  )
}
