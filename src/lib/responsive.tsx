import React from 'react'
import { useMediaQuery } from '@mui/material'

interface Props {
  children: JSX.Element
}

export const Mobile = ({ children }: Props): JSX.Element => {
  const isMoblie = useMediaQuery(`(max-width: 1200px)`)
  return <>{isMoblie && children}</>
}

export const DeskTop = ({ children }: Props): JSX.Element => {
  const isDeskTop = useMediaQuery(`(min-width: 1201px)`)
  return <>{isDeskTop && children}</>
}

export const useBreakPoint = () => {
  const isMobile = useMediaQuery(`(max-width: 1200px)`)
  const isDesktop = useMediaQuery(`(min-width: 1201px)`)
  return { isMobile, isDesktop }
}
