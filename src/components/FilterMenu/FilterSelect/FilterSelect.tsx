import styles from './FilterSelect.module.scss'
// import { MultiSelect } from "react-multi-select-component";
import { ChangeEvent, FC, MouseEvent, useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { FilterTag } from '../FilterTag/FilterTag';
import { useFilterProvider } from '../FilterProvider';
import { enqueueSnackbar } from 'notistack';
import { ITag } from '../../../types/IPosts';
const arrowDownIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='white' viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>

const options: ITag[] = [
    { value: "космос", id: 7 },
    { value: "астрономия", id: 8 },
    { value: "аквамарин", id: 9 },
    { value: "наука", id: 11 },
    { value: "черный", id: 10 },
];

export const FilterSelect = () => {
    const { categories, addCategories, deleteCategory } = useFilterProvider()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const arrowRef = useRef<HTMLDivElement>(null)

    const deleteTag = (id: number) => {
        if (categories.length === 1) setIsOpen(false)
        deleteCategory(id)
    }

    const showSelect = () => {
        arrowRef?.current?.classList.toggle(styles.rotate)
        setIsOpen(!isOpen)
    }

    function addCategoryTag(e: React.MouseEvent<HTMLElement>, option: ITag) {
        e.stopPropagation()

        if (categories.length > 3) { return enqueueSnackbar("не больше 4х категорий", { variant: 'error' }) }

        const tagInValue = categories.find((tag: ITag) => tag.id === option.id)
        if (tagInValue) return enqueueSnackbar('категория уже добавлена', { variant: 'error' })

        addCategories(option)
    }

    return (
        <form className={styles.main} onClick={showSelect}>

            <div className={styles.main__btnBlock}>
                <ul className={styles.tagsBlock}>

                    {!categories.length ?
                        <div className={styles.tagsBlock__name}> <p>Категории</p></div>
                        :
                        categories.map((tag: ITag) => (
                            <FilterTag
                                key={tag.id}
                                id={tag.id}
                                value={tag.value}
                                deleteTag={(e) => deleteTag(tag.id)}
                            />
                        ))}
                </ul>

                <div className={styles.arrowDownIcon} ref={arrowRef}>
                    {arrowDownIcon}
                </div>
            </div>

            <motion.div
                initial={{ height: 0, visibility: 'hidden' }}
                exit={{ height: 0, visibility: 'hidden' }}
                animate={isOpen ? { height: 'auto', visibility: 'visible' } : { height: 0, visibility: 'hidden' }}
                className={styles.selection}
            >

                {options.map(option => (
                    <li key={option.id} onClick={(e) => addCategoryTag(e, option)}>
                        <p>{option.value}</p>
                    </li>
                ))}

            </motion.div>
        </form >
    )
}