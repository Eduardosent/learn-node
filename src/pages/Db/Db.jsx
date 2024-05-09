import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";

export default function Db(){
const code = {
exa:"mongodb+srv://<user>:<password>@cluster.mongodb.net/",
in:"npm i mongoose",
db:
`import mongoose from "mongoose";
import { db } from "./env.js";

async function connectDB(){
    try{
        await mongoose.connect(db)
        console.log('connected succcesfully')
    }catch(e){
        console.log(e)
    }
}

export { connectDB }`
}
    return(
        <Layout>
            <Title>Conección a base de datos</Title>
            <TitleDescription>Las bases de datos permiten guardar y administrar información, comunmente las API se encargan de eso en el backend, y realizaremos un CRUD con esta API REST</TitleDescription>
            <SubTitle>Conectar con MongoDB</SubTitle>
            <SubTitle>Instalar mongoose</SubTitle>
            <ExtraText>Esta librería permitirá hacer consultas y conectar a una base de datos de MongoDB, instala mongoose con el siguiente coando:</ExtraText>
            <Code code={code.in}/>
            <SubTitle>Cargar la env de acceso a MongoDB</SubTitle>
            <ExtraText>Si recuerdas en la sección anterior cargamos una variable de entorno de una supuesta conección a una base de datos, y en ese archivo transportamos la constante db para poder usarla en cualquier archivo, si vas a usar una conección de MongoDB atlas deberías crear una cuenta y conectarte a tu base de datos, la conección que obtendrás será más o menos así:</ExtraText>
            <Code code={code.exa}/>
            <SubTitle>Realizar la conección</SubTitle>
            <ExtraText>importamos mongoose y mandamos a llamar la función mongoose.connect(), dentro cargamos la clave de nuestra BD privada de mongoDB atlas, local o proveniente de otra conección, hacemos la función asincrona y si la conección es correcta enviamos un mensaje a consola que lo confirme</ExtraText>
            <Code code={code.db}/>
            <ExtraText>Esta función se implementará en el archivo principal index.js</ExtraText>
            <SubTitle>Listo realizaste tu conección a la base de datos de mongoDB</SubTitle>
        </Layout>
    )
}