const $=id=>document.getElementById(id);
function tick(){const d=new Date();$('clock').textContent=d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});$('date').textContent=d.toLocaleDateString([], {weekday:'short',day:'numeric',month:'short'});const h=d.getHours();$('greeting').textContent=h<12?'Good morning.':h<18?'Good afternoon.':'Good evening.'}
tick();setInterval(tick,15000);
let toastTimer;function toast(message){const el=$('toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2300)}
function openMaps(query=''){const url=query?'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(query):'https://www.google.com/maps';window.open(url,'_blank','noopener')}
function openMusic(){window.location.href='https://music.youtube.com/'}
$('destination-form').addEventListener('submit',e=>{e.preventDefault();const q=$('destination').value.trim();if(q)openMaps(q);else toast('Enter a destination first.')});
$('open-maps').addEventListener('click',()=>openMaps());$('open-music').addEventListener('click',openMusic);
$('fullscreen').addEventListener('click',async()=>{try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen();else await document.exitFullscreen()}catch{toast('Full screen is not available in this browser.')}});
document.querySelectorAll('[data-app]').forEach(btn=>btn.addEventListener('click',()=>{const app=btn.dataset.app;switch(app){case'maps':openMaps();break;case'music':openMusic();break;case'phone':toast('Use your phone app or connected hands-free system.');break;case'weather':toast('Weather service is not connected in this version.');break;case'browser':window.open('https://www.google.com','_blank','noopener');break;case'settings':toast('Tip: use your browser menu to install Eve Drive.');break}}));
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
let wakeLock=null;async function keepAwake(){try{if('wakeLock'in navigator)wakeLock=await navigator.wakeLock.request('screen')}catch{}}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&wakeLock)keepAwake()});
