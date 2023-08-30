import Grid from '@mui/material/Unstable_Grid2';
import { TopNav } from './nav.styles';
import { IItemProps } from './nav-items/item.component';
import NavItems from './nav-items/nav-items.component';

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
const Nav = () => {
    return (
        <TopNav>
            <Grid container>
                <Grid xs={8} smOffset={2}>
                    <NavItems direction='row' items={items}/>
                </Grid>
            </Grid>
        </TopNav>
        
    )
}

export default Nav;