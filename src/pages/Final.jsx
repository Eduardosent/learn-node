import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../components";
import Layout from "../layout/Layout";

export default function Final(){
    const fin=
`import express from 'express'
import { connectDB } from './config/db.js'
import { userRouter } from './app/routes/user.js'
import bodyParser from 'body-parser'

connectDB()

const app = express()
const port = process.env.PORT || 3000

//for parsin json
app.use(
    bodyParser.json({
        limit:'20mb'
    })
)
//for parse applicaction/x-ww-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit:'20mb',
        extended:true
    })
)
app.get('/',(req,res)=>{
    res.send({data:'Hello World!'})
})

app.use(userRouter)
 
app.listen(port,()=>console.log('server connected')) `
    return(
        <Layout>
            <Title>Aspecto del archivo principal index.js al finalizar API REST</Title>
            <TitleDescription>Como se ve index.js despues de todas las implementaciones</TitleDescription>
            <SubTitle>Index.js</SubTitle>
            <ExtraText>definir la aplicación desde express, usar bodyParser, conectar con la base de datos, usar el router userRouter que se encarga de administrar los usuarios</ExtraText>
            <Code code={fin}/>
        </Layout>
    )
}