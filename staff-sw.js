// Company entry only. Never persist authenticated company orders or attachments.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
 if(event.request.mode!=='navigate')return;
 event.respondWith(fetch(event.request).catch(()=>new Response('<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>إدارة أقسام مكتبة الجبل</title><body style="font-family:Tahoma;padding:40px;background:#f5f8ff;color:#143d73"><h1>إدارة أقسام مكتبة الجبل</h1><p>اتصل بالإنترنت لتسجيل الدخول ومتابعة طلبات شركتك.</p><button onclick="location.reload()">إعادة المحاولة</button></body></html>',{status:503,headers:{'Content-Type':'text/html; charset=utf-8'}})));
});
