import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layouts/layout';
import loots from '../../data/lootsData'
import insults from '../../data/insults'

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = loots.map(loot => {
        return { params: { slug: loot.slug } }
    })
    return {
        paths,
        fallback: false,
      };
  }

export async function getStaticProps({ params }) {
    const loot = loots.find(loot => {
        return loot.slug === params.slug
    })
    return {
      props: loot,
    };
  }

export default function Loot( { title, description, dangers } ) {
    const getRandomItem = array => {
        return array[[Math.floor(Math.random()*array.length)]]
    }

    return (
        <Layout>
            <Head>
                <title>{ title + " | Find Treasure" }</title>
            </Head>
            <main>
                <h1>{ title }</h1>
                {/* image */}
                <p>{ description }</p>
                {/* TODO fix hydration issue, selections can be random */}
                {/* <p>Too scared of the <b>{getRandomItem(dangers)}</b>? Run on <Link href="/">home</Link>, you {getRandomItem(insults)}!</p> */}
                <p>Too scared? Run on <Link href="/">home</Link>, landlubber!</p>
            </main>
        </Layout>
    )
}