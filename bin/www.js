//Server file
const express = require('express');
const path = require('path');
const app = require('../app');

const port = process.env.PORT || 3001;

// If in production, serve static file and all subsequent files from prod. env.
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Express server listening on port ${port} in ${app.settings.env} mode`));
