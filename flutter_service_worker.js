'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "083865fa3956e333a55f9d17eed7e07a",
"sepamed.zip": "eef6edcf997ee63e275fe6226cd84155",
"version.json": "47b16b0cfa8316aa5e05e651be43e1e1",
"index.html": "c67bfb7b1d96381780909f0554d529a7",
"/": "c67bfb7b1d96381780909f0554d529a7",
"main.dart.js": "4e1f37a1897ead01976c8ff26dec2113",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "31e0657c1e5946cfedaeaa9730a442e0",
"icons/Icon-192.png": "471590c53ac6e6aa76d818b5103e97ef",
"icons/Icon-maskable-192.png": "471590c53ac6e6aa76d818b5103e97ef",
"icons/Icon-maskable-512.png": "9f8e1c682b547fdec95c72154a5b11af",
"icons/Icon-512.png": "9f8e1c682b547fdec95c72154a5b11af",
"manifest.json": "89655b461167f89f302a7f43a4a7b259",
".git/ORIG_HEAD": "6268196008ab0b67eee0fd5ddf97246b",
".git/config": "7ab6e0175cda9fa721ca5a9d5aaebdec",
".git/objects/57/449c397c464ae0ed2c969d634bfe898c80d309": "0532b34f9e01a105a554c4e8451f785d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/dc21ad20ff1e7e48ab222c8b4d5a2c3271f6d6": "a8c0bc0e515aa0b1f7bdee8b5bc97641",
".git/objects/6f/6dd0094724c2963d977871a0cea499df5e5592": "640bb37c34607d61c4054a28c28781cb",
".git/objects/6f/b0647bccce4379827d66bf2a4ea5d1c2e318c7": "bc4214f0224b95aa945a1770a99f7100",
".git/objects/03/f3681e77f84bdab4049abba654b7bdf05d5323": "8b57df41013d2a0f8bc6e7f82e131e45",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/6a/00135bf931f56567b0e8b9f6b38912a18c4739": "819167a3d17b210da914e49af1a0a292",
".git/objects/6a/93c86c62b1fa16a740381fe02573e6fa701218": "8bfffb83c7a91b866602375f11fe2cba",
".git/objects/32/f780a591f07a427a6ae3c033df789758be10e0": "5e4c8c8c10d915cc172743cb8a9706cc",
".git/objects/32/842d49300cbc532f10251da49cf74377a77986": "0b1b794842210dfb3034f1976a14329a",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ccfce6f98b0e8a4bed2b2c808aa3ed2302915c": "dd7cf575cd10851e3cf58ae1914d0b74",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/51/3ebfbda5b997bc1dddb0040e59d89af7b63d7a": "92cea9993e63cffb42fe052eda24f281",
".git/objects/3d/00d6ddf64fcee2b5e6ffcb9b4946635d4e1072": "f484b3076dd6188cb5307b68e5063e11",
".git/objects/58/4f78c20fdee0fa02ea39cf647735f23d340169": "17c4f6ce1ea14f064d52c15395b49497",
".git/objects/67/0f506e719bdd0efc6de8ac8a5906da283a158b": "a0496c193b537e184379130d3616f8f2",
".git/objects/93/d6d035487ce48f648e1b38c698c54c81779fa8": "a6695e6a776c6c0d01bceb88140c73db",
".git/objects/0e/55f6711463b1d058b6e3e6af0e76a33aebbaac": "93ac82d9d8ce4d230c156cbb7f27302d",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/34/247729972b800f612aa7476e017f5f90a51dd1": "ce92f5eee815132258aedee23c39cf12",
".git/objects/5a/8408ea069f9fa72f89aa0d25f3c72d36638183": "ba54588889c9a7ed567b548b52997741",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/cecf25bb03bc1fa24d847ec3c459539ed8f78a": "5a73de4a656b017ee42581ba562bca6d",
".git/objects/05/166af060d51f7fe1146f2321f20ddb936b8a9e": "a12197666083df3734a3879d1c778b5b",
".git/objects/02/b46ccafe33b16dfccfa6695f6a75ec8e1cfadf": "fd3d3725bab5ee7425f567ba1653e3ea",
".git/objects/a4/2effe4641a236a50eff2ac06bf173678fa4a14": "019abc32b83794c1e6aeca56f6ba7c78",
".git/objects/a3/19a2a2cda92a0e63444745f7a8b86ff6efd341": "98921dfee3ca638872411433a8b43aa3",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/d4b0ab2f2a9d04b8a8f8493de5fa286c3c2509": "2828120833a2239115cb31ef35c498ca",
".git/objects/bb/b473b1ff2a155d20a203a592da9a79b33f1df3": "cc947139f0201a0a2c49ac6cff5a6b6c",
".git/objects/d7/ca1ff10d2a2faccf2d9c2d921ee879a468f2a9": "6e66ca85a80302b519843854d8a7d4c7",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/e5/49f8befa2390f4070314ee46d17d2c7c4827b5": "30e9ad86a16cd87ae793ffd8ea3a650e",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/ee/3e58654f6e22cee4bc4f7f1b25c77a6113c58b": "bf64d34ced3e64725e72d62bd290e8ce",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/71ac280a4f73d141728ecae92f3c42de1ce589": "b2afc3dc76081c7d51448b61ccb95fc0",
".git/objects/e4/0a4f746d5c923d194e9e67a9da49a069a2e8f1": "52397294c1f730cc5185da10f27e5a7d",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/a03d1c66e3131833e3656b246b5a82b662031d": "9c02199e8edb88df7b3724e0eeba56fb",
".git/objects/fb/96331992a934a783cc75b77c270b13d06f316a": "4b5b29bad26583e2df9b180b781827c1",
".git/objects/ed/640d6e310287947b47ada90ed70c07f7d45402": "f0ee1065d4aa944bd0b4f0f8f0bfe846",
".git/objects/c1/0b36a0bed96489d276374fc617dbe3e352c54d": "e369130deb3bca0d3225f9281ad3c6f1",
".git/objects/c1/8a714c17a569ee1e31010dfbf1e7d9898c2196": "16026f35b85f9b634d608d83c775ed68",
".git/objects/27/ee6c84e86f7932f16c205db7948302a059d72c": "0cbd37bd89e04ade400fc31fb5a42a7c",
".git/objects/4b/215e1ff12097d45fa4583ad42ae5f6b6ab6170": "fd46bd38b06f622e4552a4e9cf9828ed",
".git/objects/1f/413e6ca193bff0c757dd946f8dfbf8e62b2bde": "7477aa5f02d6764d6fd030b10ce324a3",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/87/1fb8c24e49ef68b1cec9dc2ddf9d6922632e10": "ff371c061756f0777319c3e5acabc8a1",
".git/objects/87/02ec1e5a50e51306ba326f58e787bc8461c61c": "7e49b90465b8680dddad1d16d8759b97",
".git/objects/80/05823ecb9a0d6e4b66ed47d4fa75d92cacabe4": "e1f17530bb8d157844fafe7cef907f0d",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/74/9762c9ea9532febe54b9195dd95c4e230d2502": "c66f7ac989dfca5ad47eef61d92048e5",
".git/objects/74/3eb8ecf91e1ed5ec7173dd094702beb25d2466": "8610f948236d3789b84f0db3b0aa616c",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/28/6ae118bbc88af270e6653cdba0410335d70bdb": "e69d9ff83227a52973c1aa54fa65e97a",
".git/objects/17/4e1cb9649d673e58c1f3993d1303c2ee03428a": "5d618916f01d9419b7b547576f9e6d87",
".git/objects/7b/2bd4b9915b75b247887eb4d12be9915281deda": "29a2c7c606bc171c464e070f353dc25d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/10/827a36ee844375eff596484c2ca250fdeb8f4b": "4618a206345d490f3fef77a5d1914e81",
".git/objects/21/d628d7fea8b7c52e3b9de43a93200dcf4e8836": "2f0937f60fc42d486ca90a5084ec7653",
".git/objects/4d/246da30594bd4cf7d167a881d5825d9d9d8f86": "e966ef9ec0adb5a1957021eeabfe09b3",
".git/objects/75/4e946616b7bb8cf5bf4e747d1a4b9e2f3a0455": "04c2fdf957ce3e70fb26b301731764fe",
".git/objects/75/5d532a6cffb065e550bfce2184e3f12df7c117": "f5e0118bff9b07d25fd8d01427c88008",
".git/objects/75/4b32a251e899f3efca08ceebc0c13f248b5c25": "b7caf1024617b561a1581ee3f540106c",
".git/objects/72/8df182c2198baf14982169e65d7548cc88c953": "4493d30df8f0aa3775bda5bb9a3370b5",
".git/objects/44/2b947d212db737921b952489d7cab1bbfcdfaf": "351be39718e8b5f942c1d592d429f875",
".git/objects/2a/1cee1bd305137c8ce4f57e107895f8a224fd0b": "d63eb93cdbd9e100b6c341eeb719dbbb",
".git/objects/07/62762e48f8d0853d3ad927234abf3dd49e47cc": "c07cf0bc0b4219d4bdbe39b28d294fdb",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/9a/5379809a6da7dc9ff0c49ab89d5d26563f956d": "aeace865cbbc6ac3797fe35dac9d37b6",
".git/objects/31/31a4bed931c551f238896aa4525062cf7c024b": "e6b76f6ca9dabfd1073de4ca86b83ac4",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/9b58c60b938f7b1a8f2ff3113ec5941c60f752": "67e8d0260c418df036d0f4ca4469f99e",
".git/objects/65/0fdbc1eab9e5cd69590c66121e0adcb94ebcf8": "26ac3e42b3dcefbf3616228e9c740b46",
".git/objects/96/66e2d17c5ee5d233d11a0735f399f660c4cd74": "78b9213c18082f7f9bac34035bd32126",
".git/objects/54/b13633c920adc7293fe1300a73e958883cda49": "ab6176ecc43cd43d29849af4c7df139d",
".git/objects/54/1da20b996751dc501b58cdabc6e78bf5c2923c": "cf9d619ed97123f1d2034047d3bd9c6f",
".git/objects/98/d244848eb8f16c6c49fe397cdea3a1f26ebae3": "e789edb858147a49f448205dfe45c813",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/37/29f24370d2ffb3a5356d7666e96a1044a32f69": "c2e560b9098113f3b8713f8e868a9541",
".git/objects/08/4e175d4e6aad0f044178da705ad64e9f0f53c8": "3cb0864eed43d59cfd4f98d1cfef54c9",
".git/objects/6d/e9eb72087ffaca2c0bddb3ea1b3c072f011893": "24c3a582a006b80aa9ee5b410936cfaf",
".git/objects/01/86b8328d54ffb07a3f2ad461c20d0e60015493": "f6178b7095c571d42ba9e7e367e075b2",
".git/objects/99/02689fb14fe85e8a7870215fcef2f375a17e3b": "7b08940c07ab6f4113e5e144dc43a8c9",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/52/4b66a75f3424b4442c9305eea00d8752435f5b": "d6f251025f050c7363b932997c863a8f",
".git/objects/52/320900f88f7f715832f2c24144dca3ee0b6e5e": "42e1f43efe1be0f9407231fb3748ed30",
".git/objects/55/ac8c97f247d1d60b851d0c73d32db84d2065ac": "b100f1dc4e1591cda419c03b6bc299ac",
".git/objects/97/0e22f847679bb4dac5f9125a7a23e6f2f6269f": "4d9daa7c189d614394a9bae26f8a898b",
".git/objects/64/68092bb187e4485e335aa3c4c697f51abcc87c": "f7d2dbef066c75e63d9a5b9eef836b26",
".git/objects/bf/ebd7721a03c8780670e5e68ab850f8ea375897": "462fdd43ef383ffa3b700f2344211569",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/f76581c9e6421bfafb34fd415eecf45376c0ef": "2b5a3bf16b432c1c40331be4edb31fba",
".git/objects/a0/d978b635ec760fe99afb4ad38c2aa319592eae": "d1daecc2ce9d6d15a179ea3095082a70",
".git/objects/b8/b29f95ef426d928ddab20e528ac39c54f3c6ab": "680b84bf0a0f814bbc86d2ad15893208",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/d2/15759b73dd2882d7184b096374fdaa9888c435": "3cedd6ebfa7a4e1f0bd12d5cd9b021c8",
".git/objects/af/7d5e26038729053dd3230e7becf06ee3923cdb": "a93209da406b2d4dbe5039a2863d92fb",
".git/objects/b7/9153059a8cef0ce999340ff33eb4880629111e": "0c21042222e896f73ad254524ec99c3c",
".git/objects/b7/874a962e84ecad3783fe659451fc55b2445299": "c26a54ca4c22bb74d50209277b376374",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/a0c33e8a754aaec64085c537ad40fab79a7482": "26ec7e2982d95b4df8bebcaf860802ec",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/fc928ddfe7c4c224fbdd1e99eaec6b5aef274b": "c6fb376251496e29abb411da45d95156",
".git/objects/e6/61fa1ea2170e8df8b6ba47a8c9c9fd1ad4f16f": "69e9e1f9cdebba933f6e00265a69c608",
".git/objects/f0/31ddfcfa1d41c77153545651d054bb153f14dc": "761cd35a3ce28cb99f88a2395ab6e846",
".git/objects/fa/3512473c4df2383409f3f3aec0b90ba8eec251": "08ee5cc919c46518b9a575c195cf51cf",
".git/objects/c5/ec53dbe7af479790bc80f660492091677c711c": "3f900cc98228016d378c4638a2c317f8",
".git/objects/e9/1469d03018c3c8372d498e7f45f82da259b80d": "48eee4627c32445977e5d21cbb648d1b",
".git/objects/f1/4f91088085ba885ac51ed27522957cb9015338": "db35c2d219c8b7122dd6a432a99a148e",
".git/objects/f1/c05ae1b96e898e544ab9b837049a33245c13cf": "a0e136fab77bb5cce51f78e0a1b6c51d",
".git/objects/e7/0add0e220f6d9b52fbd2231c666296e1864409": "95d78fc6af2c3287bba55156d7ecd73f",
".git/objects/f8/a7579a683ab318f70dca9b9c4e4d147754b9a6": "7818e27b6e13c879a435765310b30637",
".git/objects/f8/4e06a5df7513e42dd861ce49474099316e54d0": "b9acc757b2dfb296a0663e99540aec56",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/a3bd0c36c4e970a65c7268b03afc7030b72e7e": "ee8e27e34074d6539aecd60011bdeb79",
".git/objects/79/a6f48535f0587b6ad340236f367dfc66c79d90": "6130cb6c1a4947b23245ea7971dc71d3",
".git/objects/79/b460e011aa5a855b457a35fd9a79c898573009": "b0132345fbc02d1cd53f67646634b047",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/bbdeddc7690af53898dfec006c63d0da01bd55": "412c40e63049fa1b27c8c2772cbe69f7",
".git/objects/77/2aa6f44c7b7b1179938c29ae7f4bf7af8d35da": "427bd2a4c740f06ac1df49958f6eab05",
".git/objects/77/eaefbc110c8fc835cf110af39789bb9aeecfdd": "357b79ee2540f6df27937912f51954a3",
".git/objects/48/4a00739e2a1394db0f100d7bd03b65b715ee38": "1e2e378cfa01b1ad78cdb329552890df",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/84/88f19bbcd16f358c33b2eadcdd78d98b951744": "1eb39b560474d82660b1cae525a97dc7",
".git/objects/84/91eedc4f19e19b3d1bf6e5baf2f0611b658f4d": "87c10cad3671f151c6525c50ebeb4f1b",
".git/objects/4a/1b60b0c7be337bb7918fe765b9bb0cc3626961": "f23771cf35e006eda47bd2843ff7dc97",
".git/objects/4a/a13df4387d902621a8edbdcb82215eaee051a5": "130654b78bfba6578c775888c236c8a3",
".git/objects/24/6c3f38f75783c8f5e1d9f0e3cbad18ef060e70": "aae6a1895f70dd89de5fe3e81c94e243",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/15/c1c246ac387baedc2a3b9322b48c019489ed07": "5b2b49c0e62c0330fd044a228a76c2c2",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/a92f3f5a28e69e089e11cb2b27d11793eaf36d": "ff8a8537b959f0b19b5459505c276c36",
".git/objects/8c/a6c5bd8487033af2ddebb47fa1498507917af0": "b8c779ede0965b11923a0f2db08405dd",
".git/objects/1c/b879734ab73586c5d821cf164607ded718e858": "84e55b97b55b42fcc7e57103c145db22",
".git/objects/1c/baa8e40c3c5d0ca68abc6578ee9884cd3e8233": "c2010efc0e383a3b1e595ba3c979ab9e",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/40/6ec447761e13f451cd2a83dace580e691c0edc": "c7ff53de82bd7479578ec6a38f13c621",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/57596e2bba06d505b39cace182ebc309484a10": "0e252bc055a386170e13afd3fc82ba9a",
".git/objects/8b/9afefa6cd990096a726eefc514873685daeb69": "c3657d622ae60d4342c49345d0aaf9a5",
".git/objects/13/ebdfa006571ff3db4bb267779d163c792cc015": "e2060ae93fe9652d48951e9f98cbe0bc",
".git/objects/7a/4e81e857c4493bf955d19aed7935bf17eb8279": "8be33400bba229537ebdca983a53aa58",
".git/objects/7a/995e3fd8bf3ddfce1a26330d2c78516a1706a7": "d7fd711bf84470ce859fa3aa525545f6",
".git/objects/25/1936dd4dd5823e14d49644a526bfc39bff7752": "afd97f763600ca3e000eebd5e7c7e826",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "db4a1074dd2c98eedc9feded3466abca",
".git/logs/refs/heads/main": "db4a1074dd2c98eedc9feded3466abca",
".git/logs/refs/remotes/origin/main": "f1003b9165fd0ba7d3f8f03c3df03957",
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
".git/refs/heads/main": "6268196008ab0b67eee0fd5ddf97246b",
".git/refs/remotes/origin/main": "6268196008ab0b67eee0fd5ddf97246b",
".git/index": "2ed0269678fc6fb53e9c702245825d66",
".git/COMMIT_EDITMSG": "36c4322934862502ba577848454c32a5",
".git/FETCH_HEAD": "818d3f4f60f6e7b25417a920dfa03320",
"assets/AssetManifest.json": "7b771254c7b0f9f1c82e52d4dfc61b6f",
"assets/NOTICES": "9caed5b7092cdc9a15087ff44be0cec0",
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
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
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
