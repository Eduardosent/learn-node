import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../components";
import Layout from "../layout/Layout";

export default function Structure(){
    const str= 
`project-node
|__ app
|   |__ controllers
|   |   |__ user.js
|   |__ models
|   |   |__ user.js
|   |__ routes
|       |__ user.js
|__ config
|   |__ db.js
|   |__ env.js
|__ index.js
|__ .env`
    return(
        <Layout>
            <Title>Estructura del Proyecto</Title>
            <TitleDescription>La estructura es la forma de ordenar y patrón de arquitectura</TitleDescription>
            <SubTitle>La estructura del proyecto que se realizara sera esta:</SubTitle>
            <ExtraText>Donde la carpeta app contendra los modelos, contoladores y rutas, config las configuraciones como la BD y cargar las variables de entorno, el index.js como archivo principal con la aplicación express y .env las variables de entorno que necesitemos definir</ExtraText>
            <Code code={str}/>
        </Layout>
    )
}