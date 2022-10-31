import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout';
import loots from '../../data/loots'

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

export default function Loot( { name, description } ) {
    return (
        <Layout>
            <Head>
                <title>{ name + " | Find Treasure" }</title>
            </Head>
            <main>
                <h1>{ name }</h1>
                <p>{ description }</p>
                <p>Too scared of the snakes? Go back <Link href="/">Home</Link>, you scurvy dog</p>
            </main>
        </Layout>
    )
}