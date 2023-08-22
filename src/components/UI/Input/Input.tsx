import styles from './Input.module.scss'
import { motion, AnimatePresence } from "framer-motion"
import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, useState } from "react"
import cn from 'classnames'
import eyeIcon from '../../../icons/eye-solid.png'
import eyeIconSlach from '../../../icons/eye-slash.png'

interface IInputProps {
    type?: string
    inputType?: 'login' | 'password'
    register?: any
    name: string
    errors: any
    setPasswordVisible: (active: 'text' | 'password') => void
    passwordVisible: 'text' | 'password'
}

export const Input: FC<IInputProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>
    = ({ passwordVisible, setPasswordVisible, errors, name, register, inputType, placeholder, type, ...rest }) => {

        const validatePattern = inputType === 'login' ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ : ''

        return (
            // <AnimatePresence>
            //     <motion.div
            //         initial={{ height: 40 }}
            //         animate={{ height: 'fit-content' }}
            //         className={styles.main}>
            //         <input
            //             type={passwordVisible && inputType === 'password' ? 'password' : 'text'}
            //             placeholder={placeholder}

            //             {...register(name, {
            //                 required: `${name} is required !!!`,
            //                 pattern: {
            //                     value: validatePattern,
            //                     message: `введите корректный ${name}`
            //                 }
            //             })}
            //         />

            //         {inputType === 'password' &&
            //             <div className={styles.main__eyeblock}>
            //                 {!passwordVisible && <img src={eyeIcon} alt="eye" onClick={() => setPasswordVisible('text')} />}
            //                 {passwordVisible && <img src={eyeIconSlach} alt="eyeSlash" onClick={() => setPasswordVisible('password')} />}
            //             </div>
            //         }
            //     </motion.div>
            //    
            // </AnimatePresence>


            <div className={styles.main}>
                <div className={styles.inpBlock}>
                    <input
                        type={type}
                        {...register(name, {
                            required: `${name} - обязательное поле !!!`,
                            pattern: {
                                value: validatePattern,
                                message: `введите корректный ${name}`
                            }
                        })}
                    />
                </div>

                <AnimatePresence>
                    {errors[name] && (
                        <motion.p
                            className={styles.main__error}
                            initial={{ height: 0, y: "-100", opacity: 0 }}
                            animate={{ height: "auto", y: 0, opacity: 1 }}
                            exit={{ height: 0, y: "-100", opacity: 0 }}
                        >
                            {errors[name].message}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        )
    }