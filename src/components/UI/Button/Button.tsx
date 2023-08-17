import styles from './Button.module.scss'
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cn from 'classnames'

interface IButtonProps {
    type: string
    variant?: "btnSubmit" | 'btnApplyFilter' | 'filterBtn'
    name: string
}
// HTMLButtonElement

export const Button: FC<IButtonProps & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ type, name, ...rest }) => {
    return (
        <div className={styles.main}>

            <button type={type} className={cn(styles.main, {
                [styles.btnApplyFilter]: 'btnApplyFilter',
                [styles.btnSubmit]: 'btnSubmit',
                [styles.filterBtn]:'filterBtn'
            })}
                {...rest}
            >
                <p>{name}</p>
            </button>

        </div>
    )
}