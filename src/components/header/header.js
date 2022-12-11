import {Component} from "react";
import './header.scss'


class Header extends Component {

    render() {
        return (
            <>
                <header className='d-flex justify-between align-center p-50'>
                    <div className='d-flex align-center'>
                        <img className='mr-15' width={40} height={40} src="/img/logo.png" alt="logo"/>
                        <div>
                            <h3>REACT NATIVE</h3>
                            <p>...but shoes</p>
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
            </>
        )
    }
}

export default Header