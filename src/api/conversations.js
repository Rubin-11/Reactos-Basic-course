import { db } from "./firebase";

export const getConversationsApi = () => db.ref("conversations").get();

export const addConversationApi = (roomId) => {
  return db
    .ref("conversations")
    .child(roomId)
    .set({ title: roomId, value: "" });
};
