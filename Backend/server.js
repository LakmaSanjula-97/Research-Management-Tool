const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

//---------file upload-----------

const path = require('path');
const fileRoute = require('./Routes/file');

//-------------------------------

const PORT = process.env.PORT || 8070;

app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true
}));
app.use(cookieParser());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;


mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    //useUnifiedTopologyL: true,
    useFindAndModify: false
  })
  
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log('_________MongoDB Connection Success____________')
  })

  //---------------    --------------
    app.use(express.static(path.join(__dirname, '..', 'build')));
    app.use(fileRoute);

    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  });

  //------------------------------------



  const journeyRouter = require("./Routes/journeys");
  app.use("/journey", journeyRouter);

  const supervisorRouter = require("./Routes/supervisorDetail");
  app.use("/supervisor", supervisorRouter);

  const researchTopicRouter = require("./Routes/researchTopic");
  app.use("/researchTopic", researchTopicRouter);



  
  app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
  })
  

  app.use("/user", require("./routes/userRoutes"));