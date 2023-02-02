import React, { useContext } from 'react';
import styles from './styles/Navbar.module.css';
import Wrapper from './Wrapper';

const Navbar = () => {
    const context = useContext(Wrapper);
    const {name}= context;
    return (
        <header className={styles.header}>
            {name ? <h3>{`¡Hola, ${name}!`}</h3> : <h3>¡Hola!</h3>}
        </header>
    )
};

export default Navbar;