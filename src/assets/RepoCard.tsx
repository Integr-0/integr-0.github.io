import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {faReadme} from "@fortawesome/free-brands-svg-icons/faReadme";
import {RepoType} from "../App.tsx";
import {useEffect, useState} from "react";

export interface Props {
    repo: RepoType
    visible: boolean
}

export default function RepoCard(props: Props) {
    const [markdown, setMarkdown] = useState("")

    const fetchMarkdown = async () => {
        setMarkdown((await (await fetch(props.repo.readme)).text()));
    }

    useEffect(() => {
        fetchMarkdown().then(() => console.log("Fetched readme for " + props.repo.name));
    }, [])

    const MarkdownRenderer = () => {
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
        return <></>
        return (
            <div className="collapse collapse-arrow border-base-300 bg-base-200 border mt-3 hidden lg:grid">
                <input type="checkbox"/>
                <div className="collapse-title text-xl font-medium"><FontAwesomeIcon icon={faReadme}/> Show readme
                </div>
                <div className="collapse-content">
                    <MarkdownRenderer/>
                </div>
            </div>
        )
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

                            <button className="btn btn-primary w-24 mt-3 lg:mt-0"
                                    onClick={() => window.location.href = props.repo.html_url}><FontAwesomeIcon
                                icon={faLink}/>View
                            </button>

                        </div>

                        <ReadmeRenderer/>
                    </div>
                </div>
            </>
        )
    } else return <></>
}

