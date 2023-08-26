import { ActionReducerMap } from '@ngrx/store';
import * as fromObavestenja from './reducer'

import {AppState} from "./app.state";

export const appReducer: ActionReducerMap<AppState> = {
  app: fromObavestenja.reducer
};
