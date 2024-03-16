const StatisticsPanel = ({ value, text }) => {
    return (
        <div className="statistics-panel">
            <p className="statistics-panel__value">{value}</p>
            <p className="statistics-panel__description">{text}</p>
        </div>
    )
}

export default StatisticsPanel
