import React from 'react'
import { useForm } from 'react-hook-form'

interface Props {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}

interface Type {
  text: string
}

export default function ResumeModify({ text, setText }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Type>({ mode: 'onBlur' })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onSubmit = (data: Type) => {
    console.log(data)
  }

  console.log(text)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <input
        placeholder="입력"
        {...register('text', { required: '내용을 입력해 주세요', minLength: { value: 2, message: '2글자 이상 입력' } })}
        onChange={onChange}
        value={text}
      />
      <span className=" text-red-600 text-sm font-light">{errors?.text?.message}</span>
      <button type="submit">전송</button>
    </form>
  )
}
