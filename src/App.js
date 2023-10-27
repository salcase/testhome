import React, {useState,useRef,useEffect} from 'react';
import './App.css';
import axios from 'axios';

import home from'./assets/home1.svg';
import mic from'./assets/mic.svg';
import livingroom from'./assets/livingroom.jpg';
import bedroom from'./assets/bedroom.jpg';
import bulb from'./assets/light2.svg';
import bulb2 from'./assets/bulb.svg';
import lamp from'./assets/lamp.svg';
import tv from'./assets/tv.svg';
import ac from'./assets/ac.svg';
import arrow from'./assets/arrow2.svg';
import back from'./assets/back.svg';


import io from "socket.io-client";

const nkref = window.location.href
const _link = window.location.pathname
// const host = window.location.origin

//const socket = io("http://192.168.43.163:2000")
//socket.on("connect", ()=> {
//  //alert(`connection successful with id ${socket.id}`)
//
//} )
//http://192.168.43.163:5000/

//https://pine-butter-puppet.glitch.me/




//>>>>>>>>>>>>>>>>>>>>> Global
/*
  const socket = io("https://pine-butter-puppet.glitch.me/"
,{ headers: {  "user-agent": "Custom Ws Client" }}
  )
*/
//>>>>>>>>>>>>>>>>>>>>> Global



//>>>>>>>>>>>>>>>>>>>>> http://192.168.0.126:5000/


//  const socket = io("http://192.168.0.126:5000/"
//,{ headers: {  "user-agent": "Custom Ws Client" }} )

//>>>>>>>>>>>>>>>>>>>>> Home> http://192.168.0.126:5000


