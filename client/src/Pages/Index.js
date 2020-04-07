import React from 'react'

// Component imports

const Index = () => {
  return (
    <div className="text-red-300" id="main">
      <ul className="flex">
        <li className="flex-1 mr-2">
          <p className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" name='1' onClick={e => console.log(e.target.name)} >Active Item</p>
        </li>
      </ul>
    </div>
  )
}

export default Index;