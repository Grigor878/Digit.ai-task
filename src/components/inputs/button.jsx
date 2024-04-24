import styles from './styles.module.scss'

export const Button = ({ text, onClick }) => {
    return (
        <button className={styles.btn} onClick={onClick}>{text}</button>
    )
}
