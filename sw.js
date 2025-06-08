self.addEventListener("install", (event) => {
  console.log("Service worker installed.");
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  // Basic fetch handler
});
