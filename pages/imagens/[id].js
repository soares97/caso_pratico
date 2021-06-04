//Importes para utilizar os componentes "Router", "Layout", "Link" e "Title".
import Link from 'next/link';
import {useRouter} from 'next/router';
import Layout from '../../componentes/layout';
import Title from '../../componentes/title';

//Rota dinamica para as imagens.
export default function imagens() {
    const router = useRouter();
    console.log(router);
    return (
        <Layout>
            <Title>Detalhes da Imagem </Title>
            <p>ID da Imagem: {router.query.id}</p>
            <Link href="/imagens">
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

