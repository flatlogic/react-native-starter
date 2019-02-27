// @flow
type AppStateType = {
  isFirstOpen: boolean,
};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: AppStateType = {
  isFirstOpen: true,
};

export const SET_FIRST_OPEN = 'AppState/SET_FIRST_OPEN';

export function setAppOpened(): ActionType {
  return {
    type: SET_FIRST_OPEN,
  };
}

export default function AppStateReducer(
  state: AppStateType = initialState,
  action: ActionType,
): AppStateType {
  switch (action.type) {
    case SET_FIRST_OPEN:
      return {
        ...state,
        isFirstOpen: false,
      };
    default:
      return state;
  }
}
