function App() {
    return (
        <div className="wrapper">
            <header>
                <div className='headerLeft'>
                    <img width={40} height={40} src="/img/logo.png" alt="logo"/>
                    <div className='headerInfo'>
                        <h3>REACT SNEAKERS</h3>
                        <p>The best sneakers shop</p>
                    </div>
                </div>
                <ul className='headerRight'>
                    <li>
                        <img width={18} height={15} src="/img/cart.svg" alt="cart button"/>
                        <span>205 zł</span></li>
                    <li>
                        <img width={18} height={15} src="/img/fav.svg" alt="favourite button"/>
                    </li>
                    <li>
                        <img width={18} height={15} src="/img/profile.svg" alt="profile button"/>
                    </li>
                </ul>
            </header>
            <div className="content">
                <h1>All sneakers</h1>
            </div>
        </div>
    );
}

export default App;
