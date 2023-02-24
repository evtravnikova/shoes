import './drawer.scss';

function Drawer() {

    return (
        <>
            <div className="overlay">
                <div className="drawer">
                    <div className='cartHeader d-flex justify-between'>
                        <h3 className="drawerHeader ">Koszyk</h3>
                        <img className="m-30 buttons"
                             width={30} height={30}
                             src="/img/btn-remove.svg"
                             alt="remove item"/>
                    </div>

                    <div>
                        <div className='items'>
                            <div className="cartItem">
                                <img className="mr-20" width={70} height={70} src="/img/shoes/1.jpg " alt="shoes"/>
                                <div>
                                    <p>Native Fitzsimmons Citylite Pink</p>
                                    <b>399,00 zł</b>
                                </div>
                                <img className="mr-10 ml-20 buttons" width={30} height={30}
                                     src="/img/btn-remove.svg"
                                     alt="remove item"/>
                            </div>

                            <div className="cartItem">
                                <img className="mr-20" width={70} height={70} src="/img/shoes/2.jpg " alt="shoes"/>
                                <div>
                                    <p>Native Fitzsimmons Citylite Green Nero Color</p>
                                    <b>395,00 zł</b>
                                </div>
                                <img className="mr-10 ml-20 buttons" width={30} height={30}
                                     src="/img/btn-remove.svg"
                                     alt="remove item"/>
                            </div>
                        </div>
                    </div>


                    <div className='cartTotalBlock '>
                        <ul>
                            <li>
                                <span>Suma:</span>
                                <div></div>
                                <b>650 zł</b>
                            </li>

                            <li>
                                <span>Dostawa:</span>
                                <div></div>
                                <b>11 zł</b>
                            </li>
                            <li className='totalCost'>
                                <b>Lącznie:</b>
                                <div></div>
                                <b>651 zł</b>
                            </li>
                        </ul>
                        <button className='greenBtn'>PRZEJDŹ DO KASY<img src="/img/arrow.svg" alt='arrow'/></button>
                    </div>
                </div>
            </div>
        </>
    )


}


export default Drawer;