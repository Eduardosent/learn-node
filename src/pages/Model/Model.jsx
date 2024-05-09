import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";

export default function Model(){

const code = {
mongomodel:
`import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const userSchema = new Schema({
    name:{
        type:String
    },
    imgprofile:{
        type:String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    email:{
        type: String,
        unique: true,
        required: true
    }
},
{
    versionKey:false,
    timestamps:true
}
)
userSchema.plugin(mongoosePaginate)
const userModel = model('user',userSchema)

export { userModel }`
}
    return(
        <Layout>
            <Title>MVC: Modelo</Title>
            <TitleDescription>Siguiendo el patron de arquitectura el Modelo representa la estructura de una tabla en sql o colección en nosql de una base de datos, este se usará para definir las reglas y sobre el se realizarán las funciones que cambiarán y administrarán </TitleDescription>
            <SubTitle>Definir modelo MongoDB</SubTitle>
            <ExtraText>Importamos Schema y model de 'mongoose', tambien importar mongoosePaginate de 'mongoose-paginate-v2', primero definimos el Schema donde colocamos cada campo que contendrá la coleccion como el nombre, email, etc,su tipo de dato, si es requerido, entre otras cosas, además poder agregar el timestamp la fecha en que se creen los registros, usamos nuestro userSchema y agregamos el plugin opcional que sirve para paginar resultados con userSchema.plugin(mongoosePaginate), al final solo definimos el modelo en una constante, usando la función model() primer parametro será un string con el nombre de esa colección y el segundo será su Schema</ExtraText>
            <Code code={code.mongomodel}/>
        </Layout>
    )
}