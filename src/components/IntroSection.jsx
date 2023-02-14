import React from 'react'; 

const IntroSection = () => {
    return(
        <>
        <section className="introSection">
            <div className="row">
                <div className="col-md-6">
                <p className="sectionIntro">Industry Software Solution⚡</p>
                <h1 className="sectionAbout">Custom digital platform software development</h1>
                <div className="buttons">
                    <button>Talk to sales</button>
                    <button>Check our products ✨</button>
                </div>
                </div>
                <div className="col-md-6 introRight">
                    <p>We specialize in developing custom software solutions that enhance efficiency and organization for a variety of clients in various industries.</p>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-md-12 introbg">
                    <img className="img-fluid " src="../img/introbg.png" alt="" />
                </div>
            </div>
        </section>
        </>
    )
}

export default IntroSection;