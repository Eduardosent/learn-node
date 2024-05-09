import { Link } from "react-router-dom";
import { Title, TitleDescription } from "../../components";

export default function Private(){
    return(
        <>
        <Link to={'/'}><img src="./images/logot.png"/></Link>
        <Title>Politica de Privacidad</Title>
        <TitleDescription>
            declaras que aceptas las politicas de privacidad en la página, tus datos personales no son requeridos por la página asi que no se almacenan
        </TitleDescription>
        </>
    )
}