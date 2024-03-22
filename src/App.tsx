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

function App() {
    return (
        <>
            <div className="area_center">
                <MainBox icon={icon}/>

                <Box content={
                    <div>
                        <div className="card-body">
                            <h5 className="card-title">Languages</h5>

                            <p className="icon_wrapper_pc">
                                <img alt="kotlin" src={kotlin} className="icon" />
                                <img alt="css" src={css} className="icon" />
                                <img alt="csharp" src={csharp} className="icon" />
                                <img alt="html" src={html} className="icon" />
                                <img alt="java" src={java} className="icon" />
                                <img alt="python" src={python} className="icon" />
                                <img alt="react" src={react} className="icon" />
                                <img alt="typescript" src={typescript} className="icon" />
                                <img alt="javascript" src={javascript} className="icon" />
                            </p>

                            <p className="icon_wrapper_phone">
                            <img alt="kotlin" src={kotlin} className="icon" />
                                <img alt="css" src={css} className="icon" />
                                <img alt="csharp" src={csharp} className="icon" />
                                <img alt="html" src={html} className="icon" />
                                <img alt="java" src={java} className="icon" />
                            </p>

                            <p className="icon_wrapper_phone">
                                <img alt="python" src={python} className="icon" />
                                <img alt="react" src={react} className="icon" />
                                <img alt="typescript" src={typescript} className="icon" />
                                <img alt="javascript" src={javascript} className="icon" />
                            </p>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Links</h5>
                            <LinkButton link="https://github.com/Integr-0"/>
                            <LinkButton link="https://discordapp.com/users/688059979105697844"/>
                        </div>
                    </div>
                } />

                <Box content={
                    <div className="card-body">
                        <p className="title_center">My work</p>

                        <Card title="ContentAutomation" bio="Automatically generates clips of a length of around 30 seconds. Perfect for platforms like TikTok and YouTube-shorts." link="https://github.com/Integr-0/ContentAutomation"/>
                        <Card title="Trajectory" bio="Trajectory is a fast event system Kotlin." link="https://github.com/Integr-0/Trajectory"/>
                        <Card title="JsonCompiler" bio="Executes Json like normal code..." link="https://github.com/Integr-0/JsonCompiler"/>
                    </div>
                }/>
                
            </div>
            <br/>
        </>
    )
}

export default App
