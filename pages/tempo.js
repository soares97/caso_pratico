export default function Tempo(){
    const tempoDinamico = new Date();
    const tempo = tempoDinamico.toGMTString();
    
    return(
        <div>
            {tempo} (Dinamico)
        </div>
    )
}