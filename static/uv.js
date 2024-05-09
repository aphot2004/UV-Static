importScripts('/static/uv/ub.bundle.js');
importScripts('/static/uv/ub.config.js');
importScripts('/static/uv/ub.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
