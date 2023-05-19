import React from 'react'

interface Props {
  text: string
  isMobile?: boolean
  isDesktop?: boolean
}

export default function resumeView({ text, isMobile }: Props) {
  return (
    <div>
      {text}
      {isMobile && (
        <button
          onClick={() => {
            window.open('/resumeModify', '_blank', 'width=500,height=500')
          }}
        >
          미리보기
        </button>
      )}
    </div>
  )
}
