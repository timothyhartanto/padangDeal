import React from 'react';
import 'semantic/dist/semantic.min.css';
import { Switch, Route } from 'react-router-dom'

const Footer = () => (
    <div class="footer ui inverted black footer vertical segment">
        <div class="ui stackable divided inverted computer only grid container">
            <div class="ten wide column">
                <h4 class="ui inverted header">AskTravel</h4>
                <p>Worldwide Traveler's Marketplace</p>
            </div>
            <div class="three wide column">
                <div class="ui basic segment">
                    <h4 class="ui inverted header">SITEMAP</h4>
                    <div class="ui inverted link list">

                        <a href="/register" class="item">Daftar</a>
                        <a href="/login" class="item">Login</a>

                    </div>
                </div>
            </div>
            <div class="three wide column">
                <div class="ui basic segment">
                    <h4 class="ui inverted header">HELP</h4>
                    <div class="ui inverted link list">
                        <a href="/help/about" class="item">About</a>
                        <a href="/help/contact" class="item">Kontak</a>
                        <a href="/help/support" class="item">Bantuan</a>
                        <a href="/help/rules" class="item">Peraturan</a>
                        <a href="/help/faq" class="item">FAQ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Footer