import React from "react";
import './main.css';
import './library.css';
import {Header} from './header';

export function MoreInSeries() {
  return (
    <div >

      <div className="line_through subtitle"> &nbsp;&nbsp;More in this series&nbsp;&nbsp;</div>
      <div className="hsplit" style={{marginTop:"25px"}}>
        <div className="img_in_side_content_card_div">
          <img style={{width:"100%"}} src="images/image6.jpg"/>
        </div>
        <div className="side_content_card">
          <div className="colorful_heading">Porta Parturient Fermentum Euismod</div>
          <p className="third_paragraph">
          LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May  
          </p>
        </div>
      </div>

      <div className="hsplit" style={{marginTop:"25px"}}>
        <div className="img_in_side_content_card_div">
          <img style={{width:"100%"}} src="images/image6.jpg"/>
        </div>
        <div className="side_content_card">
          <div className="colorful_heading">Porta Parturient Fermentum Euismod</div>
          <p className="third_paragraph">
          LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003 
          </p>
        </div>
      </div>
    </div>
  )
}

export function Content() {
  return (
    <>
      <div className="" style={{marginBottom:"50px", marginLeft: "20px"}}>
        <h3 > Justo Vulputate Tortor Sem</h3>
        <p className="first_paragraph">
        LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.Founded in 2003, LinkedIn connects the world's professionals to make them more productive and successful. With more than 850 million members worldwide.
        Founded in 2003, LinkedIn connects the world's professionals to make them more productive and successful. With more than 850 million members worldwide, including executives from every Fortune 500 company, LinkedIn is the world's largest professional network. 
        </p>
        <p className="second_paragraph">
        LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.Founded in 2003, LinkedIn connects the world's professionals to make them more productive and successful. With more than 850 million members worldwide.
        </p>
        <p className="third_paragraph">
        LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.Founded in 2003, LinkedIn connects the world's professionals to make them more productive and successful. With more than 850 million members worldwide.
        </p>
        <MoreInSeries/>
      </div>
    </>
  )
}

