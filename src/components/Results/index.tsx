import React, { useCallback, useMemo } from 'react';
import Button from '@app/components/Button';
import useTip from '@app/hooks/useTip';
import { reset } from '@app/redux/tipSlice';
import styles from './index.module.scss';

const convertToUSD = (num:number|undefined) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,

}).format(num || 0);

const Results = () => {
  const { tipReducer, dispatch } = useTip();
  const { bill = 0, numberOfPeople = 0, tipPercent = 0 } = tipReducer;

  const billPerson = useMemo(
    () => (numberOfPeople !== 0 ? bill / numberOfPeople : 0),
    [bill, numberOfPeople],
  );

  const tipPerPerson = useMemo(
    () => (numberOfPeople !== 0 ? Math.ceil(billPerson * tipPercent) / 100 : 0),
    [tipPercent, billPerson, numberOfPeople],
  );

  const handleReset = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className={styles.results_box}>
      <div>
        <div className={styles.calc_row}>
          <div className={styles.calc_labels}>
            <p>Tip Amount</p>
            <p>/ person</p>
          </div>
          <span className={styles.calc_amount}>
            {convertToUSD(tipPerPerson)}
          </span>
        </div>
        <div className={styles.calc_row}>
          <div className={styles.calc_labels}>
            <p>Total</p>
            <p>/ person</p>
          </div>
          <span className={styles.calc_amount}>
            {convertToUSD(billPerson + tipPerPerson)}
          </span>
        </div>
      </div>
      <Button
        disabled={!(bill || numberOfPeople || tipPercent)}
        onClick={handleReset}
      >
        RESET
      </Button>
    </div>
  );
};

export default Results;
