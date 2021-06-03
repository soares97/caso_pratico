//Importes para utilizar os componentes "Link", "Layout" e "Title"
import Link from 'next/link'
import Layout from '../../componentes/layout';
import Title from '../../componentes/title';

//Função que renderiza os Utilizadores
export default function Utilizadores({utilizadores}) {
    return (
        <Layout>
            <Title>Página de Utilizadores</Title>
            <div>
                <h4 className="cardPersonalizado">O conteúdo desta Página foi gerado utilizando Static Side Generation (SSG)</h4>
            </div>
            
            <div className="grid">
                {utilizadores.map(utili => {
                    return (
                        <Link href={`utilizador/[id]`} as={`/utilizador/${utili.id}`} key={utili.id}>
                            <a className="card">
                                <h3>ID do Utilizador:{utili.id} </h3>
                                <p>Nome:{utili.name}</p>
                                <p>Email:{utili.email}</p>
                            </a>
                        </Link>
                    )
                })}
            </div>

            <style jsx>
                {`
            .grid {
                display: flex;
                flex-wrap: wrap;
                margin-top:2rem;
            }

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
                color: #0070f3;
                border-color: #0070f3;
            }

            .card h3{
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
            }

            .card p{
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
            }
            
            `}
            </style>
        </Layout>
    )
}

//Função de next.js que gerar os dados dos utilizadores estaticamente.
export async function getStaticProps() {

    //Acessando a rota especifica do utilizador na API "jsonplaceholder"
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //Converter o returno para JSON
    const utilizadores = await response.json();

    //Retornar o utilizador
    return {
        props: {
            utilizadores
        }
    }
}





