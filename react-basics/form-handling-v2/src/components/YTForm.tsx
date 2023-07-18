import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools'

let counterRender = 0;

type FormValues = {
    username: string,
    email: string,
    channel: string
}
export const YTForm = () => {

    const form = useForm<FormValues>();
    const { register, handleSubmit, control, formState } = form;
    const { errors } = formState;
    counterRender++;

    const onSubmit = (data: FormValues) => {
        console.log('onSubmit', data);
    }

    return <div>
        <h2>CMP render count : {counterRender / 2}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
                <label htmlFor='username'>Username</label>
                <input {...register("username", { required: "Username is required" })} type='text' name='username' id='username' />
                <p className='error'>{errors.username?.message}</p>

            </div>
            <div className='form-control'>
                <label htmlFor='email'>E-mail</label>
                <input {...register("email", {
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Invalid email format'
                    },
                    validate: {
                        noValidate: (value)=>value!=='admin@gmail.com' || 'Enter a different email address' ,
                        notBlackList: (value)=>!(['spam@gmail.com', 'ad@gmail.com'].includes(value)) || 'This is not accessible'
                    }
                })} type='email' name='email' id='email' />
                <p className='error'>{errors.email?.message}</p>
            </div>
            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <input {...register("channel")} type='text' name='channel' id='channel' />
                <p className='error'>{errors.channel?.message}</p>

            </div>

            <br />
            <button>Submit</button>
        </form>
        <DevTool control={control} />
    </div>
}

