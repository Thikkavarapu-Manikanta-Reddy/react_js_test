const express = require('express'),
     path = require('path');
const bodyParser = require('body-parser');

const app = express();
var cors = require("cors");
app.use(bodyParser.json())
app.use(cors());

app.use(express.static('./build'));

app.get('/*', (req,res)=>{
    
res.sendFile(path.join(__dirname,'/build/index.html'));

});
app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started');
});