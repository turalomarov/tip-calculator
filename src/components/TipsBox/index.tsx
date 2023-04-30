import React, {
  ChangeEvent, useCallback, useState,
} from 'react';
import Button from '@app/components/Button';
import Input from '@app/components/Input';
import { setTipPercent } from '@app/redux/tipSlice';
import useTip from '@app/hooks/useTip';
import styles from './index.module.scss';

const tipList:number[] = [5, 10, 15, 25, 50];
const TipsBox:React.FC = () => {
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const { tipReducer, dispatch } = useTip();
  const { tipPercent } = tipReducer;

  const handleTipSelect = useCallback((value:number|undefined) => {
    dispatch(setTipPercent(value));
    if (isCustom) {
      setIsCustom(false);
    }
  }, [dispatch, isCustom]);

  const handleCustomSelect = useCallback(() => {
    if (!isCustom) {
      dispatch(setTipPercent(undefined));
      setIsCustom(true);
    }
  }, [dispatch, isCustom]);

  const handleCustomChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value !== '' ? Number(e.target.value) : undefined;
    dispatch(setTipPercent(value));
  }, [dispatch]);

  return (
    <div className={styles.tips_box}>
      <p className={styles.tips_label}>Select tip %</p>
      <div className={styles.tips_options}>
        {tipList.map((value) => (
          <Button
            key={value}
            selected={tipPercent === value && !isCustom}
            variant="tip"
            onClick={() => handleTipSelect(value)}
          >
            {value}
            %
          </Button>
        ))}
        <Input
          type="number"
          placeholder="Custom"
          onClick={handleCustomSelect}
          onChange={handleCustomChange}
          value={isCustom && tipPercent !== undefined ? tipPercent : ''}
        />
      </div>
    </div>
  );
};

export default TipsBox;
