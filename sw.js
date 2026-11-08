// 最小 service worker：不快取任何東西，只是讓瀏覽器把網頁視為可安裝的 App
self.addEventListener('fetch', () => {});
