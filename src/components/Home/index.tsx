import Card from '@app/components/Card';
import { Space_Mono } from 'next/font/google';
import styles from './index.module.scss';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['700'] });

const Home = () => (
  <main className={`${styles.main} ${spaceMono.className}`}>
    {/* <div className={styles.home}> */}
    <h1 className={styles.title}>SPLITTER</h1>
    <Card />
    {/* </div> */}
  </main>

);

export default Home;
