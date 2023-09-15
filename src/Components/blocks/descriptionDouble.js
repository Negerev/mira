const DescriptionDouble = ({descr1, descr2}) => {
    return (
        <div className="project__wrap">
            <div className="project__container project__container--small project__container--text">
            </div>
            <div className="project__container project__container--small project__container--text">
                <div className="project__text">
                    <p>{descr1}</p>
                    <p>{descr2}</p>
                </div>
            </div>
        </div>
    )
}

export default DescriptionDouble;