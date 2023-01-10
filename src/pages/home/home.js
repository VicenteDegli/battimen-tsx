import React from 'react';
import Header from '../../components/header/header';
import "./styles.css";
import Video from '../../assets/trailer.mp4';   
import Cards from '../../components/cards/cards';
import Footer from '../../components/footer/footer';

function Home(){
    return(
        <>
            <Header/>
            <div id="banner"></div>
            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video} type="video/mp4" />
                        Seu navegador não possui suporte para vídeos!
                    </video>
                    <div id="sinopse">
                        <p className="description">
                            The Batman é um filme de super-herói estadunidense, baseado no personagem Batman da editora DC Comics!   
                        </p>
                        <button className="button">
                            Comprar Ingresso
                        </button>
                    </div> 
                </div>
            </div>
            <Cards />
            <Footer />  
        </>
    )
}

export default Home;