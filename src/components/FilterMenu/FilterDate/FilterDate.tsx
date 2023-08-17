import styles from './FilterDate.module.scss'
import { useState } from 'react'
import { TextField } from '@mui/material'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs'
const localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(localizedFormat)
require('dayjs/locale/ru')
dayjs.locale('ru')

const calendarIcon = <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1em" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" /></svg>

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// interface IDates {
//     dateFrom: Value
//     dateBefore: Value
// }

interface ICalendars {
    calendarOne: boolean,
    calendarTwo: boolean,
}
// const minDate = new Date("2017-01-26")

export const FilterDate = () => {
    // const [dateFrom, setDateFrom] = useState<Value>(new Date())

    const [dateFrom, setDateFrom] = useState<any>(new Date())
    const [dateBefore, setDateBefore] = useState<any>(new Date())

    const [isCalendarShowed, setIsCalendarShowed] = useState<ICalendars>({
        calendarOne: false,
        calendarTwo: false,
    })

    // const day = dayjs(String(dateFrom)).format('DD-MM-YYYY')

    const formateDate = (date: string | undefined) => dayjs(String(date)).format('DD-MM-YYYY')

    return (
        <form className={styles.main}>

            <div className={styles.dateInputBlock}>

                <div
                    className={styles.dateBlock}
                    onClick={() => setIsCalendarShowed({ ...isCalendarShowed, calendarOne: true })}
                >
                    <p>{formateDate(dateFrom?.toString())}</p>
                    {calendarIcon}

                </div>

                {isCalendarShowed.calendarOne &&
                    <div className={styles.calendar}>
                        <Calendar
                            maxDate={new Date(2023, 11, 31)}
                            minDate={new Date(2017, 0, 1)}
                            // onChange={e => setDateFrom({ ...dateFrom, dateBefore: e })}
                            // value={dateFrom.dateBefore}
                            onChange={setDateFrom}
                            value={dateBefore}
                            onClickDay={() => setIsCalendarShowed({ ...isCalendarShowed, calendarOne: false })}
                        />
                    </div>
                }
            </div>


            <div className={styles.line}></div>


            <div
                className={styles.dateInputBlock}
                onClick={() => setIsCalendarShowed({ ...isCalendarShowed, calendarTwo: true })}
            >

                <div className={styles.dateBlock}>
                    <p>{formateDate(dateFrom?.toString())}</p>
                    {calendarIcon}
                </div>

                {isCalendarShowed.calendarTwo &&
                    <div className={styles.calendar}>
                        <Calendar
                            minDate={new Date(2017, 0, 1)}
                            maxDate={new Date(2023, 11, 31)}
                            // onChange={e => setDateFrom({ ...dateFrom, dateFrom: e })}
                            // value={dateFrom.dateFrom}
                            onChange={setDateBefore}
                            value={dateBefore}
                            // onClickDay={() => setIsCalendarShowed({ ...isCalendarShowed, calendarTwo: false })}
                        />
                    </div>
                }
            </div>

        </form>
    )
}