const CACHE='cut-trainer-v4';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
const GIFS=["https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crunch.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Curl.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Fly.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Supported-Dumbbell-Row.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Bench-Press.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Goblet-Squat.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Knee-Raise.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Curl.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Extension.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Curl.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Machine-Chest-Press.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Arm-Dumbbell-Row.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Overhead-Dumbbell-Triceps-Extension.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Fly.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Romanian-Deadlift.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Pushdown.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Rope-Pushdown.gif", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Wide-Grip-Lat-Pulldown.gif"];
self.addEventListener('install',function(e){
  self.skipWaiting();
  e.waitUntil((async function(){
    const c=await caches.open(CACHE);
    try{await c.addAll(SHELL);}catch(_){}
    await Promise.all(GIFS.map(async function(u){try{const r=await fetch(u,{mode:'no-cors'});await c.put(u,r);}catch(_){}}));
  })());
});
self.addEventListener('activate',function(e){
  e.waitUntil((async function(){
    const keys=await caches.keys();
    await Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',function(e){
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  const isGif=url.pathname.toLowerCase().endsWith('.gif');
  if(isGif){
    e.respondWith((async function(){
      const c=await caches.open(CACHE);
      const hit=await c.match(req,{ignoreVary:true});
      if(hit)return hit;
      try{const r=await fetch(req,{mode:'no-cors'});c.put(req,r.clone());return r;}catch(_){return hit||Response.error();}
    })());
    return;
  }
  if(url.origin===location.origin){
    e.respondWith((async function(){
      const c=await caches.open(CACHE);
      const hit=await c.match(req,{ignoreVary:true});
      if(hit)return hit;
      try{const r=await fetch(req);if(r&&r.ok)c.put(req,r.clone());return r;}catch(_){return hit||Response.error();}
    })());
  }
});
