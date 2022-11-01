import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import headerStyles from './header.module.scss';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Looty';

export default function Layout({ home }) {
  return (
      <header className={styles.header}>
        {home && (
          <>
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
          </>
        )}
        <div className={headerStyles.menu}>
          {home || <Link href="/" className={styles.homeLink}>
                {siteTitle}
            </Link>}
          <div className={styles.right}>
            <Link href="/loots">Loots</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </header>
  );
}