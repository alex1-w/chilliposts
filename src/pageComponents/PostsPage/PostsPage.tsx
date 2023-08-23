import styles from './PostsPage.module.scss'
import { FC, useContext, useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { posts } from '../../data/data'
import { Container } from '../../components/Container/Container'
import { PostItem } from '../../components/PostItem/PostItem'
import { FilterMenu } from '../../components/FilterMenu/FilterMenu'
import { DrawerContext } from '../../components/Drawer/DrawerProvider'

// const scrollLock = require('scroll-lock');

export const PostsPage = () => {
    const { isDrawerOpened, setIsDrawerOpened, setContent } = useContext(DrawerContext)
    const ref = useRef<HTMLDivElement>(null)

    const showFilter = () => {
        setIsDrawerOpened(true)
        setContent(<FilterMenu />)
    }

    return (
        <Container>
            <div className={styles.main} ref={ref}>

                <motion.div whileHover={{ scale: 1.04 }} onClick={showFilter} className={styles.filterBtn}>

                    <p>фильтр</p>

                </motion.div>

                <div className={styles.wrapper}>
                    {posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </div>

            </div>

        </Container>
    )
}