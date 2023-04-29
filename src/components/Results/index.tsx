import React from 'react';
import Button from '@app/components/Button';
import styles from './index.module.scss';

const Results = () => (
  <div className={styles.results_box}>
    <div>
      <div className={styles.calc_row}>
        <div className={styles.calc_labels}>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <span className={styles.calc_amount}>$ 0.00</span>
      </div>
      <div className={styles.calc_row}>
        <div className={styles.calc_labels}>
          <p>Total</p>
          <p>/ person</p>
        </div>
        <span className={styles.calc_amount}>$ 0.00</span>
      </div>
    </div>
    <Button>RESET</Button>
  </div>
);

export default Results;
