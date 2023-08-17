import styles from './Header.module.scss'
import profileIcon from '../../icons/profile.png'
// import cookies from ''
import { userService } from '../../services/userService/userService'
import { Logo } from './Logo/Logo'

const username = 'Monkf'

export const Header = () => {
    // const token = cookies.get('userToken')

    // const exit = async () => {
    //     const token = cookies.remove('userToken')
    //     await userService.logout()
    // }

    return (
        <header className={styles.header}>

            <Logo />
            {/* {token && */}
            <div className={styles.userBlock}>

                <div className={styles.userBlock__profileBlock}>
                    <img alt='profile' src={profileIcon} className={styles.userBlock__profile} />
                    <p>{username}</p>
                </div>

                <div className={styles.userBlock__exit}>
                    <p>Выйти</p>
                </div>

            </div>
            {/* } */}
        </header>
    )
}