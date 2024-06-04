const server = require('express');

const app = server();

app.use(server.json());

app.listen(3000);

app.get('/', function (req,res){
    res.send('Hello World')
});


app.get('/animal', function(req,res){
    res.sendFile('/Transfer/codeworld/coding/react-1/Formholder/Testserver/Express/animal.html')

})


const listContainer = document.querySelector('.animal-list');

const listItems = listContainer.querySelectorAll('li');
const data = [];

for (const item of listItems) {
  data.push(item.textContent.trim()); // Extract text content and trim whitespace
};



app.post('/animal', function(req, res)  {

    
        res.json(data);

});


