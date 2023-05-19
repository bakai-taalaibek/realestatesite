import './footer.scss'
import logo from './assets/logo.png'
import insta from './assets/insta.svg'
import telegr from './assets/teleg.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <a href="#"><img src={logo} alt="Logo" className="footer__logo"/></a>
                    <div className="footer__menu">
                        <ul className="footer__list">
                            <li><a className="footer__link" href="#">Продажа</a></li>
                            <li><a className="footer__link" href="#">Аренда</a></li>
                        </ul>
                        <ul className="footer__list">
                            <li><a className="footer__link" href="#">Коммерческая</a></li>
                            <li><a className="footer__link" href="#">Ипотека</a></li>
                        </ul>
                        <ul className="footer__list">
                            <li><a className="footer__link" href="#">О нас</a></li>
                            <li><a className="footer__link" href="#">Условия</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__contacts">
                    <div className="footer__social">
                        <a href="#" className="footer__social-insta">
                            <img src={insta} alt="instagram"/>
                            <p>yilor.kg</p>
                        </a>
                        <a href="#" className="footer__social-telegram">
                            <img src={telegr} alt="telegram"/>
                            <p>@telegramname</p>
                        </a>
                    </div>
                    <div className="footer__copy">
                        <p>Yilorkg &copy; 2022 Все права защищены</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;