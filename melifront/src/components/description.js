import React from 'react';
import markNew from "../assets/img/new-24.png";

function Description(props) {
    //console.log("props")
    return (
        <>
            <div className="foto" >
                <img src={props.mensaje.item.picture} alt="sku1" className="floatimgBbig"/>
                <div className="low" >
                    <div className="item-title">
                        {props.mensaje.description}
                    </div>
                </div>
            </div>

            <div className="detalle-right" >
                <div className="item-title-bold">{props.mensaje.item.title}</div>
                {props.mensaje.item.free_shipping ?
                    <img src={markNew} alt={"new"} className="icoNew"/> : 'Usado'}
                {props.mensaje.item.price.currency} - {props.mensaje.item.price.amount}
                <button className="andes-button">Comprar</button>
            </div>


        </>
    );

}

export default Description;