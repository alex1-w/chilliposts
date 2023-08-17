import { ITag } from '../../../types/IPosts'
import styles from './Tag.module.scss'
import { FC, PropsWithChildren } from "react"

export const Tag: FC<{ tag: ITag }> = ({ tag }) => {
    // console.log(tag);

    return (
        <div className={styles.main}>
            <p> {tag.title}</p>
        </div>
    )
}