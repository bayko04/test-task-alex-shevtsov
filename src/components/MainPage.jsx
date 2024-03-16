import { useEffect, useState } from "react"
import MyBtn from "./MyBtn"
import StatisticsPanel from "./StatisticsPanel"
import mentorImg from "../images/mentor 2.png"

const MainPage = ({ toggleSideBar }) => {
    const [gbp, setGbp] = useState()
    const [dateSum, setDateSum] = useState()
    const [countGbp, setCountGbp] = useState(0)
    const [countDateSum, setCountDateSum] = useState(0)

    useEffect(() => {
        if (countGbp < gbp) {
            setTimeout(() => setCountGbp((prev) => prev + 1), 10)
        }
    }, [countGbp, gbp])

    useEffect(() => {
        if (countDateSum < dateSum) {
            setTimeout(() => setCountDateSum((prev) => prev + 1), 100)
        }
    }, [countDateSum, dateSum])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API = "https://www.cbr-xml-daily.ru/daily_json.js"
                const response = await fetch(API)
                const data = await response.json()

                setGbp(Math.floor(data.Valute.GBP.Value))
                setDateSum(
                    data.Date.slice(0, 10)
                        .replace(/-/g, "")
                        .split("")
                        .reduce((sum, el) => sum + +el, 0)
                )
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="main-page">
            <div className="main-page__left-side">
                <h1 className="main-page__title">
                    Создаю условия <br /> для вашего успеха
                </h1>

                <p className="main-page__text">
                    Когда ваше время и энергия лучше сфокусированы, стремление к
                    новым возможностям становится реальностью, ваш успех зависит
                    от ваших действий
                </p>
                <p className="main-page__text sm">
                    Ваш успех зависит от ваших <br /> действий
                </p>

                <div className="main-page__buttons">
                    <MyBtn
                        bg="white"
                        text="Записаться на консультацию"
                    />
                    <MyBtn
                        action={toggleSideBar}
                        bg="transp"
                        text="Бесплатная консультация"
                    />
                </div>

                <div className="main-page__buttons sm">
                    <MyBtn
                        bg="white"
                        text="Записаться"
                    />
                    <MyBtn
                        action={toggleSideBar}
                        bg="transp"
                        text="Заказать звонок"
                    />
                </div>

                <div className="main-page__statistics">
                    <StatisticsPanel
                        value={`${countDateSum}+`}
                        text="техник для достижения целей"
                    />
                    <StatisticsPanel
                        value={`${countGbp}%`}
                        text="увеличение личной продуктивности"
                    />
                </div>

                <div className="main-page__statistics sm">
                    <StatisticsPanel
                        value={`${dateSum}+`}
                        text="техники"
                    />
                    <StatisticsPanel
                        value={`${gbp}%`}
                        text="продуктивности"
                    />
                </div>
            </div>

            <div className="main-page__right-side">
                <img
                    src={mentorImg}
                    alt=""
                />
            </div>
        </div>
    )
}

export default MainPage
