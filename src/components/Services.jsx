import React from 'react'; 

const Services = () => {
    return(
        <>
        <section className="services container">
            <div className="row">
                <div className="col-md-12">
                    <p className="sectionIntro">Solutions for every factor</p>
                    <h1 className="sectionAbout">Software architecture, design and <br />implementation for any industry🔥.</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="servicesCards">
                        <div className="iconBox">
                            <img src="../img/services/1.png" alt="" />
                        </div>
                        <h3>Custom software <br /> development</h3>
                        <br /> 
                        <p>We design and build custom software applications to meet the specific needs of our clients.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="servicesCards">
                        <div className="iconBox">
                            <img src="../img/services/2.png" alt="" />
                        </div>
                        <h3>Business consulting</h3>
                        <br /> 
                        <br /> 
                        <p>Assisting other companies in improving business strategies   and operations</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="servicesCards">
                        <div className="iconBox">
                            <img src="../img/services/3.png" alt="" />
                        </div>
                        <h3>Web development <br /> services</h3>
                        <br /> 
                        <p>Creating and designing functional websites for businesses or individuals.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="servicesCards">
                        <div className="iconBox">
                            <img src="../img/services/4.png" alt="" />
                        </div>
                        <h3>Application <br /> maintenance and <br /> support</h3>
                        <p>We ensure software applications run smoothly and efficiently through ongoing support and maintenance</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services;