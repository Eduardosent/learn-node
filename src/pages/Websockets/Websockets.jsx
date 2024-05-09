import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";
import { code } from "./constants";

export default function Websockets(){
    return(
        <Layout>
            <Title>Websockets en React con Socket.io y Nodejs</Title>
            <TitleDescription>Los Websockets son otra froma de comunicarse con el servidor, a diferencia de las API realiza una comunicación bidireccional, tanto el cliente puede envar información al servidor como el servidor al cliente, tiene baja latencia por lo que son rápidos</TitleDescription>
            <SubTitle>Instalar dependencias</SubTitle>
            <ExtraText>En este caso crearemos un folder para el proyecto y otros dos folder que sea para el servidor y otro para el front end, en el server instalamos Express y Socket.io</ExtraText>
            <Code code={code.dep}/>
            <ExtraText>También instalar nodemon como dependencia de desarrollo para ver los cambios en el servidor sin tener que ejecutarlo de nuevo, pues leerá los cambios</ExtraText>
            <Code code={code.nodem}/>
            <SubTitle>Crear el servidor socket io</SubTitle>
            <ExtraText>En el siguiente codigo index.js tenemos ya listo el servidor socket, instanciando el app,server y io, además de las funciones que se comunicarán con la aplicación de React la cual es un chat, puedes probarlo si ejecutas una aplicacion localmente en dos ventanas del navegador, el mismo podría hacerse tambien con una realtime database para un chat real y a tiempo real</ExtraText>
            <Code code={code.server}/>
            <ExtraText>Solo arrancas el servidor con el comaando nodemon index.js en el directorio del servidor</ExtraText>
            <SubTitle>Scoket io en el Front end</SubTitle>
            <ExtraText>El siguiente codigo contiene al conección al servidor socket que creamos, funciones y lógica para notificar al cliente si otro usuario envio un mensaje o si se encuentra escribiendo en tiempo real</ExtraText>
            <Code code={code.client}/>
            <ExtraText>socket.on se usa para definir las funciones del que recibe la información, socket.emit es la función que emite y se comunica con el receptor, las funciones reciben dos parametros, el nombre que puede ya existir o puedes crear una función propia, y el parametro o valor que se desee enviar y que el receptor reciba el cual es opcional</ExtraText>
            <ExtraText>io.emit sirve para que el socket envie la información a todos los clientes conectados y de esta forma, si un cliente envia información, el servidor la reciba, y notificara a todos los demás, por ejemplo si un usuario envia un mensaje, el servidor lo recibe y notifica a los demás de ese evento</ExtraText>
            <SubTitle>Listo ya sabes como usar websockets y comunicar de forma bidireccional al cliente con el servidor</SubTitle>
        </Layout>
    )
}