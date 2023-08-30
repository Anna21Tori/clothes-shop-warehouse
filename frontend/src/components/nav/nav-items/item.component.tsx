import { memo } from "react";
import { Link } from "./items.styles";

export interface IItemProps {
    title: string;
    to: string
}

const Item = memo((props: IItemProps) => {
    const {title, to} = props;
    return (
        <Link data-testid="nav-link" to={to}>
            {title}
        </Link>
    )
})

export default Item;