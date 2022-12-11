import {Component} from "react";

import Cards from "./components/cards/cards";
import Header from "./components/header/header";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {model: 'Native Fitzsimmons Citylite Pink', img: "/img/shoes/1.jpg", price: '399,00', id: 1},
                {model: 'Native Fitzsimmons Citylite Bloom Green/Ivy', img: '/img/shoes/2.jpg', price: '425,00', id: 2},
                {model: 'Native Fitzsimmons Citylite Pigeon Grey', img: '/img/shoes/3.jpg', price: '469,00', id: 3},
                {model: 'Native Fitzsimmons Citylite Tundra Dust', img: '/img/shoes/4.jpg', price: '445,00', id: 4},
                {model: 'Native Fitzsimmons Citylite Soy Beige', img: '/img/shoes/5.jpg', price: '489,00', id: 5},
                {model: 'Native Fitzsimmons Citylite Mash Brown', img: '/img/shoes/6.jpg', price: '359,00', id: 6},
                {model: 'Native Fitzsimmons Citylite Jiffy Torch', img: '/img/shoes/7.jpg', price: '489,00', id: 7},
                {model: 'Native Fitzsimmons Citylite Jiffy Black', img: '/img/shoes/8.jpg', price: '445,00', id: 8},
                {model: 'Native Fitzsimmons Citylite Pink', img: "/img/shoes/1.jpg", price: '399,00', id: 9},
                {model: 'Native Fitzsimmons Citylite Bloom Green/Ivy', img: '/img/shoes/2.jpg', price: '425,00', id: 10},
                {model: 'Native Fitzsimmons Citylite Pigeon Grey', img: '/img/shoes/3.jpg', price: '469,00', id: 11},
                {model: 'Native Fitzsimmons Citylite Tundra Dust', img: '/img/shoes/4.jpg', price: '445,00', id: 12}
            ],
        }
    }

    render() {
        const {data} = this.state;

        return (
            <div className="wrapper clear">
                <Header/>
                <div className="content p-40">
                    <h1 className='mb-30'>Wszystkie buty</h1>
                    <Cards
                        data={data}
                    />

                </div>
            </div>
        )

    }
}


export default App;
