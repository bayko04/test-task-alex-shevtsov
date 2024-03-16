import Burger from "./Burger"
import Logo from "./Logo"
import tel from "../images/tel.png"

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <Logo />

                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__link">
                                <a href="">Обо мне</a>
                            </li>
                            <li className="header__link">
                                <a href="">Наставничество</a>
                            </li>
                            <li className="header__link">
                                <a href="">Мероприятия</a>
                            </li>
                            <li className="header__link">
                                <a href="">Кейсы</a>
                            </li>
                            <li className="header__link">
                                <a href="">Отзывы</a>
                            </li>
                            <li className="header__link">
                                <a href="">Контакты</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__burger-and-tel">
                        <Burger />
                        <img
                            src={tel}
                            alt=""
                        />
                    </div>
                    <div className="header__tel">
                        <a href="tel:+8-345-123-34-45">8-345-123-34-45</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
