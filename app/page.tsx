'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"

export default function Home() {
  const session = useSession()

  if (session.status === 'loading') {
    return
  }

  return (
    <div>
      <div className="flex border-b border-slate-400 p-4 justify-between">
        {session.data 
          ? <>
            <button onClick={e => signOut()}>Sign out</button>
            <div className="flex items-center gap-2">
              {session.data.user.image && <Image src={session.data.user.image} alt="avatar" width={30} height={30} className='rounded-full' />}
              <div>{session.data.user.name}</div>
            </div>
            <button>Create Post</button>
          </>
          : <button onClick={e => signIn()}>Sign in</button>}
      </div>
    </div>
  )
}
