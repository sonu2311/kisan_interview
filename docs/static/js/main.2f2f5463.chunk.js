(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(8),s=a.n(o),i=a(2);a(4),a(5);function c(){var e=l.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"head_div"},l.a.createElement("div",{className:"hsplit main_div"},l.a.createElement("div",{className:"logo m20 "},l.a.createElement("img",{src:"images/logo.png",style:{height:"30px"}})),l.a.createElement("div",{className:"hsplit navbar_tabs",style:{float:"right",marginRight:"25px"}},l.a.createElement("div",{className:"show-md hide-xs show-sm heading"},"HOME"),l.a.createElement("div",{className:"show-md hide-xs show-sm heading"},"DAPIBUS"),l.a.createElement("div",{className:"show-md hide-xs show-sm heading"},"ULTRICES"),l.a.createElement("div",{className:"show-md hide-xs show-sm heading "},"BIBENDUM"),l.a.createElement("div",{className:"hide-lg hide-md show-xs show-sm",style:{paddingTop:"6px",cursor:"pointer"}},l.a.createElement("div",{className:"menu",onClick:function(){n(!a),console.log("isMenuOpen===",a)}},l.a.createElement("span",{className:"material-icons",style:{fontWeight:600}},"more_vert")),a&&l.a.createElement("div",{style:{position:"fixed",top:"62px",right:"23px",borderRadius:"2px",boxShadow:"1px 2px 3px #888888",cursor:"pointer",zIndex:"100px",backgroundColor:"#fff"}},l.a.createElement("div",{className:"hide-md show-xs hide-sm menu_div",style:{backgroundColor:"#eee"}},l.a.createElement("div",{style:{marginLeft:"5px",fontSize:"15px",marginTop:"5px"}},"HOME")),l.a.createElement("div",{className:"menu_div"},"DAPIBUS"),l.a.createElement("div",{className:"hide-md show-xs hide-sm menu_div"},"ULTRICES"),l.a.createElement("div",{className:"hide-md show-xs hide-sm menu_div "},"BIBENDUM"),l.a.createElement("div",{className:"menu_div"},"MEGNA")))))),l.a.createElement("div",{style:{height:"57px"}}))}var r=a(6);var m="";function d(){return JSON.parse(localStorage.session||"null")||{login_key:{}}}var u=d(),p=l.a.createContext();function E(e){var t=e.children,a=(e.defaultGlobalState,l.a.useState(d())),n=Object(i.a)(a,2),o=n[0],s=n[1];return l.a.createElement(p.Provider,{value:[o,function(e){s(e),localStorage.session=JSON.stringify(e||u)}]},t)}function v(e,t,a,n){(t=t||{}).session=u,e.length>0&&"/"===e[0]&&(e=m+e),fetch(e,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){e.session=e.session||u,u=e.session,localStorage.session=JSON.stringify(u),a&&a(e)}).catch(function(e){console.log(e),n&&n(e)})}var h=function(){var e=l.a.useState("A"),t=Object(i.a)(e,2),a=t[0],n=t[1];return l.a.useEffect(function(){v("/my_name",{age:60},function(e){console.log(e),n(e.name)})},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c,null),l.a.createElement("div",{className:"top_box"},l.a.createElement("h2",null,"Example1"),l.a.createElement("div",null,"Name = ",a),l.a.createElement("button",{onClick:function(){v("/new_name",{age:61},function(e){n(e.name)})}},"Click for new name")))};var _=function(){var e=function(e){var t=l.a.useState(function(){return Object(r.b)("function"===typeof e?e():e,!0)}),a=Object(i.a)(t,2),n=a[0],o=a[1];return[n,function(e){o("function"===typeof e?Object(r.a)(e):Object(r.b)(e))}]}({books:[{id:1,is_open:!0,price:100},{id:2,is_open:!1,price:200},{id:3,is_open:!0,price:300}],id_counter:4}),t=Object(i.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",null,l.a.createElement(c,null),l.a.createElement("h2",null,"Example2"),l.a.createElement("div",{className:"top_box"},a.books.map(function(e,t){return l.a.createElement("div",{key:e.id,style:{border:"solid red 1px",padding:"10px"}},"Book-",e.id,l.a.createElement("div",null,e.is_open?"Open":"Close"," ; Price = ",e.price),l.a.createElement("button",{onClick:function(){return function(e){n(function(t){t.books[e].is_open=!0})}(t)}},"Open"),l.a.createElement("button",{onClick:function(){return function(e){n(function(t){t.books[e].is_open=!1})}(t)}},"Close"),l.a.createElement("button",{onClick:function(){return function(e,t){n(function(a){a.books[e].price+=t})}(t,100)}},"Increase Price"))})),l.a.createElement("button",{onClick:function(){n(function(e){e.books.push({id:e.id_counter,is_open:!1,price:80}),e.id_counter+=1})}},"Add"))};var f=function(){return l.a.createElement("div",null,l.a.createElement(c,null),l.a.createElement("div",null,"Example3"))},g=a(9),N=a(0);function b(){return l.a.createElement("div",null,l.a.createElement("div",{className:"line_through subtitle"}," \xa0\xa0More in this series\xa0\xa0"),l.a.createElement("div",{className:"hsplit",style:{marginTop:"25px"}},l.a.createElement("div",{className:"img_in_side_content_card_div"},l.a.createElement("img",{style:{width:"100%"},src:"images/more_in_series1.png"})),l.a.createElement("div",{className:"side_content_card"},l.a.createElement("div",{className:"colorful_heading"},"Porta Parturient Fermentum Euismod"),l.a.createElement("p",{className:"third_paragraph"},"LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May"))),l.a.createElement("div",{className:"hsplit",style:{marginTop:"25px"}},l.a.createElement("div",{className:"img_in_side_content_card_div"},l.a.createElement("img",{style:{width:"100%"},src:"images/more_in_series2.png"})),l.a.createElement("div",{className:"side_content_card"},l.a.createElement("div",{className:"colorful_heading"},"Porta Parturient Fermentum Euismod"),l.a.createElement("p",{className:"third_paragraph"},"LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003"))))}function x(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"",style:{marginBottom:"50px",marginLeft:"20px"}},l.a.createElement("h3",null," Justo Vulputate Tortor Sem"),l.a.createElement("p",{className:"first_paragraph"},"LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.Founded in 2003, LinkedIn connects the world's professionals to make them more productive and successful. With more than 850 million members worldwide. Founded in 2003, LinkedIn connects the world's professionals to make them more productive and successful. With more than 850 million members worldwide, including executives from every Fortune 500 company, LinkedIn is the world's largest professional network."),l.a.createElement("p",{className:"second_paragraph"},"LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.Founded in 2003, LinkedIn connects the world's professionals to make them more productive and successful. With more than 850 million members worldwide."),l.a.createElement("p",{className:"third_paragraph"},"LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.Founded in 2003, LinkedIn connects the world's professionals to make them more productive and successful. With more than 850 million members worldwide."),l.a.createElement(b,null)))}function y(e){var t=e.image;return l.a.createElement("div",{className:"repeat_card m20"},l.a.createElement("div",{className:""},l.a.createElement("img",{style:{width:"100%"},src:t})),l.a.createElement("div",null,l.a.createElement("div",{className:"colorful_heading_in_repeat"},"Porta Parturient Fermentum Euismod"),l.a.createElement("div",{className:""},"LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003")))}function w(){var e=l.a.useState(""),t=Object(i.a)(e,2),a=t[0],n=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form_card"},l.a.createElement("div",{className:"submenu_dropdown_card"},l.a.createElement("div",{style:{textAlign:"center",fontSize:"20px",fontWeight:"600",color:"#333",letterSpacing:"1px",padding:"10px 1px"}},"Submenu"),l.a.createElement("div",{className:"submenudropdown"},"Home"),l.a.createElement("div",{className:"submenudropdown",style:{backgroundColor:"#00dfcf",color:"#fff"}},"Examles"),l.a.createElement("div",{className:"submenudropdown"},"Contact"),l.a.createElement("div",{className:"submenudropdown"},"About")),l.a.createElement("div",{className:"information_card"},l.a.createElement("div",{style:{backgroundColor:"#eae7e8"}},l.a.createElement("img",{src:"images/profile_background.png",style:{width:"100%"}})),l.a.createElement("div",{style:{backgroundColor:"#eae7e8",padding:"15px 1px"}},l.a.createElement("div",{className:"hsplit ",style:{padding:"4px 30px"}},l.a.createElement("div",{className:"person_info_left"},"Name"),l.a.createElement("div",{className:"person_info_right"},"Nomen Nesico")),l.a.createElement("div",{className:"hsplit ",style:{padding:"4px 30px"}},l.a.createElement("div",{className:"person_info_left"},"Email"),l.a.createElement("div",{className:"person_info_right"},"nomen@exapmle.com")),l.a.createElement("div",{className:"hsplit ",style:{padding:"4px 30px"}},l.a.createElement("div",{className:"person_info_left"},"Phone"),l.a.createElement("div",{className:"person_info_right"},"+8567745555"))),l.a.createElement("div",{className:"massage_card",style:{}},l.a.createElement("div",{style:{textAlign:"center",fontSize:"20px",fontWeight:"600",color:"#333",letterSpacing:"1px",padding:"10px 1px"}},"Send me a massage"),l.a.createElement("div",null,l.a.createElement("div",{className:"input_div"},l.a.createElement("div",{className:"input_name"},"Subject"),l.a.createElement("div",null,l.a.createElement("input",{className:"input_text",type:"text",name:"name",value:a,onChange:function(e){return n(e.target.value)}})))),l.a.createElement("div",null,l.a.createElement("div",{className:"input_div"},l.a.createElement("div",{className:"input_name"},"Message"),l.a.createElement("div",null,l.a.createElement("textarea",{rows:"5",cols:"20",className:"message_text",type:"text",name:"name"})))),l.a.createElement("div",{style:{textAlign:"center",padding:"15px 35px"}},l.a.createElement("button",{className:"sendbutton",onClick:function(){alert("Your message '"+a+"' is send"),n("")}},"Send"))),l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"center",fontSize:"20px",fontWeight:"600",color:"#333",letterSpacing:"1px",padding:"20px 1px",backgroundColor:"#eae7e8"}},"Or meet me at the office"),l.a.createElement("div",null,l.a.createElement("img",{src:"images/map.png",style:{width:"100%",height:"50%"}})),l.a.createElement("div",{className:"location"},l.a.createElement("div",{style:{width:"150px",marginLeft:"35px"}},"ONE MIDTOWN 11 Hio Shing Rd Tsuen Wan"))))))}function k(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{marginTop:"40px",textAlign:"center",backgroundColor:"#24373e"}},l.a.createElement("div",{className:"hsplit",style:{padding:"25px 1px"}},l.a.createElement("div",{className:"bottom_content col-lg-4 col-md-4 col-sm-4 col-xs-4"},l.a.createElement("h3",{style:{color:"#ccc"}},"About Us"),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Automotive")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Wholesale")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Wholesale")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Rental")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Lagal")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Manufacturing")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Developers"))),l.a.createElement("div",{className:"bottom_content col-lg-4 col-md-4 col-sm-4 col-xs-4"},l.a.createElement("h3",{style:{color:"#ccc"}},"Lagal"),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Automotive")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Wholesale")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Wholesale")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Rental")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Manufacturing")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Manufacturing")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Developers"))),l.a.createElement("div",{className:"bottom_content col-lg-4 col-md-4 col-sm-4 col-xs-4"},l.a.createElement("h3",{style:{color:"#ccc"}},"Developers"),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Automotive")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Wholesale")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Wholesale")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Rental")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Manufacturing")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Manufacturing")),l.a.createElement("div",{className:"bottom_content_div"},l.a.createElement("a",{href:"",style:{textDecoration:"none"}},"Developers"))))))}var S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,null),l.a.createElement("div",{className:"below_div_of_header"},l.a.createElement("div",{className:"main_div"},l.a.createElement("div",{className:"m20"},l.a.createElement("div",{className:"inside_div_of_below_div"},"Duis mollis, est non commodo luctus,"),l.a.createElement("div",{className:"inside_div_of_below_div"},"nisi erat prottitor ligula,"),l.a.createElement("div",{className:"inside_div_of_below_div"},"eget lacinia odio sem nec elit.")))),l.a.createElement("div",{className:"main_div"},l.a.createElement("div",{className:"hsplit"},l.a.createElement("div",{className:"col-lg-8 col-md-7 col-sm-12 col-xs-12"},l.a.createElement(x,null)),l.a.createElement("div",{className:"col-lg-4 col-md-5 col-sm-12 col-xs-12"},l.a.createElement(w,null))),l.a.createElement("div",{className:"m20"},l.a.createElement("div",{className:"line_through subtitle"},"\xa0\xa0Related Articles\xa0\xa0")),l.a.createElement("div",{className:"hsplit"},["images/related_articles1.png","images/related_articles1.png","images/related_articles1.png","images/related_articles1.png","images/related_articles1.png"].map(function(e){return l.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12"},l.a.createElement(y,{image:e}))}))),l.a.createElement(k,null))};var D=function(){return l.a.createElement(g.a,null,l.a.createElement(N.c,null,l.a.createElement(N.a,null,l.a.createElement(N.a,{path:"/",element:l.a.createElement(S,null)}),l.a.createElement(N.a,{path:"/example1",element:l.a.createElement(h,null)}),l.a.createElement(N.a,{path:"/example2",element:l.a.createElement(_,null)}),l.a.createElement(N.a,{path:"/example3",element:l.a.createElement(f,null)}),l.a.createElement(N.a,{path:"/home",element:l.a.createElement(S,null)}),l.a.createElement(N.a,{path:"*",element:l.a.createElement("h1",null,"Invalid")}))))};s.a.createRoot(document.getElementById("root")).render(l.a.createElement(E,null,l.a.createElement(D,null)))},4:function(e,t,a){},5:function(e,t,a){}},[[10,2,1]]]);
//# sourceMappingURL=main.2f2f5463.chunk.js.map