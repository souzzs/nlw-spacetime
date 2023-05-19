import { cookies } from 'next/headers'
import decode from 'jwt-decode'
import Image from 'next/image'
import Link from 'next/link'

type User = {
  name: string
  avatar_url: string
}

export default function Profile() {
  const token = cookies().get('token')?.value!

  const user: User = decode(token)

  return (
    <div>
      <div className="flex items-center gap-3 text-left transition-colors">
        <Image
          src={user.avatar_url}
          alt={user.name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
        <p className="max-w-[140px] text-sm leading-snug">
          {user.name}
          <Link
            href="/"
            className="block text-red-400 transition-colors hover:text-red-500"
          >
            Quero sair
          </Link>
        </p>
      </div>
    </div>
  )
}
