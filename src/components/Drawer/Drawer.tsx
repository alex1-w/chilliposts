import styles from './Drawer.module.scss'
import { motion, AnimatePresence } from "framer-motion"
import { useContext, useRef } from 'react'
import { DrawerContext } from './DrawerProvider'
import cn from 'classnames'
const cancelIcon = <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1.4em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

export const Drawer = () => {
    const { closeDrawer, isDrawerOpened, content } = useContext(DrawerContext)
    const backGroundRef = useRef<HTMLDivElement>(null)

    return (
        <AnimatePresence>
            {isDrawerOpened &&
                <motion.article
                    className={cn(styles.main)}
                    initial={{ x: '-100', width: 0 }}
                    animate={{ x: 0, width: '70%' }}
                    exit={{ x: '-100%' }}
                >
                    <div className={styles.content}>

                        <div onClick={() => closeDrawer()} className={styles.cancelBtn}>
                            {cancelIcon}
                        </div>

                        {content}
                    </div>

                </motion.article>
            }
        </AnimatePresence>
    )
}




// import styles from './Drawer.module.scss'
// import Image from 'next/image'
// import { motion, AnimatePresence } from "framer-motion"
// import { useContext } from 'react'
// import { DrawerContext } from './DrawerProvider'
// const cancelIcon = <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1.4em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

// export const Drawer = () => {
//     const { closeDrawer, isDrawerOpened, content } = useContext(DrawerContext)

//     return (
//         <AnimatePresence>
//             <div className={styles.wrapper}>

//                 {isDrawerOpened &&
//                     <motion.article
//                         className={styles.main}
//                         // initial={{ x: '-100%' }}
//                         // animate={{ x: 0 }}
//                         // exit={{ x: '-100%' }}
//                     >
//                         <div onClick={() => closeDrawer()} className={styles.cancelBtn}> {cancelIcon} </div>

//                       <div>  {content}</div>
//                     </motion.article>
//                 }
//             </div>

//         </AnimatePresence>
//     )
// }