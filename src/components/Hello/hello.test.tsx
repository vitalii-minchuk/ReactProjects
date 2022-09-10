import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import axios from "axios";
import Hello from ".";
import { getUserData } from "../functions";

// jest.mock("axios");

describe("Hello", () => {
  it("component renders with text", () => {
    render(<Hello />);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
  it("has title's color red", () => {
    render(<Hello />);
    expect(screen.getByText(/Hello World/i)).toHaveStyle({color: 'red'});
  });
  it('renders button & input with "type here"', () => {
    render(<Hello />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/type/i)).toBeInTheDocument();
  });
  it("renders user name", async () => {
    render(<Hello />);
    expect(screen.queryByText("Logged as")).toBeNull();
    expect(await screen.findByText(/Logged as/i)).toBeInTheDocument();
  });
  it("renders list of items", async () => {
    render(<Hello />);
    expect(screen.queryByRole("listitem")).toBeNull();
    expect((await screen.findAllByRole("listitem")).length).toBe(3);
  });
});

describe("async request", () => {
  it("getUsers works correctly", async () => {
    const mockData = [
      {
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
      },
      {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
      },
    ];
    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: mockData }));
    const data = await getUserData();
    expect(axios.get).toBeCalledTimes(1);
    expect(data).toEqual(["1", "2", "3"]);
  });
});

describe('toggle element', () => {
  it('initial render', () => {
    render(<Hello />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByTestId('toggle-element')).toBeNull();
  });
  it('hides element by clicking "ok" btn', () => {
    render(<Hello />);
    user.click(screen.getByRole('button'));
    expect(screen.getByTestId('toggle-element')).toBeInTheDocument();
    user.click(screen.getByRole('button'));
    expect(screen.queryByTestId('toggle-element')).toBeNull();
    user.click(screen.getByRole('button'));
    expect(screen.getByTestId('toggle-element')).toBeInTheDocument();
  });
})