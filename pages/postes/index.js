import Link from 'next/link';
import React from 'react';
import Layout from '../../componentes/layout';
import Title from '../../componentes/title';

export default function Postes() {

    const [postes, setPostes] = React.useState([]);

    React.useEffect(() => {
        const fetchPostes = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const newPostes = await res.json();
            //console.log("newPostes:",newPostes);
            setPostes(newPostes);
        }
        fetchPostes();

    }, []);
    return (
        <Layout>
            <Title>Página de Postagens</Title>
            <div>
                <h4 className="cardPersonalizado">O conteúdo desta Página foi gerado utilizando o Client Side Rendering (CSR)</h4>
            </div>
            <div className="grid">
                {postes.map(poste => {
                    return (
                        <Link href={`postes/[id]`} as={`/postes/${poste.id}`} key={poste.id}>
                            <a className="card">
                                <h3>{poste.title}</h3>
                                <p>{poste.body}</p>
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

/*
export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postagem = await response.json();

    const paths = postagem.map(postagem => {
        return {
            params: { id: `${postagem.id}` }
        }
    })

    return {
        paths,
        fallback: false
    }
}
*/
