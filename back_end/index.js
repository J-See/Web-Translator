const translate = require('@vitalets/google-translate-api');
const express = require('express')
const cors = require('cors')
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json())

// var output = "";
// var input = "";
// var from = "";
// var to = "";

app.post('/setInput',(request,response)=>{

    translate(request.body._input, {from: request.body._from, to: request.body._to}).then(res => {
        
        // output = res.text;
        response.send(res.text);

        
    }).catch(err => {
        console.error(err);
    });
});


// app.get('/', (req, res) => {
//     res.send(output)
//     res.send(req.body._input)
//     res.send(req.body._from)
//     res.send(req.body._to)
// });

// app.get('/getOutput', (req, res) => {
//     res.send(output)
// });

app.listen(port, () => { console.log(`Server started on port ${port}`); }) 






