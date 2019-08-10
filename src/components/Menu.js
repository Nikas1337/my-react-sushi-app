import { NavLink } from "react-router-dom";
import React from "react";
import img1 from '../img/icons/002-sushi.png'
import img11 from '../img/icons/002-sushi-white.png'
import img2 from '../img/icons/001-fish.png'
import img22 from '../img/icons/001-fish-white.png'
import img3 from '../img/icons/003-sushi-1.png'
import img33 from '../img/icons/003-sushi-1-white.png'
import img4 from '../img/icons/004-noodles.png'
import img44 from '../img/icons/004-noodles-white.png'
import img5 from '../img/icons/005-soup.png'
import img55 from '../img/icons/005-soup-white.png'
import MenuList from "../containers/MenuList";

const SushiPicker = {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center'
}
function Menu() {


    return (
            <div  className='container'>
                <div style={SushiPicker} className="sushi-picker">
                    <NavLink onMouseOver={e => (e.currentTarget.firstChild.src = img11)}
                             onMouseOut={e => (e.currentTarget.firstChild.src = img1)}
                             className="sushi-picker-elem" activeClassName='sushi-picker-active'>
                        <img
                            src={img1}

                            alt=""/>
                        <h4>Суши</h4>
                    </NavLink>
                    <NavLink onMouseOver={e => (e.currentTarget.firstChild.src = img22)}
                             onMouseOut={e => (e.currentTarget.firstChild.src = img2)}
                             className="sushi-picker-elem" activeClassName='sushi-picker-active'>
                        <img src={img2} alt=""/>
                        <h4>Роллы</h4>
                    </NavLink>
                    <NavLink onMouseOver={e => (e.currentTarget.firstChild.src = img33)}
                             onMouseOut={e => (e.currentTarget.firstChild.src = img3)}
                             className="sushi-picker-elem" activeClassName='sushi-picker-active'>
                        <img src={img3} alt=""/>
                        <h4>Сеты</h4>
                    </NavLink>
                    <NavLink onMouseOver={e => (e.currentTarget.firstChild.src = img44)}
                             onMouseOut={e => (e.currentTarget.firstChild.src = img4)}
                             className="sushi-picker-elem" activeClassName='sushi-picker-active'>
                        <img src={img4} alt=""/>
                        <h4>Лапша</h4>
                    </NavLink>
                    <NavLink onMouseOver={e => (e.currentTarget.firstChild.src = img55)}
                             onMouseOut={e => (e.currentTarget.firstChild.src = img5)}
                        className="sushi-picker-elem" activeClassName='sushi-picker-active'>
                        <img src={img5} alt=""/>
                        <h4>Супы</h4>
                    </NavLink>
                </div>
                <MenuList />
            </div>
    );
}

export default Menu;