//锚点滚动
$('a[href*=#]').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
            return false;
        }
    }
});
function f1(param){
    for(var i =1;i<=3;i++){
        var id =document.getElementById("d"+i);
        id.style.display="none";
        if(i===param)
        {
            id.style.display="block";
        }
    }
}

