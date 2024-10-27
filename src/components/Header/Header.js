import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.home}>HOME</Link>
        </header>
    );
}

export default Header;
