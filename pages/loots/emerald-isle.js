import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

export default function EmeraldIsle() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Emerald Isle | Find Treasure</title>
            </Head>
            <main>
                    <h1>Emerald Isle</h1>
                    <p>Too scared of the snakes? Go back <Link href="/">Home</Link>, you scurvy dog</p>
                </main>
        </div>
    )
}