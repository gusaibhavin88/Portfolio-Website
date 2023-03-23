import React from 'react'
import "./Fixeditems.css"
import "../../App.css"
import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Telegram,
    Twitter,
} from "../../assets/Index"

const Fixeditems = () => {
    return (

        <div className="fixeditem">
            <div className="email">Gusaibhavin88@gmail.com</div>
            <div className="platform" >
                <a href="">
                    <img src={Twitter} alt="" />
                </a>
                <a href="https://github.com/gusaibhavin88" target="_blank"
                    rel="noreferrer"  >
                    <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/bhavin-gusai-0093a9183" target="_blank"
                    rel="noreferrer">
                    <img src={Linkedin} alt="" />
                </a>
                <a href="https://t.me/Bhavingusai" target="_blank"
                    rel="noreferrer">
                    <img src={Telegram} alt="" />
                </a>
                <a href="https://instagram.com/bhavin.goswami.988?igshid=ZDdkNTZiNTM=" target="_blank"
                    rel="noreferrer">
                    <img src={Instagram} alt="" />
                </a>
                <a href="https://www.facebook.com/bhavin.goswami.988" target="_blank"
                    rel="noreferrer">
                    <img src={Facebook} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Fixeditems