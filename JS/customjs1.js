$(function() {
    $(".menu-link").click(function() {
        $(".menu-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
    loadData();
    loadServiceData();
})

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 25){
        $(".header").addClass("fixed-header");
    }else{
        $(".header").removeClass("fixed-header");
    }
})
let mybutton = document.getElementById("myBtn");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function loadData(){
    let goodItemList = [];
    getGoodItemListJsonData();

    function RenderHtmlFromGoodItemList() {
        let renderHtmlString = '';
        Array.from(goodItemList).forEach((item) => {
            renderHtmlString +=
            `<div class="item-goodpoint">
            <img src="${item.Image}" alt="">
            <div>
              <h5 style="font-weight: bold;">${item.Name}</h5>
              <hr>
              <p>${item.Description}</p>
            </div>
            </div>`
        });
        $("#content-1").html(renderHtmlString);
    }
    function getGoodItemListJsonData(){
        $.ajax('https://testapi.io/api/danghuynh2303/projectsem1',
            {
            dataType: 'json',
            type: "GET",
            success: function (respone){
                goodItemList = respone.data;
                localStorage.setItem("item-goodpoint", JSON.stringify(goodItemList));
                RenderHtmlFromGoodItemList();
            },
            error: function(errorMessage){
                console.log(errorMessage);
            }
        })
    };
}

function loadServiceData() {
    let serviceList = [];
    getServiceListJsonData();

    function RenderHtmlFromServiceList() {
        let renderHtmlString = '';
        Array.from(serviceList).forEach((item) => {
            renderHtmlString +=
            `<div class="service service-1">
            <img src="${item.Image}" alt="">
            <div class="info">
              <p>
                <a href="${item.aLink}">${item.Name}</a>
              </p>
              <p class="description">
                ${item.Description}
              </p>
            </div>
          </div>`
        });
        $("#content-2").html(renderHtmlString);
    }
    function getServiceListJsonData(){
        $.ajax('https://testapi.io/api/danghuynh2303/service',
            {
            dataType: 'json',
            type: "GET",
            success: function (respone){
                serviceList = respone.data;
                localStorage.setItem("service", JSON.stringify(serviceList));
                RenderHtmlFromServiceList();
            },
            error: function(errorMessage){
                console.log(errorMessage);
            }
        })
    };
}
