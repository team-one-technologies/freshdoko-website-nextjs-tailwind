import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homepage from '../components/HomeComponents/home'
import Features from '../components/HomeComponents/feature'

export default function Home() {
  return (
    <div>
      <Homepage></Homepage>
      <Features></Features>
    </div>
  )
}
