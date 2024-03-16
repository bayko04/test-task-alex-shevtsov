import { useState } from "react"
import Header from "./components/Header"
import MainPage from "./components/MainPage"
import OrderCallback from "./components/OrderCallback"
import "./App.scss"

function App() {
    const [sideBar, setSideBar] = useState(false)
    const [successForm, setSuccessForm] = useState(false)

    const toggleSideBar = () => {
        if (sideBar) {
            setSideBar(false)
            document.body.style.overflow = "auto"
        } else {
            setSideBar(true)
            document.body.style.overflow = "hidden"
        }
    }

    const handleSuccesMessage = (value) => {
        setSuccessForm(value)
    }

    return (
        <div className="app">
            <div className="container">
                <Header />
                <MainPage toggleSideBar={toggleSideBar} />

                {sideBar && (
                    <OrderCallback
                        toggleSideBar={toggleSideBar}
                        handleSuccess={handleSuccesMessage}
                        successForm={successForm}
                    />
                )}

                <div className={`${sideBar ? "app__blur" : ""}`}></div>
            </div>
        </div>
    )
}

export default App
