export const Message = ({messageList}) => {

  return(<h1>{messageList.map((message) => <p>{message.author}: {message.text}</p>)}</h1>);
}; 