import {Link} from "react-router-dom";
import React from "react";
import logo from '../img/logo.png'
function Footer() {
    return (
        <div className='container footer'>
            <div className='footer-main'>
                <div className='footer-contacts'>
                    <img src={logo} alt=""/>
                    <div>
                        <p>
                            <a href="tel: +78009005005">
                                <i className="fas fa-phone highlight"></i>8-800-900-500-5
                            </a>
                        </p>
                        <p>
                            <i className="fab fa-vk highlight"></i>
                            <i className="fab fa-facebook-f highlight"></i>
                            <i className="fab fa-instagram highlight"></i>
                        </p>
                    </div>
                </div>
                <div className='footer-hrefs'>
                    <ul>
                        <li><Link to='/restaurants'>Рестораны</Link></li>
                        <li><Link to='/discounts'>Акции</Link></li>
                        <li><Link to='/news'>Новости</Link></li>
                        <li><Link to='/delivery'>Доставка</Link></li>
                        <li><Link to='/rent'>Аренда</Link></li>
                    </ul>
                    <ul>
                        <li><Link to='/franchise'>Франшиза</Link></li>
                        <li><Link to='/job'>Вакансии</Link></li>
                        <li><Link to='/oferta'>Оферта</Link></li>
                        <li><Link to='/work-with-us'>Сотрудничество</Link></li>
                        <li><Link to='/contacts'>Контакты</Link></li>
                    </ul>
                </div>
                <div className='footer-form'>
                    <div className="input-field">
                        <input type="text" id='text' placeholder='Поиск по сайту'/><button className='button-pink'><i className="fas fa-search"></i></button>
                    </div>
                    <div>
                        <button className='feedback button-pink'>Отправить отзыв</button>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className="copyright">
                    &copy; 2019 Ресторан японской кухни <br/>
                    "Japanito"
                </div>
                <div className="apps-download">
                    <a href='/' className="app-store app-down">
                    </a>
                    <a href='/' className="google-play app-down">
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;