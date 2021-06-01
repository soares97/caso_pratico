import Navbar from "./navbar";

export default function Layout(props) {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                {props.children}
            </main>
            <style jsx>
                {`
                    div{
                        min-height: 80vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        background-color:white;
                        width:69%;
	                    margin: 0px auto 0px auto;
	                    box-shadow:0px 0px 10px rgba(0,0,0,0.5);
	                    padding:10px;
                    }

                    main{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;   
                    }
                `}
            </style>
            <style jsx global>
                {`
                    html, body{
                        padding: 0;
                        margin: 0;
                        background-color: #dddddd;
                    }

                    *{
                        box-sizing: border-box;
                    }

                    .cardPersonalizado {
                        margin:1rem;
                        padding: 1.5rem;
                        font-size: 18pt;
                        border: 2px solid #e2dada;
                        border-radius: 10px;
                        font-family: Times New Roman;
                        background: rgb(226, 218, 218);
                        box-shadow: 0px 0px 10px;
                    }
                `}
            </style>
        </div>
    )
}