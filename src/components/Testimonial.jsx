import React from 'react'; 

const Testimonial = () => {
    return(
        <>
        <section className="testimonial">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <p>Used by over <span>50+ million</span> users worldwide <br />
                    and trusted by top-tier companies.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 companies">
                    <img src="../img/testimonial/forbes.png" alt="" />
                    <img src="../img/testimonial/fortune.png" alt="" />
                    <img src="../img/testimonial/tc.png" alt="" />
                    <img src="../img/testimonial/wsj.png" alt="" />
                    <img src="../img/testimonial/ft.png" alt="" />
                    <img src="../img/testimonial/cnbc.png" alt="" />
                </div>
            </div>
        </section>
        </>
    )
}

export default Testimonial;