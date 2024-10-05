import {useEffect, useState} from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {faReadme} from "@fortawesome/free-brands-svg-icons/faReadme";
import {RepoType} from "../App.tsx";

export interface Props {
    repo: RepoType
    visible: boolean
}

export default function RepoCard(props: Props) {
    const [markdown, setMarkdown] = useState("")
    const [hasReadme, setHasReadme] = useState(false)

    useEffect(() => {
        fetchReadme()
        console.log("Fetching readme for " + props.repo.name)
    }, []);

    const fetchReadme = async () => {
        const readmeUrl = `https://raw.githubusercontent.com/${props.repo.owner.login}/${props.repo.name}/refs/heads/master/README.md`
        const response = await fetch(readmeUrl)

        if (response.status == 200) {
            const data = await response.text()
            setMarkdown(data)
            setHasReadme(true)
        }
    }

    const MarkdownRenderer = () =>{
        if (markdown != "") {
            return (
                <div className="all-initial">
                    <article className="prose">
                        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{markdown}</Markdown>
                    </article>
                </div>
            )
        } else {
            return (
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            )
        }
    }

    const ReadmeRenderer = () => {
        if (hasReadme) {
            return (


            <div className="collapse collapse-arrow border-base-300 bg-base-200 border mt-3 hidden lg:grid">
                <input type="checkbox"/>
                <div className="collapse-title text-xl font-medium"><FontAwesomeIcon icon={faReadme}/> Show readme</div>
                <div className="collapse-content">
                    <MarkdownRenderer/>
                </div>
            </div>
        )
        } else {
            return (
                <></>
            )
        }
    }

    if (props.visible) {
        return (
            <>

                <div className="card bg-base-100 shadow-xl border-gray-700 border-2 m-6 w-[90vw] lg:w-9/12">
                    <div className="card-body">
                        <div className="flex justify-between flex-col lg:flex-row">
                            <div>
                                <h2 className="card-title">{props.repo.name}</h2>
                                <p>{props.repo.description}</p>
                            </div>

                            <button className="btn btn-primary w-24 mt-3 lg:mt-0" onClick={() => window.location.href=props.repo.html_url}><FontAwesomeIcon icon={faLink}/>View</button>

                        </div>

                        <ReadmeRenderer />
                    </div>
                </div>
            </>
        )
    } else return <></>
}

