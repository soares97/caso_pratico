import {useRouter} from 'next/router';
import Layout from '../../componentes/layout';
import Title from '../../componentes/title';

export default function post({utilizador}) {

    const router = useRouter();

    if(router.isFallback){
        return(<div>CARREGANDO...</div>)
    }
    return (
        <Layout>
            <Title>Detalhes do Utilizador </Title>
            <p>ID do utilizador: {utilizador.id}</p>
            <p>Nome: {utilizador.name}</p>
            <p>Email: {utilizador.email}</p>
            <p>Contacto: {utilizador.phone}</p>
            <p>Website: {utilizador.website}</p>
        </Layout>
    )
}

export async function getStaticPaths(){
    const paths = [
        {params: {id: '1'}},
        {params: {id: '2'}},
        {params: {id: '3'}},
        {params: {id: '4'}},
        {params: {id: '5'}}
    ];

    return {
        paths,
        fallback:true
    }
}

export async function getStaticProps({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const utilizador = await response.json();

    return {
        props: {
            utilizador
        }
    }
}