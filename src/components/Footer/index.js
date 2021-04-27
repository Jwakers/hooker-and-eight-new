import React from "react"
import { Link } from "gatsby"
import * as style from "./footer.module.scss"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"

export default function Footer() {
    return (
        <footer className={style.Footer}>
            <div className="container">
                <div className="grid">
                    <div className="grid__6 grid__md-3">
                        <h3>Useful links</h3>
                        <ul className={style.Footer_list}>
                            <li>
                                <Link to="./">menu</Link>
                            </li>
                            <li>
                                <Link to="/gallery">gallery</Link>
                            </li>
                            <li>
                                <Link to="/about">about</Link>
                            </li>
                            <li>
                                <Link to="/find-us">find us</Link>
                            </li>
                            <li>
                                <Link to="/openside">openside</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__6">
                        <h3>Address</h3>
                        <ul className={style.Footer_list}>
                            <li>Hooker &amp; Eight</li>
                            <li>49 Westgate Street</li>
                            <li>Gloucester</li>
                            <li>GL1 2NW</li>
                            <li>
                                <a href="tel:01452690829">01452 690 829</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__12 grid__md-3">
                        <h3>Legal</h3>
                        <ul className={style.Footer_list}>
                            <li>Registered in United Kingdom</li>
                            <li>Company Reg No: OC427241</li>
                            <li>VAT Reg No: 354972270</li>
                            <li>
                                <a href="tel:01452690829">01452 690 829</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__6 grid__md-3"></div>
                </div>
                <div className={style.Footer_social}>
                    <div className={style.Footer_social_icon}>
                        <a href="https://www.facebook.com/Hooker-Eight-621016885063498/" target="_blank" rel="noreferrer">
                            <FaFacebook />
                        </a>
                    </div>
                    <div className={style.Footer_social_icon}>
                        <a href="https://www.instagram.com/hookerandeight/?hl=en" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className={style.Footer_social_icon}>
                        <a href="https://twitter.com/hookerandeight?lang=en" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                    </div>
                    <div className={style.Footer_social_icon}>
                        <a href="https://www.youtube.com/channel/UC4jSOgpk3Khq4SKqCqn-H8w" target="_blank" rel="noreferrer">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className={style.Footer_copyright}>
                    &copy;
                    <script>document.write(new Date().getFullYear())</script>
                    Hooker &amp; Eight. All rights reserved worldwide.
                </div>
            </div>
        </footer>
    )
}
