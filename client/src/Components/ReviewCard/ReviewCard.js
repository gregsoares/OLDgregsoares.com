import React from 'react';

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

export const ReviewCard = (props) => {
  const { title, status, date, comment, initials, name, jobTitle } = props;
  return (
    <div
      className='bg-white overflow-hidden rounded-lg shadow-lg p-0 text-sm max-w-md mx-3 my-2'
      id='cardContainer'
    >
      <div
        className='flex items-center bg-gray-300 text-lg shadow-outline my-2 py-4 px-4 text-gray-800 select-none'
        id='cardTitle'
      >
        <p className='p-0 mb-4 mx-auto'>{title}</p>
        <div className='ml-auto  bg-gray-300 pt-2' id='cardFooterContainer'>
          <div className='flex px-2 mb-2'>
            <span className='flex h-12 w-12 rounded-full bg-blue-700 text-white justify-center items-center font-bold capitalize ml-3 '>
              {initials}
            </span>

            <div className='inline ml-4' id='namePositionContainer'>
              <p className=' font-bold  select-none'>{name}</p>
              <p
                className=' text-gray-700 capitalize my-2 text-xs select-none'
                id='footerTextContainer'
              >
                {jobTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='px-3 py-3' id='commentContainer'>
        <div
          className='sm:flex-wrap bg-gray-300 rounded-lg my-2 mx-2 py-4 px-4 shadow-inner select-none text-black font-medium'
          id='commentSection'
        >
          {comment}
        </div>
      </div>
      <div
        className='flex items-center border-b border-t py-2 w-full '
        id='reviewDateSection'
      >
        <div
          className='mx-4 my-1 bg-orange-600 uppercase rounded-full px-3 py-1 text-xs text-gray-600 font-bold shadow select-none'
          id='statusContainer'
        >
          {status}
        </div>

        <div className='ml-auto mr-4 my-1 select-none' id='dateContainer'>
          {date}
        </div>
      </div>
    </div>
  );
};
