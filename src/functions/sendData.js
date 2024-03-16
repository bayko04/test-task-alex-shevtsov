const sendData = (data, handleSuccess) => {
    localStorage.clear()

    if (data.name.length > 3 && data.tel.length === 10 && data.isChecked) {
        const toSend = { ...data }
        const dataJson = JSON.stringify(toSend)
        localStorage.setItem("user-data", dataJson)

        handleSuccess(true)
    } else {
        alert(
            `
            1) В имени должно быть больше 3 символов.\n
            2) В телефоне должно быть 10 цифр.\n
            3) Галочка должна быть отмечена
            `
        )
    }
}

export default sendData
