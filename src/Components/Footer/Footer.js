import React from 'react';
import './Footer.css';
import Logo from '../../Assets/logo.png';

import { BsFacebook as Facebook } from "react-icons/bs";
import { BsTwitter as Twitter } from "react-icons/bs";
import { BsYoutube as Youtube } from "react-icons/bs";
import { BsLinkedin as LinkedIn } from "react-icons/bs";
import { BsInstagram as Instagram } from "react-icons/bs";


function Footer() {
  return (
    <div className="footer-body">
        <img src={Logo} alt="" />
          <div className="footer-title">PT NODEWAVE SOLUSI TEKNOLOGI</div>
            <div className="footer-address">
            Graha Pena Surabaya <br></br>
            Jl. Ahmad Yani no. 88 Surabaya <br></br>
                Phone : +62811258280 <br></br>
                Email : support@nodewave.id</div>

                <Facebook className="socmed-icons"/>
                <Twitter className="socmed-icons" />
                <Youtube className="socmed-icons" />
                <LinkedIn className="socmed-icons" />
                <Instagram className="socmed-icons" />
    </div>
  )
}

export default Footer