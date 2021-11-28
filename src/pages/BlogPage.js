import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/BlogPage.css';

const BlogPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section>
            <div className="blog" id="blog">
            <h1>Blog</h1>
                {loading ? (
                    <p>cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                         body={item.cuerpo} imagen={item.imagen}/>)
                )}
            </div>
        </section>
    );
                    }





/*    return (
                    <section>
                        <div className="blog" id="blog">
                            <h1>Blog</h1>
                            <div className="contenedor">
                                <h7>12/08/2020</h7>
                                <h3>Progresos en DevOps1 </h3>
                                <p>ya se implementaron 3 proyectos con integración contínua. Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Provident soluta laborum ab quas illum accusamus unde dolore vero veritatis at
                                    excepturi eius repellat rerum ad voluptates, eaque commodi neque aliquam?</p>
                            </div>
                            <div className="contenedor">
                                <h7>2/08/2020</h7>
                                <h3>Progresos en DevOps2</h3>
                                <p>ya se implementaron 3 proyectos con integración contínua. Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Provident soluta laborum ab quas illum accusamus unde dolore vero veritatis at
                                    excepturi eius repellat rerum ad voluptates, eaque commodi neque aliquam?</p>
                            </div>
                            <div className="contenedor">
                                <h7>30/07/2020</h7>
                                <h3>Progresos en DevOps3</h3>
                                <p>ya se implementaron 3 proyectos con integración contínua. Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Provident soluta laborum ab quas illum accusamus unde dolore vero veritatis at
                                    excepturi eius repellat rerum ad voluptates, eaque commodi neque aliquam?</p>
                            </div>
                            <div className="contenedor">
                                <h7>12/07/2020</h7>
                                <h3>Progresos en DevOps4</h3>
                                <p>ya se implementaron 3 proyectos con integración contínua. Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Provident soluta laborum ab quas illum accusamus unde dolore vero veritatis at
                                    excepturi eius repellat rerum ad voluptates, eaque commodi neque aliquam?</p>
                            </div>

                        </div>
                    </section>
                    );
}*/

                    export default BlogPage;