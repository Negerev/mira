const TabSelector = ({select}) => {
    const toggleClass = () => {
        document.querySelectorAll('.cases__select').forEach(item => {
            item.classList.toggle('cases__select--open')
        })
        document.querySelectorAll('.cases__wrapper').forEach(item => {
            item.classList.toggle('cases__wrapper--close')
        })
    }

    return (
        <button onClick={toggleClass} className="cases__select">{select}</button>
    )

}
export default TabSelector;