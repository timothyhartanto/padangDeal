import React from 'react';
import 'semantic/dist/semantic.min.css';
import {Link} from 'react-router-dom'
import PD from 'images/logo_only.png';
import {Dropdown, Menu, Icon} from 'semantic-ui-react'
// import { AppRegistry, Text, StyleSheet } from 'react-native';

const Header = () => (
    <header>
        <title>Padang Deal</title>


        <div class="ui segment">
            <div class="ui fixed white menu">
                <Link to='/'>
                    <div class="ui medium header borderless fluid item">
                        <img src={PD}/>PadangDeal
                    </div>
                </Link>

                <div class="ui item simple borderless">
                <div class="ui search">
                    <div class="ui icon input">
                        <input class="prompt" type="text" placeholder="Cari Promo..."/>
                        <i class="search icon"></i>
                    </div>
                </div>
                </div>
                <div class="right menu">
                    <div class="ui item simple borderless">
                       <Link  class="linkColor" to='/itworks'> Cara Kerja</Link>
                    </div>

                    <div class="ui item simple dropdown borderless linkColor">
                        <i class="user icon"></i> Masuk/Daftar
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <a href="/browse/login" class="item"><i class="sign in icon"></i>Masuk</a>
                            <a href="/browse/register" class="item"><i class="browser icon"></i>Daftar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default Header