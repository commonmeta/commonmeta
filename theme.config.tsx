import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Icon from './public/icon.png'

const config: DocsThemeConfig = {
  logo: (
    <div className="nx-flex nx-justify-center nx-text-2xl">
      <Image src={Icon} alt="Icon" width={18} />
      <span style={{ marginLeft: '.4em', marginRight: '.2em', fontWeight: 700, color: 'rgb(219,39,119)' }}>Commonmeta</span>
    </div>
  ),
  logoLink: 'https://commonmeta.org',
  docsRepositoryBase: 'https://github.com/commonmeta/commonmeta/tree/main',
  footer: {
    text: 'Commonmeta',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Commonmeta" />
      <meta
        property="og:description"
        content="Documentation for the Commometa format."
      />
      <link rel="shortcut icon" href="favicon.ico" />
    </>
  ),
}

export default config
