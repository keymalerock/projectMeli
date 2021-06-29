import React, {useState, useEffect} from 'react';
import { useParams} from "react-router-dom";
import meliLogo from "../assets/img/logo__small.png";
import comeBack from "../assets/img/arrow-24.png";

import Description from "./description";

function Especifications() {

    const [itemsDet, setItemsDet] = useState({});
    const {id}= useParams();
    useEffect(() => {
        const GetDescription = async () => {
            const ruta= 'http://localhost:1981/api/items/'+id;
            const res = await fetch(ruta);
            const data = await res.json();
            setItemsDet(data);
            //console.log(itemsDet);
        }
        GetDescription();
    },[itemsDet]);

    return (
        <>
            <nav className="nav-bar">
                <div className="nav-bar-logo">
                    <img src={meliLogo} alt='Mercadolibre examen'/>
                </div>
                <div className='RightSide'>
                    <input type="search" id="search" name="buscar" placeholder="buscar articulos.."/>
                    <img src={comeBack} />
                </div>
            </nav>
            <div className="boxmain-detalle">
                        {!itemsDet.author  ? 'loading...' : <Description  mensaje={itemsDet}/>    }
            </div>
        </>
    )
}



export default Especifications