import './App.css'
import NavBar from "./assets/NavBar.tsx";
import {useState} from "react";
import RepoCard from "./assets/RepoCard.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass} from "@fortawesome/free-solid-svg-icons/faCompass";
import kotlinImg from "./assets/img/kotlin.png";
import csharpImg from "./assets/img/csharp.png";
import javaImg from "./assets/img/java.png";
import pythonImg from "./assets/img/python.png";
import javascriptImg from "./assets/img/javascript.png";
import typescriptImg from "./assets/img/typescript.png";
import htmlImg from "./assets/img/html.png";
import cssImg from "./assets/img/css.png";
import reactImg from "./assets/img/react.png";
import gitImg from "./assets/img/git.png";
import mongoImg from "./assets/img/mongo.svg";
import mysqlImg from "./assets/img/mysql.svg";
import {faChevronDown, faLink} from "@fortawesome/free-solid-svg-icons";

export interface RepoType {
    name: string
    description: string
    id: string
    owner: {
        login: string
    }
    html_url: string

}

function App() {
    const [repos, setRepos] = useState([])
    const [search, setSearch] = useState("")


    const shouldShow = (repo: RepoType) => {
        const hasName = (repo.name as string).toLowerCase().includes(search.toLowerCase())
        const hasDescription = (repo.description != null) ? (repo.description as string).toLowerCase().includes(search.toLowerCase()) : false
        return hasName || hasDescription
    }

    const fetchRepos = async () => {
        const response = await fetch("https://api.github.com/users/Integr-0/repos")
        if (response.status == 200) {
            setRepos(await response.json())
        }
    }

    onload = async () => {
        await fetchRepos()
    }

    onbeforeunload = () => {
        //document.getElementById("navbar_anchor")!.scrollIntoView({behavior: "instant"});
    }

    return (
        <>
            <NavBar searchCallback={setSearch}/>

            <HeroRenderer search={search}/>
            <SkillsRenderer search={search}/>
            <LibrariesRenderer search={search}/>
            <GithubStatsRenderer search={search}/>
            <FavouritesRenderer search={search}/>

            <div className="flex flex-col items-center bg-repeat point_back content-wrap" id="repos">
                {repos.map((repo: RepoType) => <RepoCard repo={repo} key={repo.id} visible={shouldShow(repo)}/>)}
            </div>

            <FooterRenderer/>
        </>
    )
}

interface Props {
    search: string
}

function HeroRenderer(props: Props) {
    if (props.search === "") {
        return (
            <>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hey there, i'm</h1>
                            <h1 className="text-5xl font-bold text-primary main_shadow">Integr</h1>

                            <p className="py-6">
                                I'm a software developer who loves to create amazing things. I'm passionate about open
                                source and love to contribute to the community. I'm also a huge fan of the Kotlin language.
                            </p>

                            <button className="btn btn-primary" onClick={() => {
                                document.getElementById("skills")!.scrollIntoView()
                            }}><FontAwesomeIcon icon={faCompass}/>Explore
                            </button>

                        </div>
                    </div>

                    <div className="flex flex-col h-screen justify-end">
                        <FontAwesomeIcon icon={faChevronDown} bounce className="mb-32"/>
                    </div>
                </div>
            </>

        )
    } else return (<></>)
}

