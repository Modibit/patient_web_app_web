'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3cac3d1655a43706d4ee9fc8e6df18dd",
"sepamed.zip": "060e5e595c8a7d664de539006e569cee",
"version.json": "47b16b0cfa8316aa5e05e651be43e1e1",
"index.html": "7579cca14fe6a99eca50f6f6addd10d7",
"/": "7579cca14fe6a99eca50f6f6addd10d7",
"main.dart.js": "f924d0fd672ab40bcd740a9a40861d2e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "31e0657c1e5946cfedaeaa9730a442e0",
"icons/Icon-192.png": "471590c53ac6e6aa76d818b5103e97ef",
"icons/Icon-maskable-192.png": "471590c53ac6e6aa76d818b5103e97ef",
"icons/Icon-maskable-512.png": "9f8e1c682b547fdec95c72154a5b11af",
"icons/Icon-512.png": "9f8e1c682b547fdec95c72154a5b11af",
"manifest.json": "d80607f674504f10416f3570fd079c8a",
".git/ORIG_HEAD": "32c5e76ca9a3735dbf2a3c8e146e8e97",
".git/config": "7ab6e0175cda9fa721ca5a9d5aaebdec",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/dc21ad20ff1e7e48ab222c8b4d5a2c3271f6d6": "a8c0bc0e515aa0b1f7bdee8b5bc97641",
".git/objects/6f/6dd0094724c2963d977871a0cea499df5e5592": "640bb37c34607d61c4054a28c28781cb",
".git/objects/6f/b0647bccce4379827d66bf2a4ea5d1c2e318c7": "bc4214f0224b95aa945a1770a99f7100",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/32/f780a591f07a427a6ae3c033df789758be10e0": "5e4c8c8c10d915cc172743cb8a9706cc",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ccfce6f98b0e8a4bed2b2c808aa3ed2302915c": "dd7cf575cd10851e3cf58ae1914d0b74",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/51/3ebfbda5b997bc1dddb0040e59d89af7b63d7a": "92cea9993e63cffb42fe052eda24f281",
".git/objects/3d/00d6ddf64fcee2b5e6ffcb9b4946635d4e1072": "f484b3076dd6188cb5307b68e5063e11",
".git/objects/93/d6d035487ce48f648e1b38c698c54c81779fa8": "a6695e6a776c6c0d01bceb88140c73db",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/34/247729972b800f612aa7476e017f5f90a51dd1": "ce92f5eee815132258aedee23c39cf12",
".git/objects/5a/8408ea069f9fa72f89aa0d25f3c72d36638183": "ba54588889c9a7ed567b548b52997741",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/cecf25bb03bc1fa24d847ec3c459539ed8f78a": "5a73de4a656b017ee42581ba562bca6d",
".git/objects/05/166af060d51f7fe1146f2321f20ddb936b8a9e": "a12197666083df3734a3879d1c778b5b",
".git/objects/02/b46ccafe33b16dfccfa6695f6a75ec8e1cfadf": "fd3d3725bab5ee7425f567ba1653e3ea",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/d4b0ab2f2a9d04b8a8f8493de5fa286c3c2509": "2828120833a2239115cb31ef35c498ca",
".git/objects/d7/ca1ff10d2a2faccf2d9c2d921ee879a468f2a9": "6e66ca85a80302b519843854d8a7d4c7",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/e5/49f8befa2390f4070314ee46d17d2c7c4827b5": "30e9ad86a16cd87ae793ffd8ea3a650e",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/ee/3e58654f6e22cee4bc4f7f1b25c77a6113c58b": "bf64d34ced3e64725e72d62bd290e8ce",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/0a4f746d5c923d194e9e67a9da49a069a2e8f1": "52397294c1f730cc5185da10f27e5a7d",
".git/objects/c8/a03d1c66e3131833e3656b246b5a82b662031d": "9c02199e8edb88df7b3724e0eeba56fb",
".git/objects/ed/640d6e310287947b47ada90ed70c07f7d45402": "f0ee1065d4aa944bd0b4f0f8f0bfe846",
".git/objects/c1/0b36a0bed96489d276374fc617dbe3e352c54d": "e369130deb3bca0d3225f9281ad3c6f1",
".git/objects/4b/215e1ff12097d45fa4583ad42ae5f6b6ab6170": "fd46bd38b06f622e4552a4e9cf9828ed",
".git/objects/1f/413e6ca193bff0c757dd946f8dfbf8e62b2bde": "7477aa5f02d6764d6fd030b10ce324a3",
".git/objects/80/05823ecb9a0d6e4b66ed47d4fa75d92cacabe4": "e1f17530bb8d157844fafe7cef907f0d",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/74/3eb8ecf91e1ed5ec7173dd094702beb25d2466": "8610f948236d3789b84f0db3b0aa616c",
".git/objects/7b/2bd4b9915b75b247887eb4d12be9915281deda": "29a2c7c606bc171c464e070f353dc25d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/75/4e946616b7bb8cf5bf4e747d1a4b9e2f3a0455": "04c2fdf957ce3e70fb26b301731764fe",
".git/objects/75/4b32a251e899f3efca08ceebc0c13f248b5c25": "b7caf1024617b561a1581ee3f540106c",
".git/objects/2a/1cee1bd305137c8ce4f57e107895f8a224fd0b": "d63eb93cdbd9e100b6c341eeb719dbbb",
".git/objects/07/62762e48f8d0853d3ad927234abf3dd49e47cc": "c07cf0bc0b4219d4bdbe39b28d294fdb",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/9b58c60b938f7b1a8f2ff3113ec5941c60f752": "67e8d0260c418df036d0f4ca4469f99e",
".git/objects/96/66e2d17c5ee5d233d11a0735f399f660c4cd74": "78b9213c18082f7f9bac34035bd32126",
".git/objects/54/1da20b996751dc501b58cdabc6e78bf5c2923c": "cf9d619ed97123f1d2034047d3bd9c6f",
".git/objects/98/d244848eb8f16c6c49fe397cdea3a1f26ebae3": "e789edb858147a49f448205dfe45c813",
".git/objects/08/4e175d4e6aad0f044178da705ad64e9f0f53c8": "3cb0864eed43d59cfd4f98d1cfef54c9",
".git/objects/6d/e9eb72087ffaca2c0bddb3ea1b3c072f011893": "24c3a582a006b80aa9ee5b410936cfaf",
".git/objects/99/02689fb14fe85e8a7870215fcef2f375a17e3b": "7b08940c07ab6f4113e5e144dc43a8c9",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/52/320900f88f7f715832f2c24144dca3ee0b6e5e": "42e1f43efe1be0f9407231fb3748ed30",
".git/objects/55/ac8c97f247d1d60b851d0c73d32db84d2065ac": "b100f1dc4e1591cda419c03b6bc299ac",
".git/objects/97/0e22f847679bb4dac5f9125a7a23e6f2f6269f": "4d9daa7c189d614394a9bae26f8a898b",
".git/objects/64/68092bb187e4485e335aa3c4c697f51abcc87c": "f7d2dbef066c75e63d9a5b9eef836b26",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/b29f95ef426d928ddab20e528ac39c54f3c6ab": "680b84bf0a0f814bbc86d2ad15893208",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b7/9153059a8cef0ce999340ff33eb4880629111e": "0c21042222e896f73ad254524ec99c3c",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/a0c33e8a754aaec64085c537ad40fab79a7482": "26ec7e2982d95b4df8bebcaf860802ec",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/fc928ddfe7c4c224fbdd1e99eaec6b5aef274b": "c6fb376251496e29abb411da45d95156",
".git/objects/f0/31ddfcfa1d41c77153545651d054bb153f14dc": "761cd35a3ce28cb99f88a2395ab6e846",
".git/objects/c5/ec53dbe7af479790bc80f660492091677c711c": "3f900cc98228016d378c4638a2c317f8",
".git/objects/f1/c05ae1b96e898e544ab9b837049a33245c13cf": "a0e136fab77bb5cce51f78e0a1b6c51d",
".git/objects/e7/0add0e220f6d9b52fbd2231c666296e1864409": "95d78fc6af2c3287bba55156d7ecd73f",
".git/objects/f8/a7579a683ab318f70dca9b9c4e4d147754b9a6": "7818e27b6e13c879a435765310b30637",
".git/objects/f8/4e06a5df7513e42dd861ce49474099316e54d0": "b9acc757b2dfb296a0663e99540aec56",
".git/objects/46/a3bd0c36c4e970a65c7268b03afc7030b72e7e": "ee8e27e34074d6539aecd60011bdeb79",
".git/objects/79/a6f48535f0587b6ad340236f367dfc66c79d90": "6130cb6c1a4947b23245ea7971dc71d3",
".git/objects/79/b460e011aa5a855b457a35fd9a79c898573009": "b0132345fbc02d1cd53f67646634b047",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/2aa6f44c7b7b1179938c29ae7f4bf7af8d35da": "427bd2a4c740f06ac1df49958f6eab05",
".git/objects/77/eaefbc110c8fc835cf110af39789bb9aeecfdd": "357b79ee2540f6df27937912f51954a3",
".git/objects/48/4a00739e2a1394db0f100d7bd03b65b715ee38": "1e2e378cfa01b1ad78cdb329552890df",
".git/objects/84/88f19bbcd16f358c33b2eadcdd78d98b951744": "1eb39b560474d82660b1cae525a97dc7",
".git/objects/84/91eedc4f19e19b3d1bf6e5baf2f0611b658f4d": "87c10cad3671f151c6525c50ebeb4f1b",
".git/objects/4a/1b60b0c7be337bb7918fe765b9bb0cc3626961": "f23771cf35e006eda47bd2843ff7dc97",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/15/c1c246ac387baedc2a3b9322b48c019489ed07": "5b2b49c0e62c0330fd044a228a76c2c2",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/40/6ec447761e13f451cd2a83dace580e691c0edc": "c7ff53de82bd7479578ec6a38f13c621",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/8b/9afefa6cd990096a726eefc514873685daeb69": "c3657d622ae60d4342c49345d0aaf9a5",
".git/objects/13/ebdfa006571ff3db4bb267779d163c792cc015": "e2060ae93fe9652d48951e9f98cbe0bc",
".git/objects/7a/4e81e857c4493bf955d19aed7935bf17eb8279": "8be33400bba229537ebdca983a53aa58",
".git/objects/25/1936dd4dd5823e14d49644a526bfc39bff7752": "afd97f763600ca3e000eebd5e7c7e826",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bfe228057a230f9d7ab1c490c57f5dcd",
".git/logs/refs/heads/main": "bfe228057a230f9d7ab1c490c57f5dcd",
".git/logs/refs/remotes/origin/main": "bfee261927aba288ecd1e537ec0196ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "32c5e76ca9a3735dbf2a3c8e146e8e97",
".git/refs/remotes/origin/main": "32c5e76ca9a3735dbf2a3c8e146e8e97",
".git/index": "daab290a06dce9d978c9090e14f158e0",
".git/COMMIT_EDITMSG": "e23fb8ea77775909e18b8d561abbf7d1",
".git/FETCH_HEAD": "c8bfaf54029d4f298b6870f392a4908a",
"assets/AssetManifest.json": "7b771254c7b0f9f1c82e52d4dfc61b6f",
"assets/NOTICES": "2efae76021de29e30961147ca3072f1f",
"assets/FontManifest.json": "bd716e84ec301698fa16e788f18242ef",
"assets/AssetManifest.bin.json": "f6169132be2592aac7a18d74c0424c21",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "df86d7bc5dcd75782c1a83802c5a80de",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/logo.png": "c6a5cbfc812e52e00fffd1682328f8e5",
"assets/assets/lottie/tick.json": "7c4c87348d6eb75f077fba0bccd4bcc6",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
