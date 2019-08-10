import {Link} from "react-router-dom";
import React from "react";
import Store from "../stores";
import './css/Menu.css'

function MenuList(store) {
    let menuArr = []
    let allAmounts = {}
    // console.log(Store.menu.length)
    for (let i = 0; i < Store.menu.length; i++) {
        for (let j = 0; j < Store.menu[i].items.length; j++) {
            allAmounts[Store.menu[i].items[j].id] = 0
        }
    }
    for (let key in store.state.cart.cart) {
        // console.log(store.state.cart.cart[key].id)
        allAmounts[store.state.cart.cart[key].id]++
    }
    console.log(allAmounts)
    for (let i = 0; i < Store.menu.length; i++) {
        menuArr[i] = (Store.menu[i].items).map((item,index) =>
            <div className='menu-elem' key={index}>
                <div className="sushi-m-h">
                    <div className="sushi-m">
                        <span>{item.mass}</span> г.
                    </div>
                    <div className={'sushi-h-' + item.special}>
                        {/*{item.special}*/}
                    </div>
                </div>
                <div className="sushi-img-wrap">
                    <img src={item.img} alt=""/>
                </div>
                <div className="sushi-name">
                    {item.name}
                    <p className="sushi-inside">
                        {item.inside}
                    </p>
                </div>
                <div className="sushi-price-order">
                    <div className="sushi-price">
                        {item.price} &#8381;
                    </div>
                    <div className="sushi-order">
                    <span onClick={() => {
                        store.removeItem(item)
                    }}>
                        <i className="fas fa-minus"></i>
                    </span>
                        <span className='sushi-order-amount'>
                            {allAmounts[item.id]}
                    </span>

                        <span onClick={() => {
                            store.addItem(item)
                        }}>
                        <i className="fas fa-plus"></i>
                    </span>
                    </div>


                </div>

            </div>
        )
    }
    let menuAll = menuArr.map((item, index) =>
        (
            <div>
                <div className='menu-group-filter'>
                    <h2 className='menu-group'>{Store.menu[index].group}</h2>
                    <div className='menu-filter'>
                        Фильтр
                        <span><i className="fas fa-plus"></i></span>
                    </div>
                </div>
                <div className="menu-main">
                    {item}
                </div>
            </div>
        )
    )

    return (
        <div className='container'>
            {menuAll}
        </div>
    );
}

export default MenuList;