import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import mTop from './management/mTop'
import mUserDetail from './management/UserDetail'
import mLogin from './management/mLlogin'
import Login from './general/Login'
import Register from './general/Register'
import Top from './Top'
import Product from './general/Products'
import Notice from './general/Notice'
import Buy from './general/Buy'
import Address from './general/Address'
import Payment from './general/payment'
import Creditadd from './general/Creditadd'
import Header from './Header'
import Footer from './Footer'
import Guide from './Guide'
import Farmteer from './Farmteer';
import Flogin from './farmteer/fLogin';
import Fregister from './farmteer/fRegister';
import Ftop from './farmteer/fTop';
import Fgoods from './farmteer/fGoodsadd';

{/** 
    farmerのログイン、新規登録申請画面とvolunteerのログイン、新規登録申請画面と管理者のログイン画面のfooter、headerを削除する
    管理者のアカウント名のところをユーザー名に変更する
    ボランティアのカテゴリの入力
 */}

function App() {
    return(
    <Router>
        <Header />
        <div>
            <Switch>
            <Route path="/" exact component={Top} /> {/**一番最初に表示されるところ */}
            <Route path="/management/login" component={mLogin} />{/**農家ユーザー管理者のログイン画面 */}
            <Route path="/farmteer/login" component={Login} />{/**一般のログイン画面 */}
            <Route path="/farmteer/register" component={Register} />{/**一般の新規登録画面 */}
            <Route path="/farmlogin" component={Flogin}/>{/**農家側のログイン画面 */}
            <Route path="/farmregister" component={Fregister} />{/**農家側の登録申請画面 */}
            <Route path="/products/notice/:id" component={Notice} />    {/**商品報告画面 */}
            <Route path="/products/:id" component={Product} /> {/**商品詳細画面 */}
            <Route path="/guide" component={Guide} />    {/**ガイド画面 */}
            <Route path="/first" component={Farmteer} /> {/**farmteerについて */}
            <Route path="/farmtop" component={Ftop} />   {/**農家側のトップ画面 */}

            <Route path="/management/top" component={mTop} />
            <Route path="/management/user/:id" component={mUserDetail} />
            <Route path="/products/buy" component={Buy} />
            <Route path="/address" component={Address} />
            <Route path="/payment" component={Payment} />
            <Route path="/creditadd" component={Creditadd} />
            <Route path="/farmgoodsadd" component={Fgoods} />
            </Switch>
        </div>
        <Footer />
    </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}