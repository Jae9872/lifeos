const CACHE='cut-trainer-v26';
const SHELL=[
  './',
  './index.html',
  './gym.html',
  './work.html',
  './food.html',
  './progress.html',
  './settings.html',
  './shared.js',
  './lifeos.css',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './lifeos-patch.js'
];
const GIFS=[];
self.addEventListener('install',function(e){self.skipWaiting();e.waitUntil((async function(){const c=await caches.open(CACHE);try{await c.addAll(SHELL);}catch(_){} })());});
self.addEventListener('activate',function(e){e.waitUntil((async function(){const keys=await caches.keys();await Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));await self.clients.claim();const cs=await self.clients.matchAll({type:'window'});cs.forEach(function(c){try{c.navigate(c.url);}catch(_){}});})());});
async function withPatch(r){try{const txt=await r.text();if(txt.indexOf('lifeos-patch.js')>=0)return new Response(txt,{headers:r.headers,status:r.status,statusText:r.statusText});const patched=txt.replace('</body>','<script src="lifeos-patch.js?v=26"></script></body>');return new Response(patched,{headers:{'Content-Type':'text/html;charset=utf-8'},status:r.status,statusText:r.statusText});}catch(_){return r;}}
self.addEventListener('fetch',function(e){const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);const isHtml=url.origin===location.origin&&(url.pathname.endsWith('/')||url.pathname.endsWith('.html'));if(isHtml){e.respondWith((async function(){const c=await caches.open(CACHE);try{const r=await fetch(req,{cache:'no-store'});if(r&&r.ok){const p=await withPatch(r.clone());c.put(req,p.clone());return p;}}catch(_){}const hit=await c.match(req,{ignoreVary:true});return hit?withPatch(hit):Response.error();})());return;}if(url.origin===location.origin){e.respondWith((async function(){const c=await caches.open(CACHE);try{const r=await fetch(req,{cache:'no-store'});if(r&&r.ok){c.put(req,r.clone());return r;}}catch(_){}const hit=await c.match(req,{ignoreVary:true});return hit||Response.error();})());}});
