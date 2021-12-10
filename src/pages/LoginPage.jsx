import { Link } from "react-router-dom";
import { AuthTemplate, AuthForm } from "../components";
import { firebaseApp } from "../api/firebase";

const onSubmit = (email, password) => {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password);
};

export const LoginPage = () => {
  return (
    <AuthTemplate
      link={<Link to="sign-up">У вас нет аккаунта? Зарегистрируйтесь</Link>}
    >
      <AuthForm
        title="Авторизация"
        submitButtonTitle="Войти"
        onSubmit={onSubmit}
      />
    </AuthTemplate>
  );
};
