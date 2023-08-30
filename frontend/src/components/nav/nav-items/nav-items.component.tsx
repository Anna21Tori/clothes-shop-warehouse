import { Stack } from "@mui/material"
import React, { memo } from "react"
import Item, { IItemProps } from "./item.component";

type TStackDirections = "row" | "column";

export interface INavItemsProps  extends React.HTMLAttributes<HTMLDivElement>{
    items: IItemProps[]; 
    direction?: TStackDirections;
}

const isDirection = (direction: TStackDirections | undefined): direction is TStackDirections => {
    return direction != null
}

const NavItems = memo((props: INavItemsProps) => {
    const {items, direction} = props;
    return (
        <Stack data-testid="nav-links-wrapper" direction={isDirection(direction) ? direction : "row"} alignContent="center" justifyContent="center" gap={2}>
            {
                items.map(item => <Item  key={item.title} {... item}/>)
            }
        </Stack>
    )
})

export default NavItems;