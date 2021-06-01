import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <img src="/img2.PNG" width="100" height="50" alt="Imageme"></img>
            <Link href="/utilizador">
                <a>Utilizadores</a>
            </Link>
            <Link href="/imagens">
                <a>Imagens</a>
            </Link>
            <Link href="/postes">
                <a> Postes</a>
            </Link>
            <Link href="/">
                <a>Home</a>
            </Link>
            
            <style jsx>
                {`
                    nav{
                        font-size: 14pt;
                        margin-right: 15%;
                        margin-bottom: 100px;
                    }

                    a{
                        padding: 0 10px;
                        text-decoration:none;
                        display:block;
	                    float:right;
                        color: rgb(0,0,0);
                        background-color:#dddddd;
                        padding: 5px;
	                    margin: 2px;
                    }

                    a:hover{
                        color:rgb(255,255,255);
                        text-decoration:underline
                    }

                `}
            </style>
        </nav>
    )
}