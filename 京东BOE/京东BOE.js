let items = document.getElementsByClassName('item');
let points = document.getElementsByClassName('point');
let p = document.getElementsByClassName('point');

let index = 0; //表示第几张图片在展示和第几个点，第index张照片有active这个类名

// 清除classname
let clearActer = function() {
        for (let i = 0; i < items.length; i++) {
            items[i].className = 'item';
            points[i].className = 'point'

        }
    }
    // 改变classname实现改变
let goIndex = function() {
        clearActer();
        items[index].className = 'item active';
        points[index].className = 'point active'

    }
    // 下一张按钮
let goNext = function() {
        if (index < 2) {
            index++;
        } else {
            index = 0;
        }
        goIndex();
    }
    // 点击点改变图片
for (let i = 0; i < points.length; i++) {
    points[i].addEventListener("click", function() {
        let poitIndex = this.getAttribute('data-index');
        index = poitIndex;
        goIndex();
    })
}
window.onload = function() {
    setInterval(goNext, 2000);
}

function pageScroll() {

    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）

    window.scrollBy(0, -500);

    //延时递归调用，模拟滚动向上效果

    scrolldelay = setTimeout('pageScroll()', 100);

    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值

    var sTop = document.documentElement.scrollTop + document.body.scrollTop;

    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）

    if (sTop == 0) clearTimeout(scrolldelay);

}