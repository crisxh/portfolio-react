import { Outlet } from "react-router-dom"
export default function Root() {
    return (
        <>
            <div id="sidebar">

                <nav>
                    <ul>
                        <li>
                            <a href={`/credits`}>credits</a>
                        </li>
                        <li>
                            <a href={`/projects`}>projects</a>
                        </li>
                        <li>
                            <a href={`/about`}>About</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}