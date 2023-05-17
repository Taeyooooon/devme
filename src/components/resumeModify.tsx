import React from 'react'

interface Props {
  onClick: () => void
}

export default function ResumeModify({ onClick }: Props) {
  return (
    <div className="">
      수정 페이지
      <button onClick={onClick}>완료</button>
    </div>
  )
}
