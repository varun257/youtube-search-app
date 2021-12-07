import { render, screen } from '@testing-library/react';
import Input from './Input';

test('renders input text', () => {
    render(<Input />);
    const linkElement = screen.getByTestId("search");
    expect(linkElement).toHaveValue("");
});
