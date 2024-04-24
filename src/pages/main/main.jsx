import { useSelector } from 'react-redux'
import { Select } from '../../components/inputs/select'
import { Template } from '../../components/template/template'
import { Result } from '../../components/result/result'
import styles from './main.module.scss'

const Main = () => {
    const { layout, template } = useSelector((state) => state.main)

    return (
        <main className={styles.main}>
            <Select />
            {layout && <Template />}
            {layout && template && <Result />}
        </main>
    )
}

export default Main