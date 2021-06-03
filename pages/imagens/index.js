//Importes para utilizar os componentes "Link", "Layout" e "Title".
import Link from 'next/link'
import Layout from '../../componentes/layout'
import Title from '../../componentes/title'

/*Função principal, recebi os "props" vindo da função "getServerSideProps()".
Extrai do "props" o titulo e o "src", para renderizar*/
export default function Imagens(props) {
    
    return (
        
        <Layout>
            <Title>Página de Imagens</Title>
            <div>
                <h4 className="cardPersonalizado">O conteúdo desta Página foi gerado utilizando o Server Side Rendering (SSR)</h4>
            </div>
            <div className="grid">
                <div className="card">
                    <Link href={`imagens/[id]`} as={`/imagens/${props.imangens1.id}`} key={props.imangens1.id}>
                        <a className="">
                            <h4>{props.imangens1.title}</h4>
                            <img width="100%" height="90%" src={props.imangens1.url} alt="Card image cap" />
                        </a>
                    </Link>
                </div>

                <div className="card">
                    <Link href={`imagens/[id]`} as={`/imagens/${props.imangens2.id}`} key={props.imangens2.id}>
                        <a className="">
                            <h4>{props.imangens2.title}</h4>
                            <img width="100%" height="90%" src={props.imangens2.url} alt="Card image cap" />
                        </a>
                    </Link>
                </div>

                <div className="card">
                    <Link href={`imagens/[id]`} as={`/imagens/${props.imangens3.id}`} key={props.imangens3.id}>
                        <a className="">
                            <h4>{props.imangens3.title}</h4>
                            <img width="100%" height="90%" src={props.imangens3.url} alt="Card image cap" />
                        </a>
                    </Link>
                </div>

                <div className="card">
                    <Link href={`imagens/[id]`} as={`/imagens/${props.imangens4.id}`} key={props.imangens4.id}>
                        <a className="">
                            <h4>{props.imangens4.title}</h4>
                            <img width="100%" height="90%" src={props.imangens4.url} alt="Card image cap" />
                        </a>
                    </Link>
                </div>

                <div className="card">
                    <Link href={`imagens/[id]`} as={`/imagens/${props.imangens5.id}`} key={props.imangens5.id}>
                        <a className="">
                            <h4>{props.imangens5.title}</h4>
                            <img width="100%" height="90%" src={props.imangens5.url} alt="Card image cap" />
                        </a>
                    </Link>
                </div>

                <div className="card">
                    <Link href={`imagens/[id]`} as={`/imagens/${props.imangens6.id}`} key={props.imangens6.id}>
                        <a className="">
                            <h4>{props.imangens6.title}</h4>
                            <img width="100%" height="90%" src={props.imangens6.url} alt="Card image cap" />
                        </a>
                    </Link>
                </div>
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
                height: 500px;
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

//Função do Next.js, que permite fazer geração do lado do servidor.
export async function getServerSideProps() {

    //Acessando as imagens da API "jsonplaceholder"   
    const img1 = await fetch('https://jsonplaceholder.typicode.com/photos/1')
    const img2 = await fetch('https://jsonplaceholder.typicode.com/photos/2')
    const img3 = await fetch('https://jsonplaceholder.typicode.com/photos/3')
    const img4 = await fetch('https://jsonplaceholder.typicode.com/photos/4')
    const img5 = await fetch('https://jsonplaceholder.typicode.com/photos/5')
    const img6 = await fetch('https://jsonplaceholder.typicode.com/photos/6')

    //Converter o returno para JSON
    const imangens1 = await img1.json();
    const imangens2 = await img2.json();
    const imangens3 = await img3.json();
    const imangens4 = await img4.json();
    const imangens5 = await img5.json();
    const imangens6 = await img6.json();

    //Retornando as Imagens 
    return {
        props: {
            imangens1,
            imangens2,
            imangens3,
            imangens4,
            imangens5,
            imangens6
        }
    };
}




