import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Looty';

export default function Layout({ home }) {
  return (
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
          </>
        ) : (
          <>
            <Link href="/">
                <h2>{siteTitle}</h2>
            </Link>
          </>
        )}
      </header>
  );
}