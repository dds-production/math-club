import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import authService from '../../../services/auth.service';

function UserPayment() {
  // const location = useLocation();
  // const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    // eslint-disable-next-line camelcase
    course, cost, utm_source, utm_medium, utm_campaign,
  } = Object.fromEntries(searchParams);

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    course,
    cost,
    // eslint-disable-next-line camelcase
    utm_source,
    // eslint-disable-next-line camelcase
    utm_medium,
    // eslint-disable-next-line camelcase
    utm_campaign,
  });

  const inputHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function submitHandler(e) {
    e.preventDefault();
    const userData = await authService.forUser.payment(inputs);
    console.log('User Data:', userData.paymentUrl);

    // localStorage.setItem('jwt_token', user.token);
    if (userData !== undefined || null || '') {
      window.location.href = userData.paymentUrl;
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <h1>Ты почти у цели</h1>
      <h5>Создай аккаунт по номеру телефонаб чтобы иметь доступ к курсам</h5>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="user_signup_lastname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Фамилия"
              name="lastName"
              onChange={inputHandler}
              required
            />
            <input
              type="text"
              id="user_signup_firstname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Имя"
              name="firstName"
              onChange={inputHandler}
              required
            />
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              name="phone"
              onChange={inputHandler}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={submitHandler}
          >
            Создать и перейти к оплате
          </button>
        </div>
      </form>
    </div>
  );
}
export default UserPayment;
