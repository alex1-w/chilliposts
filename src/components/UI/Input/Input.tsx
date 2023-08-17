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
            <AnimatePresence>
                <motion.div className={styles.main}>
                    <input
                        type={passwordVisible && inputType === 'password' ? 'password' : 'text'} 
                        placeholder={placeholder}

                        {...register(name, {
                            required: `${name} is required !!!`,
                            pattern: {
                                value: validatePattern,
                                message: `введите корректный ${name}`
                            }
                        })}
                    // as const
                    />
                    {inputType === 'password' &&
                        <div className={styles.main__eyeblock}>
                            {!passwordVisible && <img src={eyeIcon} alt="eye" onClick={() => setPasswordVisible('text')} />}
                            {passwordVisible && <img src={eyeIconSlach} alt="eyeSlash" onClick={() => setPasswordVisible('password')} />}
                        </div>
                    }
                </motion.div>
                {/* {errors?.name && <p>{errors.name.message}</p>} */}
            </AnimatePresence>
        )
    }