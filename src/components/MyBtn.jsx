const MyBtn = ({ bg, text, action }) => {
    return (
        <div
            onClick={action}
            className="my-btn"
        >
            <div className={`my-btn__text ${bg}`}>
                <p>{text}</p>
            </div>
            <div className={`my-btn__arrow ${bg}`}>
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21 4.29346V20.952H4.37326M20.9618 21L1 1"
                        stroke="none"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    )
}

export default MyBtn
