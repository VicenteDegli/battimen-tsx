import React from "react";

function Comentario(props: string | number){
    
    function retornaNota(){
        let estrelas = []
        for(let cont = 0; cont<props.nota; cont++){
            estrelas.push('☆');
        }  
        return estrelas;  
    }

    function fitComent(){
        
    }

    return(
        <div className="coments">
            <p className="star">
                {retornaNota()}
               
            </p>
            <p>{props.nome}</p>
            <p>{props.comentario}</p>
        </div>
    )
}

export default Comentario;