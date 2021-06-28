import React from 'react';
import './detail.scss';
import markNew from '../assets/img/new-24.png'

function Detail(props) {

    return (
        <div className="listado">
            <div className="listado unite item-title">
                <img src={props.mensaje.picture} alt="sku1" className="floatimg"/>
                <div className="downCol">
                    <div className="shortDescription item-title-bold">{props.mensaje.title}</div>
                    <div className="shortDescription item-title">
                        {props.mensaje.free_shipping ? <img src={markNew} alt={"new"} className="icoNew"/> : 'Usado'}
                    </div>
                    <div className="shortDescription item-title">{props.mensaje.currency} - {props.mensaje.price}</div>

                </div>
                <div className="downCol-right">
                    <div className="shortDescription item-title"><a href={'http://localhost:1981/api/items/'+props.mensaje.id} >{props.mensaje.id}</a></div>
                </div>
            </div>
        </div>
    );
}

export default Detail;