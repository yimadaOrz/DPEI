const express = require('express');
const cors = require('cors');
const path = require("path");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());
 
// const images = require('./routes/images');

// app.use('/image',images);

  // Serve static assets if in production
  if (process.env.NODE_ENV === 'production') {
    // Set static folder
  //  app.use(express.static('client/build'));

  app.use(express.static("build"));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../', 'build', 'index.html'));
    });

    
  } 

app.listen(port,()=> {
  console.log(`Server is running on port: ${port}`);
}); 