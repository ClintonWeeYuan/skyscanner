import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import Banner from "../components/Banner"
import {useState} from "react"
import Footer from "../components/Footer"

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Safe Sign Technologies</title>
        <meta name="description" content="Safe Sign Technologies" />
        <link rel="icon" href="/safesign.webp" />
      </Head>
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home
