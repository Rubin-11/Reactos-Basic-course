export const Message = ({ messageList, deleteMessage}) => {
  return (
    <>
      {messageList.map((message) => (
        <div key={message.id}>
          <p>
            {message.author}: {message.text}
          </p>
        </div>
      ))}
    </>
  );
};
