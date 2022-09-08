import { render, screen } from "@testing-library/react"
import Hello from "."

describe('Hello', () => {
    it('component renders with text', () => {
        render(<Hello />);
        expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
    });
    it('renders button & input with "type here"', () => {
        render(<Hello />);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/type/i)).toBeInTheDocument();
    });
    it('renders user name', async () => {
        render(<Hello />);
        expect(screen.queryByText('Logged as')).toBeNull();
        expect(await screen.findByText(/Logged as/i)).toBeInTheDocument()
    });
    it('renders list of items', async () => {
        render(<Hello />);
        expect(screen.queryByRole('listitem')).toBeNull();
        expect(await screen.findByText(/vue/i)).toBeInTheDocument();
    })
    
});