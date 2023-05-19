import Link from 'next/link'

export default function EmptyMemories() {
  return (
    <div className="flex h-full items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda registrou nenhuma lembrança, comece a{' '}
        <Link
          href=""
          className="underline transition-colors hover:text-gray-50"
        >
          criar agora!
        </Link>
      </p>
    </div>
  )
}
