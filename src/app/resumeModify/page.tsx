'use client'
import React, { useState } from 'react'
import { useIsDesktop, useIsMobile } from '@/hooks/responsive'
import ResumeView from '@/components/resumeView'
import ResumeModify from '@/components/resumeModify'

export default function ResumeModifyPage() {
  const [isToggle, setIsToggle] = useState(false)
  const isMobile = useIsMobile()
  const isDesktop = useIsDesktop()

  const toggle = () => {
    setIsToggle(!isToggle)
  }

  return (
    <section className={`${isDesktop ? `flex  h-screen` : `flex justify-center w-full`}`}>
      <div className={`${isDesktop ? `basis-1/2` : ``}`}>
        {isToggle ? <ResumeModify onClick={toggle} /> : <ResumeView />}
      </div>
      {isMobile && !isToggle && <button onClick={toggle}>수정</button>}
      {isDesktop && <div className=" basis-1/2 border">bye</div>}
    </section>
  )
}
