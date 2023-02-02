import React, {useContext} from 'react';
import styles from './styles/Form.module.css';
import Wrapper from './Wrapper';

const Form = () => {
    const context = useContext(Wrapper);
    const {setName}= context;
    return (
        <form>
            <label className={styles.text}>Your Name:</label>
            <input className={styles.input} type="text" onChange={e => setName(e.target.value)} />
        </form>
    )
};

export default Form;