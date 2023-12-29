import { useState, useContext } from 'react';
import Input from '../Base/Input';
import Button from '../Base/Button';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { UserContext } from '../../contexts/user.context';
import { UserType } from "../../types/index";

const Form = () => {
    const { setCurrentUser } = useContext(UserContext)

    const {
        control,
        formState: { errors },
    } = useForm<UserType>({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            password: "",
        },
    });


    const [values, setValues] = useState<UserType>({
        firstName: "",
        lastName: "",
        phone: "",
        password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values)
        setCurrentUser(values)
    }

    return (
        <div className='flex flex-col w-2/5 p-8'>
            <h2 className='text-3xl mb-2 text-bold'> ثبت نام </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='flex'>

                    {/* <Controller
                        name="firstName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input
                            value={values.firstName}
                            name='firstName'
                            onChange={(e) => handleChange(e)}
                            placeholder="نام"
                            className='ml-4'
                        />}
                    /> */}

                    <Input
                        value={values.firstName}
                        name='firstName'
                        onChange={(e) => handleChange(e)}
                        placeholder="نام"
                        className='ml-4'
                    />

                    <Input
                        value={values.lastName}
                        name='lastName'
                        onChange={(e) => handleChange(e)}
                        placeholder="نام خانوادگی"
                    />
                </div>
                <div>
                    <Input
                        value={values.phone}
                        name='phone'
                        onChange={(e) => handleChange(e)}
                        placeholder="شماره موبایل"
                    />
                    <Input
                        value={values.password}
                        name='password'
                        onChange={(e) => handleChange(e)}
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