import React, {useState} from 'react';
import './search.scss';
import Detail from './detail';
import meliLogo from '../assets/img/logo__small.png'

const Search = ({marca}) => {
    const [items, setItems] = useState([]);
    const InvokeApiBack = async (par) => {
        const res = await fetch('http://localhost:1981/api/items?q=' + par);
        const data = await res.json();
        console.log(data);
        let arrayItems = [];
        let i = 0;
        for (let item of data.items) {
            arrayItems[i++] = {
                id: item.id,
                picture: item.picture,
                title: item.title,
                free_shipping: item.free_shipping,
                price: item.price.amount,
                currency: item.price.currency
            }
        }
        setItems(arrayItems)
        console.log()
    }

    function miButton(param) {
        param = document.getElementById('search').value;
        InvokeApiBack(param);
    }

    return (
        <>
            <nav className="nav-bar">
                <div className="nav-bar-logo">{marca}
                    <img src={meliLogo} alt='Mercadolibre examen'/>
                </div>
                <div className='RightSide'>

                    <input type="search" id="search" name="buscar" placeholder="buscar articulos.."/>
                    <button className='iconbutt1' onClick={() => miButton("enviando")}>...</button>
                </div>
            </nav>
            <div className="boxmain">
                {!items ? 'Loading..' :
                    items.map((item, index) => {
                        return <Detail key={index} mensaje={item}/>
                    })
                }
            </div>
        </>
    )

}
export default Search;