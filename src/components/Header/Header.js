import {Link} from "react-router-dom"
import logo from "../../img/pizza-logo.svg";
import {Button} from "./HeaderButton";

export const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Link to="/home">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <div className="header__cart">
                    <Button/>
                </div>
            </div>
        </div>
    )
}