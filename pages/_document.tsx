
import { ColorModeScript, extendTheme, type ThemeConfig } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'


// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
export const theme = extendTheme({ config })

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}