import React, { ChangeEvent, useCallback } from 'react';
import Input from '@app/components/Input';
import Results from '@app/components/Results';
import TipsBox from '@app/components/TipsBox';
import useTip from '@app/hooks/useTip';
import { setBill, setNumberOfPeople } from '@app/redux/tipSlice';

import styles from './index.module.scss';

const Card:React.FC = () => {
  const { tipReducer, dispatch } = useTip();
  const { bill, numberOfPeople } = tipReducer;

  const handleInputs = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value !== '' ? Number(e.target.value) : undefined;
    switch (e.target.id) {
      case 'bill':
        dispatch(setBill(value));
        break;
      case 'people':
        dispatch(setNumberOfPeople(value));
        break;
      default:
        break;
    }
  }, [dispatch]);

  return (
    <div className={styles.card}>
      <div>
        <Input
          id="bill"
          type="number"
          value={bill ?? ''}
          label="Bill"
          icon="dollar"
          placeholder="0"
          onChange={handleInputs}
        />
        <TipsBox />
        <Input
          id="people"
          type="number"
          label="Number of People"
          icon="person"
          placeholder="0"
          onChange={handleInputs}
          value={numberOfPeople ?? ''}
          error={numberOfPeople === 0 ? "Can't be a zero" : ''}
        />
      </div>
      <Results />
    </div>
  );
};

export default Card;
