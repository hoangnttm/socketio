let express= require('express');
let app=express();
let server=require('http').Server(app);
let io= require('socket.io')(server);


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
server.listen(3000,()=>console.log('Server Started'));

app.get('/',(req,res)=>{
  res.render('home');
})

io.on('connection',socket=>{
  console.log('Co nguoi ket noi');
  socket.on('CLIENT_SEND_MESSAGE',(msg)=>{
    console.log(msg);
  })//lắng nghe
});
