import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Thrifty SoFI'
    }
  },
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img src="/logo.svg" alt="Thrifty SoFI" width={80} height={80} />
      <span style={{ fontWeight: 800, fontSize: '2.4rem' }}>Thrifty SoFI</span>
    </div>
  ),
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
      <link rel="icon" href="/logo.svg" type="image/svg+xml" />
    </>
  ),
}

export default config
