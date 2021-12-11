import { useMemo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  togleVisibleProfile,
  profileSelector,
  profileNameSelector,
} from "../store/profile";
import { ProfileForm } from "../components";

export const ProfilePage = () => {
  const profileSelectorByMemo = useMemo(() => {
    return profileSelector("test props");
  }, []);

  const { isVisibleProfile, firstName, lastName, ...profile } = useSelector(
    profileSelectorByMemo,
    shallowEqual
  );

  const s2 = useSelector(profileNameSelector, (prev, next) => next !== prev);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Профиль: {s2}</h1>

      {isVisibleProfile && (
        <div>
          <h2>Имя: {firstName}</h2>
          <h2>Фамилия: {lastName}</h2>
          <h2>Номер телефона: {profile.phone}</h2>
        </div>
      )}

      <button onClick={() => dispatch(togleVisibleProfile())}>
        Показать / Скрыть
      </button>

      <ProfileForm firstName={firstName} lastName={lastName} {...profile} />
    </div>
  );
};
