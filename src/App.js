import "./scss/app.scss"
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home"
import {Cart} from "./components/Cart/Cart";
import {Redirect, Route} from "react-router-dom"


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Redirect path={'/'} to={'home'}/>
                <Route path={"/home"} exact component={Home}/>
                <Route path={"/cart"} exact component={Cart}/>
            </div>
        </div>
    );
}
export default App;
