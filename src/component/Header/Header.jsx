import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/chats">Chat</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </header>
  );
};
