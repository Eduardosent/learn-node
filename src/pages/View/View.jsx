import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";

export default function View(){
    const view = 
`import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js'

const path = '/users'
const userRouter = Router()

userRouter.get(path,getUsers)
userRouter.get(path+'/:id',getUser)
userRouter.post(path,createUser)
userRouter.put(path+'/:id',updateUser)
userRouter.delete(path+'/:id',deleteUser)

export {userRouter}`
    return(
        <Layout>
            <Title>MVC: Vista o Rutas</Title>
            <TitleDescription>Las Vistas representan la parte visible de este patron, en una API REST las peticiones entregan una respuesta para comunicar con el Front end, esa es la parte visible de este proyecto</TitleDescription>
            <SubTitle>Definir las rutas</SubTitle>
            <ExtraText>Cada ruta contendrá y procesará una petición, para definir la ruta solo necesitas un path en string y la función que realizará para devolver una respuesta, creamos un router especificamente para administrar los usuarios, importamos Router desde 'express' definimos una constante que será ese enrutador ya la vez creamos cada una de las rutas que necesitemos tanto, get, post, put, delete, patch etc.</ExtraText>
            <Code code={view}/>
        </Layout>
    )
}