import Icon from '@/components/blocks/ui/Icon'
import Link from 'next/link'

export default function NotFoundRoot() {
  return (
    <div className="flex flex-col items-center justify-center lg:min-h-[calc(100vh-77px)]">
      <div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <Icon
            icon="camera-slash"
            className="h-[120px] w-[120px] text-foreground"
          />
          <h1 className="text-4xl font-bold text-foreground">Tady nic není</h1>
          <p className="text-lg text-foreground">
            Až tak daleko naše služby nedosáhnou.
          </p>
          <Link
            href="/"
            className="mb-3 mt-5 w-fit rounded-md bg-button px-10 py-2 text-black md:mb-0"
          >
            Zpět na domovskou stánku
          </Link>
        </div>
      </div>
    </div>
  )
}
