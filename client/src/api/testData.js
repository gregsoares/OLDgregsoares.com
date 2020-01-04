import React from 'react'; 
import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//         console.log({persons});
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }

export const baseUrl = `https://jsonplaceholder.typicode.com/`;
export const usersUrl = `${baseUrl}users`;
export const commentsUrl = `${baseUrl}comments.json`;
export const todosUrl = `${baseUrl}todos`;

export const getComments = async () => {
  const result = await axios.get(commentsUrl).then(({data}) => data);
  return result;
}

export const getTodos = async () => {
  const result = await axios.get(todosUrl).then(({data}) => data);
  return result;
}
export const getUsers = async () => {
  const result = await axios.get(usersUrl).then(({ data }) => data);
  return result;
}