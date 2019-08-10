import React from "react";
import Menu from '../components/Menu'

const Head = {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexWrap: 'wrap',
    padding: '35px 0'
}

const OrderButton = {
    width: '230px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60px',
    fontWeight: '700',
    marginTop: '35px'
}
const Discount = {
    color: '#ffffff',
    width: '100%',
    height: '415px'
}
const BigDiscount = {
    fontFamily: 'Stalinist One',
    color: '#fd1c44'
}
function Home() {
    return (
        <div>
            <div className="nav-wrapper">
                <div style={Head} className='container'>

                    <div style={Discount} className='discount'>
                        <h1>
                            Бесплатная доставка при <br/>   заказе
                            <span style={BigDiscount}> от 800 руб.</span>
                        </h1>
                        <button className='button-pink' style={OrderButton}>
                            Перейти к заказу
                        </button>
                    </div>
                </div>
            </div>
            <Menu/>
        </div>
    );
}

export default Home;