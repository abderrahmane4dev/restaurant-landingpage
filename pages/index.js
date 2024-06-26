import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Navbar from './component/navbar'
import useTranslation from "next-translate/useTranslation";
import HeroSection from './component/heroSection'
import About from './component/about'
import Specialite from './component/special'
import Specialite2 from './component/special2'
import Menu from './component/menu'
import Testimony from './component/testimony'
import Team from './component/team'
import BookNow from './component/booknow'
import Footer from './component/footer'

export default function Home() {
 
  let { t } = useTranslation();
  
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant website</title>
        <meta name="description" content="Created by dah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
       
     
      <Navbar/>
      <HeroSection/>
      <About/>
      <Specialite/>
      <Specialite2/>
      <Menu/>
      <Testimony/>
      <Team/>
      <BookNow/>
      <Footer/>
      </main>

      
    </div>
  )
}
