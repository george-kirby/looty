import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import loots from '../data/lootsData'
import Layout from '../components/layouts/layout';
import utilStyles from '../styles/utils.module.css';

import LootCardsList from '../components/loots/LootCardsList';

const ParrotImage = () => (
  <Image
    src="/images/ParrotPirate.svg"
    height={350}
    width={700}
    alt="pirate parrot"
  />
);

export async function getStaticProps() {
  return {
    props: {
      allLootsData: loots
    },
  };
}

export default function Home({ allLootsData }) {
  return (
    <Layout home>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Looty!
        </h1>

        <ParrotImage />

        <p>Jump right in by searching for treasure on <Link href="/loots/emerald-isle">Emerald Isle</Link></p>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Known loots</h2>
          <LootCardsList loots={allLootsData} />
        </section>
      </main>
    </Layout>
  )
}
