import React from "react";
import footer from "./footer.css"
function Footer(){
    return(
        <>
            <footer>
                <section className="piedepagina">
                    <ul className="texto_pie" >
                        <a href={"/"}> <li>About us</li></a>
                        <a href=""><li>Our mission</li></a>
                        <a href=""><li>Our goals</li></a>
                        <a href=""><li>Terms of use</li></a>
                        <a href=""><li>Privacy & security</li></a>
                        <a href=""><li>Data right</li></a>
                        <a href=""><li>Legal notes</li></a>
                        <a href=""><li>FQS</li></a>
                        <a href=""><li>Contacts us</li></a>
                    </ul>
                </section>
            </footer>

        </>
    );
}

export default Footer;