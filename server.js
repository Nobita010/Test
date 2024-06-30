const express = require('express');
const app = express();
const textproRouter = require('./index'); 

app.use('/api', textproRouter); 

const port = process.env.PORT || 3000; // Use environment variable for port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
