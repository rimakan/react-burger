import { useSelector as useReduxSelector } from 'react-redux';
import { StoreState } from '../store/store';

type Selector<Selected> = (state: StoreState) => Selected;

export const useSelector = <Selected>(selector: Selector<Selected>) => {
  return useReduxSelector<StoreState, Selected>(selector);
};
