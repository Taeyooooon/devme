'use client'

import React from 'react'
import { ClientSafeProvider, signIn } from 'next-auth/react'
import MuiButton from './ui/MuiButton'
import { AiOutlineGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

interface Props {
  providers: Record<string, ClientSafeProvider>
  callbackUrl: string
}

const Signin = ({ providers, callbackUrl }: Props) => {
  return (
    <section className=" w-[328px]">
      {Object.values(providers).map(({ id, name }) => (
        <MuiButton
          key={id}
          onClick={() => signIn(id, { callbackUrl })}
          className={`border-black text-black px-4 h-14 w-full mb-3 ${getButtonStyle(name)}`}
        >
          <div className="flex items-center gap-3 text-base font-bold">
            {getIcon(name)}
            <span>{`${name}로 간편 로그인하기`}</span>
          </div>
        </MuiButton>
      ))}
    </section>
  )
}
export default Signin

const getIcon = (name: string) => {
  switch (name) {
    case 'Google':
      return <FcGoogle className="text-2xl" />
    case 'GitHub':
      return <AiOutlineGithub className="text-2xl" />
    default:
      throw new Error(`invalid name : ${name}`)
  }
}

const getButtonStyle = (name: string) => {
  switch (name) {
    case 'Google':
      return ''
    case 'GitHub':
      return 'bg-github text-white hover:bg-github'
    default:
      throw new Error(`invalid name : ${name}`)
  }
}
