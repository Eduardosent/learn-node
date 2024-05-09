import { SubTitle, Title, TitleDescription } from "../../components";
import { PageList } from "../../components/PageList";
import Layout from "../../layout/Layout";

export default function Home(){
    return(
        <Layout>
            <Title>Bienvenido a LearnEdu, aprende React</Title>
            <TitleDescription>LearnEdu es un proyecto donde podrás aprender y perfeccionar Tecnologías, las páginas se actualizarán constantemente para que puedas mejorar tu aprendizaje constantemente.</TitleDescription>
            <SubTitle>Lista de secciones para aprender React</SubTitle>
            <PageList/>
        </Layout>
    )
}