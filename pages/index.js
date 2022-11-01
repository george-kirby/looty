import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import loots from '../data/lootsData'
import Layout from '../components/layouts/layout';

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
        <ParrotImage />
        <p>
          Ahoy there, me hearty! Welcome aboard the <i>Black Perl</i>. I'm Captain Not-so-pretty-polly. Allow me to explain what you see before you.
        </p>
        <p>
          Over the years I've gathered clues on a number of the treasure troves scattered across the Sunset Sea. 
          Buried in the earth and tucked in hidden caves, they're rumoured to hold riches beyond your wildest dreams!
        </p>
        
        <p>
          The thing is, the years have gotten to me and these old wings can't make me soar like they used to. 
          But it'd be a shame to let these jottings go to waste. Perhaps they'd be of use to a young adventurer like yourself?
        </p>
        <p>
          You can start nearby on <Link href="/loots/diamond-isle">Diamond Isle</Link>.
        </p>
        <p>
          If you'd rather consider your options, take yer pick from <Link href="/loots">the whole list</Link>!
        </p>
        <p>
          Or, you can read a bit more <Link href="/about">about this place</Link>.
        </p>
      </main>
    </Layout>
  )
}
