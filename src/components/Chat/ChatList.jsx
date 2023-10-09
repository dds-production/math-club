import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChatList, setSelectedChat } from '../../redux/slices/chatSlice';
import chatService from '../../services/chat.service';

function ChatList() {
  const chatList = useSelector((state) => state.chat.students);
  // const selectedStudent = useSelector((state) => state.chat.selectedStudent);
  const dispatch = useDispatch();

  const handleSelectStudent = (student) => {
    dispatch(setSelectedChat(student));
  };

  useEffect(() => {
    const chatsListFromBackend = chatService.getChats();
    dispatch(setChatList(chatsListFromBackend));
    dispatch(setSelectedChat(chatList));
  }, [dispatch]);

  return (
    <div className="p-2 bg-white w-60 flex flex-col  md:flex" id="sideNav">
      {chatList.map((student) => (
        <div key={student?.first_name && student?.last_name}>
          <button
            type="button"
            className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white mt-auto"
            onClick={() => handleSelectStudent(student)}
          >
            <i className="fas fa-home mr-2" />
            {`${student?.first_name} ${student?.last_name}`}
          </button>
        </div>
      ))}
      <button type="button" className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white mt-auto">
        <i className="fas fa-sign-out-alt mr-2" />
        Smth
      </button>
    </div>
  );
}

export default ChatList;
