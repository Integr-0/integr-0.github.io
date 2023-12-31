import './App.css'
import cSharpImg from './assets/csharp.png'
import cssImg from './assets/css.png'
import htmlImg from './assets/html.png'
import javaImg from './assets/java.png'
import jsImg from './assets/js.png'
import kotlinImg from './assets/kotlin.png'
import linkImg from './assets/link.png'
import logoImg from './assets/logo.png'
import bookImg from './assets/newBook.png'
import pythonImg from './assets/python.png'
import reactImg from './assets/react.png'
import tsImg from './assets/ts.png'
import backImg from './assets/Rectangle 2.png'

function App() {
  return (
      <>
          <img style={{ width: "100%", height: "100%", left: 0, top: 0, position: 'absolute', backgroundRepeat: "no-repeat", objectFit: "cover" }} src={backImg} />

          <div style={{ alignItems: 'center', display: 'flex', marginLeft: "auto", marginRight: "auto", marginTop: "50" }}>
              <div style={{ width: "467px", height: "339", backdropFilter: 'blur(2.5px)', alignItems: 'center', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', display: 'flex', marginLeft: "auto", background: 'rgba(177.44, 177.44, 177.44, 0.75)', borderRadius: 46, marginTop: "5%", marginRight: "20px" }}>
                  <img style={{ width: 233, height: 233, marginLeft: "30px", marginRight: "10px", marginTop: "10px", marginBottom: "10px", borderRadius: "120px", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} src={logoImg} />

                  <div style={{ width: 334, height: 233, marginTop: "120px", padding: "10px" }}>
                      <div style={{ color: '#6D5A5A', fontSize: 40, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word', textShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)' }}>Erik</div>
                      <div style={{ color: '#6D5A5A', fontSize: 20, fontFamily: 'Arial', marginLeft: "3px", fontWeight: '300', wordWrap: 'break-word', textShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)' }}>Integr</div>
                  </div>
              </div>

              <div style={{ width: "567px", padding: "8px", height: "339", backdropFilter: 'blur(2.5px)', textShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', marginLeft: "30px", marginRight: "30px", background: 'rgba(177.44, 177.44, 177.44, 0.75)', borderRadius: 46, marginTop: "5%" }}>
                  
                  <div style={{ color: '#6D5A5A', fontWeight: '600', width: 567, height: 339, padding: "10px", lineHeight: "10px", textAlign: "left", fontFamily: "Arial", fontSize: "30px"}}>
                      <p style={{ marginLeft: "20px" }}>Trying to improve at React</p>
                      <p style={{ marginLeft: "20px" }}>Kotlin is now my favorite language!</p>
                      <p style={{ marginLeft: "20px" }}>. . .</p>
                  </div>
              </div>

              <div style={{ width: "213px", height: "375", backdropFilter: 'blur(2.5px)', alignItems: 'center', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', display: 'flex', marginRight: "auto", marginLeft: "20px", background: 'rgba(177.44, 177.44, 177.44, 0.75)', borderRadius: 46, marginTop: "5%" }}>
                  <div style={{ width: 213, height: 375, position: 'relative' }}>
                      <div style={{ width: 111, height: 28, left: 51, top: 276, position: 'absolute' }}>
                          <img style={{ width: 28.09, height: 28, left: 0, top: 0, position: 'absolute' }} src={linkImg} />

                          <a style={{ left: 35, top: 2, position: 'absolute', color: '#6D5A5A', fontSize: 20, fontFamily: 'Arial', textShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word' }} href="https://discordapp.com/users/688059979105697844">Discord</a>
                      </div>

                      <div style={{ width: 102, height: 28, left: 51, top: 231, position: 'absolute' }}>
                          <img style={{ width: 28.09, height: 28, left: 0, top: 0, position: 'absolute' }} src={linkImg} />

                          <a style={{ left: 35, top: 2, position: 'absolute', color: '#6D5A5A', fontSize: 20, fontFamily: 'Arial', textShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word' }} href="https://github.com/Integr-0">Github</a>
                      </div>

                      <div style={{ width: 126, height: 48, left: 51, top: 33, position: 'absolute' }}>
                          <img style={{ width: 28.90, height: 33.03, left: 0, top: 8, position: 'absolute' }} src={bookImg} />

                          <div style={{ left: 35, top: 0, position: 'absolute', color: '#6D5A5A', fontSize: 20, fontFamily: 'Arial', textShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)', fontWeight: '600', wordWrap: 'break-word' }}>HTBLA<br />Leonding</div>
                      </div>
                  </div>
              </div>
          </div>

          <div style={{ alignItems: 'center', display: 'flex', marginLeft: "auto", marginRight: "auto", marginTop: "50"}}>
              <div style={{ width: "701px", height: "107", backdropFilter: 'blur(2.5px)', alignItems: 'center', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', display: 'flex', marginRight: "20px", marginLeft: "auto", background: 'rgba(177.44, 177.44, 177.44, 0.75)', borderRadius: 46, marginTop: "5%" }}>
                
                  <div style={{ width: 701, height: 107 }}>
                      <img style={{ width: 50, height: 50, left: 47, top: 29, position: 'absolute' }} src={kotlinImg} />
                      <img style={{ width: 50, height: 50, left: 117, top: 29, position: 'absolute' }} src={javaImg} />
                      <img style={{ width: 50, height: 50, left: 187, top: 29, position: 'absolute' }} src={cSharpImg} />
                      <img style={{ width: 50, height: 50, left: 468, top: 29, position: 'absolute' }} src={pythonImg} />
                      <img style={{ width: 50, height: 50, left: 257, top: 29, position: 'absolute' }} src={cssImg} />
                      <img style={{ width: 50, height: 50, left: 398, top: 29, position: 'absolute' }} src={htmlImg} />
                      <img style={{ width: 50, height: 50, left: 328, top: 29, position: 'absolute' }} src={reactImg} />
                      <img style={{ width: 50, height: 50, left: 538, top: 29, position: 'absolute' }} src={tsImg} />
                      <img style={{ width: 50, height: 50, left: 608, top: 29, position: 'absolute' }} src={jsImg} />

                  </div>
                  
              </div>
              
              
              <div style={{ width: "28 7px", height: "107", backdropFilter: 'blur(2.5px)', alignItems: 'center', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', display: 'flex', marginLeft: "20px", marginRight: "auto", background: 'rgba(177.44, 177.44, 177.44, 0.75)', borderRadius: 46, marginTop: "5%" }}>

                  <div style={{ width: 287, height: 107 }}>
                      <div style={{ left: 35, top: 25, position: 'absolute', color: '#6D5A5A', fontSize: 20, fontFamily: 'Arial', textShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)', fontWeight: '800', wordWrap: 'break-word' }}>Ask me about Kotlin and Java :)</div>
                      
                  </div>
              </div>
          </div>
          
      </>


  )
}

export default App
