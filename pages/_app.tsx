import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import FlightContextProvider from "../components/FlightContext"
import {theme} from "./_document"


function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <FlightContextProvider>
        <Component {...pageProps} />
      </FlightContextProvider>
    </ChakraProvider>)
}

export default MyApp
