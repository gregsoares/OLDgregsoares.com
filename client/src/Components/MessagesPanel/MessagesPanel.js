import React from 'react';

// TODO: useContext(messages) to reload this panel

/* @Props
 *
 * title  -  String
 * status  -  String
 * date  -  String
 * comment  -  String
 * initials  -  String
 * position  -  String (Employee, CEO...)
 * name  -  String
 * jobTitle  -  String
 *
 */

export const MessagesPanel = () => {
  // const [messages, setMessages] = useState(null);

  // const loadMessages = async () =>
  //   await axios.get("/form/aForm/readAll").then((data) => {
  //     setMessages(data);
  //   });

  return (
    <div
      className='p-0 mx-6 overflow-hidden text-sm bg-white rounded-lg shadow-lg'
      data-testid='cardContainer'
    >
      <div
        className='flex w-full px-4 py-3 text-lg text-gray-800 bg-gray-300 shadow-outline select-none'
        data-testid='title'
      >
        <p className='ml-auto' id='title'>
          {/* {name !== "" ? name : "No data"} */}
        </p>
        <div className='flex w-auto ml-auto' id='statusDate'>
          <div
            className='flex px-3 py-1 mx-4 text-xs font-bold text-gray-600 uppercase bg-orange-600 rounded-full shadow select-none'
            data-testid='status'
          >
            Status
          </div>
        </div>
      </div>
      <div className='px-3 py-3' data-testid='commentContainer'>
        <div
          className='px-4 py-4 mx-2 my-2 font-medium text-black bg-gray-300 rounded-lg shadow-inner select-none sm:flex-wrap'
          data-testid='comment'
        >
          Message: {/* {message !== "" ? message : "No data"} */}
        </div>
      </div>

      <div
        className='pt-1 pb-2 bg-gray-300 shadow-outline '
        data-testid='cardFooterContainer'
      >
        <div
          className='my-2 ml-4 text-xs font-bold text-gray-700 text-opacity-75 uppercase select-none'
          data-testid='position'
        >
          {/* Email: {email} */}
        </div>

        <div className='flex items-center'>
          <div
            className='flex items-center justify-center px-4 py-6 ml-4 mr-auto font-bold text-center text-white capitalize bg-blue-700 border border-white rounded-full shadow-md'
            data-testid='initials'
          >
            <p className='text-xs'>Reply</p>
          </div>

          <div
            className='flex items-center self-end px-3 py-6 ml-auto mr-4 font-bold text-center text-white capitalize bg-green-600 border border-white rounded-full shadow-md'
            data-testid='initials'
            // onClick={() => loadMessages()}
          >
            <p className='text-xs'>Refresh</p>
          </div>
        </div>
      </div>
    </div>
  );
};
