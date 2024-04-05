import "./App.css";
import csharp from "./assets/csharp.png";
import git from "./assets/git.png";
import css from "./assets/css.png";
import html from "./assets/html.png";
import java from "./assets/java.png";
import javascript from "./assets/javascript.png";
import kotlin from "./assets/kotlin.png";
import python from "./assets/python.png";
import react from "./assets/react.png";
import typescript from "./assets/typescript.png";
import icon from "./assets/icon.png";
import sql from "./assets/mysql.svg";
import figma from "./assets/figma.svg";

import Card from "./components/Card";
import MainBox from "./components/MainBox";
import Box from "./components/Box";
import LinkButton from "./components/LinkButton";
import Image from "./components/Image";
import TitleIcon from "./components/TitleIcon";
import StatImage from "./components/StatsImage";
import StatImagePhone from "./components/StatImagePhone";

function App() {
    return (
        <>
            <div className="area_center">
                <MainBox icon={icon} />

                <Box
                    content={
                        <div className="card-body">
                            <TitleIcon
                                text="About me"
                                icon="fa-solid fa-person"
                            />

                            <h5 className="card-title">
                                <h4>Hi, im Erik!</h4>
                                I'm a developer from <b>Austria</b> who likes to
                                try out different stuff.
                                <br />I mainly code in <b>Java</b> or{" "}
                                <b>Kotlin</b> (I don't really do Front end)
                            </h5>
                        </div>
                    }
                />

                <Box
                    content={
                        <div className="card-body">
                            <TitleIcon
                                text="Languages"
                                icon="fa-solid fa-language"
                            />

                            <p className="icon_wrapper_pc">
                                <Image src={kotlin} />
                                <Image src={java} />
                                <Image src={csharp} />
                                <Image src={python} />
                                <Image src={css} />
                                <Image src={html} />
                                <Image src={react} />
                                <Image src={typescript} />
                                <Image src={javascript} />
                                <Image src={git} />
                                <Image src={sql} />
                                <Image src={figma} />
                            </p>

                            <p className="icon_wrapper_phone">
                                <Image src={kotlin} />
                                <Image src={java} />
                                <Image src={csharp} />
                                <Image src={python} />
                                
                            </p>

                            <p className="icon_wrapper_phone">
                                <Image src={css} />
                                <Image src={html} />
                                <Image src={react} />
                                <Image src={typescript} />
                            </p>

                            <p className="icon_wrapper_phone">
                                <Image src={javascript} />
                                <Image src={git} />
                                <Image src={sql} />
                                <Image src={figma} />
                            </p>
                        </div>
                    }
                />

                <Box
                    content={
                        <div className="card-body">
                            <TitleIcon
                                text="Stats"
                                icon="fa-solid fa-chart-pie"
                            />

                            <div className="form-inline">
                                <p className="icon_wrapper_pc">
                                    <StatImage src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=Integr-0&theme=transparent" />
                                    <StatImage src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Integr-0&theme=transparent" />
                                </p>
                            </div>

                            <p className="icon_wrapper_phone">
                                <StatImagePhone src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=Integr-0&theme=transparent"  />
                            </p>

                            <p className="icon_wrapper_phone">
                                <StatImagePhone src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Integr-0&theme=transparent" />
                            </p>
                        </div>
                    }
                />

                <Box
                    content={
                        <div className="card-body">
                            <TitleIcon
                                text="Some Projects"
                                icon="fa-solid fa-code"
                            />

                            <Card
                                title="ContentAutomation"
                                bio="Automatically generates clips of a length of around 30 seconds. Perfect for platforms like TikTok and YouTube-shorts."
                                link="https://github.com/Integr-0/ContentAutomation"
                            />

                            <Card
                                title="Trajectory"
                                bio="Trajectory is a fast event system Kotlin."
                                link="https://github.com/Integr-0/Trajectory"
                            />

                            <Card
                                title="RegistryTracker"
                                bio="Track entries in Json format."
                                link="https://github.com/Integr-0/RegistryTracker"
                            />

                            <Card
                                title="JsonCompiler"
                                bio="Executes Json like normal code..."
                                link="https://github.com/Integr-0/JsonCompiler"
                            />
                        </div>
                    }
                />

                <Box
                    content={
                        <div className="card-body">
                            <TitleIcon
                                text="Links"
                                icon="fa-solid fa-link"
                            />

                            <LinkButton
                                link="https://github.com/Integr-0"
                                name="GitHub"
                            />

                            <LinkButton
                                link="https://discordapp.com/users/688059979105697844"
                                name="Discord"
                            />
                        </div>
                    }
                />
            </div>

            <br />
        </>
    );
}

export default App;
