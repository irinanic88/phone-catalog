import styles from './Button.module.scss';

const Button = ({name, handleClick}) => {
    return (
        <button onClick={handleClick}
                className={styles.button}
                data-id="button"
        >
            {name}
        </button>
    )
}

export default Button;