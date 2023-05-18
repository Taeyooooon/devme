import React from 'react'
import { redirect } from 'next/navigation'
import { getProviders } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Signin from '@/components/Signin'

interface Props {
  searchParams: {
    callbackUrl: string
  }
}

const SigninPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/')
  }
  const providers = (await getProviders()) ?? {}
  return (
    <section className="flex flex-col items-center justify-center pt-28">
      <h3 className="text-bold text-3xl pb-10">로그인</h3>
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>
  )
}
export default SigninPage
