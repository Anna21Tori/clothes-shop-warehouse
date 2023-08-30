import { Outlet } from "react-router-dom"
import Nav from "../components/nav/nav.component"
import { MainContent} from "./wrapper.styles"

const WrapperLayout = () => {
    return (
        <>
            <Nav />
            <MainContent>
                <Outlet />
            </MainContent>
        </>
            
        
    )
}

export default WrapperLayout