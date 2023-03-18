// 原生 Native
// JS -> HTML 元件
let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv = document.getElementsByTagName("div")[0];
// mouseIn : 當滑鼠移動進入Div時觸發
function mouseIn(){
    thisH1.innerHTML = "你進來了";
}
// mouseOut : 當滑鼠移動離開Div時觸發
function mouseOut(){
    thisH1.innerHTML = "你出去了";
    thisP.innerHTML = "";
}
// mouseMove : 當滑鼠在Div裡面移動時觸發
// e : event
function mouseMove(e){
    // debugger;
    console.log(e.clientX + "," + e.clientY);
    thisP.innerHTML = "你在裡面走來走去。位置：" +
                      e.clientX + "," +
                      e.clientY;
}
thisDiv.addEventListener("mouseover", mouseIn);
thisDiv.addEventListener("mouseout", mouseOut);
thisDiv.addEventListener("mousemove", mouseMove);