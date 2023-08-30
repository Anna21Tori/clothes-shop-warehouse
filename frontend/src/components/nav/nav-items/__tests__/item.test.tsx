import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Item from '../item.component';
import { BrowserRouter } from 'react-router-dom';

describe("nav item render properly",  () => {
    afterEach(cleanup);

    test("should render nav link with provided title", () => {

        render(<Item to="products" title="Products" />, {wrapper: BrowserRouter});
        const link = screen.getByText(/Products/i);
        expect(link).toBeInTheDocument();
    });

    test("should have active class when nav link is clicked", () => {
        render(<Item to="products" title="Products" />, {wrapper: BrowserRouter});

        const link = screen.getByText(/Products/i);
        expect(link).toBeInTheDocument();
        fireEvent.click(link);
        expect(link).toHaveClass("active");
    });

})