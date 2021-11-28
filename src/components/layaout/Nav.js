import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <div className="banda">
        <div className="ancho">
            <div className="logo">
                <p><a href="/">Federico Buzzoni</a></p>
            </div>
            <nav>
                <ul>
                    <li><NavLink activaClassName="activo" to="/">Quién Soy</NavLink></li>
                    <li><NavLink activaClassName="activo" to="/EducacionPage">Educación</NavLink></li>
                    <li><NavLink activaClassName="activo" to="/ExperienciaPage">Experiencia</NavLink></li>
                    <li><NavLink activaClassName="activo" to="/BlogPage">Blog</NavLink></li>
                    <li><NavLink activaClassName="activo" to="/ContactoPage">Contacto</NavLink></li>
                </ul>
            </nav>
        </div>
        </div>
    );
}

export default Nav;