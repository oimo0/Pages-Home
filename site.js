(()=>{'use strict';
const root=document.documentElement;
const header=document.getElementById('header');
const toggle=document.getElementById('menuToggle');
const mobileNav=document.getElementById('mobileNav');
const year=document.getElementById('year');
if(year)year.textContent=String(new Date().getFullYear());
function closeMenu(){if(!toggle||!mobileNav)return;mobileNav.classList.remove('open');mobileNav.inert=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','メニューを開く');document.body.classList.remove('nav-open');}
if(toggle&&mobileNav){mobileNav.inert=true;toggle.addEventListener('click',()=>{const shouldOpen=!mobileNav.classList.contains('open');if(!shouldOpen){closeMenu();return;}mobileNav.inert=false;mobileNav.classList.add('open');toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','メニューを閉じる');document.body.classList.add('nav-open');});mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('keydown',ev=>{if(ev.key==='Escape')closeMenu();});window.addEventListener('resize',()=>{if(window.innerWidth>800)closeMenu()},{passive:true});}
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const items=[...document.querySelectorAll('.reveal')];
if(!reduced&&'IntersectionObserver'in window){root.classList.add('has-js');const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('seen');obs.unobserve(entry.target);}}),{threshold:.09,rootMargin:'0px 0px -14px 0px'});items.forEach(el=>obs.observe(el));}
})();
