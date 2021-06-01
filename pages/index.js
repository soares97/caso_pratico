import Layout from '../componentes/layout';
import Title from '../componentes/title';
import Image from 'next/image';

export default function Home() {
    return (

        <Layout>
            <div>
                <Image className="img" src="/img1.jpg" width="300px" height="300px" alt="Imageme"></Image>
            </div>
            <Title>Página Principal</Title>
            <div>
                <h4 className="cardPersonalizado">Está Imagem foi implementado utilizando o componente "Image Optimization"</h4>
            </div>
            <style jsx>
                {`
                .img {
                    --border-radius: 10px;
                    --background: red;
                }
            `}
            </style>
        </Layout>
    )
}

