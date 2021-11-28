import React from 'react';
import '../../styles/components/pages/BlogPage.css'

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body} = props;
    return (
        <div className="gridNovedad">
            <div className="unoNovedad">
            <h3>{title}</h3>
            <h5>{subtitle}</h5>
            <br></br>
            <p dangerouslySetInnerHTML={{ __html:body }} />
            </div>
            <div className="dosNovedad">
            <img src={imagen}/>
            </div>
            <hr />
            </div>
    );
}

export default NovedadItem;