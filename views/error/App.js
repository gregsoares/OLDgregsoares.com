import React from 'react';
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
    <StatusBadge id="dark" text="> 9000" />
    </body>
    </html>;
  }
}

export default App;