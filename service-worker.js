/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [
    [
        "pages\/00d909db-5f3a-419c-9368-09543f7dafbe\/index.html",
        "cJTDYnaoioABTHMiYLA"
    ],
    [
        "pages\/41756526-9c38-497e-b0f6-ce6b9c309675\/index.html",
        "IL6lIwoDA1GrRXes3PYwKw"
    ],
    [
        "pages\/36b0dddf-9f7b-4192-b630-a55edcf9afc7\/index.html",
        "eqPK2kKgiK5YRXnVyJUWw"
    ],
    [
        "pages\/398fba48-a580-433a-a9fb-6cc6476c2956\/index.html",
        "NSOM9hUKQMNxNAZFHE2bcQ"
    ],
    [
        "pages\/a5f4e783-f2b5-431e-9104-535cdf0b3589\/index.html",
        "9mthQDWEVQ7tqOyYTuENA"
    ],
    [
        "pages\/c2b9a16c-d40c-409e-b5e2-5b482e202487\/index.html",
        "4Ao3NPhNiSaFpgwJ8L4Yg"
    ],
    [
        "pages\/79d4f572-5cd0-4859-ab6d-0a1a7e51c22e\/index.html",
        "YUIsc8NBrN8YJvJP5WJEqA"
    ],
    [
        "pages\/7fd2384f-c32e-4ead-8237-f0874eb3a75e\/index.html",
        "anXVYEo5PeALMRnyG1YIQ"
    ],
    [
        "pages\/d918df21-85d8-4f93-80c1-aef99433f014\/index.html",
        "SRFHIcaDj2X8aHrkdE4ffg"
    ],
    [
        "pages\/93286bf9-df7c-4411-8e92-0c065cec8b27\/index.html",
        "QbqPoxfnkLv9Izxb5elmQ"
    ],
    [
        "pages\/ba868305-75bd-4c07-8e00-3ebdc8de2f1b\/index.html",
        "IOklApOiK0BDEq2fO3mQtg"
    ],
    [
        "pages\/42c428c6-ecb2-40b7-958e-8d907a9a497f\/index.html",
        "oGXE9yT5tCklfi6giGgg0w"
    ],
    [
        "pages\/1359dee4-70c3-431b-a59d-88bea4c2e53f\/index.html",
        "Xsza3XHFJpa7bXTKqbfwZQ"
    ],
    [
        "pages\/8292c8dd-83e5-4862-86f0-d7df70f793d4\/index.html",
        "HfDQkmJkG4TAwRufMIyFg"
    ],
    [
        "pages\/736d8f84-7fec-4cca-9acc-a1ccdee73bec\/index.html",
        "A6IvmmXjcSKNV3PWcbkmbg"
    ],
    [
        "pages\/e7bc583a-8947-4574-b601-ef2a3756e4a3\/index.html",
        "DAT0k0kRGVI5N7xgg4H8eA"
    ],
    [
        "pages\/d0fed51c-cd02-428c-b79d-de05ebc60e8b\/index.html",
        "ZdM6BtWDq1hDH6Ld6oKmw"
    ],
    [
        "pages\/f3d0c5b9-e241-4edc-a05a-ec64d6de186d\/index.html",
        "TnzuwTGeDpgRPyk4HqEA"
    ],
    [
        "pages\/26ebc5b8-f8e2-405a-8c69-8e2827fd0a78\/index.html",
        "5IEqtBiNFnrpwMPYpa4A"
    ],
    [
        "pages\/26fc6915-b328-4e7d-8351-8a2f0ca9cc13\/index.html",
        "FRCHbI3uiXpH7Bw1OCGtlw"
    ],
    [
        "pages\/73e0cf48-4aa8-448d-81a4-d02381ca77d0\/index.html",
        "9XLq3jJ54u8sMTbMamvoVA"
    ],
    [
        "pages\/25978a7c-3669-4f7a-93d9-8ed0f54eb123\/index.html",
        "3BW3bMQgFl7SQE20CGxz6A"
    ],
    [
        "pages\/f7750ad7-5be6-42a2-96bf-ecad8487ebfb\/index.html",
        "lJGrW5G5qkbS7vUbFAQEg"
    ],
    [
        "pages\/28444f61-d316-4a16-8e63-8df1fab38d80\/index.html",
        "qDRiojhGJTxGfPGqmkZQ"
    ],
    [
        "pages\/37101f41-41db-4859-a8d9-1af08ed4d108\/index.html",
        "zvbrUAnIqtVBJQEIcgDHg"
    ],
    [
        "pages\/ed7ccff6-a06f-4ce9-b2fd-e0ae8b793e03\/index.html",
        "hc6vb6y48qWjwejq2Xur4A"
    ],
    [
        "pages\/051eefea-97f1-4ea7-bd5e-b352031e2dee\/index.html",
        "3ueD9SSHyRbDVTkHfnlwYg"
    ],
    [
        "pages\/0b7c024f-279a-437d-8ce2-83675ce6faf3\/index.html",
        "VCxtqmnHDDPcNSXA3kasVw"
    ],
    [
        "pages\/6cf3d3b2-3f29-4df9-9bcd-55fd5a9fdb05\/index.html",
        "QkNaBfpjSZDqm9wu5sDOeg"
    ],
    [
        "pages\/3bf6ea2c-1337-4d3c-b7ac-62d78c885b43\/index.html",
        "28U9nzHkduWM8248th82Zg"
    ],
    [
        "pages\/b88a7312-6b37-4312-a0c2-32d760ac1358\/index.html",
        "IQD80nTV6spBVcNwCrjMXg"
    ],
    [
        "pages\/82afeb51-f2ec-49c1-88b6-a234c60d1623\/index.html",
        "UquzeUxrVzZ13bVICf9EoQ"
    ],
    [
        "pages\/5de83fa5-9ec9-4f75-a040-a9a03c0f8ed5\/index.html",
        "eyasBWSaazKpLkdyMWqIQ"
    ],
    [
        "pages\/1ece1067-bdf7-4630-b2d0-1118029ee310\/index.html",
        "eci1jjrISHW5xVnxQQekw"
    ],
    [
        "pages\/c27064ed-069f-4155-87ad-4fa0f1681db5\/index.html",
        "JyOTHWC8Ex7EbpS1kfWVqw"
    ],
    [
        "pages\/5a838360-239d-4872-b692-31f6c5d7bbcc\/index.html",
        "Cpubh1arQhJdbxTO4tjvw"
    ],
    [
        "pages\/e0673f26-61eb-40b1-9e17-0774205aacb3\/index.html",
        "PNkKbMUin3uYLAgqtSWuw"
    ],
    [
        "pages\/6b105c9b-c388-4fa0-907d-232ac148b8e9\/index.html",
        "O6V4JlYlJqgQYGgURcM1w"
    ],
    [
        "pages\/9264539f-f4e5-43a3-aa48-6661503c876f\/index.html",
        "aS3Izs7DIXkYW6bSTBmJDQ"
    ],
    [
        "pages\/789c15ee-7ae6-44f6-b3b4-19e20d6d0708\/index.html",
        "4IXDF5GMZJXpA25Ab8Ghg"
    ],
    [
        "pages\/7cda6e5e-a804-40b7-bb78-8d636a89dfe3\/index.html",
        "A1hpHeUAVcPSOosiyStrA"
    ],
    [
        "pages\/56f31259-ac9d-43b5-b1bf-63ff3d61f5ac\/index.html",
        "QrwnlcvyBYvegPlFfM0LFA"
    ],
    [
        "pages\/90a3bde1-7d9e-4cd2-b27c-94ae58b49e9c\/index.html",
        "BZnxE8gwXCzcEEDXTO34A"
    ],
    [
        "pages\/1e6c427b-7970-4334-9156-8997bb4bd8f5\/index.html",
        "KaiQAoQciKiumwi7b49sQ"
    ],
    [
        "pages\/67bfc107-0fd9-469c-a8ec-cf29364503ac\/index.html",
        "wm5z5lNSkJbYz5dfKfKBQ"
    ],
    [
        "pages\/d810beab-8f1e-4302-9ad2-b9f7125c551f\/index.html",
        "dNEpVtUrl0vde922GFhj8g"
    ],
    [
        "pages\/a7de1c4c-3a9c-4ea4-95b7-347bf3ecb13e\/index.html",
        "cvy9GYMpqxozKLLsEVD9EA"
    ],
    [
        "pages\/afda9d31-f970-4c71-bbc4-b1175da6cdd2\/index.html",
        "WFPQ6dADNPLOkjmMaJdhtA"
    ],
    [
        "pages\/2b6129ad-4be7-45f2-b91b-6517edf0664c\/index.html",
        "E6QaTkz4Vg15acgCHqxYQ"
    ],
    [
        "pages\/cb3f60a5-7ec1-42d3-8988-e4e3d41868f8\/index.html",
        "FzJWYFrfCdIio7PyNdQujA"
    ],
    [
        "pages\/2b06b669-d280-4f2f-89f5-f234e616ae54\/index.html",
        "0s6AdmPuVjl3aacRxG2w"
    ],
    [
        "pages\/ce399f03-dc01-4559-9c36-9e92178cf4de\/index.html",
        "VakP3pKhs1SOQlPGUVvxw"
    ],
    [
        "pages\/5644a6b8-ee5f-42b4-9a23-b1fc758a8a69\/index.html",
        "9tuImvwS4rdgyGM3mNew"
    ],
    [
        "pages\/aefc441e-c340-47b8-bf58-92fe89869fa6\/index.html",
        "SfHCiPtdd60rfWbwboOyHA"
    ],
    [
        "pages\/dbbfbd1f-9ee0-45fa-b2e5-e374308fc436\/index.html",
        "LuIP1aOO1I5dV0mrLwpw"
    ],
    [
        "pages\/96ee4ef3-74ab-4a10-bbb1-98450ae08ea1\/index.html",
        "mjRwgD2mzNZWI2MiKuG82Q"
    ],
    [
        "pages\/4ecc838f-ee14-463e-bdeb-962953260edb\/index.html",
        "RbmugyI24QxmHKNfORWy0Q"
    ],
    [
        "pages\/eee37518-5597-4259-b27c-2b41385f0e27\/index.html",
        "yTR6k17g9YJWwL75oI2ZEw"
    ],
    [
        "pages\/e1ec8bae-2e10-4cc2-8242-c1edf1582689\/index.html",
        "1l85IftOom64LmA6yehLOA"
    ],
    [
        "pages\/263ec131-eb83-477c-8e83-2aead6e07bf4\/index.html",
        "GVPg6WkVOnIdBoUpcqoDWA"
    ],
    [
        "pages\/b602861a-e113-4662-aee2-d724b7b19b46\/index.html",
        "9BDGg4ewnK6JhLk8RProrQ"
    ],
    [
        "pages\/caaf3380-5f3e-40fd-916d-a6404a808d7a\/index.html",
        "sl7GjejSkUC0etLGbQksg"
    ],
    [
        "pages\/8f6a521e-1309-4f3f-974b-99e2f700d50d\/index.html",
        "H1y2s3XZo4nTCKsGRKZnIw"
    ],
    [
        "pages\/d3551792-5732-4998-8646-45ceed434a21\/index.html",
        "De7knlZMzFO4UZ3vgS40Mw"
    ],
    [
        "pages\/09198a12-5ddd-4541-b661-fe08daa299eb\/index.html",
        "8I2LSSFwPT0f3N1QBVx1Q"
    ],
    [
        "pages\/7db2e086-b697-4ac5-bfed-21634e361a96\/index.html",
        "SPWyQaxvEik2zkrSeQwuRw"
    ],
    [
        "pages\/e05317cf-4e06-4bad-b936-6d25013ce9ea\/index.html",
        "SKaeS670TA0ggufPTAEodg"
    ],
    [
        "pages\/54d0e752-6cf9-443b-8dff-edaf969025f7\/index.html",
        "UpcjaqxZuwGCWMrP9ZcYw"
    ],
    [
        "pages\/44307c27-c2f9-4426-9337-35ea48afe0b7\/index.html",
        "vODLfTkWCtrl81OdsZlHw"
    ],
    [
        "pages\/d1c3a5f0-e59d-4753-9d7d-e8a6035325f3\/index.html",
        "7zacQBdcrOD1fJtCNJ5slA"
    ],
    [
        "pages\/41c2c1a0-34ac-4d14-ab75-ab26d6784680\/index.html",
        "yCqZpvTzA4n0qBxw9SV3WQ"
    ],
    [
        "pages\/22ab4019-6a2b-4933-a317-ce8fb838eee9\/index.html",
        "eCcxaF9q4TldRUBuUdlljA"
    ],
    [
        "pages\/8e807ef7-11ce-4afc-9191-4ebcd9f19c3f\/index.html",
        "BKfMGDxT1faA39dtlD6lBA"
    ],
    [
        "pages\/327e8264-bc0a-4f3f-9b0f-0681380b2818\/index.html",
        "fF5H7BDFSAdyEkJJ0sXGQ"
    ],
    [
        "pages\/a7f9bfbb-e0cc-4d9a-a35d-56b6be753d7a\/index.html",
        "axzMQn50V7AcIMW50f2Iw"
    ],
    [
        "pages\/524cdcae-5fdf-4ddc-8f1c-3a5b37ad9395\/index.html",
        "FvFfpPcDgm1nBHTQoCcN3A"
    ],
    [
        "pages\/ffdd08aa-63af-4411-8dac-b55a9c2b2af5\/index.html",
        "bxKLfiNYt56CCV6PgkCnrQ"
    ],
    [
        "pages\/bdc7ce15-3f93-4ad1-afd6-f554d78188cc\/index.html",
        "60doXNErNVIBwk5LDAXC3A"
    ],
    [
        "pages\/2fb66212-874f-4c56-b7f0-48c452dfe6aa\/index.html",
        "sYaplOiSyyU5QBGWcUQw"
    ],
    [
        "pages\/e0e4434f-7a82-4dd1-9a27-e03a68ce80a8\/index.html",
        "5Dfs4EZlZg6JDQwtNfGVA"
    ],
    [
        "pages\/bb4a4297-586a-49ca-b317-ce0f8ea56dc3\/index.html",
        "HcwPFseLVA9r4EslapOTRQ"
    ],
    [
        "pages\/7baa376c-8113-4996-9cd5-5923d56fe8fa\/index.html",
        "bl3sKX9ytxAPQCGC4Vlcg"
    ],
    [
        "pages\/624cbab6-e7d7-47d4-94fc-26a30e78dd6d\/index.html",
        "f3scDgiayWa4Chu8cpc1EQ"
    ],
    [
        "pages\/0750e916-1efd-4e7d-8509-a2d7ec200d39\/index.html",
        "bRTKKqEiDeb8nVqkUT6gQ"
    ],
    [
        "pages\/d69864a3-6880-4f75-9ca3-5a810a9035b4\/index.html",
        "fn7yzVzSo3HRK5mmtWjWg"
    ],
    [
        "pages\/adbfff32-7baf-4ddc-94ba-0747f1d54bad\/index.html",
        "EF0X9FBIELg1ZTdcietKw"
    ],
    [
        "pages\/35b8f163-2377-450c-9afa-ad06aeed08d7\/index.html",
        "QDPB8aGGc6hFeS3s4JB4g"
    ],
    [
        "pages\/249548c8-ed2f-4086-9ff8-a71909a480b1\/index.html",
        "DjUgmikqdF0DuOfTw8dEZg"
    ],
    [
        "pages\/44aa0cae-078b-4eeb-87a9-512938d3ab84\/index.html",
        "D9rKHvY6vIRQcyvGGnP7xg"
    ],
    [
        "pages\/249f2b2c-43b5-4bbf-abc8-e932ef1bc5a3\/index.html",
        "JGqI9eYTiOZgi1TPP1iWgA"
    ],
    [
        "pages\/3a79194e-170f-4c61-9362-ddda04776ef5\/index.html",
        "EPVk9IQ34DdRHWTwRch6g"
    ],
    [
        "pages\/abdd0f77-1410-4fc0-b2d0-5dc0368af5c3\/index.html",
        "dN83Az6ewfgLwRAzJOjtQ"
    ],
    [
        "pages\/e260bf0b-9e5c-4914-900e-b47bdbcbf4d2\/index.html",
        "FwjHp9XdmMFgjYckmWqWBA"
    ],
    [
        "pages\/f299c7fe-a11f-40cb-bde9-31f3996d1b62\/index.html",
        "BZUNAJVzNU9PUYFF1xAbLQ"
    ],
    [
        "pages\/415c596c-9bef-41b9-81cf-7bad9aa9cb7a\/index.html",
        "8HTEu64PnWjcKLaTlK5Fw"
    ],
    [
        "pages\/8c5c892b-8150-47a1-971c-232cc4f7832c\/index.html",
        "NxqZbc7Ip9dnfaiWtIbsOQ"
    ],
    [
        "pages\/c48e5762-ad4d-480d-b7a5-7dfe31736b84\/index.html",
        "QICtIulpa5YdOvc81q00Q"
    ],
    [
        "pages\/1b4f43cd-2503-421c-a9e4-b8ede438971b\/index.html",
        "lWtkZ5lGeDvrGRFTRbdDw"
    ],
    [
        "pages\/537ef91e-0a32-4c26-9d65-d976a13f1670\/index.html",
        "wl3n4VpgHqud7OMO4YWeQ"
    ],
    [
        "pages\/7d85c97b-1240-4a2a-b97a-cc47516dee24\/index.html",
        "voQDnoLNIBdZb8rEY41IQ"
    ],
    [
        "pages\/19ac5b08-a1ac-4c26-807c-70b4dfe0a87c\/index.html",
        "sFx6ZXc8QwQ9uHxPC1IvPA"
    ],
    [
        "pages\/7b411f57-88c5-41d5-add8-f9a780f0a74e\/index.html",
        "NzbDvjw7oN6QI7ZzvSBzqw"
    ],
    [
        "pages\/beb58182-cbbb-4786-8ed7-77bfe5797afe\/index.html",
        "pMfvPNVLTakeWZTLdL6I0A"
    ],
    [
        "pages\/a89fd56c-745d-4836-a9ee-fb3a10ba5347\/index.html",
        "c2JFtSCCrFYbAHFn5Q"
    ],
    [
        "pages\/d6c150fb-5964-4ffe-92af-cdb91b966c06\/index.html",
        "rNv8X0gEx8Rgv7sg2tzuaA"
    ],
    [
        "pages\/2f560cce-7d73-4f82-8d25-f1ee1f568d01\/index.html",
        "CB35tU4VPzyCwYKDBxddaA"
    ],
    [
        "pages\/0f7775ba-42d6-49a5-aef0-a03b555a4838\/index.html",
        "zx2wHUcGHuRcstSCtrjhw"
    ],
    [
        "pages\/ce28e720-4792-4ec8-a88e-66082411475b\/index.html",
        "gPHCHGtppfuwuIxhjZOe8Q"
    ],
    [
        "pages\/ee017c67-12c0-4443-88d4-b5bc332bce70\/index.html",
        "yF1ZJTAiMRZP3jwEKZsdpw"
    ],
    [
        "pages\/65eda79b-f957-49ac-9909-8563646f1bfd\/index.html",
        "SxC17qvLM4pkAIXqsabQ"
    ],
    [
        "pages\/d8e744dc-e82b-47f6-bab2-ef8bf0ad4b7b\/index.html",
        "QMSk57nT5CcSAaLrMu2PKA"
    ],
    [
        "pages\/681ba3e1-ab16-483f-a9a3-4cb630b44328\/index.html",
        "X4ZmPkC7tefjOgVt6PiS9w"
    ],
    [
        "pages\/bd2bca1b-252c-40c5-ba96-4a46892debf7\/index.html",
        "yc4KEJcwjn96kxtjMjqRDQ"
    ],
    [
        "pages\/3680bae4-4b5d-444c-a337-f369ee109aff\/index.html",
        "2TBWrdSf1jRlqcc433l3Sw"
    ],
    [
        "pages\/e33957f9-4199-40f2-952c-15bd3e254723\/index.html",
        "NTNlVmtjbweK5vZZhAbnCA"
    ],
    [
        "pages\/fe3f17bd-b2df-4d26-9b40-d89041c8934a\/index.html",
        "TAaSIdMHOj1obCkAF1c32A"
    ],
    [
        "pages\/f31ad17f-82cf-4063-bf5e-624a366fac6d\/index.html",
        "lgJnM34llUxS0bFnFhbqAw"
    ],
    [
        "pages\/52bbad05-04cd-43b7-92cc-257eb21cd751\/index.html",
        "ClFAzrhR4USn9db6RdrJg"
    ],
    [
        "pages\/c65f4703-33bf-441d-84bc-24f582e8d405\/index.html",
        "T2lQhjYiUxariyHrhkO8ZQ"
    ],
    [
        "pages\/38958b7d-dbd0-4fbf-9e1a-3ec62f03ce7d\/index.html",
        "okMDuDeI8e5mwOmr3kIwaw"
    ],
    [
        "pages\/730aa496-b6c8-4251-b645-d5c02b224f2a\/index.html",
        "mm8b2rk5INu9mLrrFI7w"
    ],
    [
        "pages\/0fbb1fbc-b970-4d10-adbb-7005d85f7839\/index.html",
        "tLaEd4N8O6C98v1R0SYvw"
    ],
    [
        "pages\/917458a1-c575-4a6a-9013-7fe8e69025b8\/index.html",
        "agkeyNgMuoxccmc9RpRlfA"
    ],
    [
        "pages\/876407f2-3172-4596-889b-02d9bf6ee2d0\/index.html",
        "8t6Of2n4SwCFcDWsfSV9g"
    ],
    [
        "pages\/27a1b40c-14ab-4a99-9bfe-e2375924ff9b\/index.html",
        "qDADBv76h9ZcNoBK2CesrA"
    ],
    [
        "pages\/920902b9-e3a0-48de-bf4f-e8e19e7baf95\/index.html",
        "4bW7DUYVafgRGbqj3hj0dA"
    ],
    [
        "pages\/f401b7bd-61cc-47c9-9708-5220efe726da\/index.html",
        "8F2E7SWTahJsIeMD3FHg"
    ],
    [
        "pages\/904566cb-2073-4d2c-97d5-4482057cd5dd\/index.html",
        "xdnKoCsgqFJPKFEtKJgw"
    ],
    [
        "pages\/461a1c76-c41c-41c6-9edd-b22ed1d5d001\/index.html",
        "LqXL1veFNjtRE9kIdMtxJw"
    ],
    [
        "pages\/6361abf4-80bf-416f-8534-33fe35e3c134\/index.html",
        "DPZGXPvbCT9yBEyPQeFwA"
    ],
    [
        "pages\/3a61b8f6-95b8-483d-bc21-49927edb64c4\/index.html",
        "n56wAp7eLgdRfXHCcLIWA"
    ],
    [
        "pages\/01bb2a3f-7da0-4c25-9382-dd8a35377cb3\/index.html",
        "a7zpHw5GeRwCfNRJz9X9xw"
    ],
    [
        "pages\/9e7d0f48-08b1-4a06-a6d0-d3a6b49a58cb\/index.html",
        "7qxa8kaLeMPETMs4wpV1g"
    ],
    [
        "pages\/01c66aa6-6725-4a3d-b78a-c137b03d5618\/index.html",
        "ppd7FXJz6fedxM7lG17G7w"
    ],
    [
        "pages\/64c59e77-f8f4-450d-a982-faf6810f0b63\/index.html",
        "JXiaFSd0HQkr0DEQjckiIA"
    ],
    [
        "pages\/63b983f0-a54b-4366-a6db-2ee490b1863d\/index.html",
        "TlvCU4sYllTypNmjItkhSg"
    ],
    [
        "pages\/1ed4b912-59be-4f26-861f-4269412c93cb\/index.html",
        "ECmChCRyJJLaPjXu21e5wg"
    ],
    [
        "pages\/fd525cc6-1855-46d3-b02b-30379725f903\/index.html",
        "ojAzJLUrhz554ns4Z19ReQ"
    ],
    [
        "pages\/904f355d-3fb3-43cf-a854-d285a1162609\/index.html",
        "jo4XE6mr49AjcmcyTW6g"
    ],
    [
        "pages\/97cff28e-c285-48c9-a041-27fa5b2ecc0f\/index.html",
        "j2OmZjPqBuG40fVEQIhFlg"
    ],
    [
        "pages\/f9c4e273-bac9-460a-8f61-a8dbc66352be\/index.html",
        "jGeiSrxrudMRbMCqT5djA"
    ],
    [
        "pages\/c7d7778e-bee8-45b2-a0f9-60582967acb1\/index.html",
        "5WLUCtCIXL2Hv5fe9wkoQ"
    ],
    [
        "pages\/86cefedf-d8fc-4d08-aeee-6a98865e7209\/index.html",
        "6NlLAKxlSr988egnAgKlOQ"
    ],
    [
        "pages\/911f1b0d-32c9-410a-bfb7-d23506e68e2e\/index.html",
        "CL7zQu3rgesUTUjgC254Og"
    ],
    [
        "pages\/d745e2d0-3fcd-4f8b-80ec-7802ca4b13de\/index.html",
        "t03rJOaq5W0FBTM9zFK8Q"
    ],
    [
        "pages\/aea37f6b-54a5-4952-95ae-f3347dbe2697\/index.html",
        "Ia1zSCilpYhEpeltcAj31g"
    ],
    [
        "pages\/eedcbb59-9eda-4f23-976d-e15ac03ab795\/index.html",
        "YLWW7x5sZBOjXp0fLvUw"
    ],
    [
        "pages\/7552cc92-3f08-4bf7-b1a2-f4b94afc366c\/index.html",
        "3FTxc8w4AmfUnjqjWgVr4Q"
    ],
    [
        "pages\/3dd54085-62ba-400e-aeb5-1b595340c235\/index.html",
        "xR53mKx1NUWRNLeE2JGng"
    ],
    [
        "pages\/6fc202b6-161d-4b36-8a04-2f73f2ade772\/index.html",
        "t9CgvzbsFVbQ0qTWZb3RUA"
    ],
    [
        "pages\/894f9167-0493-470a-a1db-8d3aced81c89\/index.html",
        "kEaKbzl9QzDVQpiGh2RA"
    ],
    [
        "index.html",
        "PsLiqJ2uFwGUEKKabBzMzA"
    ],
    [
        "manifest.json",
        "AGfHdezXINXD6lrtRwTEw"
    ],
    [
        "site.json",
        "5mfwxnRc1izMNGtYyFHMkw"
    ],
    [
        "assets\/favicon.ico",
        "HaBSbnoy8mFDNU595Wburg"
    ],
    [
        "404.html",
        "dSqOj2FfwLtvzh03W3Gyg"
    ]
];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === '/') {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise = 'body' in originalResponse ?
    Promise.resolve(originalResponse.body) :
    originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText
    });
  });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
  dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching ||
    !(url.pathname.match(dontCacheBustUrlsMatching))) {
    url.search += (url.search ? '&' : '') +
      encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = (new URL(absoluteUrlString)).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (originalUrl,
  ignoreUrlParametersMatching) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = '';

  url.search = url.search.slice(1) // Exclude initial '?'
    .split('&') // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split('='); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join('='); // Join each [key, value] array into a 'key=value' string
    })
    .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, { credentials: 'same-origin' });
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {

      // Force the SW to transition from installing -> active state
      return self.skipWaiting();

    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {

      return self.clients.claim();

    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
      navigateFallback &&
      (event.request.mode === 'navigate') &&
      isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var t; t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.toolbox = e() } }(function () { return function e(t, n, r) { function o(c, s) { if (!n[c]) { if (!t[c]) { var a = "function" == typeof require && require; if (!s && a) return a(c, !0); if (i) return i(c, !0); var u = new Error("Cannot find module '" + c + "'"); throw u.code = "MODULE_NOT_FOUND", u } var f = n[c] = { exports: {} }; t[c][0].call(f.exports, function (e) { var n = t[c][1][e]; return o(n ? n : e) }, f, f.exports, e, t, n, r) } return n[c].exports } for (var i = "function" == typeof require && require, c = 0; c < r.length; c++)o(r[c]); return o }({ 1: [function (e, t, n) { "use strict"; function r(e, t) { t = t || {}; var n = t.debug || m.debug; n && console.log("[sw-toolbox] " + e) } function o(e) { var t; return e && e.cache && (t = e.cache.name), t = t || m.cache.name, caches.open(t) } function i(e, t) { t = t || {}; var n = t.successResponses || m.successResponses; return fetch(e.clone()).then(function (r) { return "GET" === e.method && n.test(r.status) && o(t).then(function (n) { n.put(e, r).then(function () { var r = t.cache || m.cache; (r.maxEntries || r.maxAgeSeconds) && r.name && c(e, n, r) }) }), r.clone() }) } function c(e, t, n) { var r = s.bind(null, e, t, n); d = d ? d.then(r) : r() } function s(e, t, n) { var o = e.url, i = n.maxAgeSeconds, c = n.maxEntries, s = n.name, a = Date.now(); return r("Updating LRU order for " + o + ". Max entries is " + c + ", max age is " + i), g.getDb(s).then(function (e) { return g.setTimestampForUrl(e, o, a) }).then(function (e) { return g.expireEntries(e, c, i, a) }).then(function (e) { r("Successfully updated IDB."); var n = e.map(function (e) { return t.delete(e) }); return Promise.all(n).then(function () { r("Done with cache cleanup.") }) }).catch(function (e) { r(e) }) } function a(e, t, n) { return r("Renaming cache: [" + e + "] to [" + t + "]", n), caches.delete(t).then(function () { return Promise.all([caches.open(e), caches.open(t)]).then(function (t) { var n = t[0], r = t[1]; return n.keys().then(function (e) { return Promise.all(e.map(function (e) { return n.match(e).then(function (t) { return r.put(e, t) }) })) }).then(function () { return caches.delete(e) }) }) }) } function u(e, t) { return o(t).then(function (t) { return t.add(e) }) } function f(e, t) { return o(t).then(function (t) { return t.delete(e) }) } function h(e) { e instanceof Promise || p(e), m.preCacheItems = m.preCacheItems.concat(e) } function p(e) { var t = Array.isArray(e); if (t && e.forEach(function (e) { "string" == typeof e || e instanceof Request || (t = !1) }), !t) throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests."); return e } function l(e, t, n) { if (!e) return !1; if (t) { var r = e.headers.get("date"); if (r) { var o = new Date(r); if (o.getTime() + 1e3 * t < n) return !1 } } return !0 } var d, m = e("./options"), g = e("./idb-cache-expiration"); t.exports = { debug: r, fetchAndCache: i, openCache: o, renameCache: a, cache: u, uncache: f, precache: h, validatePrecacheInput: p, isResponseFresh: l } }, { "./idb-cache-expiration": 2, "./options": 4 }], 2: [function (e, t, n) { "use strict"; function r(e) { return new Promise(function (t, n) { var r = indexedDB.open(u + e, f); r.onupgradeneeded = function () { var e = r.result.createObjectStore(h, { keyPath: p }); e.createIndex(l, l, { unique: !1 }) }, r.onsuccess = function () { t(r.result) }, r.onerror = function () { n(r.error) } }) } function o(e) { return e in d || (d[e] = r(e)), d[e] } function i(e, t, n) { return new Promise(function (r, o) { var i = e.transaction(h, "readwrite"), c = i.objectStore(h); c.put({ url: t, timestamp: n }), i.oncomplete = function () { r(e) }, i.onabort = function () { o(i.error) } }) } function c(e, t, n) { return t ? new Promise(function (r, o) { var i = 1e3 * t, c = [], s = e.transaction(h, "readwrite"), a = s.objectStore(h), u = a.index(l); u.openCursor().onsuccess = function (e) { var t = e.target.result; if (t && n - i > t.value[l]) { var r = t.value[p]; c.push(r), a.delete(r), t.continue() } }, s.oncomplete = function () { r(c) }, s.onabort = o }) : Promise.resolve([]) } function s(e, t) { return t ? new Promise(function (n, r) { var o = [], i = e.transaction(h, "readwrite"), c = i.objectStore(h), s = c.index(l), a = s.count(); s.count().onsuccess = function () { var e = a.result; e > t && (s.openCursor().onsuccess = function (n) { var r = n.target.result; if (r) { var i = r.value[p]; o.push(i), c.delete(i), e - o.length > t && r.continue() } }) }, i.oncomplete = function () { n(o) }, i.onabort = r }) : Promise.resolve([]) } function a(e, t, n, r) { return c(e, n, r).then(function (n) { return s(e, t).then(function (e) { return n.concat(e) }) }) } var u = "sw-toolbox-", f = 1, h = "store", p = "url", l = "timestamp", d = {}; t.exports = { getDb: o, setTimestampForUrl: i, expireEntries: a } }, {}], 3: [function (e, t, n) { "use strict"; function r(e) { var t = a.match(e.request); t ? e.respondWith(t(e.request)) : a.default && "GET" === e.request.method && 0 === e.request.url.indexOf("http") && e.respondWith(a.default(e.request)) } function o(e) { s.debug("activate event fired"); var t = u.cache.name + "$$$inactive$$$"; e.waitUntil(s.renameCache(t, u.cache.name)) } function i(e) { return e.reduce(function (e, t) { return e.concat(t) }, []) } function c(e) { var t = u.cache.name + "$$$inactive$$$"; s.debug("install event fired"), s.debug("creating cache [" + t + "]"), e.waitUntil(s.openCache({ cache: { name: t } }).then(function (e) { return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function (t) { return s.debug("preCache list: " + (t.join(", ") || "(none)")), e.addAll(t) }) })) } e("serviceworker-cache-polyfill"); var s = e("./helpers"), a = e("./router"), u = e("./options"); t.exports = { fetchListener: r, activateListener: o, installListener: c } }, { "./helpers": 1, "./options": 4, "./router": 6, "serviceworker-cache-polyfill": 16 }], 4: [function (e, t, n) { "use strict"; var r; r = self.registration ? self.registration.scope : self.scope || new URL("./", self.location).href, t.exports = { cache: { name: "$$$toolbox-cache$$$" + r + "$$$", maxAgeSeconds: null, maxEntries: null }, debug: !1, networkTimeoutSeconds: null, preCacheItems: [], successResponses: /^0|([123]\d\d)|(40[14567])|410$/ } }, {}], 5: [function (e, t, n) { "use strict"; var r = new URL("./", self.location), o = r.pathname, i = e("path-to-regexp"), c = function (e, t, n, r) { t instanceof RegExp ? this.fullUrlRegExp = t : (0 !== t.indexOf("/") && (t = o + t), this.keys = [], this.regexp = i(t, this.keys)), this.method = e, this.options = r, this.handler = n }; c.prototype.makeHandler = function (e) { var t; if (this.regexp) { var n = this.regexp.exec(e); t = {}, this.keys.forEach(function (e, r) { t[e.name] = n[r + 1] }) } return function (e) { return this.handler(e, t, this.options) }.bind(this) }, t.exports = c }, { "path-to-regexp": 15 }], 6: [function (e, t, n) { "use strict"; function r(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var o = e("./route"), i = e("./helpers"), c = function (e, t) { for (var n = e.entries(), r = n.next(), o = []; !r.done;) { var i = new RegExp(r.value[0]); i.test(t) && o.push(r.value[1]), r = n.next() } return o }, s = function () { this.routes = new Map, this.routes.set(RegExp, new Map), this.default = null };["get", "post", "put", "delete", "head", "any"].forEach(function (e) { s.prototype[e] = function (t, n, r) { return this.add(e, t, n, r) } }), s.prototype.add = function (e, t, n, c) { c = c || {}; var s; t instanceof RegExp ? s = RegExp : (s = c.origin || self.location.origin, s = s instanceof RegExp ? s.source : r(s)), e = e.toLowerCase(); var a = new o(e, t, n, c); this.routes.has(s) || this.routes.set(s, new Map); var u = this.routes.get(s); u.has(e) || u.set(e, new Map); var f = u.get(e), h = a.regexp || a.fullUrlRegExp; f.has(h.source) && i.debug('"' + t + '" resolves to same regex as existing route.'), f.set(h.source, a) }, s.prototype.matchMethod = function (e, t) { var n = new URL(t), r = n.origin, o = n.pathname; return this._match(e, c(this.routes, r), o) || this._match(e, [this.routes.get(RegExp)], t) }, s.prototype._match = function (e, t, n) { if (0 === t.length) return null; for (var r = 0; r < t.length; r++) { var o = t[r], i = o && o.get(e.toLowerCase()); if (i) { var s = c(i, n); if (s.length > 0) return s[0].makeHandler(n) } } return null }, s.prototype.match = function (e) { return this.matchMethod(e.method, e.url) || this.matchMethod("any", e.url) }, t.exports = new s }, { "./helpers": 1, "./route": 5 }], 7: [function (e, t, n) { "use strict"; function r(e, t, n) { return n = n || {}, i.debug("Strategy: cache first [" + e.url + "]", n), i.openCache(n).then(function (t) { return t.match(e).then(function (t) { var r = n.cache || o.cache, c = Date.now(); return i.isResponseFresh(t, r.maxAgeSeconds, c) ? t : i.fetchAndCache(e, n) }) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 8: [function (e, t, n) { "use strict"; function r(e, t, n) { return n = n || {}, i.debug("Strategy: cache only [" + e.url + "]", n), i.openCache(n).then(function (t) { return t.match(e).then(function (e) { var t = n.cache || o.cache, r = Date.now(); if (i.isResponseFresh(e, t.maxAgeSeconds, r)) return e }) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 9: [function (e, t, n) { "use strict"; function r(e, t, n) { return o.debug("Strategy: fastest [" + e.url + "]", n), new Promise(function (r, c) { var s = !1, a = [], u = function (e) { a.push(e.toString()), s ? c(new Error('Both cache and network failed: "' + a.join('", "') + '"')) : s = !0 }, f = function (e) { e instanceof Response ? r(e) : u("No result returned") }; o.fetchAndCache(e.clone(), n).then(f, u), i(e, t, n).then(f, u) }) } var o = e("../helpers"), i = e("./cacheOnly"); t.exports = r }, { "../helpers": 1, "./cacheOnly": 8 }], 10: [function (e, t, n) { t.exports = { networkOnly: e("./networkOnly"), networkFirst: e("./networkFirst"), cacheOnly: e("./cacheOnly"), cacheFirst: e("./cacheFirst"), fastest: e("./fastest") } }, { "./cacheFirst": 7, "./cacheOnly": 8, "./fastest": 9, "./networkFirst": 11, "./networkOnly": 12 }], 11: [function (e, t, n) { "use strict"; function r(e, t, n) { n = n || {}; var r = n.successResponses || o.successResponses, c = n.networkTimeoutSeconds || o.networkTimeoutSeconds; return i.debug("Strategy: network first [" + e.url + "]", n), i.openCache(n).then(function (t) { var s, a, u = []; if (c) { var f = new Promise(function (r) { s = setTimeout(function () { t.match(e).then(function (e) { var t = n.cache || o.cache, c = Date.now(), s = t.maxAgeSeconds; i.isResponseFresh(e, s, c) && r(e) }) }, 1e3 * c) }); u.push(f) } var h = i.fetchAndCache(e, n).then(function (e) { if (s && clearTimeout(s), r.test(e.status)) return e; throw i.debug("Response was an HTTP error: " + e.statusText, n), a = e, new Error("Bad response") }).catch(function (r) { return i.debug("Network or response error, fallback to cache [" + e.url + "]", n), t.match(e).then(function (e) { if (e) return e; if (a) return a; throw r }) }); return u.push(h), Promise.race(u) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 12: [function (e, t, n) { "use strict"; function r(e, t, n) { return o.debug("Strategy: network only [" + e.url + "]", n), fetch(e) } var o = e("../helpers"); t.exports = r }, { "../helpers": 1 }], 13: [function (e, t, n) { "use strict"; var r = e("./options"), o = e("./router"), i = e("./helpers"), c = e("./strategies"), s = e("./listeners"); i.debug("Service Worker Toolbox is loading"), self.addEventListener("install", s.installListener), self.addEventListener("activate", s.activateListener), self.addEventListener("fetch", s.fetchListener), t.exports = { networkOnly: c.networkOnly, networkFirst: c.networkFirst, cacheOnly: c.cacheOnly, cacheFirst: c.cacheFirst, fastest: c.fastest, router: o, options: r, cache: i.cache, uncache: i.uncache, precache: i.precache } }, { "./helpers": 1, "./listeners": 3, "./options": 4, "./router": 6, "./strategies": 10 }], 14: [function (e, t, n) { t.exports = Array.isArray || function (e) { return "[object Array]" == Object.prototype.toString.call(e) } }, {}], 15: [function (e, t, n) { function r(e, t) { for (var n, r = [], o = 0, i = 0, c = "", s = t && t.delimiter || "/"; null != (n = x.exec(e));) { var f = n[0], h = n[1], p = n.index; if (c += e.slice(i, p), i = p + f.length, h) c += h[1]; else { var l = e[i], d = n[2], m = n[3], g = n[4], v = n[5], w = n[6], y = n[7]; c && (r.push(c), c = ""); var b = null != d && null != l && l !== d, E = "+" === w || "*" === w, R = "?" === w || "*" === w, k = n[2] || s, $ = g || v; r.push({ name: m || o++, prefix: d || "", delimiter: k, optional: R, repeat: E, partial: b, asterisk: !!y, pattern: $ ? u($) : y ? ".*" : "[^" + a(k) + "]+?" }) } } return i < e.length && (c += e.substr(i)), c && r.push(c), r } function o(e, t) { return s(r(e, t)) } function i(e) { return encodeURI(e).replace(/[\/?#]/g, function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) } function c(e) { return encodeURI(e).replace(/[?#]/g, function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) } function s(e) { for (var t = new Array(e.length), n = 0; n < e.length; n++)"object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$")); return function (n, r) { for (var o = "", s = n || {}, a = r || {}, u = a.pretty ? i : encodeURIComponent, f = 0; f < e.length; f++) { var h = e[f]; if ("string" != typeof h) { var p, l = s[h.name]; if (null == l) { if (h.optional) { h.partial && (o += h.prefix); continue } throw new TypeError('Expected "' + h.name + '" to be defined') } if (v(l)) { if (!h.repeat) throw new TypeError('Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(l) + "`"); if (0 === l.length) { if (h.optional) continue; throw new TypeError('Expected "' + h.name + '" to not be empty') } for (var d = 0; d < l.length; d++) { if (p = u(l[d]), !t[f].test(p)) throw new TypeError('Expected all "' + h.name + '" to match "' + h.pattern + '", but received `' + JSON.stringify(p) + "`"); o += (0 === d ? h.prefix : h.delimiter) + p } } else { if (p = h.asterisk ? c(l) : u(l), !t[f].test(p)) throw new TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + p + '"'); o += h.prefix + p } } else o += h } return o } } function a(e) { return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1") } function u(e) { return e.replace(/([=!:$\/()])/g, "\\$1") } function f(e, t) { return e.keys = t, e } function h(e) { return e.sensitive ? "" : "i" } function p(e, t) { var n = e.source.match(/\((?!\?)/g); if (n) for (var r = 0; r < n.length; r++)t.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null }); return f(e, t) } function l(e, t, n) { for (var r = [], o = 0; o < e.length; o++)r.push(g(e[o], t, n).source); var i = new RegExp("(?:" + r.join("|") + ")", h(n)); return f(i, t) } function d(e, t, n) { return m(r(e, n), t, n) } function m(e, t, n) { v(t) || (n = t || n, t = []), n = n || {}; for (var r = n.strict, o = n.end !== !1, i = "", c = 0; c < e.length; c++) { var s = e[c]; if ("string" == typeof s) i += a(s); else { var u = a(s.prefix), p = "(?:" + s.pattern + ")"; t.push(s), s.repeat && (p += "(?:" + u + p + ")*"), p = s.optional ? s.partial ? u + "(" + p + ")?" : "(?:" + u + "(" + p + "))?" : u + "(" + p + ")", i += p } } var l = a(n.delimiter || "/"), d = i.slice(-l.length) === l; return r || (i = (d ? i.slice(0, -l.length) : i) + "(?:" + l + "(?=$))?"), i += o ? "$" : r && d ? "" : "(?=" + l + "|$)", f(new RegExp("^" + i, h(n)), t) } function g(e, t, n) { return v(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? p(e, t) : v(e) ? l(e, t, n) : d(e, t, n) } var v = e("isarray"); t.exports = g, t.exports.parse = r, t.exports.compile = o, t.exports.tokensToFunction = s, t.exports.tokensToRegExp = m; var x = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g") }, { isarray: 14 }], 16: [function (e, t, n) { !function () { var e = Cache.prototype.addAll, t = navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/); if (t) var n = t[1], r = parseInt(t[2]); e && (!t || "Firefox" === n && r >= 46 || "Chrome" === n && r >= 50) || (Cache.prototype.addAll = function (e) { function t(e) { this.name = "NetworkError", this.code = 19, this.message = e } var n = this; return t.prototype = Object.create(Error.prototype), Promise.resolve().then(function () { if (arguments.length < 1) throw new TypeError; return e = e.map(function (e) { return e instanceof Request ? e : String(e) }), Promise.all(e.map(function (e) { "string" == typeof e && (e = new Request(e)); var n = new URL(e.url).protocol; if ("http:" !== n && "https:" !== n) throw new t("Invalid scheme"); return fetch(e.clone()) })) }).then(function (r) { if (r.some(function (e) { return !e.ok })) throw new t("Incorrect response status"); return Promise.all(r.map(function (t, r) { return n.put(e[r], t) })) }).then(function () { }) }, Cache.prototype.add = function (e) { return this.addAll([e]) }) }() }, {}] }, {}, [13])(13) });


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.
