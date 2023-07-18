import { useState } from 'react'

function UsingUseState() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: '',
    subscription: false,
    gender: 'male',
    file: null,
    color: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const fieldValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform form submission or validation here
  };

  return (
  <div className='  pt-3'>
    <h2 className='text-center'>FORM HANDLING ( using react use state hook )</h2>
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
          value={formData.email}
          onChange={handleChange}
          required
        />
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
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="mb-4">
       
        <input
          className="mr-2 leading-tight"
          id="subscription"
          type="checkbox"
          name="subscription"
          checked={formData.subscription}
          onChange={handleChange}
        />
         <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="subscription">
          Subscribe to newsletter
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
          Gender
        </label>
        <select
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
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
              checked={formData.color === 'red'}
              onChange={handleChange}
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
              checked={formData.color === 'green'}
              onChange={handleChange}
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
              checked={formData.color === 'blue'}
              onChange={handleChange}
            />
            <label htmlFor="color-blue">Blue</label>
          </div>
        </fieldset>
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
          onChange={handleChange}
        />
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

export default UsingUseState;