import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Thrifty SoFI'
    }
  },
  logo: <span>Thrifty SoFI</span>,
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  footer: {
    text: '© 2025 Thrifty SoFI. All rights reserved.',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Thrifty SoFI Documentation" />
      <meta property="og:description" content="Official documentation for Thrifty SoFI" />
    </>
  ),
}

export default config
