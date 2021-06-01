import {useRouter} from 'next/router';
import Layout from '../../componentes/layout';
import Title from '../../componentes/title';

export default function imagens() {
    const router = useRouter();
    console.log(router);
    return (
        <Layout>
            <Title>Detalhes da Imagem </Title>
            <p>ID da Imagem: {router.query.id}</p>
        </Layout>
    )
}

