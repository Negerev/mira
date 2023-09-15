import { Link } from 'react-router-dom';
import './backButton.scss';

const BackButton = () => {
    return (
        <Link to={'/cases/'}
                    className="button__back">
                back
        </Link>
    )
}

export default BackButton;