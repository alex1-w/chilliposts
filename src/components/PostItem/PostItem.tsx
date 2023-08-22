import styles from './PostItem.module.scss'
import { FC, useContext } from 'react'
import { Tag } from './Tag/Tag'
import { motion, AnimatePresence } from "framer-motion"
import { PostItemLink } from './PostItemLink/PostItemLink'
import { FullPost } from '../FullPost/FullPost'
import { useDrawerProvider } from '../Drawer/DrawerProvider'
import { IPost, ITag } from '../../types/IPosts'

export const PostItem: FC<{ post: IPost }> = ({ post }) => {
    const { isDrawerOpened } = useDrawerProvider()
    // console.log(post);

    return (
        <AnimatePresence>

            <motion.div
                whileHover={{ backgroundColor: 'rgba(242, 242, 255, 0.07)' }}
                className={styles.main}
            >
                <div className={styles.imgBlock}>
                        <img alt={post.title} src={post.image} className={styles.imgBlock__image} />
                </div>

                <div className={styles.cardContent}>
                    <div className={styles.cardContent__head}>
                        {post.tags.map((tag: ITag) => (
                            <Tag key={tag.id} tag={tag} />
                        ))}
                    </div>

                    <div className={styles.cardContent__mainContent}>

                        <div className={styles.cardContent__title}>
                            <h3>{post.title}</h3>
                        </div>
                        <div className={styles.cardContent__text}>
                            <p>{post.description}</p>
                        </div>

                        <div className={styles.cardContent__footer}>
                            <PostItemLink post={post} />

                            <div className={styles.date}>
                                <p>05 марта 2023 18:13</p>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>

        </AnimatePresence>
    )
}