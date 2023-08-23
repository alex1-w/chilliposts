import styles from './FilterMenu.module.scss'
import { Button } from '../UI/Button/Button'
import { FilterSelect } from './FilterSelect/FilterSelect'
import { FilterDate } from './FilterDate/FilterDate'
import { useState } from 'react'
import { ITag } from '../../types/IPosts'

interface IOption {
    value: string
    id: number
}

export const FilterMenu = () => {

    return (
        <div className={styles.main}>
            <h3>Фильтры</h3>

            <div className={styles.filterBlock}>

                <FilterSelect />
                {/* <FilterDate /> */}
                <Button name='ПРИМЕНИТЬ' type='submit' variant='btnApplyFilter' />

            </div>
        </div>
    )
}