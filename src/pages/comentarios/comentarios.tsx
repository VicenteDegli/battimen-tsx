import React from "react";
import Comentario from "../../components/comentario/comentario";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Siders from "../../components/siders/siders";
import './styles.css';

function Comentarios(){
    let name: string = '';
    let nota: number = 1;
    let comentarios: string = '';
    return(
        <>
            <Header /> 
            <div className="contentContainer">
                <Siders />  
                <div className="comentsContainer">
                    <div id="introduction">
                        Veja oque estão dizendo sobre battiman 2022 no Brasil!
                    </div>
                    <Comentario  name={name} nota={nota} comentario={comentarios} />
                    <Comentario name={'Matildes'} nota={6} comentario='Este filme realmente não será para todos!! Facilmente o filme mais sombrio do Batman até agora. É corajoso, deprimente e não é um filme divertido.
Este não é o seu filme de quadrinhos usual, é um filme de detetive, com mais em comum com Se7en, do que os 
filmes anteriores do Batman. ' />
                    <Comentario name='João Vctor' nota={4} comentario=' O Charada (Paul Dano, direto. Como demorou tanto para ele conseguir um papel como esse?) Tem como alvo funcionários públicos, revelando sua corrupção e matando-os de maneira horrível (como isso escapou com um PG- 13 de novo? Oh, certo, contanto que você não mostre os detalhes, então você pode se safar de quase tudo, até agora. Até mesmo um Jigsaw levemente atenuado). Para detê-lo, será necessário que o Morcego e o Gato (com uma química incrível), juntos, detenham o rato. Obrigado, Matt.
                    Eu realmente não achava que precisávamos de mais um filme lidando com o alter ego de Bruce Wayne. Que tal o Asa Noturna? Eu sei que não é provável, mas parte de mim ainda tem esperança de que Grayson se torne um recurso (se você nunca conferiu o trailer no YouTube, está perdendo). Mas de alguma forma, isso conseguiu me convencer. Dedos cruzados para pelo menos uma sequência. Robert Pattinson é incrível aqui. Sério, podemos simplesmente parar de surtar toda vez que o papel é reformulado? O mais perto que chegamos de alguém que não deveria estar fazendo isso é George Clooney, e não é como se alguém tivesse saído desse filme com boa aparência. Ele aceitou esse trabalho depois de fazer Do Crepúsculo ao Amanhecer. Havia boas razões para pensar que ele seria durão. Honestamente, todos aqui têm um desempenho forte.
                    Algo que definitivamente atrairá alguns mais do que outros é o gênero e o tom. ' />
                    <Comentario name='Minevirna' nota={5} comentario='Tudo neste filme é muito difícil - a trilha sonora exagerada, os planos gerais nos rostos dos personagens, a atuação exagerada, a complexa história do crime - tudo parece estar tentando ganhar um Oscar a cada momento.
                    É excessivamente longo, prolongado, e a história parece uma saga de crime genérica que tem o universo do Batman encaixado nela.
                    Este filme não é uma obra-prima, mas gasta muito esforço para fazer você pensar que é!' />
                    <Comentario name='Mathias' nota={6} comentario='' />
                </div>
                <Siders />  
            </div>
            <Footer />
        </>
    )
}

export default Comentarios;