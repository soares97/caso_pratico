import {useRouter} from 'next/router';
import Layout from '../../componentes/layout';
import Title from '../../componentes/title';

export default function post() {
    const router = useRouter();
    //console.log(router);
    return (
        <Layout>
            <Title>Detalhes do Poste </Title>
            <p>ID do Poste: {router.query.id}</p>
        </Layout>
    )
}