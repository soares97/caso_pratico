export default function Title(props) {
    return (
        <h1>
            {props.children}
            <style jsx>
                {`
                h1{
                    margin:0;
                    font-size: 3rem;
                    text-align: center;
                    font-family: Times New Roman;
                }
                `}
            </style>
        </h1>
    )
}