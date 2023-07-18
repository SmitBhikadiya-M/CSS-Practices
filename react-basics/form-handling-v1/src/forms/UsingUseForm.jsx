import { useState } from 'react'
import { useForm } from 'react-hook-form'

const errorMessage = {
  required: 'field is required',
  pattern: 'invalid value for field',
  maxLength: 'value can not exceed max length',
  minLength: 'value can not be less than min length',

}

const getError = (error) => {
  let message;
  message = errorMessage[error?.type];
  return message || 'invalid value';
}

function UsingUseForm() {
  
    const { register, handleSubmit, formState: { errors } } = useForm({
      mode: 'onBlur'
    });

    function onSubmit(data){
      console.log(data);
    }

  return (
  <div className='pt-3'>
    <h2 className='text-center'>FORM HANDLING (using react-hook-form)</h2>
    <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          {...register("name", { required: true, minLength: 5 })}
        />
        {errors?.name ? <p className='text-sm text-red-600'>*{getError(errors?.name)}</p> : ''}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          {...register("email", { required: true })}
        />
        {errors?.email ? <p className='text-sm text-red-600'>*{getError(errors?.email)}</p> : ''}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          {...register("password")}
        />
        {errors?.password ? <p className='text-sm text-red-600'>*{getError(errors?.password)}</p> : ''}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          {...register("message", { required: true })}
        ></textarea>
        {errors?.message ? <p className='text-sm text-red-600'>*{getError(errors?.message)}</p> : ''}
      </div>

      <div className="mb-4">
       
        <input
          className="mr-2 leading-tight"
          id="subscription"
          type="checkbox"
          name="subscription"
          {...register("subscription")}
        />
         <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="subscription">
          Subscribe to newsletter
        </label><br></br>
        {errors?.subscription ? <p className='text-sm text-red-600'>*{getError(errors?.subscription)}</p> : ''}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
          Gender
        </label>
        <select
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="gender"
          name="gender"
          {...register("gender")}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors?.gender ? <p className='text-sm text-red-600'>*{getError(errors?.gender)}</p> : ''}
      </div>

      <div className="mb-4">
        <fieldset>
          <legend className="block text-gray-700 text-sm font-bold mb-2">Favorite Color</legend>
          <div className="flex items-center">
            <input
              className="mr-2"
              id="color-red"
              type="radio"
              name="color"
              value="red"
              {...register("color")}
            />
            <label htmlFor="color-red">Red</label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              id="color-green"
              type="radio"
              name="color"
              value="green"
              {...register("color")}
            />
            <label htmlFor="color-green">Green</label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              id="color-blue"
              type="radio"
              name="color"
              value="blue"
              {...register("color")}
            />
            <label htmlFor="color-blue">Blue</label>
          </div>
        </fieldset>
        {errors?.color ? <p className='text-sm text-red-600'>*{getError(errors?.color)}</p> : ''}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
          Upload File
        </label>
        <input
          className="border appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="file"
          type="file"
          name="file"
          {...register("file")}
        />
        {errors?.file ? <p className='text-sm text-red-600'>*{getError(errors?.file)}</p> : ''}
      </div>

      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  );
}

export default UsingUseForm;
