'use client'

import React from 'react'
import MuiButton from './ui/MuiButton'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

const Nav = () => {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <section className="flex justify-between border border-neutral-500">
      <Link href={'/'}>
        <h1>Devme</h1>
      </Link>

      {user && (
        <>
          <div>로그인 유저 이름 : {user.name}</div>
          <div>로그인 유저 이메일 : {user.email}</div>
        </>
      )}

      {session ? (
        <MuiButton onClick={() => signOut()}>로그아웃</MuiButton>
      ) : (
        <MuiButton onClick={() => signIn()}>로그인</MuiButton>
      )}
    </section>
  )
}
export default Nav
