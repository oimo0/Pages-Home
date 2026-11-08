(()=>{'use strict';
const root=document.documentElement;
const header=document.querySelector('#header');
const toggle=document.querySelector('#menuToggle');
const nav=document.querySelector('#mobileNav');
const year=document.querySelector('#year');
if(year) year.textContent=String(new Date().getFullYear());
const closeMenu=()=>{if(!nav||!toggle)return;nav.classList.remove('open');nav.inert=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','メニューを開く');document.body.classList.remove('locked');header?.classList.remove('nav-active')};
if(nav&&toggle){nav.inert=true;toggle.addEventListener('click',()=>{const open=!nav.classList.contains('open');if(!open){closeMenu();return;}nav.inert=false;nav.classList.add('open');toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','メニューを閉じる');document.body.classList.add('locked');header?.classList.add('nav-active');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
window.addEventListener('resize',()=>{if(window.innerWidth>780)closeMenu()},{passive:true});
}
const onScroll=()=>{header?.classList.toggle('scrolled',window.scrollY>28);};
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const targets=[...document.querySelectorAll('.reveal')];
if(!reduced&&'IntersectionObserver'in window){
  root.classList.add('js');
  const appear=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('shown');appear.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -24px 0px'});
  targets.forEach(el=>appear.observe(el));
}
const canvas=document.querySelector('#sky');
if(!canvas||reduced)return;
const ctx=canvas.getContext('2d',{alpha:true});
if(!ctx)return;
let width=0,height=0,stars=[],raf=0,active=true;
function init(){
  const rect=canvas.getBoundingClientRect();
  width=Math.round(rect.width);height=Math.round(rect.height);
  if(width<1||height<1)return;
  const ratio=Math.min(devicePixelRatio||1,2);
  canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);
  ctx.setTransform(ratio,0,0,ratio,0,0);
  const count=Math.min(115,Math.max(36,Math.floor(width*height/13500)));
  stars=Array.from({length:count},()=>({x:Math.random()*width,y:Math.random()*height,r:.35+Math.random()*1.15,a:.08+Math.random()*.5,phase:Math.random()*Math.PI*2,speed:.25+Math.random()*.65}));
}
function draw(t){
  if(!active)return;
  ctx.clearRect(0,0,width,height);
  for(const s of stars){
    const alpha=s.a*(.7+.3*Math.sin(t*.00035*s.speed+s.phase));
    ctx.beginPath();ctx.fillStyle='rgba(194,213,255,'+alpha+')';ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();
  }
  raf=requestAnimationFrame(draw);
}
const visibility=()=>{
  active=!document.hidden&&document.querySelector('.hero')?.getBoundingClientRect().bottom>0;
  cancelAnimationFrame(raf);
  if(active)raf=requestAnimationFrame(draw);
};
const observer='IntersectionObserver'in window?new IntersectionObserver(entries=>{active=entries[0].isIntersecting&&!document.hidden;cancelAnimationFrame(raf);if(active)raf=requestAnimationFrame(draw)}):null;
if(observer)observer.observe(document.querySelector('.hero'));
let resizeTimer=0;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(init,130)},{passive:true});
document.addEventListener('visibilitychange',visibility);
init();if(!observer)raf=requestAnimationFrame(draw);
})();