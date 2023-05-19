'use client'

import React from 'react'
import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'
import AuthContext from '@/context/AuthContext'

const Providers = ({ children }: { children: React.ReactNode }) => {
  let rootElement
  if (typeof window !== 'undefined') {
    rootElement = window.document.body
  }

  const theme = createTheme(
    rootElement !== undefined
      ? {
          components: {
            MuiPopover: {
              defaultProps: {
                container: rootElement,
              },
            },
            MuiPopper: {
              defaultProps: {
                container: rootElement,
              },
            },
            MuiModal: {
              defaultProps: {
                container: rootElement,
              },
            },
          },
        }
      : {},
  )

  return (
    <>
      <StyledEngineProvider injectFirst>
        <AuthContext>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AuthContext>
      </StyledEngineProvider>
    </>
  )
}
export default Providers
