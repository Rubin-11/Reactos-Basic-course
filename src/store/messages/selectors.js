export const lastMessageSelector = (roomId) => (state) => {
  const messages = state.messages.messages[roomId];

  return messages?.length ? messages[messages.length - 1] : null;
};

export const messageSelector = (roomId) => (state) => {
  return state.messages.messages[roomId] || [];
};