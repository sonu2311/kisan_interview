import './library.css';
import React from 'react';

export function Header2() {
  return (
    <div className="hsplit" >
      <div>
        <a href="#/example1">
          <div className="link_box" >Example1</div>
        </a>
      </div>
      <div>
        <a href="#/example2">
          <div className="link_box" >Example2</div>
        </a>
      </div>
      <div>
        <a href="#/example3">
          <div className="link_box" >Example3</div>
        </a>
      </div>
    </div>
  );
}


export function Header() {
  // const isLogin = ("login_key" in session && "id" in session.login_key && session.login_key.id != null)
  const profile_name="sonu"
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)


  const menuOpenClose = function(){
    setIsMenuOpen(!isMenuOpen)
    console.log("isMenuOpen===", isMenuOpen)
  }

  const logout =function(){
    window.location.href = "#/login"
  }

  return (
    <>
      <div className="head_div" >
        <div className="hsplit">
            <div className="logo" >
              OYODO
            </div>
            <div className="title" style={{display: 'none'}}>
              Crix
            </div>
            <div className="hsplit navbar_tabs" style={{float: 'right', marginRight: '25px'}}>
              <div className="show-md hide-xs show-sm heading">
                HOME
              </div>
              <div className="show-md hide-xs show-sm heading">
                DAPIBUS
              </div>
              <div className="show-md hide-xs show-sm heading">
                ULTRICES
              </div>
              <div className="show-md hide-xs show-sm heading ">
                BIBENDUM 
              </div>
              <div className="show-md hide-xs show-sm heading">
                MEGNA
              </div>
              <div className="hide-lg hide-md show-xs show-sm" style={{paddingTop: '6px', cursor:'pointer'}}>
                <div className="menu" onClick={menuOpenClose}>
                  <span className="material-icons" style={{fontWeight: 600}}>
                    more_vert
                  </span>
                </div>

              {isMenuOpen && (
                <div style={{position: 'fixed', top: '62px', right: '23px', borderRadius: '2px', boxShadow: '1px 2px 3px #888888', cursor: 'pointer', zIndex: '100px', backgroundColor: '#fff'}} >
                  
                  <div className="hide-md show-xs hide-sm logout_div" style={{backgroundColor: '#eee'}}>
                    <div style={{marginLeft: '5px', fontSize: '15px', marginTop: '5px'}}>
                      HOME
                    </div>
                  </div>
                  <div className="logout_div" >
                    DAPIBUS
                  </div>
                  <div className="hide-md show-xs hide-sm logout_div" >
                    ULTRICES
                  </div>            
                  <div className="hide-md show-xs hide-sm logout_div">
                    BIBENDUM  
                  </div>
                  <div className="logout_div">
                    MEGNA
                  </div>
                </div>
              )}






              </div>
            </div>
        </div>
      </div>
      <div style={{height: '67px'}} />
    </>

  )
}