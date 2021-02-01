import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

{/**farmlistから取ってきている情報をlogからの情報に変える */ }
function Fixed(props) {
    const [good, setGood] = useState([]);

    useEffect(() => {
        getGood()
    }, [])

    const getGood = async () => {
        // console.log(props.match)
        const response = await axios.get(`/api/log/${props.match.params.id}`);
        setGood(response.data.log)
    }

    return (
        <nav className="buy-page">
            <div className="form">
                <h2 className="general">取引画面</h2>
                <div className="notice-product">
                    <img src={`../../images/${good.photo}`} alt="商品画像" />
                    {good.goods_name}
                    <div><h2>状態：{good.delistatus}</h2></div>
                    <div className="evaluation">
                        <input type="text" className="comment" />
                        <Button primary="true" className="general-button">コメントする</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Fixed;