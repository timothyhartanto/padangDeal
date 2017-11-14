import React from 'react';
import 'semantic/dist/semantic.min.css';
import {Link} from 'react-router-dom'
import PD from 'images/logo_only.png';
import {Dropdown, Menu, Icon} from 'semantic-ui-react'
// import { AppRegistry, Text, StyleSheet } from 'react-native';

const Header = () => (
    <header>

        <div class="ui menu">
            <div class="ui container">
                <Link to='/'>
                    <div class="ui medium header borderless item">
                        <img src={PD}/>PadangDeal
                    </div>
                </Link>

                <div class="ui item simple borderless setSearchWidth">
                    <div class="ui search fluid">
                        <div class="ui icon input">
                            <input class="prompt" type="text" placeholder="Cari Promo..."/>
                            <i class="search icon"></i>
                        </div>
                    </div>
                </div>
                <div class="right menu">
                    <div class="ui item simple borderless">
                        <Link class="linkColor" to='/itworks'> Cara Kerja</Link>
                    </div>

                    <div class="ui item simple dropdown borderless linkColor">
                        <i class="user icon"></i> Masuk/Daftar

                        <div class="menu">
                            <form class="ui loginMargin setLoginWidth form">
                                <div class="field">
                                    <label>Email</label>
                                    <input placeholder="Email" />
                                </div>
                                <div class="field">
                                    <label>Kata Sandi</label>
                                    <input placeholder="Kata Sandi" />
                                </div>
                                <div class="field">
                                    <Link to='/itworks'>Lupa Kata Sandi ?</Link>
                                </div>
                                <button type="submit" class="ui button color olive fluid" role="button">Masuk</button>
                                <div class="ui horizontal divider">Atau</div>
                                <button type="submit" class="ui button color inverted olive fluid" role="button"><b>Daftar</b></button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
)

export default Header