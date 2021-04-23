const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 3500;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

console.log('rodando');

 try{
app.post('/', function(req, res){
    if(req.body.token == "agral1234") {
        return res.status(200).json({route:'/index', text: req.body.texto});
    }
    return res.sendStatus(500);
});
}catch(e){
    console.log(e)
}
app.listen(port, () => console.log(`rodando na porta ${port} `));
