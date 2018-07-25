let n
initialization()
var allButtons = $('.window > .buttons > span')
var allImages = $('.window > .images > img')
for(let i=0; i<allButtons.length+1; i++){
    $(`.buttons > span:nth-child(${i})`).on('click',function(){
        let index = $(`.buttons > span:nth-child(${i})`).index()
        $('.images > img.current').addClass('leave').removeClass('current enter')
        .one('transitionend', ()=>{
            $(`.images > img.leave`).addClass('enter').removeClass('leave current')
            })
        $(`.images > img:nth-child(${i})`).addClass('current').removeClass('enter leave')
        n = index + 1
    })
}

n = 1
var timer = setInterval(()=>{
    n += 1
    $(`.buttons > span:nth-child(${x(n)})`).trigger('click')
}, 3000)

$('.window').on('mouseenter', function(){
    window.clearInterval(timer)
})

$('.window').on('mouseleave', function(){
    timer = setInterval(()=>{
        n += 1
        $(`.buttons > span:nth-child(${x(n)})`).trigger('click')
    }, 3000)
})

// 下面不用看
function x(n){
    if(n>allImages.length){
        n = n%allImages.length
        if(n===0){
            n = allImages.length
        }
    }
    return n
}

function initialization(){
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}
