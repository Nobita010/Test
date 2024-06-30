const express = require('express');
const app = express();
const textproRouter = require('./index'); 

app.use('/api', textproRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
