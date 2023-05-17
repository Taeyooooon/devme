'use client'

import React from 'react'
import { ClientSafeProvider, signIn } from 'next-auth/react'
import MuiButton from './ui/MuiButton'

interface Props {
  providers: Record<string, ClientSafeProvider>
  callbackUrl: string
}

const Signin = ({ providers, callbackUrl }: Props) => {
  return (
    <>
      {Object.values(providers).map(({ id, name }) => (
        <MuiButton key={id} onClick={() => signIn(id, { callbackUrl })}>
          {`Sign In with ${name}`}
        </MuiButton>
      ))}
    </>
  )
}
export default Signin
