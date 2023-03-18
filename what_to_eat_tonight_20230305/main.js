let imageURLs = [
    "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
    "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "https://pic03.eapple.com.tw/siangnong/xn_i_img02.png",
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/5802fab5-fdce-468a-a830-43e8001f5a72/Derivates/c00dc34a-e73d-42f0-a86e-e2fd967d33fe.jpg"
];
$(function(){
    $("input").on("click",function(){
        // alert("hi");
        // $("h1").text("Hello");
        let numberOfListItem = $("li").length;
        let randomNumber = Math.floor(Math.random()*numberOfListItem);
        console.log(randomNumber);
        $("h1").text($("li").eq(randomNumber).text());
        // Task : generate 0 ~ 2 random number
        // Change Pic
        $("img").attr("src", imageURLs[randomNumber]);
    });
});