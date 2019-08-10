import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../img/logo.png";
const Logo = {

}
const Nav = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#484848',
    width: '65%'
}
const Head = {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexWrap: 'wrap'
}
const HeaderWrap = {
    background: '#ffffff',
    color: '#484848',
    height: '40px',
    display: 'flex',
    alignItems: 'center'
}
const Header = {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%'
}
const LocationLang = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
    alignItems: 'center'
}
const City = {
    marginRight: '10px'
}
const HighLightText = {
    color: '#fd1c44',
    marginRight: '10px'
}
const Lang = {}
const Location = {}
const Info = {
    width: '470px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
const Phone = {
    textDecoration: 'none',
    color: 'inherit'
}
const User = {
    textDecoration: 'none',
    color: 'inherit'
}
const Basket = {
    textDecoration: 'none',
    color: '#ffffff',
    background: '#fd1c44',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center',
    padding: '5px 20px',
    width: '140px',
    textAlign: 'center'
}
const Cost = {
    marginRight: '10px'
}

window.addEventListener('scroll', function (ev) {
    if (window.pageYOffset > 65) {
        (document.querySelector('.all-head')).classList.add('active')
    } else {
        (document.querySelector('.all-head')).classList.remove('active')
    }
})
let AppHeader = (store) => {
    return (
        <div className='all-head'>
            <header className='header' style={HeaderWrap}>
                <div className='container' style={Header}>
                    <div style={LocationLang}>
                        <div className='lang-choose' style={Lang}>
                            <span style={HighLightText}>RU</span>
                            <span>ENG</span>
                        </div>
                        <div style={Location}>
                            <span style={City}>Санкт-Петербург</span>
                            <i style={HighLightText} className="fas fa-caret-down"></i>
                        </div>
                    </div>
                    <div style={Info}>
                        <a href='tel:+7(800)9005005' style={Phone}>
                            <i style={HighLightText} className="fas fa-phone"></i>
                            8-800-900-500-5
                        </a>
                        <Link to='/user' style={User}>
                            <i style={HighLightText} className="fas fa-user"></i>
                            Александр
                        </Link>
                        <Link to='/cart' style={Basket}>
                            <span style={Cost}>{store.state.cart.cost} &#8381;</span>
                            <i className="fas fa-shopping-bag"></i>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="nav-wrap ">
                <div style={Head} className="container">
                    <div style={Logo} onClick={()=>{
                        store.addItem({
                            name:'Филадельфия',
                            price: 435
                        })
                    }} className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <nav className="nav" style={Nav}>
                        <NavLink to='/' className='nav-link' activeClassName='nav-link_active'>
                            Главная
                        </NavLink>
                        <NavLink to='/menu' className='nav-link' activeClassName='nav-link_active'>
                            Меню
                        </NavLink>
                        <NavLink to='/news' className='nav-link' activeClassName='nav-link_active'>
                            Новости
                        </NavLink>
                        <NavLink to='/discounts' className='nav-link' activeClassName='nav-link_active'>
                            Акции
                        </NavLink>
                        <NavLink to='/restaurants' className='nav-link' activeClassName='nav-link_active'>
                            Рестораны
                        </NavLink>
                        <NavLink to='/geography' className='nav-link' activeClassName='nav-link_active'>
                            География доставки
                        </NavLink>
                    </nav>
                </div>

            </div>

        </div>

    );
}

export default AppHeader
