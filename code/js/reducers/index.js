import {combineReducers} from 'redux';
import CarsReducers from './car';
import YachtsReducers from './yacht';

const allReducers = combineReducers({
  cars:CarsReducers,
  yachts:YachtsReducers
});

export default allReducers
