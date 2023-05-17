import React from 'react'
import { Button } from '@mui/material'

interface Props {
  children: React.ReactNode
  onClick?: () => void
}

const MuiButton = ({ children, onClick }: Props) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      {children}
    </Button>
  )
}
export default MuiButton
