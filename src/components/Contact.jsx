import React from 'react';


const Contact = () => {
    return(
       <section className="Contact">
           <div className="row left">
               <div className="col-md-7">
                   <h1>Subscribe to </h1> <h1> <span>our newsletter</span></h1>
                   <div className="form">
                       <input type="email" name="email" id="email" placeholder="Your email address" />
                       <div className="terms">
                           <i></i>
                           <p>I agree with Privacy Policy and <br />
                            Terms of Conditions</p>
                        <button className="subscribe">Subscribe <i className="fa-solid fa-paper-plane-top"></i></button>
                       </div>
                   </div>
               </div>
               <div className="col-md-5 right">
                   <div className="iconBox">
                    <img src="../img/anounce1.png" alt="" />
                   </div>
                   <p>Get the latest <span>free</span> event conference notification and a reminder of upcoming speakers.</p>
               </div>
           </div>
       </section>
)
}

export default Contact;