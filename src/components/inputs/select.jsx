import { selectData } from './data'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setLayout } from '../../store/slices/mainSlice'

export const Select = () => {
    const dispatch = useDispatch()

    const { layout } = useSelector((state) => state.main)

    return (
        <select
            value={layout}
            onChange={(e) => dispatch(setLayout(e.target.value))}
            className={styles.select}
        >
            {selectData?.map(({ id, name, value }) => (
                <option
                    key={id}
                    value={value}
                >{name}
                </option>
            ))}
        </select>
    )
}
