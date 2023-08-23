import styles from './FullPost.module.scss'
import { IPost } from "../../types/IPosts"
import { FC, useRef } from "react"
import { Tag } from '../PostItem/Tag/Tag'
import { motion, AnimatePresence } from "framer-motion"
import dayjs from 'dayjs'
import { Drawer } from '../Drawer/Drawer'
import { useDrawerProvider } from '../Drawer/DrawerProvider'

const clock = <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" fill='#F2F2F2' viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
const localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(localizedFormat)
require('dayjs/locale/ru')
dayjs.locale('ru')

export const FullPost: FC<{ post: IPost }> = ({ post }) => {

    return (
        <div className={styles.wrapper} >

            <div className={styles.main}>
                <div className={styles.imgBlock}>
                    <img src={post.image} alt={post.title} />
                </div>

                <div className={styles.head}>
                    <div>
                        <h2>{post.title}</h2>
                        <div className={styles.head__tagsBlock}>
                            {post.tags.map(tag => (
                                <Tag tag={tag} key={tag.id} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.head__footer}>
                        <p className={styles.head__author}>Автор: Mike_232</p>
                        <p className={styles.head__clock}>{clock} {dayjs(post.created_at).format('YY MMMM-DD')}</p>
                    </div>
                </div>
            </div>

            <div className={styles.textBlock}>
                <p>
                    {post.description}
                </p>
            </div>

        </div>
    )
}