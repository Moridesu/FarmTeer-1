import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Buy from './Buy'

function payment() {
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        getCredits();
    }, [])

    const getCredits = async () => {
        const response = await axios.get('/api/credits');
        setCredits(response.data.credits)
    }

    const OK = () => {
        var credittype = document.getElementsById('credittype');
        var radioNodeList = credittype.c;
        // 選択状態の値(value)を取得 (Bが選択状態なら"b"が返る)
        var a = radioNodeList.value;

        if (a === "") {
            // 未選択状態
        } else {
            < Buy name={a} />
        }
    }
    return (
        <nav className="buy-page">
            <div className="form">
                <h2 className="general">支払い方法</h2>
                <div id="credittype">
                    <input type="radio" name="c" value='代引き　(手数料￥300)' />代引き　(手数料￥300)<br />
                    <input type="radio" name="c" value='コンビニ(手数料￥100)' />コンビニ(手数料￥100)<br />
                    <input type="radio" name="c" value='銀行振込(手数料￥100)' />銀行振込(手数料￥100)<br />
                    {credits.map(credit => (
                        credit.user_id == 1 ? (
                            <div key={credit.id}><input type="radio" name="c" value='クレジット(手数料￥0)' />********0000　　{credit.month + "/" + credit.year}(手数料￥0)</div>
                        ) : (null)
                    ))}
                </div>
                <div><Link to="/creditadd">クレジットカードの追加</Link></div>
                <Link to='/buy/:id'><button className="general-button" onClick={OK}>決定</button></Link>
            </div>
        </nav>
    )
}

export default payment;