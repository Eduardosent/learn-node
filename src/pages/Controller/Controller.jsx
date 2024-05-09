import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";

export default function Controller(){
    const controller = 
`import { userModel } from "../models/user.js";

const options = {
    limit: 10
}

export async function getUsers(req,res){
    await userModel.paginate({},options)
    .then((data)=>res.send(data))
    .catch(e=>console.log(e))
}
export async function getUser(req,res){
    const id = req.params.id
    try{
        const resp = await userModel.findById(id)
        res.send(resp)
    }catch(e){
        res.status(404).send({error:e.message})
    }
}
export async function createUser(req,res){
    const data = req.body
    try{
        const resp = await userModel.create(data)
        res.send(resp)
    }catch(e){
        res.status(404).send({error:e.message})
    }
}
export async function updateUser(req,res){
    const id = req.params.id
    try{
        const resp = await userModel.updateOne({_id:id},req.body)
        res.send(resp)
    }catch(e){
        res.status(404).send({error:e.message})
    }
}
export async function deleteUser(req,res){
    const id = req.params.id
    try{
        const resp = await userModel.deleteOne({_id:id})
        res.send(resp)
    }catch(e){
        res.status(404).send({error:e.message})
    }
}`
const parser=
`import bodyParser from 'body-parser'

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
)`

    return(
        <Layout>
            <Title>MVC: Controlador</Title>
            <TitleDescription>En este patrón de arquitectura el Controlador se refiere a las funciones que se llevarán a cabo para obtener la información o modificar algo en la tabla o colection</TitleDescription>
            <SubTitle>Body Parser</SubTitle>
            <ExtraText>Esta librería servirá para poder usar los formatos json y w-ww-form entre otros, para obtener la información del request en la API a travez de los parametros de la URL o la información enviada con el cliente http</ExtraText>
            <ExtraText>Con el siguiente cmando isntalas bodyParser:</ExtraText>
            <Code code={'npm i body-parser'}/>
            <ExtraText>Lo usas en el archivo index.js principal de esta forma y esto permitirá poder usar el formato JSON y form del cliente http como Postman entre otros</ExtraText>
            <Code code={parser}/>
            <SubTitle>Definir las funciones del controlador</SubTitle>
            <ExtraText>Todas estas funciones se encargan de realizar el CRUD para esta API REST de usuarios, importamos el modelo que creamos y sobre este podremos realizar muchas funciones como las que utilizamos para realizar este CRUD, estas funciones manejan el req lo requerido por el api para procesar una petición http, y res que es la respuesta que se obtendrá si la petición es correcta o no, con su status o la send() la respuesta que enviaremos</ExtraText>
            <Code code={controller}/>
            <SubTitle>Listo asi harías un controlador para un CRUD</SubTitle>
        </Layout>
    )
}