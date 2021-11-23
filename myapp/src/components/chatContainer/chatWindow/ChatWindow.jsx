import { Box } from "@mui/material";
export const ChatWindow = (props) => {
  return (
    <Box
      className="chatContainer"
      sx={{
        maxWidth: "1000px",
        overflowWrap: "anywhere",
        backgroundColor: "#1A3DE8",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      {props.correspondence.map((message) => (
        <p key={message.id}>{`${message.author}: ${message.value}`}</p>
      ))}
    </Box>
  );
};
