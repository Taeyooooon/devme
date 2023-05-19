import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const mobile = useMediaQuery({ maxWidth: 1200 })

  useEffect(() => {
    setIsMobile(mobile)
  }, [mobile])
  return isMobile
}

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)
  const desktop = useMediaQuery({ minWidth: 1201 })

  useEffect(() => {
    setIsDesktop(desktop)
  }, [desktop])
  return isDesktop
}
