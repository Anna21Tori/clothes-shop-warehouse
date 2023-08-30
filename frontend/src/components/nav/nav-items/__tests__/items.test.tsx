import { render, cleanup, screen } from '@testing-library/react';
import { IItemProps } from '../item.component';
import { BrowserRouter } from 'react-router-dom';
import NavItems from '../nav-items.component';

const items: IItemProps[] = [
    {
        to:"products",
        title: "Products"
    },
    {
        to:"categories",
        title: "Categories"
    },

    {
        to:"settings",
        title: "Settings"
    }
]

describe("nav items render properly",  () => {
    afterEach(cleanup);

    test("should render appropriate numbers links", () => {

        const { container } = render(<NavItems items={items}/>, {wrapper: BrowserRouter});
        const link = container.getElementsByTagName("a");
        expect(link.length).toEqual(3);

    });

    test("should not render links", () => {

        const { container } = render(<NavItems items={[]}/>, {wrapper: BrowserRouter});
        const link = container.getElementsByTagName("a");
        expect(link.length).toEqual(0);
        
    });

    test("should render stack with deafult row direction", () => {

        render(<NavItems items={[]}/>, {wrapper: BrowserRouter});
        const element = screen.getByTestId('nav-links-wrapper')
        const styles = window.getComputedStyle(element);
        
        expect(styles.flexDirection).toBe("row");  
    });

})