export const profileSelector = (props) => (state) => {
  console.log("profileSelector");
  return state.profile;
};

export const profileNameSelector = (state) => {
  console.log("profileNameSelector");
  return state.profile.firstName;
};
