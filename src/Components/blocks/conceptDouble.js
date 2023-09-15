const ConceptDouble = ({descr1, descr2}) => {
    return (
        <div className="project__wrap">
            <div className="project__container project__container--small project__container--text">
                <h2 className="project__subtitle">Concept</h2>
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

export default ConceptDouble;