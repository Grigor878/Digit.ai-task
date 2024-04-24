import { useDispatch, useSelector } from 'react-redux'
import { setTemplate } from '../../store/slices/mainSlice'
import styles from './styles.module.scss'

export const Radio = ({ value, img }) => {
    const dispatch = useDispatch()

    const { template } = useSelector((state) => state.main)

    return (
        <label className={styles.radio}>
            <input
                type="radio"
                value={value}
                checked={template === value}
                onChange={(e) => dispatch(setTemplate(e.target.value))}
            />
            <img src={img} alt={value} className={styles.radio_img} />
        </label>
    )
}
