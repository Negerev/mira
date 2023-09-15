const Description = ({descr}) => {
    return (
        <div className="project__wrap">
            <div className="project__container project__container--small project__container--text">
            </div>
            <div className="project__container project__container--small project__container--text">
                <div className="project__text">
                    <p>{descr}</p>
                </div>
            </div>
        </div>
    )
}

export default Description;