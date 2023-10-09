import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../../services/auth.service';

function AdminSignUp() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    telegramUsername: '',
    telegramUniqueUserId: '',
  });

  const inputHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function submitHandler(e) {
    e.preventDefault();
    inputs.telegramUniqueUserId = +inputs.telegramUniqueUserId;
    const admin = await authService.forAdmin.register(inputs);
    localStorage.setItem('jwt_token', admin.token);
    if (admin.token !== undefined) {
      navigate('/admins/chat');
    }
  }

  // const handleKeyDown = (index, event) => {
  //   if (event.key === 'Enter' || (index === inputs.length - 1 && inputs[index].value !== '')) {
  //     // Проверяем, является ли текущий input последним в списке
  //     // Выполняем необходимое действие при нажатии Enter в последнем input
  //     console.log('Enter нажат в последнем input');
  //   }
  // };

  const inputFields = [
    {
      id: 1, name: 'firstName', placeholder: 'Имя', type: 'text',
    },
    {
      id: 2, name: 'lastName', placeholder: 'Фамилия', type: 'text',
    },
    {
      id: 3, name: 'email', placeholder: 'E-mail', type: 'email',
    },
    {
      id: 4, name: 'password', placeholder: 'Password', type: 'password',
    },
    {
      id: 5, name: 'phoneNumber', placeholder: 'Phone Number', type: 'tel',
    },
    {
      id: 6, name: 'telegramUsername', placeholder: 'Telegram Username', type: 'text',
    },
    {
      id: 7, name: 'telegramUniqueUserId', placeholder: 'Telegram Unique User ID', type: 'text',
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Регистрация
          </h2>

          <form className="mt-10" method="POST">
            {inputFields?.map((field) => (
              <label
                key={field.id}
                htmlFor={field.name}
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                {field.placeholder}
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  autoComplete={field.type === 'password' ? 'current-password' : 'text'}
                  className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                  value={inputs[field.name]}
                  onChange={inputHandler}
                />
              </label>
            ))}

            <button
              type="submit"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
              onClick={submitHandler}
            >
              Зарегистрироваться
            </button>
            {/* <!-- Another Auth Routes --> */}
            {/* <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <a href="#" className="flex-2 underline">
                Forgot password?
              </a>
              <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                or
                {' '}
              </p>
              <a href="#" className="flex-2 underline">
                Create an Account
              </a>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminSignUp;
