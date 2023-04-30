import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/redux/store';

const useTip = () => {
  const { tipReducer } = useSelector((state:RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  return {
    tipReducer,
    dispatch,
  };
};
export default useTip;
