import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../redux/slices/chatSlice';
import chatService from '../../services/chat.service';

function ChatArea() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const selectedUser = useSelector((state) => state.chat.selectedStudent);
  const [inputs, setInputs] = useState({
    message_data: '',
  });

  const inputHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddMessage = () => {
    if (inputs.message_data.trim() === '') {
      throw new Error('Message is empty!');
    }
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

    const newMessage = {
      message_id: messages.length + 1,
      message_date: currentDateTime,
      message_data: inputs.message_data,
      user: {
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        subject: selectedUser.subject,
        img_src: selectedUser.img_src,
        // hardcode userType
        userType: 'admin',
      },
    };
    chatService.sendMessage(newMessage);
    dispatch(addMessage(newMessage));
    setInputs({ message_data: '' });
  };

  useEffect(() => {
  }, []);

  return (
    <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        {/* user info */}
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            {/* if online */}
            <span className="absolute text-green-500 right-0 bottom-0">
              <svg width="20" height="20">
                <circle cx="8" cy="8" r="8" fill="currentColor" />
              </svg>
            </span>
            {/* img from telegram */}
            <img src={selectedUser.img_src} alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
          </div>

          <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
              <span className="text-gray-700 mr-3">
                {selectedUser.first_name}
                {' '}
                {selectedUser.last_name}
              </span>
            </div>
            {/* subject name */}
            <span className="text-lg text-gray-600">{selectedUser.subject}</span>
          </div>
        </div>
      </div>
      <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {/* display messages in chat from admin/student */}
        {messages?.map((message) => (message.user.userType === 'student' ? (
          <div className="chat-message" key={message.message_date}>
            <div className="flex items-end">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                    {message.message_data}
                  </span>
                </div>
              </div>
              <img src={message.user.img_src} alt="My profile" className="w-6 h-6 rounded-full order-1" />
            </div>
          </div>
        ) : (
          <div className="chat-message" key={message.message_date}>
            <div className="flex items-end justify-end">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                    {message.message_data}
                  </span>
                </div>
              </div>
              <img src={message.user.img_src} alt="My profile" className="w-6 h-6 rounded-full order-2" />
            </div>
          </div>
        )))}
      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <input
            type="text"
            placeholder="Write your message!"
            name="message_data"
            onChange={inputHandler}
            value={inputs.message_data}
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
          />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              onClick={handleAddMessage}
            >
              <span className="font-bold">Отправить</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;
