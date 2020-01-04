import React, { useEffect, useState } from 'react';
import { getComments, setUsers, getTodos, getUsers } from './api/testData';

// Components imports
import { Topnav } from './components/Topnav/Topnav';
// import { Container } from './components/Container/Container';
// import { Jumbotron } from './components/Jumbotron/Jumbotron';
// import Verstand from './components/Verstand/Verstand';
// import ThemeSwitcher, {  } from "./components/ThemeSwitcher/ThemeSwitcher";

export const App = () =>{ 
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [comments, setComments] = useState([]);

  const Headers = () => {
    return (
      <React.Fragment>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" /> 
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous" /> 
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous" /> 
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous" />

      </React.Fragment>
    )
  }

    useEffect(() => {
      getUsers().then(user => setUsers(user))
      getTodos().then(todo => setTodos(todo))
      getComments().then(comment => setComments(comment));
      }, []) 
  // TODO: Add on changeState read state of currentPage and reload App.
    // const swapTheme = () => <ThemeSwitcher />
  // const content = req => { }
return (
  <React.Fragment>
    <Headers />
    <Topnav current={<Topnav current='Github' />}/>
    {/* <p>{JSON.stringify(users) } </p>
    <p>{JSON.stringify(users.length) } </p>
    <br/><br/>
    <p>{JSON.stringify(todos)}</p>
    <p>{JSON.stringify(comments)}</p> */}

  </React.Fragment>
  )};
