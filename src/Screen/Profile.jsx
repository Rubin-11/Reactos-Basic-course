import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { exampleAction } from "../store/profile";

export const Profile = () => {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setShowName = useCallback(() => {
    dispatch(exampleAction);
  }, [dispatch]);

  return (
    <div>
      <h4>Profile</h4>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
      {showName && <div>{name}</div>}
    </div>
  );
};
