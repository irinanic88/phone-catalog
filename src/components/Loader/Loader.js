import React from 'react';
import { ReactComponent as LoaderIcon} from '../../assets/icons/Loader.svg';
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div data-id="loader" className={styles.loader}>
            <div className={styles.loader__container}>
                <LoaderIcon className={styles.loader__icon} />
            </div>
        </div>

    )
}

export default Loader;