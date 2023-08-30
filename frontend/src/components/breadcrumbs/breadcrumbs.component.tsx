import { Breadcrumbs, Link as LinkMUI} from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { BreadcrumbsConatiner } from "./breadcrumbs.components";
import { Link } from "react-router-dom";

export interface IBasicBreadcrumbs {
    slug: string,
    title: string
}
const BasicBreadcrumbs = (props: IBasicBreadcrumbs) => {
    const {slug, title} = props;
    return (
        <BreadcrumbsConatiner aria-label="breadcrumb">
            <Grid container>
                <Grid xs={10} smOffset={1}>
                    <Breadcrumbs>
                        <LinkMUI component={Link} underline="hover" color="inherit" to="/">
                            Home
                        </LinkMUI>
                        <LinkMUI
                        component={Link}
                        underline="hover"
                        color="inherit"
                        to={slug}
                        >
                            {title}
                        </LinkMUI>
                    </Breadcrumbs>
                </Grid>
            </Grid>
        </BreadcrumbsConatiner>
        
    )
}

export default BasicBreadcrumbs;