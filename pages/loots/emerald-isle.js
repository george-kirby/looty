import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout';


export default function EmeraldIsle() {
    return (
        <Layout>
            <Head>
                <title>Emerald Isle | Find Treasure</title>
            </Head>
            <main>
                <h1>Emerald Isle</h1>
                <p>Too scared of the snakes? Go back <Link href="/">Home</Link>, you scurvy dog</p>
            </main>
        </Layout>
    )
}