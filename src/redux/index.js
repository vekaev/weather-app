import { configureStore } from './configureStore';
import root from './reducers/root';

export const store = configureStore({}, root, 1);
