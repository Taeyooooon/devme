import React from 'react'
import { Button } from '@mui/material'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const MuiButton = ({ children, onClick, className }: Props) => {
  return (
    <Button sx={{ textTransform: 'none' }} variant="outlined" onClick={onClick} className={className}>
      {children}
    </Button>
  )
}
export default MuiButton
