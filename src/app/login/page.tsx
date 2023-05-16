'use client'

import React from 'react'
import { signIn } from 'next-auth/react'
import MuiButton from '@/components/ui/MuiButton'

const LoginPage = () => {
  return (
    <section>
      <div>로그인 페이지임</div>
      <MuiButton onClick={() => signIn('google')}>구글</MuiButton>
      <MuiButton onClick={() => signIn('github')}>깃헙</MuiButton>
    </section>
  )
}
export default LoginPage
