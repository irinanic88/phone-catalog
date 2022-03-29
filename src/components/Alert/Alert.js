import React, { useEffect, useRef } from 'react';
import useActions from '../../hooks/useActions';
import styles from './Alert.module.scss';


const Alert = ({message}) => {
    const { closeAlert } = useActions();
    const timeout = useRef(null);
    const closeAlertTime = 3000;

    useEffect(() => {
        timeout.current = setTimeout(() => closeAlert(), closeAlertTime);

        return () => {
            clearTimeout(timeout.current);
            timeout.current = null;
        }
    }, []);


    return (
        <div className={styles.alert}>
            <p className={styles.alert__error}>{message}</p>
            <button onClick={() => closeAlert()} name={'close-alert'} className={styles.alert__close}>x</button>
        </div>

    )
}

export default Alert;