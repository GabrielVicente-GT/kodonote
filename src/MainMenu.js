import "./styles/App.css"
import GridContainer from "./components/ContainerNB.js"
import Options from "./components/options.js"
import PrefPopUp from "./components/PopupPref.js"

const MainMenu = () => {

    return (
        
        <body>
            <header class="header">
                <h2 class="title">KodoNote</h2>
            </header>
            <div class="content">
                <Options/>
                <GridContainer/> 
                <PrefPopUp/>
            </div> 
        </body>
         
    )
}

export default MainMenu