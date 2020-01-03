import React from 'react';
import axios from 'axios';

export default class testData extends React.Component {
  state = {
    users: [],
    // todos: [],
    // comments: []
  }
  let 

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))

  }
}
