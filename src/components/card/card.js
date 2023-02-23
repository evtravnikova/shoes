import {Component} from "react";

import './card.scss'

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {model, img, price} = this.props;

        return (
            <>
                <div className="card p-30 mb-40">
                    <div className="favorite"><img className="pb-15" src="/img/heart-unliked.svg" alt="unliked"/></div>
                    <img width={130} src={img} alt="Shoes"/>
                    <h5>{model}</h5>
                    <div className='d-flex justify-between align-center'>
                        <div className='d-flex flex-column'>
                            <span>CENA:</span>
                            <b>{price} zł</b>
                        </div>
                    <button className='button'>
                            <img width={11} height={11} src="/img/plus.svg" alt="add to card"/>
                        </button>
                    </div>
                </div>
            </>
        )

    }
}

export default Card;