const CACHE_NAME = 'power-net-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json'
];

// نصب سرویس ورکر و ذخیره فایل‌ها در حافظه گوشی
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// پاسخ دادن به درخواست‌ها از طریق حافظه (حتی آفلاین)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
