import styles from './Header.module.scss'
import profileIcon from '../../icons/profile.png'
// import cookies from ''
import { userService } from '../../services/userService/userService'
import { Logo } from './Logo/Logo'
import { useUserProvide } from '../../providers/UserProvider'

const username = 'Monkf'

export const Header = () => {
    const { logout, isAuth } = useUserProvide()

    const exit = () => logout()

    return (
        <header className={styles.header}>

            <Logo />
            {isAuth === true
                &&
                <div className={styles.userBlock}>

                    <div className={styles.userBlock__profileBlock}>
                        <img alt='profile' src={profileIcon} className={styles.userBlock__profile} />
                        <p>{username}</p>
                    </div>

                    <div className={styles.userBlock__exit}>
                        <p onClick={exit}>Выйти</p>
                    </div>

                </div>
            }
        </header >
    )
}