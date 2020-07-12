import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

const LOADER_UPDATE = actionTypes.LOADER_UPDATE
export const Loader = createAction(LOADER_UPDATE);

