import React from 'react';
import ReactDOM from 'react-dom';
import PreviewCard from './components/PreviewCard';
import StatusBadge from './components/StatusBadge';
import TopNav from './components/TopNav';

class App extends React.Component {
  render() {
    return <html>
    <head>
      <title></title>
    </head>
    <body id="root">
    <TopNav />
      <div>Rendering Index!</div>
    </body>
    </html>;
  }
}

export default App;
