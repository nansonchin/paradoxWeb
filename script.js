let dubaitext=document.getElementById('dubaitext');
let backbuild=document.getElementById('backbuild');
let stars=document.getElementById('stars');

window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    dubaitext.style.left=value *-2 + 'px';
    backbuild.style.top=value *1 +'px';
    backbuild.style.left=value * -0.05 +'px';
    stars.style.top=value * 0.5 +'px';
});