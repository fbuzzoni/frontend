import React from 'react';
import '../styles/components/pages/HomePage.css';
import 'bootstrap/dist/css/bootstrap.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="bannerheader">
                <img className="foto" src="images/fbuzzoni4x4.jpg" alt="Federico Buzzoni" />
                <h1>Quién soy</h1>
                <div class="content-slider">
                    <div class="slider">
                        <div class="mask">
                            <ul>
                                <li class="anim1">
                                    <div class="quote">Interesado por las últimas tecnologías y su aplicación a situaciones de
                                        negocio.</div>
                                </li>
                                <li class="anim2">
                                    <div class="quote">Enfocado a los datos como principal fuente para la toma de decisiones.
                                    </div>
                                </li>
                                <li class="anim3">
                                    <div class="quote">Posicionamiento de IT como socio tecnológico que potencie el desarrollo y
                                        crecimiento de la empresa.</div>
                                </li>
                                <li class="anim4">
                                    <div class="quote">Formación de equipos comprometidos, autogestionados y de alto
                                        rendimiento.</div>
                                </li>
                                <li class="anim5">
                                    <div class="quote">Promotor de la Transformación Digital como proceso generador de
                                        eficiencias.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Bio</h1>
            <div class="quiensoycolumnas">
                <p>Apasionado por la tecnología desde siempre y comprendiendo el valor de los datos para la toma de
                    decisiones
                    fueron las causas que me llevaron a aprender a programar cuando estaba en la escuela primera
                    (BASIC -
                    Commodore 64) y secundaria (BASIC & Clipper - PC, además de jugar mucho) para luego estudiar
                    Ingeniería
                    en
                    Informática.</p>

                <p> Una vez comenzada la carrera universitaria tuve la oportunidad de trabajar en un emprendimiento,
                    expandiendo
                    un software de
                    gestión comercial desarrollado internamente por CABA y PBA. Crecimos mucho y ese crecimiento
                    hizo que me
                    fuera alejando de la programación para enfocarme primero en el análisis funcional y gestión de
                    requerimientos para luego dedicarme a tareas más propias del negocio (comerciales, logística,
                    etc.)</p>
                <p>Queriendo retomar lo que me apasionaba decidí dejar el emprendimiento y buscar lugar en una gran
                    empresa,
                    que
                    trabaje con las última tecnologías y soporte a varios negocios, quería un ambiente tecnológico
                    complejo.
                    Y
                    lo pude conseguir!
                    Desde hace +17 años trabajo en la industria aeroportuaria, pudiendo desarrollarme y crecer
                    profesionalmente
                    en el que pienso es el mejor y más desafiante de los negocios. Trabajé en +50 aeropuertos en
                    todo el
                    mundo,
                    junto con los
                    mejores y más experimentados compañeros de equipo. Tuve también la oportunidad de trabajar en
                    proyectos
                    para
                    otras empresas de la misma corporación en negocios tan diferentes como correo, retail, servicios
                    financieros, bodegas, etc.</p>
                <p>Me atraen los retos, los nuevos desafíos, siempre estoy buscando aprender cosas nuevas para
                    contribuir a
                    encontrar las mejores ideas para el negocio. Disfruto armar equipos y hacerlos crecer.
                    Me encantan las últimas tecnologías, incrementar la experiencia del cliente y estar en un
                    contexto
                    dinámico y
                    desafiante.</p>
                <p><br></br></p>
            </div>
        </main>
    );
}

export default HomePage;