/* ASRO Pages-Home: progressive enhancement, no external dependencies */
(function(){
  'use strict';
  const $=(selector,root=document)=>root.querySelector(selector);
  const navToggle=$('#mobileToggle');
  const mobileNav=$('#mobileNav');
  function closeNav(){
    if(!navToggle||!mobileNav)return;
    mobileNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded','false');
    navToggle.setAttribute('aria-label','メニューを開く');
  }
  if(navToggle&&mobileNav){
    navToggle.addEventListener('click',()=>{
      const isOpen=mobileNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded',String(isOpen));
      navToggle.setAttribute('aria-label',isOpen?'メニューを閉じる':'メニューを開く');
    });
    mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
    window.addEventListener('resize',()=>{if(window.innerWidth>800)closeNav()},{passive:true});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav()});
    document.addEventListener('click',e=>{if(!mobileNav.contains(e.target)&&!navToggle.contains(e.target))closeNav()});
  }
  const year=$('#copyrightYear');if(year)year.textContent=String(new Date().getFullYear());
  const revealItems=document.querySelectorAll('.reveal');
  if('IntersectionObserver'in window){
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.08,rootMargin:'0px 0px -16px 0px'});
    revealItems.forEach(el=>observer.observe(el));
  }else revealItems.forEach(el=>el.classList.add('in-view'));
  const details={
    kuup:{title:'Kuup',status:'公開中',description:'ASROが開発するAIチャットサービス。対話からさまざまな創作や作業へ、AIをもっと身近なものにすることを目指しています。',url:'https://asro.jp/AI/kuup/',action:'Kuupを開く'},
    asra:{title:'Asra Nova',status:'研究開発中',description:'日本語での自然な対話と、軽量な環境で使えるAIを目指すASROのモデル開発プロジェクトです。',url:null},
    moot:{title:'Moot',status:'開発中',description:'ASRO MOVIAが取り組む、映像や動きを通じたクリエイティブ表現のプロジェクトです。',url:null},
    plat:{title:'ASRO Plat',status:'サービス基盤',description:'ASROの各種サービスをつなぐ共通アカウント・認証プラットフォームです。',url:'https://plat.asro.jp/',action:'ASRO Platへ'},
    'asro-i':{title:'ASRO-i',status:'プロジェクト構想',description:'ASROのプロジェクト群のひとつ。詳細や提供内容は、確定次第このサイトで紹介します。',url:null},
    hub:{title:'ASRO-Hub',status:'プロジェクト構想',description:'ASROの将来構想に含まれるプロジェクト。現在は紹介用のプレースホルダーです。',url:null}
  };
  const dialog=$('#productDialog'),dialogTitle=$('#dialogTitle'),dialogStatus=$('#dialogStatus'),dialogBody=$('#dialogBody'),dialogLink=$('#dialogLink'),dialogClose=$('#dialogClose');
  if(dialog&&dialogTitle&&dialogStatus&&dialogBody&&dialogLink){
    document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>{
      const item=details[button.getAttribute('data-product')];if(!item)return;
      dialogTitle.textContent=item.title;
      dialogStatus.textContent=item.status;
      dialogBody.textContent=item.description;
      if(item.url){
        dialogLink.href=item.url;
        dialogLink.textContent=item.action||'サービスを開く';
        dialogLink.classList.add('show');
      }else{
        dialogLink.removeAttribute('href');
        dialogLink.classList.remove('show');
      }
      if(typeof dialog.showModal==='function')dialog.showModal();
    }));
    if(dialogClose)dialogClose.addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  }
})();