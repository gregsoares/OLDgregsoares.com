//Server file
const app = require('../app');

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server Listening on port ${port}`));