function SkillsRenderer(props: Props) {
    if (props.search === "") {
        return (
            <div className="hero min-h-[600px] bg_old_dark" id="skills">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold">Skills</h1>

                        <p className="py-6">
                            These are the skills that I have acquired over the years. I'm always learning new things and
                            expanding my knowledge. My main focus is backend development, but I also have experience
                            with
                            frontend development.
                        </p>

                        <div className="flex justify-center">
                            <div className="grid grid-cols-5 lg:grid-cols-12">
                                <img src={kotlinImg} className="w-10 m-2" alt="Kotlin"/>
                                <img src={javaImg} className="w-10 m-2" alt="Java"/>
                                <img src={csharpImg} className="w-10 m-2" alt="C#"/>
                                <img src={pythonImg} className="w-10 m-2" alt="Python"/>
                                <img src={javascriptImg} className="w-10 m-2" alt="JavaScript"/>
                                <img src={typescriptImg} className="w-10 m-2" alt="TypeScript"/>
                                <img src={htmlImg} className="w-10 m-2" alt="HTML"/>
                                <img src={cssImg} className="w-10 m-2" alt="CSS"/>
                                <img src={reactImg} className="w-10 m-2" alt="React"/>
                                <img src={gitImg} className="w-10 m-2" alt="Git"/>
                                <img src={mongoImg} className="w-10 m-2" alt="MongoDB"/>
                                <img src={mysqlImg} className="w-10 m-2" alt="MySQL"/>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    } else return (<></>)
}

function LibrariesRenderer(props: Props) {
    if (props.search === "") {
        return (
            <div className="hero min-h-[600px] bg-base-200" id="libraries">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold">Libraries</h1>

                        <p className="py-6">
                            I publish libraries on Maven (Sonatype) that I use in my projects. These libraries are open
                            source and free.
                            Feel free to use them in your projects. For more information, click the button below. Also,
                            you
                            can find the source code on my GitHub.
                        </p>

                        <div className="flex justify-center">
                            <button className="btn btn-primary w-28 m-2"
                                    onClick={() => window.location.href = "https://central.sonatype.com/namespace/io.github.integr-0"}>
                                <FontAwesomeIcon icon={faLink}/>Maven
                            </button>
                            <button className="btn btn-info w-28 m-2"
                                    onClick={() => window.location.href = "https://github.com/Integr-0"}>
                                <FontAwesomeIcon icon={faLink}/>Github
                            </button>

                        </div>


                    </div>
                </div>
            </div>
        )
    } else return (<></>)
}

function GithubStatsRenderer(props: Props) {
    if (props.search === "") {
        return (
            <div className="hero min-h-[600px] bg_old_dark" id="github_stats">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold">Github Stats</h1>

                        <p className="py-6">
                            These are my Github stats. I have been using Github for a long time and I love it. I have
                            contributed to many projects and have created many repositories. I'm always looking for new
                            projects to contribute to.
                        </p>

                        <div className="flex justify-center">
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=Integr-0&show_icons=true&theme=darcula"
                                alt="Github Stats"/>

                        </div>
                    </div>
                </div>
            </div>
        )
    } else return (<></>)
}

function FavouritesRenderer(props: Props) {
    if (props.search === "") {
        return (
            <div className="hero min-h-[600px] bg-base-200" id="favourites">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold">Favourite Tools</h1>

                        <p className="py-6">
                            Here are some of my favourite tools and frameworks that I use in my projects.
                            I can only recommend them to you. They are all free or worth the price (in my opinion).
                            Many of them are open source and have a large community.
                        </p>

                        <button className="btn btn-link w-30 m-2"
                                onClick={() => document.location.href = "https://kotlinlang.org/"}><FontAwesomeIcon
                            icon={faLink}/>Kotlin
                        </button>

                        <button className="btn btn-link w-30 m-2"
                                onClick={() => document.location.href = "https://ktor.io/"}><FontAwesomeIcon
                            icon={faLink}/>Ktor
                        </button>

                        <button className="btn btn-link w-30 m-2"
                                onClick={() => document.location.href = "https://gradle.org/"}><FontAwesomeIcon
                            icon={faLink}/>Gradle
                        </button>

                        <button className="btn btn-link w-30 m-2"
                                onClick={() => document.location.href = "https://react.dev/"}><FontAwesomeIcon
                            icon={faLink}/>React
                        </button>

                        <button className="btn btn-link w-30 m-2"
                                onClick={() => document.location.href = "https://vite.dev/"}><FontAwesomeIcon
                            icon={faLink}/>Vite
                        </button>

                        <button className="btn btn-link w-30 m-2"
                                onClick={() => document.location.href = "https://daisyui.com/"}><FontAwesomeIcon
                            icon={faLink}/>DaisyUI
                        </button>
                    </div>
                </div>
            </div>
        )
    } else return (<></>)
}

function FooterRenderer() {
    return (
        <footer className="footer footer-center bg-base-200 p-10">
            <aside>
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="inline-block fill-current">
                    <path
                        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                <p className="font-bold">
                    Integr
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    )
}

export default App
