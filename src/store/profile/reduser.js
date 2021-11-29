import { EXAMPLE_ACTION } from "./types";

const initialState = {
  showName: false,
  name: "Сергей",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};


