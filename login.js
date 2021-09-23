const parentBtn = document.getElementById('parent-btn')
const studentBtn = document.getElementById('student-btn')
const teacherBtn = document.getElementById('teacher-btn')

const parentBox = document.getElementById('parent-box')
const studentBox = document.getElementById('student-box')
const teacherBox = document.getElementById('teacher-box')

const loginDiv = document.getElementById('login-div')
const registerDiv = document.getElementById('register-div')
 
const signupBtn = document.getElementById('sign-up');
const loginBtn = document.getElementById('log-in');

parentBtn.addEventListener('click',()=>{
    
    parentBtn.classList.add('active');
    parentBtn.setAttribute('disabled','true');

    studentBtn.classList.remove('active');
    studentBtn.removeAttribute('disabled','true');
    teacherBtn.classList.remove('active');
    teacherBtn.removeAttribute('disabled','true');

    parentBox.classList.remove('disabled')
    studentBox.classList.add('disabled')
    teacherBox.classList.add('disabled')
})
studentBtn.addEventListener('click',()=>{
    studentBtn.classList.add('active');
    studentBtn.setAttribute('disabled','true');

    parentBtn.classList.remove('active');
    parentBtn.removeAttribute('disabled','true');
    teacherBtn.classList.remove('active');
    teacherBtn.removeAttribute('disabled','true');

    studentBox.classList.remove('disabled')
    parentBox.classList.add('disabled')
    teacherBox.classList.add('disabled')
})
teacherBtn.addEventListener('click',()=>{
    teacherBtn.classList.add('active');
    teacherBtn.setAttribute('disabled','true');

    studentBtn.classList.remove('active');
    studentBtn.removeAttribute('disabled','true');
    parentBtn.classList.remove('active');
    parentBtn.removeAttribute('disabled','true');

    teacherBox.classList.remove('disabled')
    studentBox.classList.add('disabled')
    parentBox.classList.add('disabled')
})
window.onload = ()=>{
    studentBtn.classList.add('active');
    studentBtn.setAttribute('disabled','true');
    parentBox.classList.add('disabled')
    teacherBox.classList.add('disabled')
    registerDiv.classList.add('disabled')
}

signupBtn.addEventListener('click',()=>{
    registerDiv.classList.remove('disabled')
    loginDiv.classList.add('disabled')
})

loginBtn.addEventListener('click',()=>{
    registerDiv.classList.add('disabled')
    loginDiv.classList.remove('disabled')
})

// Vanta js

VANTA.WAVES({
  el: "#content",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})