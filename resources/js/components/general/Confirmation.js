import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Confirmation(props) {
    const [good, setGood] = useState([]);
    const [gusers, setgUsers] = useState([]);

    useEffect(() => {
        getGood(),
        getgUsers()
    }, [])

    const getGood = async () => {
        // console.log(props.match)
        const response = await axios.get(`/api/good/${props.match.params.id}`);
        setGood(response.data.good)
    }
    const getgUsers = async () => {
        const response = await axios.get('/api/guser');
        setgUsers(response.data.gusers)
    }

    const update = (id) =>{
        const data ={
            state:false
        }
        axios.put(`/api/goods/${id}`,data).then(() => {
           getGood();
         });
    }

    return (
        <nav className="buy-page">
            <div className="form">
                <h2 className="general">購入確認</h2>
                <div className="notice-product">
                    <img src={`../../images/${good.photo}`} alt="商品画像" />
                    {good.goodsname}
                </div>
                <p>数量：{good.quantity}　　値段：{good.price}円</p>
                <div　className="notice-product">
                    支払い方法：
                    クレジット払い
                </div>
                <div　className="notice-product">
                    支払い金額：
                    ￥{good.price + good.carriage}
                </div>
                <div className="notice-product">
                    {gusers.map(guser => (
                        guser.id == 1 ? (
                            <div key={guser.id}>
                            名前　　　　:{guser.name}<br />
                            郵便番号　　:001-0000<br />
                            都道府県　　:{guser.pref}<br/>
                            市区町村　　:{guser.municipality}<br/>
                            番地・建物名:{guser.building}</div>
                        ) : (null)
                    ))}
                </div>
                {/**ボタンを押して購入が確定されるとDBに入る */}
                <Link to={`/fixed/${good.id}`}><button className="general-button" onClick={update(good.id)}>購入を確定する</button></Link>
            </div>
        </nav>
    )
}

export default Confirmation;