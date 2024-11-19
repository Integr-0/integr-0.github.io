import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faMagnifyingGlass, faPalette} from "@fortawesome/free-solid-svg-icons";

export interface Props {
    searchCallback: (search: string) => void
}

export default function NavBar(props: Props) {
    return (
        <>
            <div className="navbar bg-base-100" id="navbar_anchor">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a onClick={() => document.getElementById("skills")!.scrollIntoView()}>Skills</a></li>
                            <li><a onClick={() => document.getElementById("libraries")!.scrollIntoView()}>Libraries</a></li>
                            <li><a onClick={() => document.getElementById("github_stats")!.scrollIntoView()}>Github stats</a></li>
                            <li><a onClick={() => document.getElementById("favourites")!.scrollIntoView()}>Favourite tools</a></li>
                            <li><a onClick={() => document.getElementById("repos")!.scrollIntoView()}>Repositories</a></li>
                            <li>
                                <details open className="dropdown">
                                    <summary>Theme</summary>
                                    <ul>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Sunset"
                                                value="sunset"/>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Cupcake"
                                                value="cupcake"/>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Night"
                                                value="night"/>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Dim"
                                                value="dim"/>
                                        </li>
                                        <li>
                                        <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Valentine"
                                                value="valentine"/>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <label className="input input-bordered flex items-center gap-2 lg:w-96 sm:w-64">
                        <input type="text" className="grow" id="search_bar" placeholder="Search" onKeyUp={() => props.searchCallback((document.getElementById("search_bar")! as HTMLInputElement).value)}/>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </label>
                </div>

                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle"
                            onClick={() => window.location.href = "https://github.com/Integr-0"}>
                        <div className="avatar online">
                            <div className="w-7 rounded-full">
                                <img src="https://avatars.githubusercontent.com/u/74710895" alt="Integr's Github"/>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}