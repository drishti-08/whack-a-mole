const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
let score = 0

const sound = new Audio("smash.mp3")

function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'mole.png'

    img.addEventListener('click', () => {
        score += 10
        sound.play()
        scoreEl.textContent = score
        img.src = 'mole-whacked.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1200)
}
run()

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})


const cur=document.getElementsByClassName("board")
cur.addEventListener('mouseenter', ()=>{
    document.body.style.cursor=url("hammer.png");
});

cur.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'auto'; // Revert to default cursor when outside the div
  });