import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Page1 from './component/page1'
import Page2 from './component/page2'
import Link from 'next/link'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [Pagenum, setPagenum] = useState(0)
  function NumChange(newNum) {
    setPagenum(newNum)
  }
  const Pages = [
    <div key="123"><Page1 NumChanges={NumChange}/></div>,
    <div key="124"><Page2 Numchanges={NumChange}/></div>,
    <div key="125">終了</div>
  ]
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>{Pages[Pagenum]}</div>
      </main>
    </>
  )
}
