let n
initialization()
var allButtons = $('.window > .buttons > span')
var allImages = $('.window > .images > img')
for(let i=0; i<allButtons.length+1; i++){
    $(`.buttons > span:nth-child(${i})`).on('click',function(){
        $('.images > img.current').addClass('leave').removeClass('current enter')
        .one('transitionend', ()=>{
            $(`.images > img.leave`).addClass('enter').removeClass('leave current')
            })
        $(`.images > img:nth-child(${i})`).addClass('current').removeClass('enter leave')
    })
}

var timer = setInterval(()=>{
    Leave(n).one('transitionend', ()=>{
        Enter(n)
    })
    Current(n)
    n += 1
}, 4000)

$('.window').on('mouseenter', function(){
    window.clearInterval(timer)
})

$('.window').on('mouseleave', function(){
    timer = setInterval(()=>{
        Leave(n)
        .one('transitionend', ()=>{
            Enter(n)
        })
        Current(n)
        n += 1
    }, 4000)
})





// 下面不用看
function x(n){
    if(n>allImages.length){
        n = n%5
        if(n===0){
            n = 5
        }
    }
    return n
}

function initialization(){
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}

function Current(n){
    return $(`.images > img:nth-child(${x(n+1)})`).addClass('current').removeClass('enter leave')
}

function Leave(n){
    return $(`.images > img:nth-child(${x(n)})`).addClass('leave').removeClass('current enter')
}

function Enter(n){
    return $(`.images > img:nth-child(${x(n-1)})`).addClass('enter').removeClass('leave current')
}