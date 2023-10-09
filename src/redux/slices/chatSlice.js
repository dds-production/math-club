import { createSlice } from '@reduxjs/toolkit';

// const testData = [
//   {
//     message_id: 1,
//     message_date: '2023-09-01T10:00:00',
//     message_data: 'Привет, как дела?',
//     user: {
//       first_name: 'Иван',
//       last_name: 'Абрамов',
//       subject: 'Курс Математики',
//       img_src: 'https://example.com/ivan_abramov.jpg',
//       userType: 'student',
//     },
//   },
//   {
//     message_id: 2,
//     message_date: '2023-09-01T10:15:00',
//     message_data: 'Завтра будет лекция по дифференциальным уравнениям.',
//     user: {
//       first_name: 'Иван',
//       last_name: 'Абрамов',
//       subject: 'Курс Математики',
//       img_src: 'https://example.com/anna_smirnova.jpg',
//       userType: 'student',
//     },
//   },
//   {
//     message_id: 3,
//     message_date: '2023-09-01T10:30:00',
//     message_data: 'Помни, что срок сдачи домашнего задания - через неделю.',
//     user: {
//       first_name: 'Петр',
//       last_name: 'Иванов',
//       subject: 'Курс Математики',
//       img_src: 'https://example.com/petr_ivanov.jpg',
//       userType: 'admin',
//     },
//   },
//   {
//     message_id: 4,
//     message_date: '2023-09-01T11:00:00',
//     message_data: 'Какие темы будут на экзамене?',
//     user: {
//       first_name: 'Петр',
//       last_name: 'Иванов',
//       subject: 'Курс Математики',
//       img_src: 'https://example.com/elena_petrova.jpg',
//       userType: 'admin',
//     },
//   },
//   {
//     message_id: 5,
//     message_date: '2023-09-01T11:30:00',
//     message_data: 'На экзамене будут темы: интегралы, производные и графики функций.',
//     user: {
//       first_name: 'Иван',
//       last_name: 'Абрамов',
//       subject: 'Курс Математики',
//       img_src: 'https://example.com/ivan_abramov.jpg',
//       userType: 'student',
//     },
//   },
//   {
//     message_id: 6,
//     message_date: '2023-09-01T12:00:00',
//     message_data: 'Могу ли я пропустить занятие сегодня?',
//     user: {
//       first_name: 'Петр',
//       last_name: 'Иванов',
//       subject: 'Курс Математики',
//       img_src: 'https://example.com/anna_smirnova.jpg',
//       userType: 'admin',
//     },
//   },
//   {
//     message_id: 7,
//     message_date: '2023-09-01T12:30:00',
//     message_data: 'Пропускать занятия не рекомендуется, но
// если у вас есть важные дела, то обсудим это.',
//     user: {
//       first_name: 'Иван',
//       last_name: 'Абрамов',
//       subject: 'Курс Математики',
//       img_src: 'https://example.com/petr_ivanov.jpg',
//       userType: 'student',
//     },
//   },
//   {
//     message_id: 8,
//     message_date: '2023-09-01T13:00:00',
//     message_data: 'Какие у нас будут практические занятия на этой неделе?',
//     user: {
//       first_name: 'Петр',
//       last_name: 'Иванов',
//       subject: 'Курс Математики',
//       img_src: 'https://example.com/maria_sidorova.jpg',
//       userType: 'admin',
//     },
//   },
//   {
//     message_id: 9,
//     message_date: '2023-09-01T13:30:00',
//     message_data: 'На этой неделе у нас будут практические
// занятия по решению дифференциальных уравнений.',
//     user: {
//       first_name: 'Иван',
//       last_name: 'Абрамов',
//       subject: 'Курс Математики',
//       img_src: 'https://example.com/ivan_abramov.jpg',
//       userType: 'student',
//     },
//   },
//   {
//     message_id: 10,
//     message_date: '2023-09-01T14:00:00',
//     message_data: 'Кто-нибудь готов помочь мне с домашним заданием?',
//     user: {
//       first_name: 'Петр',
//       last_name: 'Иванов',
//       subject: 'Курс Математики',
//       img_src: 'https://example.com/elena_petrova.jpg',
//       userType: 'admin',
//     },
//   },
// ];

// const userTest = [
//   {
//     first_name: 'Иван',
//     last_name: 'Абрамов',
//     subject: 'Курс Математики',
//     img_src: 'https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144',
//     userType: 'student',
//   },

//   {
//     first_name: 'Костя',
//     last_name: 'Игнатьев',
//     subject: 'Курс Aнглийского',
//     img_src: 'https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144',
//     userType: 'student',
//   },
// ];

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    chatList: [],
    selectedStudent: [],
    // students: [],
  },
  reducers: {
    addMessage: (state, action) => ({
      ...state,
      messages: [...state.messages, action.payload],
    }),
    setChatList: (state, action) => ({
      ...state,
      chatList: action.payload,
    }),
    setSelectedChat: (state, action) => ({
      ...state,
      selectedChat: action.payload,
    }),
    // getStudents: (state, action) => ({
    //   ...state,
    //   students: action.payload,
    // }),
  },
});

export const {
  addMessage, setChatList, setStudents, setSelectedChat,
} = chatSlice.actions;

export default chatSlice.reducer;
