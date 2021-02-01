import React, { useEffect, useState } from 'react';
import axios from 'axios';

function goodsDetail(props) {

    const [farmlist, setFarmlist] = useState([]);

    useEffect(() => {
        getFarmlist()
    }, [])

    const getFarmlist = async () => {
        // console.log(props.match)
        const response = await axios.get(`/api/good/${props.match.params.id}`);
        setFarmlist(response.data.good)
    }

    return (
        <div className="farm-page">
            <h1 className="general">商品詳細ページ</h1>
            <p>農家名：{farmlist.farmname}</p>
            <p>商品名：{farmlist.goodsname}</p>
            <p>数量：{farmlist.quantity}</p>
            <p>賞味期限：{farmlist.expired}</p>
            <p>値段：{farmlist.price}</p>
            <p>送料：{farmlist.carriage}</p>
            <p>送料負担者：{farmlist.burden}</p>
            <p>発送方法：{farmlist.howcarri}</p>
            <p>発送可能日：{farmlist.carridays}</p>
            <p>発送元：{farmlist.carriarea}</p>
            <p>農薬名：{farmlist.pesticides}</p>
            <p>商品詳細：{farmlist.detail}</p>
            <p>カテゴリー：{farmlist.category_id}</p>
            <p>写真：{farmlist.photo}</p>
            <p>農家利益：{farmlist.profit}</p>
            <p>農家No：{farmlist.members_id}</p>
        </div>
    );
}

export default goodsDetail;