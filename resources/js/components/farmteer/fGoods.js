import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function fGoods() {
    const [farmlists, setFarmlists] = useState([]);

    useEffect(() => {
        getFarmlists();
    }, [])

    const getFarmlists = async () => {
        const response = await axios.get('/api/goods');
        setFarmlists(response.data.goods)
    }

    const deleteList = (id) => {
        axios.delete(`/api/goods/${id}`).then(() => {
            console.log("DB削除");
            getUsers();
        });
    }

    return (
        <div className='farm-page'>
            <div className="form">
                <h1 className='general'>商品一覧</h1>
                <form>
                    <table className='goodtable'>
                        <thead>
                            <tr>
                                <th>商品名</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {farmlists.map(farmlist => (
                                <tr key={farmlist.id}>
                                    <td>{farmlist.goodsname}</td>
                                    <td><a href={`/goods/${farmlist.id}`}>詳細</a></td>
                                    <td><button className="general-button" onClick={() => deleteUser(farmlist.id)}>削除</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link to="/fgoodsadd"><button className="general-button">商品を追加する</button></Link>
                </form>
            </div>
        </div>
    )
}


export default fGoods;