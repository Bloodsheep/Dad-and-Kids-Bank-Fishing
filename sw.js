
const CACHE="dad-kids-fishing-v1.1.1";
const ASSETS=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>{
  e.respondWith(fetch(e.request).then(r=>{
    const clone=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,clone)); return r;
  }).catch(()=>caches.match(e.request)));
});

self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
