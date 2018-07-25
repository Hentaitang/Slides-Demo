initialization()
let n = 1
setInterval(()=>{
    Leave(n)
    .one('transitionend', ()=>{
        Enter(n)
    })
    Current(n)
    n += 1
}, 4000)

// 下面不用看
function x(n){
    if(n>3){
        n = n%3
        if(n===0){
            n = 3
        }
    }
    return n
}

function initialization(){
    $('.images > img:nth-child(1)').addClass('current')
    $('.images > img:nth-child(2)').addClass('enter')
    $('.images > img:nth-child(3)').addClass('enter')
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