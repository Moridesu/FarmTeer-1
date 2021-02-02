import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/FTlogo.png'
import css from '../../css/components/App.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 4px',
        display: 'flex',
        alignItems: 'center',
        width: 350,
        margin: '3px 400px',
        position: "fixed",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));


function Header() {
    const classes = useStyles();

    return (
        <nav className="header">
            <link rel="stylesheet" href={css} />
            <div className="headline">
                <Link to="/">
                    <img src={Icon} alt="ロゴ" />
                </Link>
            </div>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="商品検索..."
                    inputProps={{ 'aria-label': '商品検索...' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <div className="headline-item">
                <ul className="nav-list">
                    <Link to="/first">
                        <li className="nav-list-item"><HelpOutlineIcon />FarmTeerとは</li>
                    </Link>
                    {/*<Link to="/fMypage">
                        <li className="nav-list-item">マイページ</li>
    </Link>*/}
                    <li className="nav-list-item"><div className="nav-item-name"><AccountCircleIcon />新規登録・ログイン</div>
                        <ul className="item">
                            <Link to="/farmteer/login"><li className="item-list">ログイン</li></Link><br />
                            <Link to="/farmteer/register"><li className="item-list">新規登録</li></Link>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;