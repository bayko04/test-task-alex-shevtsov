import Logo from "./Logo"

const SuccessMessage = () => {
    return (
        <div className="success-message">
            <h2 className="success-message__title">
                Спасибо <br /> за заявку
            </h2>
            <h2 className="success-message__description">
                Я обязательно <br /> свяжусь с вами в ближайшее время.
            </h2>
            <div className="success-message__logo">
                <Logo />
            </div>
        </div>
    )
}

export default SuccessMessage
