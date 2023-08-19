// function checkWindowWidth(){
//     if(width <=700){
//         $(".footer-top h4").addClass("mobile");
//     }else{
//         $(".footer-top h4").removeClass("mobile");
//     }
// }
// checkWindowWidth();
// $(document).ready(function () {
//     $(".footer-top h4").click(function () {
//         $(this).closest("div").find("ul").slidetoggle();
//     })
// })

menu1 = document.getElementById('menu1');
menu2 = document.getElementById('menu2');
menu3 = document.getElementById('menu3');
menu4 = document.getElementById('menu4');
console.log(menu1, menu2, menu3, menu4)

function func(num) {
    switch (num) {
        case 1:
            if (menu1.style.visibility == "visible") {
                menu1.style.visibility = "hidden";
                menu1.style.height = '0px'
            } else {
                menu1.style.visibility = "visible";
                menu1.style.height = '100px'
            }
            break;
        case 2:
            if (menu2.style.visibility == "visible") {
                menu2.style.visibility = "hidden";
                menu2.style.height = '0px'
            } else {
                menu2.style.visibility = "visible";
                menu2.style.height = '100px'
            }
            break;
        // case 5:
        //     if (menu5.style.visibility == "visible") {
        //         menu5.style.visibility = "hidden";
        //         menu5.style.height = '0px'
        //     } else {
        //         menu5.style.visibility = "visible";
        //         menu5.style.height = '100px'
        //     }
        //     break;
        case 4:
            if (menu4.style.visibility == "visible") {
                menu4.style.visibility = "hidden";
                menu4.style.height = '0px'
            } else {
                menu4.style.visibility = "visible";
                menu4.style.height = '100px'
            }
            break;
        case 3:
            if (menu3.style.visibility == "visible") {
                menu3.style.visibility = "hidden";
                menu3.style.height = '0px'
            } else {
                menu3.style.visibility = "visible";
                menu3.style.height = '100px'
            }
            break;

        default:
            break;
    }

    // if (num==1){
    //     if(menu1.style.visibility == "visible"){
    //         menu1.style.visibility = "hidden";
    //         menu1.style.height='0px'
    //     }else{
    //         menu1.style.visibility = "visible";
    //         menu1.style.height='100px'
    //     }


    // }else if(num==2){
    //     if(menu2.style.visibility == "visible"){
    //         menu2.style.visibility = "hidden";
    //         menu2.style.height='0px'
    //     }else{
    //         menu2.style.visibility = "visible";
    //         menu2.style.height='100px'
    //     }
    // }else if(num==3){
    //     if(menu3.style.visibility == "visible"){
    //         menu3.style.visibility = "hidden";
    //         menu3.style.height='0px'
    //     }else{
    //         menu3.style.visibility = "visible";
    //         menu3.style.height='100px'
    //     }
    // }
    // else if(num==4){
    //     if(menu4.style.visibility == "visible"){
    //         menu4.style.visibility = "hidden";
    //         menu4.style.height='0px'
    //     }else{
    //         menu4.style.visibility = "visible";
    //         menu4.style.height='100px'
    //     }
    // }
}
