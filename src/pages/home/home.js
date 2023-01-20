import React from "react";
import home from "./home.css"
import Footer from "../../components/footer/footer";
import meet from "../../assets/meet.gif"
import share from "../../assets/share.jpg"
import grow from "../../assets/grow.jpg"
import enjoy from "../../assets/enjoy.jpg"


function Home() {
    return (
        <>
            <main>

                <header>
                    <h1> HEADER DARE TO EXPERIENCE AND SENSE NEW WAYS OF LIVING</h1>
                    <button type="button"> JOIN US</button>
                    <h2>Enhance your life and your personality by hosting travellers from all around the world and
                        visiting nice people and cultures</h2>

                </header>

                <div className="cuerpo">
                    <aside className="historias">
                        <h2>User histories</h2>
                        <p>This conversation started in Prague. </p>
                    </aside>
                    <aside className="foto">
                        <h2>Find more about us</h2>
                        <p>Picture</p>
                    </aside>
                    <aside className="historias">
                        <h2>User histories</h2>
                        <p>Since the 1970s, non-governmental.</p>
                    </aside>
                </div>
                <div className="mensajes">
                    <section className="icons">
                        <h1>WHY CHOOSE BY SHARING & ENJOYING</h1>
                        <article>
                            <span>
                                <img src={meet}/>
                                <h2>Meet</h2>
                                <p> Hola como estas</p>
                            </span>
                            <span>
                                <img src={share}/>
                                <h2>Share</h2>
                                <p> Comaparte</p>
                            </span>
                            <span>
                                <img src={enjoy}/>
                                <h2>Enjoy</h2>
                                <p> Disfruta</p>
                            </span>
                            <span>
                                <img src={grow}/>
                                <h2>Expand your opportunities</h2>
                                <p>Crece</p>
                            </span>
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Home;
