self.addEventListener("install", () => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", (event) => {
  // You can add caching logic here later
});
