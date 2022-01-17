import { Routes, Route } from "react-router-dom";
import { Header } from "../component";
import { Chat, Home, Profile, NotFoundPages } from "../Screen";

export const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/chats/:chatId" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </>
  );
};
