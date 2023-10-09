const API_BASE_URL = process.env.REACT_APP_BASE_URL;

const authService = {
  forAdmin: {
    login: async (credentials) => {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error('Ошибка авторизации');
      }
      const user = await response.json();
      return user;
    },
    register: async (credentials) => {
      const response = await fetch(`${API_BASE_URL}/admins/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Ошибка регистрации');
      }
      const user = await response.json();

      return user;
    },
    logout: async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/admins/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error('Ошибка выхода');
      }

      localStorage.removeItem('token');
      return 'Успешный выход';
    },
  },
  forUser: {
    payment: async (credentials) => {
      try {
        const response = await fetch(`${API_BASE_URL}/payment/payment_success`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });

        if (!response.ok) {
          throw new Error('Ошибка оплаты');
        }

        const userData = await response.json();
        return userData; // Add this line to return the JSON data
      } catch (error) {
        console.error('Error during payment:', error);
        throw error; // Rethrow the error to be caught by the calling code
      }
    },
  },
};

export default authService;
