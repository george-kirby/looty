import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import Layout from '../../components/layouts/layout';

const ParrotImage = () => (
  <Image
    src="/images/ParrotPirate.svg"
    height={350}
    width={700}
    alt="pirate parrot"
  />
);

export default function About() {
  return (
    <Layout>
      <main className={styles.main}>

        <ParrotImage />
        <h1>About Looty</h1>
      <p>I built this site as a small project to help me learn NextJS.</p>
      </main>
    </Layout>
  )
}
