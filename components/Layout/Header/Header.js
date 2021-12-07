import logoImage from '../../../assets/youtube.png';
import classes from './Header.module.css';
import Input from '../../UI/Input/Input';

/**
 * 
 * @param {*} props 
 * @returns Header component which has image and input search bar
 */
const Header = props => {
    return (
        <div className={classes.topnav}>
            <img src={logoImage} alt="youtube" />
            <Input
                onSearchSubmit={props.onSearchSubmit}
                searchText={props.searchText}
                setSearchText={props.setSearchText}/>
        </div>
    );
};

export default Header;