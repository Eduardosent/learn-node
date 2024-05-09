import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";

export default function Env(){
const code = {
i:"npm i dotenv",
env:"DATABASE = HDSJSFFFJXUUSD",
config:
`import { config } from 'dotenv'
config()
        
const db = process.env.DATABASE
        
export { db }`
    }
    return(
        <Layout>
            <Title>Variables de entorno en Node</Title>
            <TitleDescription>Las variables de entorno pueden almacenar claves y accesos de forma segura sin que sea visible en los archivos del código, como usarlas en Node:</TitleDescription>
            <SubTitle>Instalar dotenv</SubTitle>
            <ExtraText>Esta dependencia servirá para cargar las variables de entorno y el comando de instalación es el siguiente</ExtraText>
            <Code code={code.i}/>
            <SubTitle>Guardar una variable de entorno</SubTitle>
            <ExtraText>En el directorio principal de tu proyecto creas un archivo llamado .env y aregas las variables que necesites</ExtraText>
            <Code code={code.env}/>
            <SubTitle>Cargar y usar las variables de entorno</SubTitle>
            <ExtraText>En este caso en la carpeta config crear un archivo que se encargue de cargar las variables de entorno, primero importar la funcion config de 'dotenv', la usas y la misma función cargará las variables que tengas en el archivo .env, para llamar la env solo necesitarás llamar process.env.DATABASE que en este caso es el nombre de la env que creamos y asi obtendremos el valor que hayamos guardado</ExtraText>
            <Code code={code.config}/>
        </Layout>
    )
}