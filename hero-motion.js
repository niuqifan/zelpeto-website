(() => {
  'use strict';
  const hero=document.querySelector('.hero');
  const wrap=document.querySelector('.hero-wrap');
  const photo=document.querySelector('.hero-photo');
  if(!hero||!wrap||!photo)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const mobile=matchMedia('(max-width:740px)');
  let enabled=true,frame=0,inView=true;
  const layer=document.createElement('div');
  layer.className='hero-hotspots';
  layer.setAttribute('aria-label','Explore products by pet');
  const pets=[
    {id:'dog',label:'Dog supplies',x:.53,y:.60},
    {id:'cat',label:'Cat supplies',x:.705,y:.65},
    {id:'bird',label:'Bird supplies',x:.815,y:.24},
    {id:'reptile',label:'Reptile supplies',x:.82,y:.80}
  ];
  for(const pet of pets){
    const a=document.createElement('a');a.className='pet-hotspot';
    a.href=`products.html?category=${pet.id}`;a.setAttribute('aria-label',`Explore ${pet.label.toLowerCase()}`);
    a.innerHTML=`<span class="hotspot-dot" aria-hidden="true"></span><span class="hotspot-label">${pet.label}<span aria-hidden="true">↗</span></span>`;
    pet.el=a;layer.append(a);
  }
  wrap.append(layer);
  const bar=document.createElement('div');bar.className='hero-interaction-bar';
  bar.innerHTML='<button class="motion-toggle" type="button" aria-pressed="true" aria-label="Pause scroll animation"><span class="motion-indicator" aria-hidden="true"></span><span class="motion-text">Motion on</span></button><span class="hero-scroll-cue"><svg viewBox="0 0 16 20" aria-hidden="true"><rect x="3" y="1" width="10" height="15" rx="5"/><path d="M8 4v4m-3 9 3 2 3-2"/></svg>Scroll to explore</span><span class="hero-pet-hint">Explore the pets · tap a dot ↗</span>';
  wrap.append(bar);
  const button=bar.querySelector('button');
  const text=bar.querySelector('.motion-text');
  function syncButton(){
    const active=enabled&&!reduced.matches;
    button.setAttribute('aria-pressed',String(active));
    button.disabled=reduced.matches;
    button.setAttribute('aria-label',reduced.matches?'Animation disabled by your reduced motion preference':active?'Pause scroll animation':'Enable scroll animation');
    text.textContent=reduced.matches?'Reduced motion':active?'Motion on':'Motion off';
  }
  function position(){
    const w=photo.clientWidth,h=photo.clientHeight;
    const nw=photo.naturalWidth||2172,nh=photo.naturalHeight||724;
    const scale=Math.max(w/nw,h/nh),rw=nw*scale,rh=nh*scale;
    const offsetX=(w-rw)*(mobile.matches?.77:.5),offsetY=(h-rh)*.5;
    for(const pet of pets){
      const x=pet.x*rw+offsetX,y=pet.y*rh+offsetY;
      pet.el.hidden=x<26||x>w-26||y<35||y>h-54;
      pet.el.classList.toggle('edge-right',x>w-110);
      pet.el.classList.toggle('edge-left',x<110);
      pet.el.style.left=x+'px';pet.el.style.top=y+'px';
    }
  }
  function paint(){
    frame=0;
    const rect=hero.getBoundingClientRect();
    const p=enabled&&!reduced.matches?Math.max(0,Math.min(1,-rect.top/rect.height)):0;
    hero.style.setProperty('--hero-scale',String(1+p*(mobile.matches?.035:.08)));
    hero.style.setProperty('--hero-shift',(p*(mobile.matches?8:26))+'px');
    hero.style.setProperty('--copy-shift',(-p*(mobile.matches?0:38))+'px');
    hero.style.setProperty('--copy-opacity',String(1-p*(mobile.matches?0:.22)));
  }
  function request(){if(!frame)frame=requestAnimationFrame(paint)}
  button.addEventListener('click',()=>{enabled=!enabled;syncButton();request()});
  addEventListener('scroll',()=>{if(inView)request()},{passive:true});
  const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(inView)request()},{rootMargin:'60px'});observer.observe(hero);
  const resize=new ResizeObserver(()=>{position();request()});resize.observe(wrap);
  photo.addEventListener('load',()=>{position();request()});
  reduced.addEventListener('change',()=>{syncButton();request()});
  mobile.addEventListener('change',()=>{position();request()});
  syncButton();position();request();
})();
