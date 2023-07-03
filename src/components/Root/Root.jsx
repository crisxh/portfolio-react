import NavMenu from "../NavMenu/NavMenu"
import { Outlet } from "react-router-dom"



export default function Root() {
    return (
        <div id='main'>
            <NavMenu />
            <div id="detail">
                <Outlet />
            </div>


        </div>
    )
}