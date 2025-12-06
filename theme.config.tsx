import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Thrifty SoFI'
    }
  },
  logo: (
    <div className="logo-container">
      <img src="/logo.svg" alt="Thrifty SoFI" className="logo-image" />
      <span className="logo-text">Thrifty SoFI</span>
    </div>
  ),
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Thrifty SoFI. All rights reserved.
      </span>
    ),
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
