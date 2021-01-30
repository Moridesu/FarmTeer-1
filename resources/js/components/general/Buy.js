import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Buy(props) {
    const [good, setGood] = useState([]);

    useEffect(() => {
        getGood()
    }, [])

    const getGood = async () => {
        // console.log(props.match)
        const response = await axios.get(`/api/good/${props.match.params.id}`);
        setGood(response.data.good)
    }

    return (
        <nav className="buy-page">
            <div className="form">
                <h2 className="general">購入手続き</h2>
                <div className="notice-product">
                    <img src={`../../images/${good.photo}`} alt="商品画像" />
                    {good.goodsname}
                </div>
                <p>数量：{good.quantity}　　値段：{good.price}円</p>
                <div>
                    支払い方法：
                <Link to="/payment">
                {props.name == null ?(
                    'クレジット(手数料￥0)'
                ):(props.name)}
                </Link>
                </div>
                <div>
                    支払い金額：
                    ￥{good.price + good.carriage}
                </div>
                <div>
                    名前
                    郵便番号
                    住所
                </div>
                <Link to={`/confirmation/${good.id}`}>
                    <button className="general-button">注文を確認する</button>
                </Link>
            </div>
        </nav>
    )
}

export default Buy;