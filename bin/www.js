//Server file
const app = require('../app');
const path = require('path');
const port = process.env.PORT || 3001;

// If in production, serve static file and all subsequent files from prod. env.
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server Listening on port ${port}`));
