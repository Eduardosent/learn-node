import { Code, ExtraText, SubTitle, Title } from "../../components";
import Layout from "../../layout/Layout";
import {useTranslation} from 'react-i18next'
import { code } from "./constants";

export default function FirstStep(){
    const init = 'npm init -y'
    const mon = 'npm i -D nodemon'
    const run = 'nodemon index.js'
    const noder = 'node index.js'

    return(
        <Layout>
            <Title>Primeros Pasos con Node y Express</Title>
            <SubTitle>Instalar proyecto y dependencias</SubTitle>
            <ExtraText>puedes crear un folder donde tendras tu proyecto, con cualquier nombre en este caso solo node, dentro del folder ejecutar npm:</ExtraText>
            <Code code={init}/>
            <ExtraText>Instalas las dependencias necesarias, Express y cors la cual aún no será necesaria pero se usará mas adelante</ExtraText>
            <Code code={code.i}/>
            <SubTitle>Usar nodemon</SubTitle>
            <ExtraText>Nodemon servirá para no tener que ejecutar constantemente el servidor, asi cuando ocurran cambios se actualize por si solo, instalalo como dependencia de desarrollo con el siguente comando</ExtraText>
            <Code code={mon}/>
            <SubTitle>Crea y ejecuta primer proyecto</SubTitle>
            <ExtraText>en el siguiente codigo solo instanciamos express, es importado y representará el app, una función con el endpoint '/' que solo retorne Hello World!, y una función que se ejecute cuando el puerto este conectado y diga server connected</ExtraText>
            <Code code={code.first}/>
            <ExtraText>En desarrollo necesitaras hacer cambios al codigo y para evitar reiniciar el servidor puedes usar nodemon para que escuche los cambios</ExtraText>
            <Code code={run}/>
            <ExtraText>Cuando el proyecto en el que estabas trabajando este terminado puedes solo usar:</ExtraText>
            <Code code={noder}/>
            <ExtraText>Podras navegar localmente en http://localhost:3001/ y podrás ver la respuesta de esa ruta http get</ExtraText>
            <SubTitle>Listo creaste tu primer servidor y petición get http con una respuesta</SubTitle>
        </Layout>
    )
}