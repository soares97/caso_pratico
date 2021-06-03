//Importes para utilizar os componentes "Router", "Layout", "Link" e "Title".
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../componentes/layout';
import Title from '../../componentes/title';


export default function post({ utilizador }) {

    const router = useRouter();

    if (router.isFallback) {
        return (<div>CARREGANDO...</div>)
    }
    return (
        <Layout>
            <Title>Detalhes do Utilizador </Title>
            <div className="card">
                <p><b>ID do utilizador:</b> {utilizador.id}</p>
                <p><b>Nome:</b> {utilizador.name}</p>
                <p><b>Email:</b> {utilizador.email}</p>
                <p><b>Contacto:</b> {utilizador.phone}</p>
                <p className = "p"><b>Website:</b> {utilizador.website}</p>
                    <Link href="/utilizador">
                        <a>Voltar</a>
                    </Link>
            </div>
            <style jsx>
                {`
            .card {
                margin:1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                color: black;
                text-decoration: none;
                border: 2px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15 ease, border-color 0.15 ease;
            }
            
            .card:hover,
            .card:focus,
            .card:active{
                --color: #0070f3;
                border-color: #0070f3;
            }

            .card p{
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
            }

            a{
                padding: 7px 12px;
                text-decoration:none;
                color: white;
                background-color: #0070f3;
                border-radius: 5px;
                margin: 0px 0px 0px 40%;
            }

            .card p.p{
                margin: 0px 0px 20px 0px;
            }
            
            `}
            </style>
        </Layout>
    )
}


export async function getStaticPaths() {
    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } },
        { params: { id: '4' } },
        { params: { id: '5' } }
    ];

    return {
        paths,
        fallback: true
    }
}

//Função de next.js que gerar os dados de uma determinada rota no momento de build tornando-lhe estáticos.
export async function getStaticProps({ params }) {

    //Acessando a rota especifica do utilizador na API "jsonplaceholder"
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);

    //Converter o returno para JSON
    const utilizador = await response.json();

    //Retornar o utilizador
    return {
        props: {
            utilizador
        }
    }
}