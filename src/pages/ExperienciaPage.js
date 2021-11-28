import React from 'react';
import '../styles/components/pages/ExperienciaPage.css';
import video from '../images/premio.mp4';
import icono from '../images/aa2000.svg';

const ExperienciaPage = (props) => {
    return (
        <main>
            <video className="background-video" autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
            <div class="experiencia">
                <h1>Experiencia</h1>
            </div>
            <div class="gridexp">
                    <div class="unoexp">
                    <img src={icono} alt="aa2000"/>
                    <br/>
                    <br/>
                   <h6>Gerente de Aplicaciones</h6>
                    <p>07/2018 - actualidad</p>
                    </div>
                    <div class="dosexp">
                        <ul>
                        <li>Transformamos nuestro software y procesos bajo requerimientos SOX (NYSE:CAAP) e ISO 9001.</li>
                        <li>Todo el software de la empresa (desarrollos internos y productos de terceros) son responsabilidad de esta área.</li>
                        <li>Business Intelligence, Desarrollo de Software, SAP ABAP y Aplicaciones forman esta área.</li>
                        <li>Actualmente implementando Azure DevOps, buscando CI/CD.</li>
                        <li>Creando una arquitectura de BI de última tecnología.</li>
                        <li>Trabajando en el proceso de transformación digital.</li>
                        <li>Mantenimiento, desarrollo y despliegue de sistemas de alcance internacional.</li>
                        <li>Migrando a Azure Cloud y M365.</li>

                        </ul>
                    </div>
            </div>
            <div class="gridexp">
                    <div class="unoexp">
                    <img src={icono} alt="aa2000"/>
                    <br/>
                    <br/>
                   <h6>Gerente de PMO</h6>
                    <p>08/2016 - 06/2018</p>
                    </div>
                    <div class="dosexp">
                        <ul>
                        <li>Creación de la Gerencia de PMO.</li>
                        <li>Definición de procesos y estándares para la gestión de proyectos.</li>
                        <li>Monitoreo, control y gestión de proyectos locales e internacionales (Argentina, Uruguay, Ecuador, Perú, Brasil, Ecuador, Armenia)</li>
                        <li>ISO 9001. Definicion y control de procesos para la Dirección de Sistemas.</li>
                        </ul>
                    </div>
            </div>
            <div class="gridexp">
                    <div class="unoexp">
                    <img src={icono} alt="aa2000"/>
                    <br/>
                    <br/>
                   <h6>Project Manager</h6>
                    <p>08/2010 - 08/2016</p>
                    </div>
                    <div class="dosexp">
                        <ul>
                        <li>Gestión de proyectos tecnológicos en industrias aeronáuticas, retail, financiera y logística.</li>
                        <li>Proyectos realizados en Argentina, Uruguay, Ecuador, Perú, Brasil, Ecuador, Armenia y Marruecos</li>
                        </ul>
                    </div>
            </div>
            <div class="gridexp">
                    <div class="unoexp">
                    <img src={icono} alt="aa2000"/>
                    <br/>
                    <br/>
                   <h6>Project Leader</h6>
                    <p>02/2006 - 07/2010</p>
                    </div>
                    <div class="dosexp">
                        <ul>
                        <li>Liderazgo de proyectos de desarrollo de software e implementación de aplicaciones en diferentes empresas del grupo.</li>
                        </ul>
                    </div>
            </div>
            <div class="gridexp">
                    <div class="unoexp">
                    <img src={icono} alt="aa2000"/>
                    <br/>
                    <br/>
                   <h6>Analista Funcional</h6>
                    <p>04/2004 - 01/2006</p>
                    </div>
                    <div class="dosexp">
                        <ul>
                        <li>Análisis de requerimientos, tecnología y supervisión de los desarrollos de software de la empresa.</li>
                        </ul>
                    </div>
            </div>
        </main>
    );
}

export default ExperienciaPage;