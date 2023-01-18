import React from "react";
import home from "./home.css"
import Footer from "../../components/footer/footer";


function Home() {
    return (
        <>
            <nav>
                /*Here place the a nave bar*/
            </nav>

            <header>
                <h1>DARE TO EXPERIENCE AND SENSE NEW WAYS OF LIVING</h1>
                <button type="button"> JOIN US</button>
                <h2>Enhance your life and your personality by hosting travellers from all around the world and visiting nice people and cultures</h2>
            </header>

            <main>
                <aside>
                    <h2>User histories</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae consequuntur, cupiditate distinctio dolores ducimus fugit harum ipsam. Animi architecto consequuntur doloribus est exercitationem harum inventore modi quidem repellendus sit.</p>
                </aside>

                <section>
                    <h1>WHY CHOOSE BY SHARING & ENJOYING</h1>
                    <article>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </article>


                </section>

                <aside>
                    <h2>User histories</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae consequuntur, cupiditate distinctio dolores ducimus fugit harum ipsam. Animi architecto consequuntur doloribus est exercitationem harum inventore modi quidem repellendus sit.</p>
                </aside>


            </main>

            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Home;
