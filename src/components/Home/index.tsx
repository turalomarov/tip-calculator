import React from 'react';
import Card from '@app/components/Card';
import styles from './index.module.scss';

const Home:React.FC = () => (
  <main className={`${styles.main}`}>
    <h1 className={styles.title}>SPLITTER</h1>
    <Card />
  </main>

);

export default Home;
