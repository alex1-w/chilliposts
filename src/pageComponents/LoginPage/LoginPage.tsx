import styles from './LoginPage.module.scss'
import { ChangeEvent, useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
// import cookies from 'js-cookie'
import { enqueueSnackbar } from 'notistack'
import { IFormState } from '../../types/IFormState'
import { Container } from '../../components/Container/Container'
import { Button } from '../../components/UI/Button/Button'
import { Input } from '../../components/UI/Input/Input'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


export const LoginPage = () => {
    const navigate = useNavigate()
    const [passwordVisible, setPasswordVisible] = useState<'text' | 'password'>('password')

    const { register, handleSubmit, reset, formState: { errors, isDirty, dirtyFields, isValid, submitCount } } = useForm<IFormState>({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            login: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<IFormState> = async (formData: IFormState) => {

        // try {
        // Test@test.com
        // Test5678
        // "136|BFyjKtcqAuOKcMI6alvwAr1chifnZ2c7HgYZbOYP"
        // const { data } = await userService.login({ email: formData.login, password: formData.password })
        // console.log(data);
        // cookies.set('userToken', data.token)
        // enqueueSnackbar('вы успешно авторизовались', { variant: 'success' })
        // return router.push('posts')
        // } catch (err) {
        // return enqueueSnackbar('Пользователь с такими данными не найден', { variant: 'error' })
        // }
        // cookies.set('userToken', `${formData.login}, ${formData.password}`)
        navigate('/posts')
        reset()
    }

    return (
        <Container>
            <section className={styles.main}>

                <form className={styles.inputBlock} onSubmit={handleSubmit(onSubmit)}>

                    <Input
                        errors={errors}
                        passwordVisible={passwordVisible}
                        setPasswordVisible={setPasswordVisible}
                        register={register}
                        type='text'
                        inputType='login'
                        placeholder="Email"
                        name="login"
                    />
                    <Input
                        passwordVisible={passwordVisible}
                        setPasswordVisible={setPasswordVisible}
                        errors={errors}
                        register={register}
                        type='password'
                        inputType='password'
                        placeholder="Password"
                        name="password"
                    />

                    <Button
                        name="Войти"
                        type="submit"
                        variant="btnSubmit"
                        disabled={false}
                    />

                </form>

            </section>
        </Container>
    )
}
