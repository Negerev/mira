const Concept = ({ title ="Concept", descr, clazz ="project__subtitle"}) => {
    return (
        <div className="project__wrap">
            <div className="project__container project__container--small project__container--text">
                <h2 className={clazz}>{title}</h2>
            </div>
            <div className="project__container project__container--small project__container--text">
                <div className="project__text">
                    <p>{descr}</p>
                </div>
            </div>
        </div>
    )
}

export default Concept;