export const code = {
dep:`npm i socket.io express`,
nodem:`npm i -D nodemon`,
server:
`import {Server} from 'socket.io'
import { createServer } from 'http'
import express from 'express'

//create socket.io server
const app = express()
const server = createServer(app)
const io = new Server(server,{
    cors:{
        origin:'*'
    }
})
//once a client connect to this socket
io.on('connection',(socket)=>{

    socket.emit('hello','hello world')
    //socket.to('room1').emit('hello','hello world2')
    socket.on('join',(room)=>{
        socket.join(room)
        socket.emit('joined',room)
        socket.emit('room1','desde room1')
    })
    socket.on('change',(msg)=>{
        console.log(msg)
        io.emit('change',msg)
    })
    socket.on('writing',(data)=>{
        console.log(data)
            io.emit('writing',data)
    })
    socket.on('new message',(data)=>{
        io.emit('set message',data)
    })
})
//when the server is connected to the port 3000
server.listen(3000,console.log('andando'))`,
client:
`import { useEffect, useState } from 'react'
import {io} from 'socket.io-client'

function App() {

  const user = Math.random(10)

  const socket = io('http://localhost:3000')

  const[userId,setUserId] = useState(user)
  const[change,setChange] = useState(false)
  const[write,setWrite] = useState('')
  const[message,setMessage] = useState('')
  const[messages,setMessages] = useState([])

  useEffect(()=>{
    console.log(socket)
    socket.on('connect',()=>{
      socket.emit('join','device on room1')
      socket.on('joined',msg=>console.log(msg))
      socket.on('room1',data=>console.log(data))
    })
  },[])

  function onWriting(){
    console.log('fun wri')
      socket.emit('writing',userId)
    }

  socket.on('writing',(data)=>{
    console.log(data==userId)
    if(data==userId){
      setWrite('')
    }else{
      setWrite(data+' esta escribiendo')
    }

      setTimeout(()=>{
        setWrite('')
      },5000)
    
  })

  socket.on('set message',(data)=>{
    console.log('new mesage')
    setMessages([...messages,data])
  })

  function sendMessage(){
    const mess = message;
    socket.emit('new message',{
      uid:userId,
      message:mess
    })
    setMessage('')
  }
  console.log(write)


  return (
    <>
    <input onChange={(e)=>{onWriting();setMessage(e.target.value)}} type="text" value={message}/>
    <button onClick={sendMessage}>Enviar</button>
    {write.length>0 && 
    <p style={{color:'white'}}>{write}</p>
    }
    {
      messages.map((mes,i)=>(
        <p key={i} style={{textAlign:mes.uid ==userId ? 'end':'start'}}>{mes.message}</p>
      ))
    }
    </>
  )
}

export default App`
}