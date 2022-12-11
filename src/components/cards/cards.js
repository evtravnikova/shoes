import {Component} from "react";

import Card from "../card/card";


class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data} = this.props;

        const elements = data.map(item => {
            const {id, ...itemProps} = item;


            return (
                <>
                    <Card
                        key={id}
                        {...itemProps}
                    />
                </>
            )
        })
        return (
            <div className='d-flex justify-between flex-wrap'>
                {elements}
            </div>
        )
    }
}


export default Cards;