import { useSelector } from 'react-redux';
import { emailData, pageData } from './data'
import { Radio } from '../inputs/radio';
import styles from './template.module.scss'

export const Template = () => {

    const { layout, template } = useSelector((state) => state.main)

    const data = layout === "email" ? emailData(template) : pageData(template);

    return (
        <div className={styles.template}>
            <h2>Template Types</h2>

            <div className={styles.template_radios}>
                {data?.map(({ id, value, img }) => {
                    return (
                        <Radio
                            key={id}
                            value={value}
                            img={img}
                        />
                    )
                })}
            </div>
        </div>
    )
}
