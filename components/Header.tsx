'use client'
import React from 'react'
import { useSession, signOut, signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const session = useSession()
  const pathname = usePathname()

  if (session.status === 'loading') {
    return <div className="flex border-b border-slate-400 p-4 justify-center">
      <button>...</button>
    </div>
  }

  return (

    <div className="flex border-b border-slate-400 p-4 justify-between">
      {session.status === 'authenticated'
        ? <>
          <button onClick={e => signOut()}>Sign out</button>
          <div className="flex items-center gap-2">
            {session.data.user.image && <Image src={session.data.user.image} alt="avatar" width={30} height={30} className='rounded-full' />}
            <div>{session.data.user.name}</div>
          </div>
          {pathname === '/posts/create'
            ? <Link href='/'>All posts</Link>
            : <Link href='/posts/create'>Create Post</Link>
          }
          
        </>
        : <button onClick={e => signIn()}>Sign in</button>}
    </div>
  )
}

export default Header