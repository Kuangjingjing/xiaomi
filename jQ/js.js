// 轮播图
(function() {

    var sps = document.querySelector('.points').querySelectorAll('li')
    var imgWidth = document.querySelector('.banner1').offsetWidth

    var imgBox = document.querySelector('.imgBox')
    var k = 0
    for (var i = 0; i < sps.length; i++) {
        sps[i].index = i
        sps[i].onmouseover = function() {
            for (var j = 0; j < sps.length; j++) {
                sps[j].className = ''
            }
            k = this.index
            sps[k].className = 'cur'
            imgBox.style.left = -k * imgWidth + 'px'
        }
    }
    var rightBtn = document.querySelector('.rightBth')
    var leftBtn = document.querySelector('.leftBth')
    var len = imgBox.querySelectorAll('li').length

    function move() {
        if (k >= len - 1) {
            k = 0
        } else if (k < len - 1) {
            k++
        }
        imgBox.style.left = -k * imgWidth + 'px'
        for (var i = 0; i < sps.length; i++) {
            sps[i].className = ''
        }
        sps[k].className = 'cur'
    }
    rightBtn.onclick = move
    leftBtn.onclick = function() {
        if (k > 0) {
            k--
        } else if (k <= 0) {
            k = len - 1
        }
        imgBox.style.left = -k * imgWidth + 'px'
        for (var i = 0; i < sps.length; i++) {
            sps[i].className = ''
        }
        sps[k].className = 'cur'
    }
    var tid = setInterval(move, 2000)
    var container = document.querySelector('.banner')
    container.onmouseover = function() {
        clearInterval(tid)
    }
    container.onmouseout = function() {
        tid = setInterval(move, 2000)
    }
})()

// 左侧列表选项卡

var lis = document.querySelectorAll(".sj2"),
    commodity = document.querySelectorAll(".rightList");
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function() {
        for (var i = 0; i < commodity.length; i++) {
            commodity[i].style.display = "none";
        }
        commodity[this.index].style.display = "block";
        lis[this.index].classList.add("listBcolor");
    };
    lis[i].onmouseout = function() {
        lis[this.index].classList.remove("listBcolor");
        commodity[this.index].style.display = "none";
    };
}

//倒计时
var spans = document.querySelectorAll(".shi span");
count();
// 定时器
var times = setInterval(count, 1000);

function count() {
    var date = new Date();
    var InDate = new Date("2022/3/30 14:00:00");
    var sInDate = (InDate.getTime() - date.getTime()) / 1000;
    var hr = parseInt((sInDate / 60 / 60) % 24);
    var min = parseInt((sInDate / 60) % 60);
    var sec = parseInt(sInDate % 60);
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    spans[0].innerHTML = hr;
    spans[1].innerHTML = min;
    spans[2].innerHTML = sec;
    //关闭定时器，使时间变为00：00：00
    if (sInDate <= 0) {
        clearInterval(times);
        spans[0].innerHTML = "00";
        spans[1].innerHTML = "00";
        spans[2].innerHTML = "00";
    }
}

// 点击跳转
function table(obj) {
    var tabWrap = document.querySelector(obj);
    var tabList = tabWrap.querySelectorAll(".btn3-l li");
    var tabUl = tabWrap.querySelectorAll(".brick-list");

    tabList[0].classList.add("tab-active");
    for (var i = 0; i < tabList.length; i++) {
        tabList[i].num = i;
        tabList[i].onmouseover = function() {
            for (var i = 0; i < tabList.length; i++) {
                tabList[i].className = "";
            }
            tabList[this.num].classList.add("tab-active");
            for (var j = 0; j < tabUl.length; j++) {
                tabUl[j].classList.add("two");
            }
            tabUl[this.num].classList.remove("two");
        }
    }
}







//微信二维码
var J_followWxImg = document.getElementById("J_followWxImg"),
    J_followWx = document.getElementById("J_followWx");
J_followWx.onmouseover = function() {
    J_followWxImg.style.display = "block";
};
J_followWx.onmouseout = function() {
    J_followWxImg.style.display = "none";
};





//回顶部
var atop = document.getElementById("atop");
window.onscroll = function() {
    scrollFun();
};

function scrollFun() {
    if (
        document.body.scrollTop > 790 ||
        document.documentElement.scrollTop > 790
    ) {
        atop.classList.add("active");
    } else {
        atop.classList.remove("active");
    }
}

function topFun() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//点击返回顶部
atop.onclick = function() {
    topFun();
};