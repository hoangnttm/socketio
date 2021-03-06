let express= require('express');
let app=express();
let server=require('http').Server(app);
let io= require('socket.io')(server);


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
server.listen(process.env.PORT|| 3000,()=>console.log('Server Started'));

app.get('/',(req,res)=>{
  res.render('home');
})

io.on('connection',socket=>{
  console.log('Co nguoi ket noi');
  socket.on('CLIENT_SEND_MESSAGE',(msg)=>{
  //  console.log(msg);
    io.emit('SERVER_REPLY','<b>'+ socket.user+'</b>: '+msg)
  })//lắng nghe
  socket.on('NEW_USERNAME',mesg=>{
    socket.user=mesg;
    })
});
