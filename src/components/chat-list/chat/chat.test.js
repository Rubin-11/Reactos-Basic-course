import { Chat } from "./chat";
import { renderWithRedux } from "../../../utils/render-with-redux";

let state = null;

beforeEach(() => {
  state = {
    messages: {
      messages: {
        room1: [{ id: 1, author: "User", message: "test" }],
      },
    },
  };
});

describe("Chat component", () => {
  it("should render Ctat with title prop", () => {
    const { container } = renderWithRedux(<Chat title="room1" />, state);

    const nodes = [...container.querySelectorAll(".text")];

    expect(nodes[0]).toHaveTextContent("room1");
    expect(nodes[1]).toHaveTextContent("test");
  });
  it("should render Ctat with selected prop", () => {
    const {  getByTestId } = renderWithRedux(
      <Chat title="room1" selected={true} />,
      state
    );
    expect(getByTestId("wrapper")).toHaveClass("Mui-selected");
  });
});
