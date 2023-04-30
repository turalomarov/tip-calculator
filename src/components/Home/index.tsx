import React from 'react';
import Image from 'next/image';
import Card from '@app/components/Card';
import styles from './index.module.scss';

const Home:React.FC = () => (
  <main className={styles.main}>
    <Image alt="logo" width={96} height={63} src="./logo.svg" />
    <Card />
  </main>

);

export default Home;
