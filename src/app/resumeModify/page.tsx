'use client'
import React, { useState } from 'react'
import ResumeView from '@/components/resumeView'
import ResumeModify from '@/components/resumeModify'
import { DeskTop, Mobile } from '@/lib/responsive'
import { useBreakPoint } from '@/lib/responsive'

export default function ResumeModifyPage() {
  const [isToggle, setIsToggle] = useState(false)
  const [text, setText] = useState('')
  // const { isMobile, isDesktop } = useBreakPoint()

  const toggle = () => {
    setIsToggle(!isToggle)
  }

  return (
    <section>
      <DeskTop>
        <div className="flex">
          <div className=" basis-1/2">
            <ResumeView text={text} />
          </div>
          <div className=" basis-1/2">
            <ResumeModify text={text} setText={setText} />
          </div>
        </div>
      </DeskTop>
      <Mobile>
        <div>
          {!isToggle && <ResumeModify text={text} setText={setText} />}
          {isToggle && <ResumeView text={text} />}
          {!isToggle && <button onClick={toggle}>완료</button>}
          {isToggle && <button onClick={toggle}>수정</button>}
        </div>
      </Mobile>
    </section>
  )
}
