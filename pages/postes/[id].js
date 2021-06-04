//Importes para utilizar os componentes "Link", "Router", "Layout" e "Title".
import Link from 'next/link';
import {useRouter} from 'next/router';
import Layout from '../../componentes/layout';
import Title from '../../componentes/title';

//Rota dinamica das postagens
export default function post() {
    const router = useRouter();
    //console.log(router);
    return (
        <Layout>
            <Title>Detalhes do Poste </Title>
            <p>ID do Poste: {router.query.id}</p>
            <Link href="/postes">
                <a>Voltar</a>
            </Link>
            <style jsx>
                {`
            a{
                padding: 7px 12px;
                text-decoration:none;
                color: white;
                background-color: #0070f3;
                border-radius: 5px;
            }
            `}
            </style>
        </Layout>
    )
}
