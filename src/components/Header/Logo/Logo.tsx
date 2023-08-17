import styles from './Logo.module.scss'
import logoIcon from '../../../icons/Logo.png'


export const Logo = () => {

    return (
        <div className={styles.logo}>
            <img alt='logo' src={logoIcon} />
            <div className={styles.logo__text}><p>chilliposts</p></div>    
        </div>
    )
}