function App() {

  const [dvr, setdvr] = useState("sbinpikin2")
  const [screen, setscreen] = useState(1) 
  const [signal, setsignal] = useState("")
  const [invalue, setinvalue] = useState("")
  const [serverip, setserverip] = useState(0)
  const [sbc, setsbc] = useState("sbchild")


const socket = io("http://192.168.43.163:5000/"
,{ headers: {  "user-agent": "Custom Ws Client" }} )


  socket.on("connect", ()=> {
    setserverip(1)
  //alert(`connection successful with id ${socket.id}`)
} )

socket.on("disconnect", ()=> {
  setserverip(0)
//alert(`connection successful with id ${socket.id}`)
} )


  const [ml, setml] = useState(0)
  const [dl, setdl] = useState(0)
  const [tv1, settv1] = useState(0)
  const [ac1, setac1] = useState(0)
  const [ac2, setac2] = useState(0)
  const [ac3, setac3] = useState(0)
  const [abl1, setabl1] = useState(0)
  const [abl2, setabl2] = useState(0)
  const [chl1, setchl1] = useState(0)
  const [chl2, setchl2] = useState(0)
  
  const [mibla1, setmib1] = useState(0)
  const [mibla2, setmib2] = useState(0)
  const [mibla3, setmib3] = useState(0)
  const [mibla4, setmib4] = useState(0)
  const [mibla5, setmib5] = useState(0)
  const [mibla6, setmib6] = useState(0)
  const [mibla7, setmib7] = useState(0)
  const [mibla8, setmib8] = useState(0)
  const [mibla9, setmib9] = useState(0)
  
  
  const [mibla11, setmib11] = useState(0)
  const [mibla12, setmib12] = useState(0)
  const [mibla13, setmib13] = useState(0)
  const [mibla14, setmib14] = useState(0)
  const [mibla15, setmib15] = useState(0)
  const [mibla16, setmib16] = useState(0)
  const [mibla17, setmib17] = useState(0)


  const [al11, setal11] = useState(0)
  const [al12, setal12] = useState(0)
  const [al13, setal13] = useState(0)

  
  const [al14, setal14] = useState(0)
  const [al15, setal15] = useState(0)
  const [al16, setal16] = useState(0)


  const [kstate, setkstate] = useState("empass")
  const [keycode, setkeycode] = useState("")
  const [keycode2, setkeycode2] = useState("")

  const [yir, setyir] = useState(0)

  
  

  const [hanmouse, sethanmouse] = useState(0)
  const [has, sethas] = useState(1)
  const [rosel, setrosel] = useState(1)
  const [pas, setpas] = useState("")

  
  const [height, setheight] = useState(parseInt(window.innerHeight))
  const [Weiheight, setWeiheight] = useState(parseInt(window.innerWidth))

  
  const [H, setH] = useState(parseInt(document.documentElement.clientHeight))
  const [W, setW] = useState(parseInt(document.documentElement.clientWidth))

  window.addEventListener('resize', function() {
    const dh = document.documentElement.clientHeight
    setH(dh)
  }, true);

  window.addEventListener('resize', function() {
    const dw = document.documentElement.clientWidth
    setW(dw)
  }, true);

  //Capacitor
  //window.screen.orientation.lock('portrait');
  //window.screen.orientation.lock('landscape')

  

  const pass = localStorage.getItem("pass");
  // localStorage.removeItem("pass");


  function tro(){
    if(H>W){return("rote")}else{return("rote2")}
  }
  function tro(){
    if(H>W){return(1)}else{return(8)}
  }

  function setpass() {
    localStorage.setItem("pass",keycode);
    setkstate("empass3");setTimeout(() => { setkstate("empass") }, 1000)
  }

  function roomselector() {
    if(rosel === 1 ){return("living")}else{return("bedrom")}
  }


   function rune() {
    setyir(0)
    if(keycode2.length > 3){if(keycode === keycode2){ setkeycode("");setkeycode2(""); 
    setkstate("empass3");setTimeout(() => { setkstate("empass");setpass() }, 300) 
  }else{setkeycode("");setkstate("empass2");setTimeout(() => { setkstate("empass") }, 300) }
  }else{setkeycode2(keycode); setTimeout(() => { setkeycode("") }, 100);}
    }

    function ooo(i) {
      const wira = document.getElementById("a2")
       sethanmouse(i)
       setTimeout(() => { wira.click() }, 2000);
     }

    function craft() {
      if(pass === keycode ){ sethas(3);setkeycode("")  }else{setkeycode("")}
    }

     function runclear(){if(keycode  === pass){ setyir(1);setkeycode("");localStorage.removeItem("pass") }}
     function cky() { if(yir === 1){
      setyir(0)
      const wira = document.getElementById("a3");
      setTimeout(() => { wira.click() }, 50);
     }}
     function cpro() {
      setTimeout(() => { sethas(2); setyir(0);}, 50); 
     }




  function Predisp(){
    if( pass!=null ){  return(
      <div id="empass" >

        <div id="starscreen" ></div>
<div id="keymom" >
<div id="keys" onClick={e=> setkeycode(keycode+"1")} >1</div>
<div id="keys" onClick={e=> setkeycode(keycode+"2")} >2</div>
<div id="keys" onClick={e=> setkeycode(keycode+"3")} >3</div>
</div>

<div id="keymom" >
<div id="keys" onClick={e=> setkeycode(keycode+"4")}>4</div>
<div id="keys" onClick={e=> setkeycode(keycode+"5")}>5</div>
<div id="keys" onClick={e=> setkeycode(keycode+"6")}>6</div>
</div>

<div id="keymom" >
<div id="keys" onClick={e=> setkeycode(keycode+"7")}>7</div>
<div id="keys" onClick={e=> setkeycode(keycode+"8")}>8</div>
<div id="keys" onClick={e=> setkeycode(keycode+"9")}>9</div>
</div>

<div id="keymom" >
<div id="keys" onClick={e=> {sethas(1);setkeycode("")}} ><img alt='img' id="im2" src={back}  /></div>
<div id="keys" onClick={e=> setkeycode(keycode+"0")} >0</div>
<div id="keys" onTouchStart={e=> {e.preventDefault();ooo(1)}} onTouchEnd={e=> {e.preventDefault();ooo(0);craft();cky()}} 
onMouseDown={e=> {e.preventDefault();ooo(1)}} onMouseUp={e=> {e.preventDefault();ooo(0);craft();cky()}} >Enter</div>
</div>

      </div>) }else{
        return(
          <div id={kstate}>
            <div id="starscreen" ></div>
    <div id="keymom" >
    <div id="keys" onClick={e=> setkeycode(keycode+"1")} >1</div>
    <div id="keys" onClick={e=> setkeycode(keycode+"2")} >2</div>
    <div id="keys" onClick={e=> setkeycode(keycode+"3")} >3</div>
    </div>
    
    <div id="keymom" >
    <div id="keys" onClick={e=> setkeycode(keycode+"4")}>4</div>
    <div id="keys" onClick={e=> setkeycode(keycode+"5")}>5</div>
    <div id="keys" onClick={e=> setkeycode(keycode+"6")}>6</div>
    </div>
    
    <div id="keymom" >
    <div id="keys" onClick={e=> setkeycode(keycode+"7")}>7</div>
    <div id="keys" onClick={e=> setkeycode(keycode+"8")}>8</div>
    <div id="keys" onClick={e=> setkeycode(keycode+"9")}>9</div>
    </div>
    
    <div id="keymom" >
    <div id="keys" onClick={e=> sethas(1)} ><img alt='img' id="im2" src={back}  /></div>
    <div id="keys" onClick={e=> setkeycode(keycode+"0")} >0</div>
    <div id="keys" onClick={e=> {setkeycode(""); setkeycode2("");setyir(0)} }  >clear</div>
    </div>
    
    <div id="keymom" >
    <div id="keys" onClick={e=> rune() }>Enter</div>
    </div>
    
          </div>)
      }
  }


    
  useEffect(() => {


   }, [])


   socket.on("sever",  recived => {setsignal(recived); proserver(recived);runsig(recived)} )

   function runsig(sig) {
    if(sig === "me"){setdvr("sbinpikin");setsbc("sbchild")}
    if(sig === "you"){setdvr("sbinpikin2");setsbc("sbchild2")}
   }

   function proserver(i) { 
    if(i === "Main Light"){setml(1)}
    if(i === "Main Light0"){setml(0)}
    //--------------------------------
    if(i === "Dining Light"){setdl(1)}
    if(i === "Dining Light0"){setdl(0)}
    //--------------------------------
    if(i === "TV"){settv1(1)}
    if(i === "TV0"){settv1(0)}
    //--------------------------------
    if(i === "AC"){setac1(1)}
    if(i === "AC0"){setac1(0)}
    //--------------------------------
    if(i === "Ambient Light"){setabl1(1)}
    if(i === "Ambient Light0"){setabl1(0)}
    //--------------------------------
    if(i === "Ambient2 Light"){setabl2(1)}
    if(i === "Ambient2 Light0"){setabl2(0)}
    //--------------------------------
    if(i === "chandelier Light"){setchl1(1)}
    if(i === "chandelier Light0"){setchl1(0)}
    //--------------------------------
    if(i === "chandelier2 Light"){setchl2(1)}
    if(i === "chandelier2 Light0"){setchl2(0)}
    //--------------------------------
    if(i === "AC2"){setac2(1)}
    if(i === "AC20"){setac2(0)}
    //--------------------------------
    if(i === "AC3"){setac3(1)}
    if(i === "AC30"){setac3(0)}
    //--------------------------------
    if(i === "chanrom"){setmib13(1)}
    if(i === "chanrom0"){setmib13(0)}
    //--------------------------------
    if(i === "ablrom"){setmib12(1)}
    if(i === "ablrom0"){setmib12(0)}
    //--------------------------------
    if(i === "acrom"){setmib15(1)}
    if(i === "acrom0"){setmib15(0)}
    //--------------------------------
    if(i === "acrom2"){setmib16(1)}
    if(i === "acrom20"){setmib16(0)}
    //--------------------------------
    if(i === "acrom2"){setmib16(1)}
    if(i === "acrom20"){setmib16(0)}
    //--------------------------------
    if(i === "mainliligrom"){setmib17(1)}
    if(i === "mainliligrom0"){setmib17(0)}
    //--------------------------------
    //--------------------------------
    if(i === "tvrom"){setmib14(1)}
    if(i === "tvrom0"){setmib14(0)}
    //--------------------------------
    }

    function i1(){if(ml === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function i2(){if(dl === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function i3(){if(tv1 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function i4(){if(ac1 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function i5(){if(abl1 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function i6(){if(abl2 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function i7(){if(chl1 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function i8(){if(chl2 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function i9(){if(ac2 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function i10(){if(ac3 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}


    

    
    function r1(){if(mibla17 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function r2(){if(mibla14 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function r3(){if(mibla15 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function r4(){if(mibla12 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function r5(){if(mibla13 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function r6(){if(mibla16 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function r7(){if(ac3 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}
    function r8(){if(ac3 === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"orangered"})}}


    function statusconn() {
      if(serverip === 0){return({backgroundColor:"#9C130F"})}else{return({backgroundColor:"green"})}
    }

 // function flask(){socket.emit("wee", 200, "shell", {nong:"from"})}
 // function flask2(){
 //   const grab = document.getElementById("stone")
 //   socket.emit("remote",grab.value)
 //   //setsignal(grab.value)
 // }

  function runhome(drr){
    const grab = document.getElementById("stone")
    socket.emit("remote",drr)
    //setsignal(grab.value)
  }


  function runsb() {
    if(dvr==="sbinpikin2"){setdvr("sbinpikin")}
    setTimeout(() => { setdvr("sbinpikin2") }, 2000);
  }
  function scr(i) {
    if(screen===i){return({display:"block"})}else{return({display:"none"})}
  }

  function mainlight() { if(ml === 0) {runhome("Main Light")}else{runhome("Main Light0")}  }
  function dininglight() { if(dl === 0) {runhome("Dining Light")}else{runhome("Dining Light0")}  }
  function tvswitch() { if(tv1 === 0) {runhome("TV")}else{runhome("TV0")}  }
  function acswitch() { if(ac1 === 0) {runhome("AC")}else{runhome("AC0")}  }
  function acswitch2() { if(ac2 === 0) {runhome("AC2")}else{runhome("AC20")}  }
  function acswitch3() { if(ac3 === 0) {runhome("AC3")}else{runhome("AC30")}  }
  function ambientlight() { if(abl1 === 0) {runhome("Ambient Light")}else{runhome("Ambient Light0")}  }
  function ambientlight2() { if(abl2 === 0) {runhome("Ambient2 Light")}else{runhome("Ambient2 Light0")}  }
  function unichan() { if(chl1 === 1 || chl2 === 1) {runhome("chandelier Light0");runhome("chandelier2 Light0")}else{runhome("chandelier2 Light");runhome("chandelier Light")}  }
  function chanlight() { if(chl1 === 0) {runhome("chandelier Light")}else{runhome("chandelier Light0")}  }
  function chanlight2() { if(chl2 === 0) {runhome("chandelier2 Light")}else{runhome("chandelier2 Light0")}  }


  

  function rmainlight() { if(ml === 0) {runhome("mainliligrom")}else{runhome("mainliligrom0")}  }
  function rambientlight() { if(abl1 === 0) {runhome("ablrom")}else{runhome("ablrom0")}  }
  function runichan() { if(chl1 === 1 ) {runhome("chanrom")}else{runhome("chanrom0")}  }


  
  function chanrom() { if(mibla13 === 0) {runhome("chanrom")}else{runhome("chanrom0")}  }
  function ablrom() { if(mibla12 === 0) {runhome("ablrom")}else{runhome("ablrom0")}  }
  function acrom() { if(mibla15 === 0) {runhome("acrom")}else{runhome("acrom0")}  }
  function acrom2() { if(mibla16 === 0) {runhome("acrom2")}else{runhome("acrom20")} }
  function tvrom() { if(mibla14 === 0) {runhome("tvrom")}else{runhome("tvrom0")} }
  function mainliligrom() { if(mibla17 === 0) {runhome("mainliligrom")}else{runhome("mainliligrom0")}  }

  function sflv(i) {
    if(i===1){if(ml === 0){return("minibalon") }else{ return ("minibaloff") }}
    if(i===2){if(abl1 === 0){return("minibalon") }else{ return ("minibaloff") }}
    if(i===3){if(chl1 === 0){return("minibalon") }else{ return ("minibaloff") }}
    if(i===4){if(chl2 === 0){return("minibalon") }else{ return ("minibaloff") }}
    if(i===5){if(abl2 === 0){return("minibalon") }else{ return ("minibaloff") }}
    if(i===6){if(dl === 0){return("minibalon") }else{ return ("minibaloff") }}
    if(i===7){if(ac1 === 0){return("minibalon") }else{ return ("minibaloff") }}
    if(i===8){if(ac2 === 0){return("minibalon") }else{ return ("minibaloff") }}
    if(i===9){if(mibla9 === 0){return("minibalon") }else{ return ("minibaloff") }}
    
    if(i===11){if(mibla17 === 0){return("minibalon") }else{ return ("minibaloff") }}
    if(i===12){if(mibla12 === 0){return("minibalon") }else{ return ("minibaloff") }}
    if(i===13){if(mibla13 === 0){return("minibalon") }else{ return ("minibaloff") }}
  }

  
  function sliw(i) {
    if(i===1){if(ml === 0){return("slideswitch") }else{ return ("slideswitch2") }}
    if(i===2){if(abl1 === 0){return("slideswitch") }else{ return ("slideswitch2") }}
    if(i===3){if(chl1 === 0){return("slideswitch") }else{ return ("slideswitch2") }}
    if(i===4){if(chl2 === 0){return("slideswitch") }else{ return ("slideswitch2") }}
    if(i===5){if(abl2 === 0){return("slideswitch") }else{ return ("slideswitch2") }}
    if(i===6){if(dl === 0){return("slideswitch") }else{ return ("slideswitch2") }}
    if(i===7){if(ac1 === 0){return("slideswitch") }else{ return ("slideswitch2") }}
    if(i===8){if(ac2 === 0){return("slideswitch") }else{ return ("slideswitch2") }}
    if(i===9){if(mibla9 === 0){return("slideswitch") }else{ return ("slideswitch2") }}
    
    if(i===11){if(mibla17 === 0){return("slideswitch") }else{ return ("slideswitch2") }}
    if(i===12){if(mibla12 === 0){return("slideswitch") }else{ return ("slideswitch2") }}
    if(i===13){if(mibla13 === 0){return("slideswitch") }else{ return ("slideswitch2") }}
  }

  function lsa(i) {
    if(i===1){if(ml === 0){return("cbtt") }else{ return ("cbtt2") }}
    if(i===2){if(abl1 === 0){return("cbtt") }else{ return ("cbtt2") }}
    if(i===3){if(chl1 === 1 || chl2 === 1){return("cbtt2") }else{ return ("cbtt") }}
    if(i===4){if(abl2 === 0){return("cbtt") }else{ return ("cbtt2") }}
    if(i===5){if(dl === 0){return("cbtt") }else{ return ("cbtt2") }}
    if(i===6){if(ac1 === 0){return("cbtt") }else{ return ("cbtt2") }}
    if(i===7){if(ac2 === 0){return("cbtt") }else{ return ("cbtt2") }}
    if(i===8){if(mibla8 === 0){return("cbtt") }else{ return ("cbtt2") }}
    if(i===13){if(mibla13 === 0){return("cbtt") }else{ return ("cbtt2") }}

    
  }

  
  function _ali(i) {
    if(i===1){if(tv1 === 0){return("cbtt") }else{ return ("cbtt2") }}
    if(i===2){if(ac1 === 0){return("cbtt") }else{ return ("cbtt2") }}
    if(i===3){if(ac2 === 0){return("cbtt") }else{ return ("cbtt2") }}
    
    if(i===4){if(mibla14 === 0){return("cbtt") }else{ return ("cbtt2") }}
    if(i===5){if(mibla15 === 0){return("cbtt") }else{ return ("cbtt2") }}
    if(i===6){if(mibla16 === 0){return("cbtt") }else{ return ("cbtt2") }}
  }

  function _alipro(i) {
    if(i===1){if(al11 === 0){setal11(1) }else{ setal11(0) }}
    if(i===2){if(al12 === 0){setal12(1) }else{ setal12(0) }}
    if(i===3){if(al13 === 0){setal13(1) }else{ setal13(0) }}

    
    if(i===4){if(al14 === 0){setal14(1) }else{setal14(0) }}
    if(i===5){if(al15 === 0){setal15(1) }else{setal15(0) }}
    if(i===6){if(al16 === 0){setal16(1) }else{setal16(0) }}
  }

  function chan() {
    if(mibla3 === 1 || mibla4 === 1){setmib3(0);setmib4(0) }else{ setmib3(1);setmib4(1) }
  }

  function chan2() {
    if(mibla13 === 1){setmib13(0) }else{ setmib13(1); }
  }

  function tst(i) {
   const wira = document.getElementById("charkara")
    sethanmouse(i)
    setTimeout(() => { wira.click() }, 2000);
  }

  
  function ha(i){  if(has === i){return({display:"block"}) }else{ return ({display:"none"}) } }
  function hasrun(){if(hanmouse  === 1){ sethas(2) }}
  function glowstate() { if(serverip === 1 ){return("glowon")}else{return("glowoff")} }

  
  function manualconnect(){
      
    socket.on("connect", ()=> {
      setserverip(1)
    //alert(`connection successful with id ${socket.id}`)
  
  } )
       }
  return (
    <div id="skin" >
    
    <div id={glowstate()} onClick={e=> manualconnect()} ></div>
      <div id={tro()} >


            <div id={roomselector()} style={ha(10)} >
            
            <div id="main" >
              <div id="romrigt" onClick={e=> sethas(11)} ><img id="unmage" alt="img" src={arrow}/></div>
              
      <div id="hommebase" >
        <div id="basename" style={statusconn()} >Living Room</div>
      <img id="imgc" src={livingroom} ond />
      </div>

      </div>

      <div id="main" >
        
        <din id="intwo" ></din>
      <div id="twocon" >
      <div id="item1" style={i1()} onClick={e=> mainlight()} > <div><img id="imgmini" alt="img" src={bulb}/></div><div id="kwaya" >Main Light</div> </div> 
  <div id="item2" style={i2()} onClick={e=> dininglight()}> <div><img id="imgmini" src={bulb}/></div><div id="kwaya" >Dining Light</div></div> </div>
  <div id="twocon" >
  <div id="item1" style={i3()} onClick={e=> tvswitch()} > <div><img id="imgmini" alt="img" src={tv}/></div><div id="kwaya" >TV</div> </div> 
  <div id="item2" style={i4()} onClick={e=> acswitch()} > <div><img id="imgmini" alt="img" src={ac}/></div><div id="kwaya" >AC</div></div> </div>
  <div id="twocon" >
  <div id="item1" style={i5()} onClick={e=> ambientlight()} > <div><img id="imgmini" alt="img" src={bulb2}/></div><div id="kwaya" >Ambient Light</div> </div> 
  <div id="item2" style={i6()} onClick={e=> ambientlight2()} > <div><img id="imgmini" alt="img" src={bulb2}/></div><div id="kwaya" >Ambient Light 2</div></div> </div>
  <div id="twocon" >
  <div id="item1" style={i7()} onClick={e=> chanlight()} > <div><img id="imgmini" alt="img" src={lamp}/></div><div id="kwaya" >chandelier Light</div> </div> 
  <div id="item2" style={i8()} onClick={e=> chanlight2()} > <div><img id="imgmini" alt="img" src={lamp}/></div><div id="kwaya" >chandelier light 2</div></div> </div>
  <div id="twocon" >
  <div id="item1" style={i9()} onClick={e=> acswitch2()} > <div><img id="imgmini" alt="img" src={ac}/></div><div id="kwaya" >AC 2</div> </div> 
  <div id="item2" style={i10()} onClick={e=> sethas(11)} > <div><img id="imgmini" alt="img" src={arrow}/></div><div id="kwaya" >Bed Room</div></div> </div>

  <div id="lift" ></div>

      </div>
          
        </div>
        
{/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}



<div id={roomselector()} style={ha(11)} >
            
            <div id="main2" >
              <div id="lrigt" onClick={e=> sethas(10)}  ><img id="unmage" alt="img" src={arrow}/></div>
              
      <div id="hommebase" >
        <div id="basename" style={statusconn()} >Bed Room</div>
      <img id="imgc" src={bedroom} />
      </div>

      </div>

      <div id="main2" >
        
        <din id="intwo" ></din>
      <div id="twocon" >
      <div id="item1" style={r1()} onClick={e=> mainliligrom()} > <div><img id="imgmini" alt="img" src={bulb}/></div><div id="kwaya" >Main Light</div> </div>
      <div id="item2" style={r1()} onClick={e=> mainliligrom()} > <div><img id="imgmini" src={bulb}/></div><div id="kwaya" >Main Light</div></div> </div>
  <div id="twocon" >
  <div id="item1" style={r2()} onClick={e=> tvrom()} > <div><img id="imgmini" alt="img" src={tv}/></div><div id="kwaya" >TV</div> </div> 
  <div id="item2" style={r3()} onClick={e=> acrom()} > <div><img id="imgmini" alt="img" src={ac}/></div><div id="kwaya" >AC</div></div> </div>
  <div id="twocon" >
  <div id="item1" style={r4()} onClick={e=> ablrom()} > <div><img id="imgmini" alt="img" src={bulb2}/></div><div id="kwaya" >Ambient Light</div> </div>
  <div id="item1" style={r5()} onClick={e=> chanrom()} > <div><img id="imgmini" alt="img" src={lamp}/></div><div id="kwaya" >chandelier Light</div> </div>  </div>
  <div id="twocon" >
  <div id="item1" style={r6()} onClick={e=> acrom2()} > <div><img id="imgmini" alt="img" src={ac}/></div><div id="kwaya" >AC 2</div> </div>  
  <div id="item2" style={r7()} onClick={e=> sethas(10)} > <div><img id="imgmini" alt="img" src={arrow}/></div><div id="kwaya" >Living Room</div></div> </div>

  <div id="lift" ></div>

      </div>
          
        </div>
        
    </div>

{/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}


      <div  hidden="hidden" >{H}|{W}</div>

<div id="charkara" hidden="hidden" onClick={e=> hasrun() } ></div>
      <div id="a2" hidden="hidden" onClick={e=> runclear() } ></div>
      <div id="a2" hidden="hidden" onClick={e=> sethas(2) } ></div>

      

      <div id="first" style={ha(1)} >

      <div id="newb"  >

        <div id="Livingroom" >



          <div id={sliw(1)} >
            <div id={sflv(1)}  ></div>
            <div id="minibaloo" onClick={e=> runhome("Main Light") } ></div>
            <div id="minibaloi"  onClick={e=> runhome("Main Light0") }  ></div>
          </div>

          <div id={sliw(2)} >
            <div id={sflv(2)}  ></div>
            <div id="minibaloo" onClick={e=> runhome("Ambient Light") } ></div>
            <div id="minibaloi"  onClick={e=> runhome("Ambient Light0")}  ></div>
          </div>

          <div id={sliw(3)} >
            <div id={sflv(3)}  ></div>
            <div id="minibaloo" onClick={e=> runhome("chandelier Light") } ></div>
            <div id="minibaloi"  onClick={e=> runhome("chandelier Light0") }  ></div>
          </div>

          <div id={sliw(4)} >
            <div id={sflv(4)}  ></div>
            <div id="minibaloo" onClick={e=> runhome("chandelier2 Light")  } ></div>
            <div id="minibaloi"  onClick={e=> runhome("chandelier2 Light0")  }  ></div>
          </div>

          <div id={sliw(5)} >
            <div id={sflv(5)}  ></div>
            <div id="minibaloo" onClick={e=> runhome("Ambient2 Light") } ></div>
            <div id="minibaloi"  onClick={e=> runhome("Ambient2 Light0") }  ></div>
          </div>

          <div id={sliw(6)} >
            <div id={sflv(6)}  ></div>
            <div id="minibaloo" onClick={e=> runhome("Dining Light") } ></div>
            <div id="minibaloi"  onClick={e=> runhome("Dining Light0") }  ></div>
          </div>

          <div  hidden="hidden" id={sliw(7)} >
            <div id={sflv(7)}  ></div>
            <div id="minibaloo" onClick={e=> setmib7(1) } ></div>
            <div id="minibaloi"  onClick={e=> setmib7(0) }  ></div>
          </div>

          <div  hidden="hidden" id={sliw(8)} >
            <div id={sflv(8)}  ></div>
            <div id="minibaloo" onClick={e=> setmib8(1) } ></div>
            <div id="minibaloi"  onClick={e=> setmib8(0) }  ></div>
          </div>

          <div hidden="hidden" id={sliw(9)} >
            <div id={sflv(9)}  ></div>
            <div id="minibaloo" onClick={e=> setmib9(1) } ></div>
            <div id="minibaloi"  onClick={e=> setmib9(0) }  ></div>
          </div>
          
          </div>




      </div>


          <div id="Climate" >
            
            <div id={_ali(1)} onClick={e=> tvswitch(1)} >
            <div id="cicon" ><img id="imgmini" alt="img" src={tv}/></div>
            <div id="cname" >TV</div>
            </div>
            
            <div id={_ali(2)} onClick={e=> acswitch()} >
            <div id="cicon" ><img id="imgmini" alt="img" src={ac}/></div>
            <div id="cname" >AC 1</div>
            </div>
            
            <div id={_ali(3)} onClick={e=> acswitch2()} >
            <div id="cicon" ><img id="imgmini" alt="img" src={ac}/></div>
            <div id="cname" >AC 2</div>
            </div>
            
            <div id={lsa(3)} onClick={e=> unichan()}  >
            <div id="cicon" ><img id="imgmini" alt="img" src={lamp}/></div>
            <div id="cname" >chandelier </div>
            </div>


          </div>
            <div id="roomico" onTouchStart={e=> tst(1)} onMouseDown={e=> tst(1)} onMouseUp={e=> tst(0)} onTouchEnd={e=> tst(0)}  ><img id="imgmini" alt="img" src={arrow}/></div>
</div>

      {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}


      {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
      
      <div id="newb" style={ha(2)} >
        <div hidden="hidden"  >{keycode}</div>
        <div hidden="hidden" >{keycode2}</div>
        <div hidden="hidden" >{pass}</div>
        <div>{yir}</div>
        
      <Predisp/>
        
      </div>
      

      <div id="newb"  style={ha(3)} >

        
    <div id="keys" onClick={e=> sethas(1)} ><img alt='img' id="im2" src={back}  /></div>

<div id="Livingroom" >



  <div id={sliw(11)} >
    <div id={sflv(11)}  ></div>
    <div id="minibaloo" onClick={e=> runhome("mainliligrom")} ></div>
    <div id="minibaloi"  onClick={e=> runhome("mainliligrom0") } ></div>
  </div>

  <div id={sliw(12)} >
    <div id={sflv(12)}  ></div>
    <div id="minibaloo" onClick={e=> runhome("ablrom") } ></div>
    <div id="minibaloi"  onClick={e=> runhome("ablrom0") }  ></div>
  </div>

  <div id={sliw(13)} >
    <div id={sflv(13)}  ></div>
    +
    <div id="minibaloo" onClick={e=> runhome("chanrom") } ></div>
    <div id="minibaloi"  onClick={e=> runhome("chanrom0") }  ></div>
  </div>
  
  </div>






  <div id="Climate" >
    
    <div id={_ali(4)} onClick={e=> tvrom()} >
    <div id="cicon" ><img id="imgmini" alt="img" src={tv}/></div>
    <div id="cname" >TV</div>
    </div>
    
    <div id={_ali(5)} onClick={e=> acrom()} >
    <div id="cicon" ><img id="imgmini" alt="img" src={ac}/></div>
    <div id="cname" >AC 1</div>
    </div>
    
    <div id={_ali(6)} onClick={e=> acrom2()} >
    <div id="cicon" ><img id="imgmini" alt="img" src={ac}/></div>
    <div id="cname" >AC 2</div>
    </div>
    
    <div id={lsa(13)} onClick={e=> chanrom()} >
    <div id="cicon" ><img id="imgmini" alt="img" src={lamp}/></div>
    <div id="cname" >chandelier</div>
    </div>

  </div>
  </div>
  


    </div>
  );
} 

export default App;
