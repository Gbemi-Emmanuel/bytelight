import React from 'react';


const Footer = () => {
    return(
        <section className="container-fluid footer">
            <div className="row footerContent">
                <div className="col-md-5">
                    <a href="../index.html">
                    <img src="../img/logo.png" alt="" />
                    </a>
                </div>
                <div className="col-md-7">
                
                    <div className="row moreLinks">
                        <div className="col-md-4">
                            <p>Product</p>
                            <ul>
                                <li><a href="#">Deploy</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <p>Company</p>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Industries</a></li>
                                <li><a href="#">How we work</a></li>
                                <li><a href="#">Career</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <p>Support</p>
                            <ul>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>

            <div className="row">
                <div className="col-md-12">
                    <hr />
                    <div className="footerBottom">
                        <p>Bytelight. © 2023. All Rights Reserved.</p>

                        <div className="socialLinks">
                            y
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;