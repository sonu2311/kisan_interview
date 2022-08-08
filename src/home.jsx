import './main.css';
import './library.css';
import {Header} from './header';
import React from 'react';
import { Content } from './content';
import { RepeatCard } from './repeat_card';

function Form(){
  return(
    <>
      <div className='form_card'>
        <div className='submenu_dropdown_card'>
          <div style={{textAlign:"center", fontSize:"20px", fontWeight:"600", color:"#333", letterSpacing:"1px", padding:"10px 1px"}}>Submenu</div> 
          <div className='submenudropdown'>Home</div>
          <div className='submenudropdown'>Examles</div>
          <div className='submenudropdown'>Contact</div>
          <div className='submenudropdown'>About</div>
        </div>
        <div className='information_card'>
          <div style={{backgroundColor:"#eae7e8", padding:"15px 1px"}}>
            <div className='hsplit ' style={{padding:"4px 30px"}}>
              <div className='person_info_left'>Name</div>
              <div className='person_info_right'>Nomen Nesico</div>
            </div>
            <div className='hsplit ' style={{padding:"4px 30px"}}>
              <div className='person_info_left'>Email</div>
              <div className='person_info_right'>nomen@exapmle.com</div>
            </div>
            <div className='hsplit ' style={{padding:"4px 30px"}}>
              <div className='person_info_left'>Phone</div>
              <div className='person_info_right'>+856774555</div>
            </div>
          </div>
          <div className='massage_card' style={{}}>
            <div style={{textAlign:"center", fontSize:"20px", fontWeight:"600", color:"#333", letterSpacing:"1px", padding:"10px 1px"}}>
              Send me a massage
            </div>
            <div>
              <div className="input_div">
                <div className="input_name"
                >Subject</div>
                <div>
                  <input className="input_text" type="text" name="name" />
                </div>
              </div>
            </div>
            <div>
              <div className="input_div">
                <div className="input_name"
                >Message</div>
                <div>
                  <textarea  rows="5" cols="20" className="message_text" type="text" name="name"></textarea>
                </div>
              </div>
            </div>
            <div style={{textAlign:"center", padding:"15px 35px"}} >
              <button className='sendbutton'>Send</button>
            </div>     
          </div>
          <div>
            <div style={{textAlign:"center", fontSize:"20px", fontWeight:"600", color:"#333", letterSpacing:"1px", padding:"20px 1px",backgroundColor:"#eae7e8"}}>
              Or meet me at the office
            </div>
            <div><img src="images/image6.jpg" style={{width:"100%", height:"50%"}}/></div>
            
            <div className='location'>
              <div style={{width:"150px", marginLeft:"35px"}}>
                ONE MIDTOWN 11 Hio Shing Rd Tsuen Wan
              </div>
            </div>
          </div> 
        </div>   
      </div>

    </>
  )
}



function Home(){
  var l =[1,2,3,4,5]
    return (
        <>
          <Header/>
          <div className='below_div_of_header'>
            <div className='inside_div_of_below_div'>Duis mollis, est non commodo luctus,</div>
            <div className='inside_div_of_below_div'>nisi erat prottitor ligula,</div>
            <div className='inside_div_of_below_div'>eget lacinia odio sem nec elit.</div>  
          </div>
          <div className='main_div'>
            <div className='hsplit'>
              <div className=" col-lg-8 col-md-6 col-sm-12 col-xs-12" > 
                <Content/>
              </div> 
              <div className='mid_panel col-lg-4 col-md-6 col-sm-12 col-xs-12'>
               <Form/> 
              </div>
            </div>
            <div className="line_through subtitle"> &nbsp;&nbsp;Related Articles&nbsp;&nbsp;</div>
            <div className='hsplit'>  
              {l.map ((x)=>(
                <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                <RepeatCard/>
              </div>
              ))}
            </div>
          </div>
          <div style={{marginTop:"40px", textAlign:"center", backgroundColor:"#24373e", }}>
            <div className='hsplit' style={{padding:"25px 1px"}}>
              <div className='bottom_content col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                <h3 style={{color:"#ccc"}}>About Us</h3>
                <div className='bottom_content_div'>Automotive</div>
                <div className='bottom_content_div'>Wholesale</div>
                <div className='bottom_content_div'>Manufacturing</div>
                <div className='bottom_content_div'>Building</div>
                <div className='bottom_content_div'>Developers</div>
                <div className='bottom_content_div'>Rental</div>
                <div className='bottom_content_div'>Developers</div>
                <div className='bottom_content_div'>Lagal</div>
              </div>
              <div className='bottom_content col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                <h3 style={{color:"#ccc"}}>Lagal</h3>
                <div className='bottom_content_div'>Automotive</div>
                <div className='bottom_content_div'>Wholesale</div>
                <div className='bottom_content_div'>Manufacturing</div>
                <div className='bottom_content_div'>Building</div>
                <div className='bottom_content_div'>Developers</div>
                <div className='bottom_content_div'>Rental</div>
                <div className='bottom_content_div'>Developers</div>
                <div className='bottom_content_div'>Lagal</div>
              </div>
              <div className='bottom_content col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                <h3 style={{color:"#ccc"}}>Developers</h3>
                <div className='bottom_content_div'>Automotive</div>
                <div className='bottom_content_div'>Wholesale</div>
                <div className='bottom_content_div'>Manufacturing</div>
                <div className='bottom_content_div'>Building</div>
                <div className='bottom_content_div'>Developers</div>
                <div className='bottom_content_div'>Rental</div>
                <div className='bottom_content_div'>Developers</div>
                <div className='bottom_content_div'>Lagal</div>
              </div>
            </div>
          </div>
          
        </>
    );
}

export default Home;