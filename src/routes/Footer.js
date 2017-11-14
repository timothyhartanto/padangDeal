import React from 'react';
import 'semantic/dist/semantic.min.css';
import {Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import ItWorks from './itworks';

const Footer = () => (
    <div class="footer ui grey inverted vertical segment">
        <div class="ui stackable divided inverted grid container">
            <div class="ten wide column">
                <div class="ui basic segment">
                    <h4 class="ui header">PadangDeal</h4>
                    <p class="text black">Tempat anda mendapatkan promo-promo termurah di Kota Padang!</p>
                </div>
            </div>
            <div class="three wide column">
                <div class="ui basic segment">
                    <h4 class="ui header">Bantuan</h4>
                    <div class="ui link list">
                        <Link to='/' class="footerLinkColor boldText">Tentang Kami</Link>
                        <div/>
                        <Link to='/' class="footerLinkColor boldText">Kontak</Link>
                        <div/>
                        <Link to='/' class="footerLinkColor boldText">Peraturan</Link>
                        <div/>
                        <Link to='/' class="footerLinkColor boldText">FAQ</Link>
                    </div>
                </div>
            </div>
            <div class="three wide column">
                <div class="ui basic segment">
                    <h4 class="ui header">Ikuti Kami</h4>
                    <Link to='/'><i class="black big facebook square icon"/></Link>
                    <Link to='/itworks'><i class="black big instagram icon"/></Link>
                </div>
            </div>
        </div>
    </div>
)

export default Footer