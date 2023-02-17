import React from 'react';


const Solutions = () => {
    return(
       <div className="solutions">
           <div className="row solutionSegments">
               <div className="col-md-5">
                   <div className="solutionImgHolder">
                       <img src="../img/solutions/1.png" alt="" />
                   </div>
               </div>
               <div className="col-md-7">
                    <p className="sectionIntro">Solutions for every factor</p>
                    <h1 className="sectionAbout">Solutions for business collaborations⚡</h1>
                    <p className="content">Creating custom software solutions that enhance efficiency and streamline operations for a variety of industries, including individuals, businesses, organizations, and institutions.</p>
                    <div className="subContent">
                        <div className="top">
                        <img src="../img/solutions/subcontent.png" alt="img" />
                        <h4>Deploy  <i className="fa-solid fa-arrow-right"></i></h4>
                        </div>
                        <p>Deploy is designed to automate and improve the manual processes of software administration and management, thereby freeing up the engineers to do what they do best.</p>
                    </div>
               </div>
           </div>
           <div className="row solutionSegments">
               <div className="col-md-7">
                    <p className="sectionIntro">Solutions for every factor</p>
                    <h1 className="sectionAbout">Expert software solutions for businesses and individuals</h1>
                    <p className="content">We design and implement custom software to improve efficiency and streamline operations for various clients, including individuals, businesses, organizations, and institutions.</p>
                    <button>Contact us</button>
               </div>
               <div className="col-md-5">
                   <div className="solutionImgHolder pt-5">
                        <img src="../img/solutions/2.png" alt="" />
                   </div>
               </div>
           </div>
           <div className="row solutionSegments">
               <div className="col-md-5">
                   <div className="solutionImgHolder">
                        <img src="../img/solutions/3.jpg" alt="" className="solutionLastImg" />
                   </div>
               </div>
               <div className="col-md-7">
                    <p className="sectionIntro pt-5">Work with us</p>
                    <h1 className="sectionAbout">Revamp your business strategies with us today!</h1>
                    <hr />
                    <p className="content">Rethink and revamp the ways your business operates to create new <br /> and improved solutions</p>
                    <button>Contact us</button>
               </div>
           </div>
       </div>
)
}

export default Solutions;