// row of verticle extenders (collapsible)
import React from 'react';
import Axios from 'axios';

export default class Verstand extends React { 
    state = {
      users: [],
    }

  componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const data = res.data;
      this.setState({ data })
    })
  }
    

    render() {
      return (
        <div className="pos-f-t">
            <div className="bg-dark p-4">
              {this.state.users.map(user => <h5 className="text-white h4">{user.name}</h5>)}
              <span className="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>

      )
    }
  }
