let button = document.querySelector('.button')
let ball = document.querySelector('.ball')
let bottom = document.querySelector('.bottom')
let off = document.querySelector('.off')
let on = document.querySelector('.on')
let index = 0
button.addEventListener('click', () => {
    if (index == 0) {
        index = 1
        ball.style.left = 60 + '%'
        on.style.opacity = 1
        off.style.opacity = .5
        bottom.style.transform = "rotateY(180deg)"
    } else {
        index = 0
        ball.style.left = 0 + '%'
        on.style.opacity = .5
        off.style.opacity = 1
        bottom.style.transform = "rotateY(0)"
    }
})

const body = document.body;
const fa = document.querySelector('.fa');
const beam = document.querySelector('.beam');
const passwordInput = document.getElementById('password');

// 为body绑定鼠标移动事件
body.addEventListener('mousemove', function (e) {
    let rect = beam.getBoundingClientRect();
    let mouseX = rect.right + (rect.width / 2);
    let mouseY = rect.top + (rect.height / 2);
    let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
    let deg = (rad * (20 / Math.PI) * -1) - 350;
    // 设置CSS自定义属性--beam-deg（灯光射线角度）
    body.style.setProperty('--beam-deg', deg + 'deg');
})

// 为密码框小眼睛绑定点击事件
fa.addEventListener('click', function (e) {
    e.preventDefault();
    body.classList.toggle('show-password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    fa.className = 'fa fa ' + (passwordInput.type === 'password' ? 'fa-eye-slash' : 'fa-eye');
    passwordInput.focus();
})
