import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Input from '../Base/Input';
import Button from '../Base/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../contexts/user.context';
import { UserType } from "../../types/index";
import useLocalStorage from '../../hooks/useLocalStorage';

const Form = () => {
    const { setCurrentUser } = useContext(UserContext)
    const [_, setUser] = useLocalStorage("user", "");
    const navigate = useNavigate();

    const {
        handleSubmit,
        control,
        getValues
    } = useForm<UserType>({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<UserType> = () => {
        setCurrentUser(getValues())
        setUser(getValues())
        navigate('/list')
    }

    return (
        <div className='flex flex-col w-2/5 p-8'>
            <h2 className='text-3xl mb-2 text-bold'> ثبت نام </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex'>

                    <Input
                        control={control}
                        name='firstName'
                        rules={{ required: 'this is required' }}
                        placeholder="نام"
                        className='ml-4'
                    />

                    <Input
                        control={control}
                        name='lastName'
                        rules={{ required: 'this is required' }}
                        placeholder="نام خانوادگی"
                    />
                </div>
                <div>
                    <Input
                        control={control}
                        name='phone'
                        rules={{ required: 'this is required' }}
                        placeholder="شماره موبایل"
                    />
                    <Input
                        control={control}
                        name='password'
                        rules={{ required: 'this is password' }}
                        placeholder="رمز عبور"
                    />
                </div>
                <div>
                    <Button
                        className='flex mr-auto rounded-full px-10'
                        label="ثبت نام"
                        type="submit"
                        variant='secondary'
                    />
                </div>
            </form>
        </div>
    )

}

export default Form;