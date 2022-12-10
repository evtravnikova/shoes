function App() {
    return (
        <div className="wrapper clear">
            <header className='d-flex justify-between align-center p-50'>
                <div className='d-flex align-center'>
                    <img className='mr-15' width={40} height={40} src="/img/logo.png" alt="logo"/>
                    <div>
                        <h3>REACT SNEAKERS</h3>
                        <p>The best sneakers shop</p>
                    </div>
                </div>
                <ul className='d-flex justify-between'>
                    <li className='mr-30'>
                        <img width={18} height={18} src="/img/cart.svg" alt="cart button"/>
                        <span className='pl-10'>205 zł</span></li>
                    <li className='mr-30'>
                        <img width={18} height={18} src="/img/fav.svg" alt="favourite button"/>
                    </li>
                    <li>
                        <img width={18} height={15} src="/img/profile.svg" alt="profile button"/>
                    </li>
                </ul>
            </header>
            <div className="content p-40">
                <h1 className='mb-30'>WSZYSTKIE BUTY</h1>

                <div className='d-flex justify-between'>
                    <div className="card p-30">
                        <img width={130} src="/img/shoes/1.jpg" alt="Shoes"/>
                        <h5>Buty Native Fitzsimmons Citylite Pink</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>CENA:</span>
                                <b>399,00 zł</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src="/img/plus.svg" alt="add to card"/>
                            </button>
                        </div>
                    </div>

                    <div className="card p-30">
                        <img width={130} src="/img/shoes/2.jpg" alt="Shoes"/>
                        <h5>Buty Native Fitzsimmons Citylite Green Tea</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>CENA:</span>
                                <b>449,00 zł</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src="/img/plus.svg" alt="add to card"/>
                            </button>
                        </div>
                    </div>

                    <div className="card p-30">
                        <img width={130} src="/img/shoes/3.jpg" alt="Shoes"/>
                        <h5>Buty Native Fitzsimmons Citylite Earl Grey</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>CENA:</span>
                                <b>340,00 zł</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src="/img/plus.svg" alt="add to card"/>
                            </button>
                        </div>
                    </div>

                    <div className="card p-30">
                        <img width={130} src="/img/shoes/4.jpg" alt="Shoes"/>
                        <h5>Buty Native Fitzsimmons Citylite Chameleon Pink</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>CENA:</span>
                                <b>490,00 zł</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src="/img/plus.svg" alt="add to card"/>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default App;
