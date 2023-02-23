import {Component} from "react";

import './drawer.scss';
import Card from "../card/card";

class Drawer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <div className="overlay">
                    <div className="drawer">
                        <h3 className="drawerHeader">Koszyk</h3>
                        <div className="cartItem">
                            <img className="mr-10" width={70} height={70} src="/img/shoes/1.jpg " alt="shoes"/>
                            <div>
                                <p>Native Fitzsimmons Citylite Pink</p>
                                <b>399,00 zł</b>
                            </div>
                            <img className="mr-20" width={30} height={30} src="/img/btn-remove.png" alt="remove item"/>
                        </div>
                    </div>

                </div>
            </>
        )


    }
}


export default Drawer;