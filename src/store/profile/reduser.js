import { SHOW_PROFILE } from "./constants";

const initialState = {
  firstName: "Сергей",
  lastName: "Мишарин",
  age: 33,
  isVisibleProfile: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PROFILE:
      return {
        ...state,
        isVisibleProfile: !state.isVisibleProfile,
      };
    default:
      return state;
  }
};
