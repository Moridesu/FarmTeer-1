import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Management from './Management';

import Login from './general/Login'
import Register from './general/Register'
import Top from './Top'
import Product from './general/Products'
import Notice from './general/Notice'
import Buy from './general/Buy'
import Payment from './general/payment'
import Creditadd from './general/Creditadd'
import Confirmation from './general/Confirmation'
import Fixed from './general/Fixed'
import Header from './Header'
import Footer from './Footer'
import Guide from './Guide'
import Farmteer from './Farmteer';
import Flogin from './farmteer/fLogin';
import Fregister from './farmteer/fRegister';
import Ftop from './farmteer/fTop';
import Fgoodsadd from './farmteer/fGoodsadd';
import Fgoods from './farmteer/fGoods';
import Fdetail from './farmteer/goodsDetail';
import Fmypage from './farmteer/fMypage';
import Mypage from './general/Mypage';


{/** 
    farmerのログイン、新規登録申請画面とvolunteerのログイン、新規登録申請画面と管理者のログイン画面のfooter、headerを削除する
    管理者のアカウント名のところをユーザー名に変更する
    ボランティアのカテゴリの入力
 */}

function App() {
    return (
        <Router>
            <Header />
            <div>
                <Switch>
                    <Route path="/" exact component={Top} /> {/**一番最初に表示されるところ */}
                    <Route path="/farmteer/login" component={Login} />{/**一般のログイン画面 */}
                    <Route path="/farmteer/register" component={Register} />{/**一般の新規登録画面 */}
                    <Route path="/farmlogin" component={Flogin} />{/**農家側のログイン画面 */}
                    <Route path="/farmregister" component={Fregister} />{/**農家側の登録申請画面 */}
                    <Route path="/products/notice/:id" component={Notice} />    {/**商品報告画面 */}
                    <Route path="/products/:id" component={Product} /> {/**商品詳細画面 */}
                    <Route path="/guide" component={Guide} />    {/**ガイド画面 */}
                    <Route path="/first" component={Farmteer} /> {/**farmteerについて */}
                    <Route path="/farmtop" component={Ftop} />   {/**農家側のトップ画面 */}

                    <Route path="/buy/:id" component={Buy} /> {/**購入画面 */}
                    <Route path="/confirmation/:id" component={Confirmation} /> {/**購入画面 */}
                    <Route path="/payment" component={Payment} /> {/**支払変更画面 */}
                    <Route path="/creditadd" component={Creditadd} /> {/**クレジット情報の追加画面 */}
                    <Route path='/fixed/:id' component={Fixed} />
                    <Route path="/fgoodsadd" component={Fgoodsadd} />{/**商品登録画面 */}
                    <Route path="/fgoods" component={Fgoods} />{/**商品一覧 */}
                    <Route path="/fgoods/:id" component={Fdetail} />{/**商品一覧詳細 */}
                    <Route path="/fMypage" component={Fmypage} />{/**マイページ詳細 */}
                    <Route path="/farmteer/mypage" component={Mypage} />{/**マイページ詳細 */}
                    <Route path="/goods/:id" component={Fdetail} />{/**商品一覧詳細 */}
                    <Management />
                </Switch>
            </div>
            <Footer />
        </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}