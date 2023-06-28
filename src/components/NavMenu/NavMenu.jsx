
import "./NavMenu.scss"
export default function NavMenu() {
    return (
        <>
            <div id="sidebar">

                <nav>
                    <ul>
                        <li>
                            <a href={`/home`}>Home</a>
                        </li>
                        <li>
                            <a href={`/credits`}>Credits</a>
                        </li>
                        <li>
                            <a href={`/projects`}>Projects</a>
                        </li>
                        <li>
                            <a href={`/about`}>About</a>
                        </li>
                    </ul>

                </nav>
            </div>


        </>
    );
}