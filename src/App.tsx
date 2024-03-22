import './App.css'
import csharp from './assets/csharp.png'
import css from './assets/css.png'
import html from './assets/html.png'
import java from './assets/java.png'
import javascript from './assets/javascript.png'
import kotlin from './assets/kotlin.png'
import python from './assets/python.png'
import react from './assets/react.png'
import typescript from './assets/typescript.png'
import icon from './assets/icon.png'
import Card from './components/CardComponent'
import MainBox from './components/MainBox'
import Box from './components/Box'
import LinkButton from './components/LinkButton'
import Image from './components/Image'

function App() {
    return (
        <>
            <div className="area_center">
                <MainBox icon={icon} />

                <Box content={
                    <div className="card-body">
                        <p className="title_center"><i className="fa-solid fa-person" /> About me</p>
                        <h5 className="card-title">
                            <h4>Hi, im Erik!</h4>
                            I'm a developer from <b>Austria</b> who likes to try out different stuff.
                            <br />
                            I mainly code in <b>Java</b> or <b>Kotlin</b> (I don't really do Front end)
                        </h5>
                    </div>
                } />

                <Box content={
                    <div className="card-body">
                        <p className="title_center"><i className="fa-solid fa-language" /> Languages</p>

                        <p className="icon_wrapper_pc">
                            <Image src={kotlin} />
                            <Image src={css} />
                            <Image src={csharp} />
                            <Image src={html} />
                            <Image src={java} />
                            <Image src={python} />
                            <Image src={react} />
                            <Image src={typescript} />
                            <Image src={javascript} />
                        </p>

                        <p className="icon_wrapper_phone">
                            <Image src={kotlin} />
                            <Image src={css} />
                            <Image src={csharp} />
                            <Image src={html} />
                            <Image src={java} />
                        </p>

                        <p className="icon_wrapper_phone">
                            <Image src={python} />
                            <Image src={react} />
                            <Image src={typescript} />
                            <Image src={javascript} />
                        </p>
                    </div>
                } />

                <Box content={
                    <div className="card-body">
                        <p className="title_center"><i className="fa-solid fa-code" /> Some Projects</p>

                        <Card title="ContentAutomation" bio="Automatically generates clips of a length of around 30 seconds. Perfect for platforms like TikTok and YouTube-shorts." link="https://github.com/Integr-0/ContentAutomation" />
                        <Card title="Trajectory" bio="Trajectory is a fast event system Kotlin." link="https://github.com/Integr-0/Trajectory" />
                        <Card title="JsonCompiler" bio="Executes Json like normal code..." link="https://github.com/Integr-0/JsonCompiler" />
                    </div>
                } />

                <Box content={
                    <div className="card-body">
                        <p className="title_center"><i className="fa-solid fa-link" /> Links</p>

                        <LinkButton link="https://github.com/Integr-0" name="GitHub" />
                        <LinkButton link="https://discordapp.com/users/688059979105697844" name="Discord" />
                    </div>
                } />
            </div>
            <br />
        </>
    )
}

export default App
