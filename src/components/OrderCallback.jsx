import { useState } from "react"
import MyBtn from "./MyBtn"
import SuccessMessage from "./SuccessMessage"
import sendData from "../functions/sendData"

const OrderCallback = ({ toggleSideBar, handleSuccess, successForm }) => {
    const [userData, setUserData] = useState({
        name: "",
        tel: "",
        isChecked: false,
    })

    return (
        <div className="order-callback">
            <div
                onClick={() => {
                    toggleSideBar()
                    handleSuccess(false)
                }}
                className="order-callback__closeBtn"
            ></div>

            {!successForm && (
                <form
                    className="order-callback__form"
                    action=""
                >
                    <h2 className="order-callback__title">
                        Закажите обратный звонок
                    </h2>

                    <div className="order-callback__name">
                        <input
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    name: e.target.value,
                                })
                            }
                            value={userData.name}
                            required
                            placeholder="Имя"
                            type="text"
                        />
                    </div>

                    <div className="order-callback__phone">
                        <input
                            pattern="[0-9]*"
                            inputmode="numeric"
                            required
                            onChange={(e) => {
                                const userInput = e.target.value
                                const regex = /^[0-9]*$/
                                if (regex.test(userInput)) {
                                    setUserData({
                                        ...userData,
                                        tel: userInput,
                                    })
                                }
                            }}
                            value={userData.tel}
                            placeholder="Телефон"
                            type="tel"
                        />
                    </div>

                    <div className="order-callback__checkbox">
                        <input
                            onChange={(event) => {
                                setUserData({
                                    ...userData,
                                    isChecked: event.target.checked,
                                })
                            }}
                            type="checkbox"
                            id="checkboxInput"
                        />
                        <label
                            htmlFor="checkboxInput"
                            className="order-callback__checkbox-label"
                        >
                            Согласен на сохранение и обработку <br />
                            персональных данных
                        </label>
                    </div>

                    <MyBtn
                        action={() => {
                            sendData(userData, handleSuccess)
                        }}
                        bg="transp"
                        text="Заказать обратный звонок"
                    />
                </form>
            )}
            {successForm && <SuccessMessage />}
        </div>
    )
}

export default OrderCallback
