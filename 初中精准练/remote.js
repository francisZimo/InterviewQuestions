"use strict";
var currentIndex = 0;
var queDataList = [];
var analyzeType = 0;
var queData = [];
var logicName = document.getElementById("logicName");
var analyzeTypeDom = document.getElementById("analyzeType");
var setInfo = function setInfo(queData) {
  var gradeGroupName = queData.gradeGroupName,
    logicQuesTypeName = queData.logicQuesTypeName,
    subjectName = queData.subjectName;
  logicName.innerHTML = "".concat(gradeGroupName, "-").concat(subjectName, "-").concat(logicQuesTypeName);
};

function changeAnalyzeType() {
  analyzeType = analyzeType < 2 ? analyzeType + 1 : 0;
  analyzeTypeDom.innerHTML = "褰撳墠鐨勮В鏋愭樉绀虹増鏈负: " + analyzeType;
  queData = queDataList[currentIndex];
  renderQS(queData);
}

function changeQS(type) {
  var len = queDataList.length;
  currentIndex = type === "pre" ? (currentIndex > 0 ? currentIndex - 1 : len - 1) : currentIndex < len - 1 ? currentIndex + 1 : 0;
  queData = queDataList[currentIndex];
  renderQS(queData);
}

var qsList = [
  {
    queId: "823fb7beda52488aadeeffb258112868",
    subjectName: "数学",
    subjectId: "2",
    gradeGroupName: "小学",
    gradeGroupId: "1",
    logicQuesTypeName: "单选",
    logicQuesTypeId: "1",
    writtenQuesTypeName: "选择",
    writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af3c2d1030",
    difficulty: 1,
    content:
      '<p>魔术师有两种袋子，一种是黄袋子，另一种是红袋子，两种袋子一共<span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="2.325ex" height="2.176ex" style="vertical-align: -0.338ex;" viewBox="0 -791.3 1001 936.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">20</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMAIN-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMAIN-32"></use>\n <use xlink:href="#E1-MJMAIN-30" x="500" y="0"></use>\n</g>\n</svg></span>个，每个黄袋子里有<span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.162ex" height="2.176ex" style="vertical-align: -0.338ex;" viewBox="0 -791.3 500.5 936.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">2</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMAIN-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMAIN-32" x="0" y="0"></use>\n</g>\n</svg></span>个球，每个红袋子里有<span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.162ex" height="2.176ex" style="vertical-align: -0.338ex;" viewBox="0 -791.3 500.5 936.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">4</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMAIN-34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMAIN-34" x="0" y="0"></use>\n</g>\n</svg></span>个球，两种袋子一共有<span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="2.325ex" height="2.176ex" style="vertical-align: -0.338ex;" viewBox="0 -791.3 1001 936.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">64</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMAIN-36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMAIN-36"></use>\n <use xlink:href="#E1-MJMAIN-34" x="500" y="0"></use>\n</g>\n</svg></span>个球，那么魔术师有(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )黄袋子.</p>',
    answer: [["C"]],
    analysis: [
      '<p>设魔术师有<span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.33ex" height="1.676ex" style="vertical-align: -0.338ex;" viewBox="0 -576.1 572.5 721.6" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">x</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMATHI-78" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMATHI-78" x="0" y="0"></use>\n</g>\n</svg></span>个黄袋子，则有<span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="8.304ex" height="2.843ex" style="vertical-align: -0.838ex;" viewBox="0 -863.1 3575.4 1223.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">\\left( 20-x \\right)</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMAIN-28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>\n<path stroke-width="1" id="E1-MJMATHI-78" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMAIN-28" x="0" y="0"></use>\n<g transform="translate(389,0)">\n <use xlink:href="#E1-MJMAIN-32"></use>\n <use xlink:href="#E1-MJMAIN-30" x="500" y="0"></use>\n <use xlink:href="#E1-MJMAIN-2212" x="1223" y="0"></use>\n <use xlink:href="#E1-MJMATHI-78" x="2223" y="0"></use>\n</g>\n <use xlink:href="#E1-MJMAIN-29" x="3185" y="0"></use>\n</g>\n</svg></span>个红袋子，根据题意列方程得：<span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="20.223ex" height="2.843ex" style="vertical-align: -0.838ex;" viewBox="0 -863.1 8706.9 1223.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">2x+4(20-x)=64</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMAIN-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>\n<path stroke-width="1" id="E1-MJMATHI-78" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMAIN-32" x="0" y="0"></use>\n <use xlink:href="#E1-MJMATHI-78" x="500" y="0"></use>\n <use xlink:href="#E1-MJMAIN-2B" x="1295" y="0"></use>\n <use xlink:href="#E1-MJMAIN-34" x="2295" y="0"></use>\n <use xlink:href="#E1-MJMAIN-28" x="2796" y="0"></use>\n<g transform="translate(3185,0)">\n <use xlink:href="#E1-MJMAIN-32"></use>\n <use xlink:href="#E1-MJMAIN-30" x="500" y="0"></use>\n</g>\n <use xlink:href="#E1-MJMAIN-2212" x="4409" y="0"></use>\n <use xlink:href="#E1-MJMATHI-78" x="5409" y="0"></use>\n <use xlink:href="#E1-MJMAIN-29" x="5982" y="0"></use>\n <use xlink:href="#E1-MJMAIN-3D" x="6649" y="0"></use>\n<g transform="translate(7705,0)">\n <use xlink:href="#E1-MJMAIN-36"></use>\n <use xlink:href="#E1-MJMAIN-34" x="500" y="0"></use>\n</g>\n</g>\n</svg></span>，解得<span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.591ex" height="2.176ex" style="vertical-align: -0.338ex;" viewBox="0 -791.3 2407.1 936.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">x=8</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMATHI-78" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>\n<path stroke-width="1" id="E1-MJMAIN-38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMATHI-78" x="0" y="0"></use>\n <use xlink:href="#E1-MJMAIN-3D" x="850" y="0"></use>\n <use xlink:href="#E1-MJMAIN-38" x="1906" y="0"></use>\n</g>\n</svg></span>，所以魔术师有<span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.162ex" height="2.176ex" style="vertical-align: -0.338ex;" viewBox="0 -791.3 500.5 936.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">8</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMAIN-38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMAIN-38" x="0" y="0"></use>\n</g>\n</svg></span>个黄袋子．</p>'
    ],
    queSource: "2017年天津小学中年级四年级下学期学而思",
    answerOptionList: [
      [
        {
          aoVal: "A",
          content:
            '<p><span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.162ex" height="2.176ex" style="vertical-align: -0.338ex;" viewBox="0 -791.3 500.5 936.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">6</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMAIN-36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMAIN-36" x="0" y="0"></use>\n</g>\n</svg></span></p>'
        }
      ],
      [
        {
          aoVal: "B",
          content:
            '<p><span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.162ex" height="2.176ex" style="vertical-align: -0.338ex;" viewBox="0 -791.3 500.5 936.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">7</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMAIN-37" d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMAIN-37" x="0" y="0"></use>\n</g>\n</svg></span></p>'
        }
      ],
      [
        {
          aoVal: "C",
          content:
            '<p><span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.162ex" height="2.176ex" style="vertical-align: -0.338ex;" viewBox="0 -791.3 500.5 936.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">8</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMAIN-38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMAIN-38" x="0" y="0"></use>\n</g>\n</svg></span></p>'
        }
      ],
      [
        {
          aoVal: "D",
          content:
            '<p><span class="mathjax_content"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.162ex" height="2.176ex" style="vertical-align: -0.338ex;" viewBox="0 -791.3 500.5 936.9" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">\n<title id="MathJax-SVG-1-Title">9</title>\n<defs aria-hidden="true">\n<path stroke-width="1" id="E1-MJMAIN-39" d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z"></path>\n</defs>\n<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n <use xlink:href="#E1-MJMAIN-39" x="0" y="0"></use>\n</g>\n</svg></span></p>'
        }
      ]
    ],
    examOptionList: [
      {
        id: "k2iialjruhi1ebq1wh8suc69i2tg0033",
        name: "应用题",
        childList: [
          {
            id: "k2iialjruhi1ebq1wh8suc69i2tg0045",
            name: "列方程解应用题",
            childList: [
              {
                id: "k2iialjruhi1ebq1wh8suc69i2tg0046",
                name: "一元一次方程解应用题",
                childList: []
              }
            ]
          }
        ]
      }
    ],
    isCloze: 0,
    modifyDate: "2017-11-28 11:32:35",
    score: 0,
    queDesc: null,
    normalAnswer: [["C"]],
    blankAnswer: null,
    blankInteraction: null,
    isDecidable: 1,
    childList: null,
    isIntoAnswerTool: 1,
    keyboardType: 0
  },
  {
    queId: "ff808081480bdfa901480fa08b020361",
    subjectName: "英语",
    subjectId: "3",
    gradeGroupName: "初中",
    gradeGroupId: "2",
    logicQuesTypeName: "多选",
    logicQuesTypeId: "2",
    writtenQuesTypeName: "多选",
    writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af3c2d1055",
    difficulty: 1,
    content: "<p>---When is the World Environment Day every year?</p>\n<p>---It&#39;s&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;June 5th.</p>",
    answer: [["C"]],
    analysis: ["<p>具体日期前使用时间介词on。</p> "],
    queSource: "2013年北京密云县初三一模第2题",
    answerOptionList: [
      [
        {
          aoVal: "A",
          content: "<p>in</p>"
        }
      ],
      [
        {
          aoVal: "B",
          content: "<p>at</p>"
        }
      ],
      [
        {
          aoVal: "C",
          content: "<p>on</p>"
        }
      ],
      [
        {
          aoVal: "D",
          content: "<p>to</p>"
        }
      ]
    ],
    examOptionList: [
      {
        id: "gkzdp4omn8ibepyukkistkfjk25a0000",
        name: "语言知识运用",
        childList: [
          {
            id: "gkzdp4omn8ibepyukkistkfjk25a0022",
            name: "介词"
          }
        ]
      }
    ],
    isCloze: 0,
    modifyDate: "2017-04-24 14:55:36",
    score: 0,
    queDesc: null,
    childList: null,
    isIntoAnswerTool: 1,
    eleId: "8aaac4d272324045acfef44656730f75",
    queIndex: 2,
    jsonSign: "jiaoyan",
    isCorrected: 0,
    parasiticQue: null,
    paperId: "e050bf0e74f24d68bd93cb3940a8b94f",
    isAddition: 0
  },
  {
    writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af3c2d1062",
    isAnalysis: 0,
    queDesc: null,
    rootId: "0",
    deprecated: false,
    isCloze: 0,
    childList: [],
    queUseCountVo: null,
    blankInteraction: null,
    subjectId: "3",
    gradeGroupId: "2",
    content:
      '<p style="text-align:justify; text-indent:2em">We&#39;re almost at the end of 2022, making now-yes, now a suitable time to check in on the goals you made for yourself at the start of the year. Change is hard.</p>\n<p style="text-align:justify; text-indent:2em">This week we continue the conversation on habits. Whether you&#39;re looking to better your health, your wealth （财富） or both（really, it&#39;s become tougher and tougher to separate them in recent years）, here are some steps for building the sort of habits that will carry you to lifelong success.</p>\n<p style="text-align:justify; text-indent:2em">&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;</p>\n<p style="text-align:justify; text-indent:2em">Willpower, as it turns out, is a limited resource, and research has shown that when we try to change too much at once, we have a much more difficult time. Seeing that you can adapt to one new habit actually gives you the confidence to take on others.</p>\n<p style="text-align:justify; text-indent:2em">&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;</p>\n<p style="text-align:justify; text-indent:2em">You&#39;d like to get healthier? Great. But what does being healthier look like for you? A study shows making specific（明确的） plans rather than staying flexible can help you reach your goals. So instead of saying &quot;healthier&quot;, say you want to lose 40 pounds in five months.</p>\n<p style="text-align:justify; text-indent:2em">&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;</p>\n<p style="text-align:justify; text-indent:2em">Imagine what you want, when you want it and how you&#39;ll get there. Research from TD Bank shows people who imagine their financial goals are much more confident about achieving them than those who don&#39;t. You can also use images to remind you of your goals.</p>\n<p style="text-align:justify; text-indent:2em">&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;</p>\n<p style="text-align:justify; text-indent:2em">Once the philosopher Friedrich Nietzsche said, &quot;If you have a &#39;why&#39; to live for, to fight for and to work for, you can tolerate （容忍） the &#39;how&#39;.&quot; Know what those things look like in your life in detail and form an emotional connection to it. It&#39;s usually helpful to be thinking about who else benefits from your goals as you are setting them. This tends to help you reach your goals more effectively.</p>\n<p style="text-align:justify; text-indent:2em">&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;</p>\n<p style="text-align:justify; text-indent:2em">Research has shown we have a better shot at achieving our financial goals when we discuss them with our partners. Schedule a date with your partners to talk about what you want for your future. Or pick a trusted financial adviser, close relative or close friend(someone with whom you are comfortable discussing your financial life ). Then get to it.</p>',
    queId: "3ac2f27f9bd54562a8a1cbd54fcb4f83",
    blankAnswer: null,
    optionExamOptionList: [],
    queSource: ["2019~2020学年浙江杭州下城区杭州市景成实验学校中学部初三上学期期中第31~35题10分(每题2分)"],
    logicQuesTypeId: "3",
    logicQuesTypeName: "多选多",
    createrId: "5a820e5cb6a44995a6bee934478af74e",
    optionAnalysisList: [
      {
        code: 1,
        analysis: [
          '<p style="text-align:justify">根据后句research has shown that when we try to change too much at once&hellip;you can adapt to one new habit&hellip;研究表明，当我们试图一次改变太多东西时，我们会有一段更困难的时期；适应一种新习惯，就有信心接受其它改变。结合项可知，C项&ldquo;一次做一件事&rdquo;。符合语境，两者内容关联度很高。故选C。</p>'
        ]
      },
      {
        code: 2,
        analysis: [
          '<p style="text-align:justify">根据后句A study shows making specific&hellip;40 pounds in five months.一项研究表明，制定具体的计划而不是保持灵活性可以帮你实现目标。所以不要说&ldquo;更健康&rdquo;，而说你想在五个月内减掉40磅。结合选项可知，D项&ldquo;具体说明你想要什么&rdquo;。结合语境。故选D。</p>'
        ]
      },
      {
        code: 3,
        analysis: [
          '<p style="text-align:justify">根据后句，Imagine what you want&hellip;you&#39;ll get there.想象一下你想要什么，什么时候想要，怎样才能达到目标。结合选项可知，E项&ldquo;想象未来的自己&rdquo;。符合语境。故选E。</p>'
        ]
      },
      {
        code: 4,
        analysis: [
          '<p style="text-align:justify">根据后句know what those things look like&hellip;reach your goals more effectively.详细了解这些事情在你生活中的样子，并与之形成情感上的联系，这往往会帮助你更有效地实现目标。 结合选项可知，F项&ldquo;了解你为什么想要它，并与它形成情感上的联系&rdquo;符合语境。故选F。</p>'
        ]
      },
      {
        code: 5,
        analysis: [
          '<p style="text-align:justify">根据后句Schedule a date with&hellip;want for your future.与合作伙伴安排一次约会，讨论你好未来的期望。结合选项可知，B项&ldquo;告诉能让你负责任的人&rdquo;符合语境。故选B。</p>'
        ]
      }
    ],
    isDecidable: 1,
    subjectName: "英语",
    createDate: "2019-12-17 10:42:01",
    answerOptionList: [
      [
        {
          aoId: "1220b0fc527343f68c8d6fcc4fd760ca",
          aoVal: "A",
          content: "<p>Break it down into bench marks</p>"
        }
      ],
      [
        {
          aoId: "1aac73fc60434bf09ad2d3a3da6696ce",
          aoVal: "B",
          content: "<p>Tell someone who will keep you responsible</p>"
        }
      ],
      [
        {
          aoId: "344a823cb35d433ab70353ac218a9915",
          aoVal: "C",
          content: "<p>Do one thing at a time</p>"
        }
      ],
      [
        {
          aoId: "a42fccf986924b0b9f9a0cdacfc68b12",
          aoVal: "D",
          content: "<p>Be specific about what you want</p>"
        }
      ],
      [
        {
          aoId: "7140820298204102a7bbb6f8dc678f35",
          aoVal: "E",
          content: "<p>Picture your future self</p>"
        }
      ],
      [
        {
          aoId: "bb24ed13202847abbe36caaa57204ccb",
          aoVal: "F",
          content: "<p>Know why you want it and form an emotional connection to it</p>"
        }
      ]
    ],
    modifyDate: "2023-04-19 15:14:00",
    questionSourceList: [
      {
        note: "",
        endQueIndex: "35",
        year: null,
        city: {
          name: "杭州",
          id: "3010"
        },
        examType: {
          name: "期中",
          id: "599dcce2998a6b40b1e38e8c600c0018"
        },
        paperTag: null,
        subjectType: null,
        abcStage: null,
        startQueIndex: "31",
        score: "10",
        queId: "3ac2f27f9bd54562a8a1cbd54fcb4f83",
        province: {
          name: "浙江",
          id: "3009"
        },
        school: {
          name: "杭州市景成实验学校中学部",
          id: "226505"
        },
        schoolYear: {
          name: "2019~2020",
          id: "20192020"
        },
        area: {
          name: "下城区",
          id: "3014"
        },
        period: null,
        unitName: "",
        gameStage: null,
        isShow: 1,
        month: null,
        grade: {
          name: "初三",
          id: "9"
        },
        semester: {
          name: "上学期",
          id: "1"
        },
        scoreDetail: "2,2,2,2,2",
        cup: null,
        gradeSession: null
      }
    ],
    queScore: null,
    answerType: 0,
    degree: 1,
    writtenQuesTypeName: "信息匹配",
    analysis: null,
    gradeGroupName: "初中",
    parentId: "0",
    difficulty: 3,
    answer: [["C"], ["D"], ["E"], ["F"], ["B"]],
    keyboardType: 0,
    queStatus: 2,
    isTemporaryTable: 0,
    bxAnswer: [],
    examOptionList: [
      {
        isOpen: 1,
        rootId: "0",
        isMain: 0,
        labelKnowList: null,
        name: "知识标签",
        childList: [
          {
            isOpen: 0,
            rootId: "0160cfa5595a47dfaacae4d4becb4476",
            isMain: 0,
            labelKnowList: [
              {
                lkcName: null,
                isMain: 0,
                queNum: 0,
                name: "读",
                childList: [],
                id: "e5928493be2846f0b52b9822473f8abd",
                lkcId: "89a81e37377d48c2825fb560f224129f",
                parentId: "0",
                isHide: null
              }
            ],
            name: "能力",
            childList: [],
            id: "89a81e37377d48c2825fb560f224129f",
            parentId: "0160cfa5595a47dfaacae4d4becb4476",
            gradeGroupId: "2",
            subjectId: "3",
            mustSelect: 1,
            isHide: 1
          },
          {
            isOpen: 0,
            rootId: "0160cfa5595a47dfaacae4d4becb4476",
            isMain: 1,
            labelKnowList: [
              {
                lkcName: null,
                isMain: 0,
                queNum: 0,
                name: "信息匹配 ",
                childList: [],
                id: "b92a651661344b2bbf1eaea9aa6c29fe",
                lkcId: "78c0df73945844d3b3790bde6ddf8ad4",
                parentId: "0",
                isHide: null
              }
            ],
            name: "题型",
            childList: [],
            id: "78c0df73945844d3b3790bde6ddf8ad4",
            parentId: "0160cfa5595a47dfaacae4d4becb4476",
            gradeGroupId: "2",
            subjectId: "3",
            mustSelect: 1,
            isHide: 0
          },
          {
            isOpen: 0,
            rootId: "0160cfa5595a47dfaacae4d4becb4476",
            isMain: 0,
            labelKnowList: [
              {
                lkcName: null,
                isMain: 1,
                queNum: 0,
                name: "议论文",
                childList: [],
                id: "1069ed1a57c944fd89bdecda26cb2c7d",
                lkcId: "1885b2a7d8f542b4b6ffc498122f5107",
                parentId: "0",
                isHide: null
              }
            ],
            name: "语篇",
            childList: [],
            id: "1885b2a7d8f542b4b6ffc498122f5107",
            parentId: "0160cfa5595a47dfaacae4d4becb4476",
            gradeGroupId: "2",
            subjectId: "3",
            mustSelect: 0,
            isHide: 0
          },
          {
            isOpen: 0,
            rootId: "0160cfa5595a47dfaacae4d4becb4476",
            isMain: 0,
            labelKnowList: [
              {
                lkcName: null,
                isMain: 0,
                queNum: 0,
                name: "中考话题",
                childList: [
                  {
                    lkcName: null,
                    isMain: 1,
                    queNum: 0,
                    name: "计划与安排",
                    childList: [],
                    id: "1d5bb36df73d406798d04830032f56a6",
                    lkcId: "ff1802fbd1c74a4898d6a4cf95860ec7",
                    parentId: "c9657e1e6f7c4d27b3eb6c6d07f8f781",
                    isHide: null
                  }
                ],
                id: "c9657e1e6f7c4d27b3eb6c6d07f8f781",
                lkcId: "ff1802fbd1c74a4898d6a4cf95860ec7",
                parentId: "0",
                isHide: null
              }
            ],
            name: "话题",
            childList: [],
            id: "ff1802fbd1c74a4898d6a4cf95860ec7",
            parentId: "0160cfa5595a47dfaacae4d4becb4476",
            gradeGroupId: "2",
            subjectId: "3",
            mustSelect: 0,
            isHide: 0
          }
        ],
        id: "0160cfa5595a47dfaacae4d4becb4476",
        parentId: "0",
        gradeGroupId: "2",
        subjectId: "3",
        mustSelect: 0,
        isHide: 0
      },
      {
        isOpen: 1,
        rootId: "0",
        isMain: 0,
        labelKnowList: null,
        name: "国标体系",
        childList: [
          {
            isOpen: 0,
            rootId: "5b013ac2feab432eafdb46b9e8a49102",
            isMain: 1,
            labelKnowList: [
              {
                lkcName: null,
                isMain: 0,
                queNum: 0,
                name: "读",
                childList: [],
                id: "e5928493be2846f0b52b9822473f8abd",
                lkcId: "539d6f56a6b1408e9a08b52109d58c2f",
                parentId: "0",
                isHide: null
              }
            ],
            name: "能力",
            childList: [],
            id: "539d6f56a6b1408e9a08b52109d58c2f",
            parentId: "5b013ac2feab432eafdb46b9e8a49102",
            gradeGroupId: "2",
            subjectId: "3",
            mustSelect: 1,
            isHide: 1
          },
          {
            isOpen: 0,
            rootId: "5b013ac2feab432eafdb46b9e8a49102",
            isMain: 0,
            labelKnowList: [
              {
                lkcName: null,
                isMain: 1,
                queNum: 0,
                name: "议论文",
                childList: [],
                id: "1069ed1a57c944fd89bdecda26cb2c7d",
                lkcId: "7d24e4f1aa6e4e639d12d6b759c8bf3a",
                parentId: "0",
                isHide: null
              }
            ],
            name: "文体",
            childList: [],
            id: "7d24e4f1aa6e4e639d12d6b759c8bf3a",
            parentId: "5b013ac2feab432eafdb46b9e8a49102",
            gradeGroupId: "2",
            subjectId: "3",
            mustSelect: 0,
            isHide: 0
          },
          {
            isOpen: 0,
            rootId: "5b013ac2feab432eafdb46b9e8a49102",
            isMain: 1,
            labelKnowList: [
              {
                lkcName: null,
                isMain: 0,
                queNum: 0,
                name: "信息匹配",
                childList: [],
                id: "04d749a345984ca48dccc3f8bc98687b",
                lkcId: "d50a118912eb4a718bff7c76fcf48fa3",
                parentId: "0",
                isHide: null
              }
            ],
            name: "题型",
            childList: [],
            id: "d50a118912eb4a718bff7c76fcf48fa3",
            parentId: "5b013ac2feab432eafdb46b9e8a49102",
            gradeGroupId: "2",
            subjectId: "3",
            mustSelect: 1,
            isHide: 0
          },
          {
            isOpen: 0,
            rootId: "5b013ac2feab432eafdb46b9e8a49102",
            isMain: 0,
            labelKnowList: [
              {
                lkcName: null,
                isMain: 1,
                queNum: 0,
                name: "计划与安排",
                childList: [],
                id: "1d5bb36df73d406798d04830032f56a6",
                lkcId: "c285c5e80b6441478af3c5d1d9ff3e2a",
                parentId: "0",
                isHide: null
              }
            ],
            name: "考纲话题",
            childList: [],
            id: "c285c5e80b6441478af3c5d1d9ff3e2a",
            parentId: "5b013ac2feab432eafdb46b9e8a49102",
            gradeGroupId: "2",
            subjectId: "3",
            mustSelect: 0,
            isHide: 0
          }
        ],
        id: "5b013ac2feab432eafdb46b9e8a49102",
        parentId: "0",
        gradeGroupId: "2",
        subjectId: "3",
        mustSelect: 0,
        isHide: 0
      }
    ],
    optionDifficultyList: null,
    normalAnswer: [["C"], ["D"], ["E"], ["F"], ["B"]]
  },
  {
    queId: "f9a90cb9b6e44531892e1c32a63d111e",
    subjectName: "英语",
    subjectId: "3",
    gradeGroupName: "初中",
    gradeGroupId: "2",
    logicQuesTypeName: "配对",
    logicQuesTypeId: "6",
    writtenQuesTypeName: "信息匹配",
    writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af3c2d1062",
    difficulty: 3,
    content: "<p>词义匹配</p>",
    answer: [["F"], ["E"], ["D"], ["A"], ["B"], ["C"]],
    analysis: ["<p>legend 传说，传奇。</p>", "<p>tribe 部落，部族。</p>", "<p>trigger （枪） 扳机。</p>", "<p>stir 搅拌。</p>", "<p>curl （使） 弯曲；（使） 卷曲。</p>", "<p>meadow 草地；牧场。</p>"],
    queSource: "初二其它",
    answerOptionList: [
      [
        {
          aoVal: "1",
          content: "<p>legend</p>"
        },
        {
          aoVal: "A",
          content: "<p>to move a spoon or another thing round and round to mix something</p>"
        }
      ],
      [
        {
          aoVal: "2",
          content: "<p>tribe</p>"
        },
        {
          aoVal: "B",
          content: "<p>to bend into a round or curved shape</p>"
        }
      ],
      [
        {
          aoVal: "3",
          content: "<p>trigger</p>"
        },
        {
          aoVal: "C",
          content: "<p>a field of grass</p>"
        }
      ],
      [
        {
          aoVal: "4",
          content: "<p>stir</p>"
        },
        {
          aoVal: "D",
          content: "<p>the part of a gun that you pull with your finger to fire it</p>"
        }
      ],
      [
        {
          aoVal: "5",
          content: "<p>curl</p>"
        },
        {
          aoVal: "E",
          content: "<p>a small group of people of the same race who have the same language and customs</p>"
        }
      ],
      [
        {
          aoVal: "6",
          content: "<p>meadow</p>"
        },
        {
          aoVal: "F",
          content: "<p>an old story that is perhaps not true</p>"
        }
      ]
    ],
    examOptionList: [
      {
        id: "gkzdp4omn8ibepyukkistkfjk25a006b",
        name: "阅读",
        childList: [
          {
            id: "gkzdp4omn8ibepyukkistkfjk25a006d",
            name: "信息匹配"
          }
        ]
      }
    ],
    isCloze: 0,
    modifyDate: "2016-11-02 14:17:21",
    score: 0,
    queDesc: null,
    childList: null,
    isIntoAnswerTool: 0,
    eleId: "8c61d735d7004ab0a026ade6f19cae7b",
    queIndex: 7,
    jsonSign: "jiaoyan",
    isCorrected: 0,
    parasiticQue: null,
    paperId: "e050bf0e74f24d68bd93cb3940a8b94f",
    isAddition: 0
  },
  {
    queId: "667b3c1553824fe7a4295f0ff7ba860a",
    subjectName: "英语",
    subjectId: "3",
    gradeGroupName: "初中",
    gradeGroupId: "2",
    logicQuesTypeName: "判断",
    logicQuesTypeId: "5",
    writtenQuesTypeName: "阅读理解",
    writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af3c2d1057",
    difficulty: 3,
    content:
      '<p style="text-align:justify; text-indent:2em">&quot;G20&quot;&nbsp;was born on September 25<sup>th</sup>, 1999.You must be seeing the word &quot;G20&quot;, or &quot;the group of the G20&quot;&nbsp;everywhere recently. But do you know what it is exactly? And why is so important?</p>\n<p style="text-align:justify; text-indent:2em">G20 is made up of the world&#39;s most important 20 economies（经济体）-the European Union and 19 countries. It includes both developed countries like the US and Germany, and developing countries like Brazil and China. The G20 members cover about two-thirds of the world&#39;s population and control 85 percent of the world&#39;s economy.</p>\n<p style="text-align:justify; text-indent:2em">This year, from September 4<sup>th</sup>&nbsp;to 5<sup>th</sup>, the 11<sup>th</sup>&nbsp;G20 Leaders Summit（峰会）was held in Hangzhou, China. It&#39;s the first time that China has hosted a global economic summit.</p>\n<p style="text-align:justify; text-indent:2em">&quot;This is a good chance for China to exercise its power in a global（全球的）economics.&quot;&nbsp;Said Cheng Fengying, a researcher from the China Institute of Contemporary International Relations.</p>\n<p><img alt="" src="http://file.aibeike.com/picture/30f98b69-aa56-4d63-9f7a-fd75ffc78954.png" /></p>',
    answer: [["T"], ["F"], ["T"], ["F"], ["T"]],
    analysis: [
      "<p>细节题。根据第一段第一句&nbsp;&quot;G20&quot;&nbsp;was born on September 25<sup>th</sup>, 1999.可知该句表达正确。</p>",
      "<p>细节题。根据第二段第二句 It includes both developed countries like the US and Germany, and developing countries like Brazil and China.可知该句表达错误。</p>",
      "<p>细节题。根据第二段最后一句 The G20 members cover about two-thirds of the world&#39;s population and control 85 percent of the world&#39;s economy.可知该句表达正确。</p>",
      "<p>细节题。根据第三段第一句 This year, from September 4<sup>th</sup>&nbsp;to 5<sup>th</sup>, the 11<sup>th</sup>&nbsp;G20 Leaders Summit（峰会）was held in Hangzhou, China.可知该句表达错误。</p>",
      "<p>细节题。根据图片所列国家信息，可知Columbia现在没有加入G20。所以判断为正确。</p>"
    ],
    queSource: "2016~2017学年四川成都武侯区初三上学期期末第61~65题10分",
    answerOptionList: [
      [
        {
          aoVal: "1",
          content: "<p>&quot;G20&quot;&nbsp;was born on September 25<sup>th</sup>, 1999.</p>"
        }
      ],
      [
        {
          aoVal: "2",
          content: "<p>China and the US are both developing countries.</p>"
        }
      ],
      [
        {
          aoVal: "3",
          content: "<p>2/3 of the world&#39;s population are members of G20.</p>"
        }
      ],
      [
        {
          aoVal: "4",
          content: "<p>The 2016 G20 Leaders Summit was held in Suzhou, China.</p>"
        }
      ],
      [
        {
          aoVal: "5",
          content: "<p>Columbia, a country from South America doesn&#39;t join G20 at present.</p>"
        }
      ]
    ],
    examOptionList: [
      {
        id: "gkzdp4omn8ibepyukkistkfjk25a006b",
        name: "阅读",
        childList: [
          {
            id: "gkzdp4omn8ibepyukkistkfjk25a006f",
            name: "判断对错"
          }
        ]
      }
    ],
    isCloze: 0,
    modifyDate: "2017-03-20 17:24:01",
    score: 0,
    queDesc: null,
    childList: null,
    isIntoAnswerTool: 0,
    eleId: "f831d8d0927b4134a7089a81e6463ba1",
    queIndex: 8,
    jsonSign: "jiaoyan",
    isCorrected: 1,
    parasiticQue: null,
    paperId: "e050bf0e74f24d68bd93cb3940a8b94f",
    isAddition: 0
  },
  {
    queId: "f9a90cb9b6e44531892e1c32a63d111e",
    subjectName: "英语",
    subjectId: "3",
    gradeGroupName: "初中",
    gradeGroupId: "2",
    logicQuesTypeName: "配对",
    logicQuesTypeId: "6",
    writtenQuesTypeName: "信息匹配",
    writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af3c2d1062",
    difficulty: 3,
    content: "<p>词义匹配</p>",
    answer: [["F"], ["E"], ["D"], ["A"], ["B"], ["C"]],
    analysis: ["<p>legend 传说，传奇。</p>", "<p>tribe 部落，部族。</p>", "<p>trigger （枪） 扳机。</p>", "<p>stir 搅拌。</p>", "<p>curl （使） 弯曲；（使） 卷曲。</p>", "<p>meadow 草地；牧场。</p>"],
    queSource: "初二其它",
    answerOptionList: [
      [
        {
          aoVal: "1",
          content: "<p>legend</p>"
        },
        {
          aoVal: "A",
          content: "<p>to move a spoon or another thing round and round to mix something</p>"
        }
      ],
      [
        {
          aoVal: "2",
          content: "<p>tribe</p>"
        },
        {
          aoVal: "B",
          content: "<p>to bend into a round or curved shape</p>"
        }
      ],
      [
        {
          aoVal: "3",
          content: "<p>trigger</p>"
        },
        {
          aoVal: "C",
          content: "<p>a field of grass</p>"
        }
      ],
      [
        {
          aoVal: "4",
          content: "<p>stir</p>"
        },
        {
          aoVal: "D",
          content: "<p>the part of a gun that you pull with your finger to fire it</p>"
        }
      ],
      [
        {
          aoVal: "5",
          content: "<p>curl</p>"
        },
        {
          aoVal: "E",
          content: "<p>a small group of people of the same race who have the same language and customs</p>"
        }
      ],
      [
        {
          aoVal: "6",
          content: "<p>meadow</p>"
        },
        {
          aoVal: "F",
          content: "<p>an old story that is perhaps not true</p>"
        }
      ]
    ],
    examOptionList: [
      {
        id: "gkzdp4omn8ibepyukkistkfjk25a006b",
        name: "阅读",
        childList: [
          {
            id: "gkzdp4omn8ibepyukkistkfjk25a006d",
            name: "信息匹配"
          }
        ]
      }
    ],
    isCloze: 0,
    modifyDate: "2016-11-02 14:17:21",
    score: 0,
    queDesc: null,
    childList: null,
    isIntoAnswerTool: 0,
    eleId: "8c61d735d7004ab0a026ade6f19cae7b",
    queIndex: 7,
    jsonSign: "jiaoyan",
    isCorrected: 0,
    parasiticQue: null,
    paperId: "e050bf0e74f24d68bd93cb3940a8b94f",
    isAddition: 0
  },
  {
    analysis: ["略"],
    answer: [["G"], ["A"], ["E"], ["F"], ["C"], ["暂无"], ["暂无"]],
    answerOptionList: [
      [
        {
          aoVal: "A",
          content: "<p>It&#39;s human nature to dislike looking foolish.</p>"
        }
      ],
      [
        {
          aoVal: "B",
          content: "<p>You&#39;ll be able to do them almost without thinking.</p>"
        }
      ],
      [
        {
          aoVal: "C",
          content: "<p>If you have no rhythm, try to master dance steps first.</p>"
        }
      ],
      [
        {
          aoVal: "D",
          content: "<p>Learning a musical instrument is a good way to learn rhythm.</p>"
        }
      ],
      [
        {
          aoVal: "E",
          content: "<p>Dance requires you to move your arms and legs in unusual ways.</p>"
        }
      ],
      [
        {
          aoVal: "F",
          content: "<p>The other possibility is that you picked a style of dance that doesn&#39;t suit you.</p>"
        }
      ],
      [
        {
          aoVal: "G",
          content: "<p>There are many things that can hold people back when they try to learn dancing.</p>"
        }
      ]
    ],
    answerType: 0,
    blankAnswer: null,
    blankInteraction: null,
    childList: null,
    content:
      '<p style="text-indent:2em">Dancing is natural and almost any child can dance. However, why do so many people find it hard to dance when they reach their teens or adulthood？__1___</p>\n<p style="text-indent:2em">Most people have heard the words &quot;Dance like nobody is watching.&quot; __2___When we&#39;re learning something new, we hate having an audience watching our silly mistakes. Actually, everyone else is too busy worrying about their own mistakes. Chances are that you&#39;re not the only one struggling with the steps！</p>\n<p style="text-indent:2em">We all have patterns of muscle memory. Your body likes doing repetitive movements that it doesn&#39;t have to think about.___3__Your brain may understand, but it can take a while to direct your limbs to interpret these new and unfamiliar movements. Be patient with yourself and understand it&#39;s the way your body works.</p>\n<p style="text-indent:2em">___4__If you&#39;ve never danced before, the complex rhythms and fast footwork of flamenco would be a big challenge as the first dance style. If you&#39;re inflexible, I wouldn&#39;t recommend starting cold with ballet, either Instead. do some yoga first to get your body used to the new demands ballet will place on it.</p>\n<p style="text-indent:2em">A lack of rhythm is the biggest obstacle to learning to dance. However, it can be overcome with enough practice.__5___Then learn to dance when you begin to feel the beat. Dance can be a very rewarding and enjoyable hobby. Just be patient with yourself and learn to dance.</p>',
    difficulty: 2,
    examOptionList: null,
    gradeGroupId: "3",
    gradeGroupName: "高中",
    isCloze: 0,
    isDecidable: 0,
    isIntoAnswerTool: 0,
    keyboardType: 0,
    logicQuesTypeId: "7",
    logicQuesTypeName: "排序",
    modifyDate: "2023-02-14 11:41:52",
    normalAnswer: [["G"], ["A"], ["E"], ["F"], ["C"], ["暂无"], ["暂无"]],
    oneQuestionMoreAnalysisArr: [],
    queDesc: null,
    queId: "45fa3cf9e4e24f16a8dd25e57944dfd0",
    queSource: "2022~2023学年广东深圳盐田区深圳外国语学校高二上学期期中第5题1分;2022~2023学年广东深圳南山区深圳实验学校高二上学期段考（二）第5题;",
    score: 0,
    subjectId: "3",
    subjectName: "英语",
    writtenQuesTypeId: "6de9c2e6ce4e483e925c7ac35e6001b4",
    writtenQuesTypeName: "排序题"
  },
  {
    queId: "7c854932fa3943459f173ac10dcfa608",
    subjectName: "英语",
    subjectId: "3",
    gradeGroupName: "初中",
    gradeGroupId: "2",
    logicQuesTypeName: "解答",
    logicQuesTypeId: "8",
    writtenQuesTypeName: "书面表达",
    writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af3c2d1059",
    difficulty: 4,
    content:
      '<p align="left">题目一</p>\n<p align="left">假如你是李华， 你在向你的英国笔友Peter 介绍参观北京科技馆的活动。请你用英语写一封电子邮件，简要叙述参观的过程，以及你的感受。</p>\n<p align="left">提示词语：the Beijing Science and Technology Museum ( in Chaoyang District ), take, excited,</p>\n<p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Inventions, scientific exhibitions, experiment</p>\n<p align="left">提示问题：</p>\n<p align="left">1. Where is the Beijing Science and Technology Museum?</p>\n<p align="left">2. Who did you go with? What did you do there?</p>\n<p align="left">3. How did you feel?</p>\n<p align="left">Dear Peter,</p>\n<p style="text-align:justify; text-indent:2em">How is it going?</p>\n<p style="text-align:justify; text-indent:2em">I&#39;m writing to tell you my visit to the Beijing Science and Technology Museum. &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>\n<p style="text-align:right">Yours,</p>\n<p style="text-align:right">Li Hua&nbsp;&nbsp;</p>',
    answer: [
      [
        '<p>Dear Peter,</p>\n<p style="text-align:justify; text-indent:2em">How is going? I&#39;m writing to tell you my visit to the Beijing Science and Technology Museum. The Beijing Science and Technology Museum is in Chaoyang District. Last Sunday, I visited it with my classmates. We started off at six from Pinggu. It took us an hour and a half to get there by bus. Although we were very excited when we saw the museum, we went into the museum in two lines. After we got into it, we saw many new inventions and scientific exhibitions. We listened to the teacher there carefully and got a lot of from their clear explanation. Then we took some photos and did some experiments. Each of us had a good time.</p>\n<p style="text-align:justify; text-indent:2em">On my way back, we still talked about the visit. I felt quite happy and hoped to visit it again in the future.</p>\n<p style="text-align:right">Yours</p>\n<p style="text-align:right">Li Hua</p>'
      ]
    ],
    analysis: [
      '<p align="left">It takes sb. some time to do sth. &nbsp;&nbsp;&nbsp;&nbsp;某人花费时间做某事</p>\n<p align="left">get into&nbsp;&nbsp;&nbsp; 进入</p>\n<p align="left">take photo&nbsp;&nbsp;&nbsp; 拍照</p>'
    ],
    queSource: "2016年北京平谷区初三一模第66题15分",
    answerOptionList: null,
    examOptionList: [
      {
        id: "gkzdp4omn8ibepyukkistkfjk25a0070",
        name: "书面表达",
        childList: [
          {
            id: "gkzdp4omn8ibepyukkistkfjk25a0071",
            name: "文段表达"
          }
        ]
      }
    ],
    isCloze: 0,
    modifyDate: "2017-04-24 15:07:34",
    score: 0,
    queDesc: null,
    childList: null,
    isIntoAnswerTool: 0,
    eleId: "eff51c1ec25b4e1391f337bc2990eb98",
    queIndex: 9,
    jsonSign: "jiaoyan",
    isCorrected: 0,
    parasiticQue: null,
    paperId: "e050bf0e74f24d68bd93cb3940a8b94f",
    isAddition: 0
  },
  {
    analysis: ["略"],
    answer: null,
    answerOptionList: null,
    answerType: 0,
    blankAnswer: null,
    blankInteraction: null,
    childList: [
      {
        analysis: [
          "<p>游标卡尺的精度为$$0.1\\text{mm}$$，所以$$L=\\left( 50+1\\times 0.1 \\right)\\text{mm}=5.01\\text{cm}$$．螺旋测微器的读数为$$d={\\left( 5+31.6\\times 0.01{} \\right)}\\text{mm}=5.316\\text{mm}$$．</p>"
        ],
        answer: [["$$5.01$$"], ["<p>$$5.316$$（$$5.310\\sim5.320$$）</p>"]],
        answerOptionList: null,
        answerType: 0,
        blankAnswer: {
          answer: [
            {
              id: 0,
              content: [
                {
                  content: "$$5.01$$"
                }
              ],
              childTypeId: "10012",
              typeId: "1"
            },
            {
              id: 1,
              content: [
                {
                  content: "<p>$$5.316$$（$$5.310\\sim5.320$$）</p>"
                }
              ],
              childTypeId: "",
              typeId: "3"
            }
          ],
          group: []
        },
        blankInteraction: [
          {
            id: "0",
            content: ["$$5.01$$"],
            childTypeId: "10012",
            typeId: "1"
          },
          {
            id: "1",
            typeId: "3"
          }
        ],
        childList: null,
        content:
          "<p>分别使用游标卡尺和螺旋测微器测量圆柱体的长度和直径，某次测量的示数如图（$$a$$）和图（$$b$$）所示，长度为&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;$$\\text{cm}$$，直径为&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;$$\\text{mm}$$。</p>",
        difficulty: 3,
        examOptionList: null,
        gradeGroupId: "3",
        gradeGroupName: "高中",
        isCloze: 0,
        isDecidable: 0,
        isIntoAnswerTool: 0,
        keyboardType: 0,
        logicQuesTypeId: "4",
        logicQuesTypeName: "填空",
        modifyDate: "2023-08-03 15:44:38",
        normalAnswer: [["$$5.01$$"], ["<p>$$5.316$$（$$5.310\\sim5.320$$）</p>"]],
        oneQuestionMoreAnalysisArr: [
          "<p>游标卡尺的精度为$$0.1\\text{mm}$$，所以$$L=\\left( 50+1\\times 0.1 \\right)\\text{mm}=5.01\\text{cm}$$．螺旋测微器的读数为$$d={\\left( 5+31.6\\times 0.01{} \\right)}\\text{mm}=5.316\\text{mm}$$．</p>"
        ],
        queDesc: null,
        queId: "eede91be18a24ef4ba800f741bc1bb5d",
        queSource: null,
        score: 0,
        subjectId: "4",
        subjectName: "物理",
        writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af3c2d1006",
        writtenQuesTypeName: "填空"
      },
      {
        analysis: ["<p>为了保护电流表，在接通电路之前，要使电路中的总电阻尽可能大，然后慢慢减小电路中的电阻。</p>"],
        answer: [["大"], ["大"]],
        answerOptionList: null,
        answerType: 0,
        blankAnswer: {
          answer: [
            {
              id: 0,
              content: [
                {
                  content: "大"
                }
              ],
              childTypeId: "10011",
              typeId: "1"
            },
            {
              id: 1,
              content: [
                {
                  content: "大"
                }
              ],
              childTypeId: "10011",
              typeId: "1"
            }
          ],
          group: []
        },
        blankInteraction: [
          {
            id: "0",
            content: ["大"],
            childTypeId: "10011",
            typeId: "1"
          },
          {
            id: "1",
            content: ["大"],
            childTypeId: "10011",
            typeId: "1"
          }
        ],
        childList: null,
        content:
          "<p>按图（$$c$$）连接电路后，实验操作如下：</p>\n<p>（$$a$$）将滑动变阻器$${{R}_{1}}$$的阻值置于最&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;处（填“大”或“小”）；将$${{\\text{S}}_{2}}$$拨向接点$$1$$，闭合$${{\\text{S}}_{1}}$$，调节$${{R}_{1}}$$，使电流表示数为$${{I}_{0}}$$；</p>\n<p>（$$b$$）将电阻箱$${{R}_{2}}$$的阻值调至最&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;（填“大”或“小”）；将$${{\\text{S}}_{2}}$$拨向接点$$2$$；保持$${{R}_{1}}$$不变，调节$${{R}_{2}}$$，使电流表示数仍为$${{I}_{0}}$$，此时$${{R}_{2}}$$阻值为$$1280\\Omega $$。</p>",
        difficulty: 3,
        examOptionList: null,
        gradeGroupId: "3",
        gradeGroupName: "高中",
        isCloze: 0,
        isDecidable: 1,
        isIntoAnswerTool: 0,
        keyboardType: 0,
        logicQuesTypeId: "4",
        logicQuesTypeName: "填空",
        modifyDate: "2023-08-03 15:44:38",
        normalAnswer: [["大"], ["大"]],
        oneQuestionMoreAnalysisArr: ["<p>为了保护电流表，在接通电路之前，要使电路中的总电阻尽可能大，然后慢慢减小电路中的电阻。</p>"],
        queDesc: null,
        queId: "5b5dd32df91d4c678d174a4685879a7e",
        queSource: null,
        score: 0,
        subjectId: "4",
        subjectName: "物理",
        writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af3c2d1006",
        writtenQuesTypeName: "填空"
      },
      {
        analysis: ["<p>本题的实验方法为等效替代法，由$$I_0=\\frac{E}{R_1+R_A+r+R_x}$$；</p>\n<p>$$I_0=\\frac{E}{R_1+R_A+r+R_2}$$；</p>\n<p>解得$$R_x=R_2=1280\\Omega$$。</p>"],
        answer: [["$$1280$$"]],
        answerOptionList: null,
        answerType: 0,
        blankAnswer: {
          answer: [
            {
              id: 0,
              content: [
                {
                  content: "$$1280$$"
                }
              ],
              childTypeId: "10012",
              typeId: "1"
            }
          ],
          group: []
        },
        blankInteraction: [
          {
            id: "0",
            content: ["$$1280$$"],
            childTypeId: "10012",
            typeId: "1"
          }
        ],
        childList: null,
        content: "<p>由此可知，圆柱体的电阻为&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;$$\\Omega $$。</p>",
        difficulty: 3,
        examOptionList: null,
        gradeGroupId: "3",
        gradeGroupName: "高中",
        isCloze: 0,
        isDecidable: 1,
        isIntoAnswerTool: 0,
        keyboardType: 0,
        logicQuesTypeId: "4",
        logicQuesTypeName: "填空",
        modifyDate: "2023-08-03 15:44:38",
        normalAnswer: [["$$1280$$"]],
        oneQuestionMoreAnalysisArr: ["<p>本题的实验方法为等效替代法，由$$I_0=\\frac{E}{R_1+R_A+r+R_x}$$；</p>\n<p>$$I_0=\\frac{E}{R_1+R_A+r+R_2}$$；</p>\n<p>解得$$R_x=R_2=1280\\Omega$$。</p>"],
        queDesc: null,
        queId: "ca20fd4559d343cab640ef20eee176af",
        queSource: null,
        score: 0,
        subjectId: "4",
        subjectName: "物理",
        writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af3c2d1006",
        writtenQuesTypeName: "填空"
      }
    ],
    content:
      '<p>某同学测量一个圆柱体的电阻率，需要测量圆柱体的尺寸和电阻．</p>\n<p><img alt="" height="182" src="https://tiku-pro-cdn.speiyou.com/wxtiku/imgFile/3357812828f5b1dbf1a2c95928ca5647.png" width="599" /></p>',
    difficulty: 3,
    examOptionList: [
      {
        childList: [
          {
            id: "38b0a6cc96534c57ad915ba288d3c09f",
            lkcId: "d68f698a62f7417b95766a57e1b0a7aa",
            name: "测量金属丝的电阻率",
            childList: []
          },
          {
            id: "2fde14f511f748c28dc1f1f8840f763a",
            lkcId: "d68f698a62f7417b95766a57e1b0a7aa",
            name: "伏安法测电阻",
            childList: []
          },
          {
            id: "65f517bd52744e43b0973f2af3c0dd47",
            lkcId: "d68f698a62f7417b95766a57e1b0a7aa",
            name: "长度的测量及其测量工具的选用",
            childList: []
          }
        ],
        id: "07629be3858c4ef19b3f036ba703a1a9",
        name: "实验部分"
      },
      {
        childList: [],
        id: "f0fc83a72924487da032d4b3d037ac32",
        name: "等效代替法"
      }
    ],
    gradeGroupId: "3",
    gradeGroupName: "高中",
    isCloze: 0,
    isDecidable: 0,
    isIntoAnswerTool: 0,
    keyboardType: 0,
    logicQuesTypeId: "9",
    logicQuesTypeName: "复合",
    modifyDate: "2023-08-03 15:44:38",
    normalAnswer: null,
    oneQuestionMoreAnalysisArr: [],
    queDesc: null,
    queId: "3c38e51d08f240fba109c36abbbe157c",
    queSource: "2012年高考真题",
    score: 0,
    subjectId: "4",
    subjectName: "物理",
    writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af3c2d1007",
    writtenQuesTypeName: "实验"
  },
  {
    analysis: ["<p>本题考查对文学常识的掌握，共10分，每空2.5分。</p>"],
    answer: [["A"], ["A"], ["B"], ["B"]],
    answerOptionList: [
      [
        {
          aoVal: "A",
          content: "唐朝"
        },
        {
          aoVal: "B",
          content: "明朝"
        }
      ],
      [
        {
          aoVal: "A",
          content: "山水田园"
        },
        {
          aoVal: "B",
          content: "豪放派"
        }
      ],
      [
        {
          aoVal: "A",
          content: "杜甫"
        },
        {
          aoVal: "B",
          content: "李白"
        }
      ],
      [
        {
          aoVal: "A",
          content: "喜悦"
        },
        {
          aoVal: "B",
          content: "思念"
        }
      ]
    ],
    answerType: 0,
    blankAnswer: null,
    blankInteraction: null,
    childList: null,
    content:
      '<p>根据题目选出正确答案，并把答案前面的序号写在填空处。</p>\n<p style="text-align: justify; text-indent: 2em;">孟浩然，是我国&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;（朝代）代的&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;派诗人。他的好友&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;（姓名）在著名诗作《黄鹤楼送孟浩然之广陵》中，用&ldquo;孤帆远影碧空尽，唯见长江天际流。&rdquo;表达了自己对好友离去的&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;之情。</p>',
    difficulty: 4,
    examOptionList: [
      {
        childList: [
          {
            id: "62256ad4d47948ee8820de22c96ab5c1",
            lkcId: "cc01cd1a88924293ade6f02de6a53330",
            name: "常识",
            childList: [
              {
                id: "58ccda2c5aee437caf7ce01a6177bddd",
                lkcId: "cc01cd1a88924293ade6f02de6a53330",
                name: "文学常识题",
                childList: []
              }
            ]
          }
        ],
        id: "4f66c7ceae594069817e49b78b03eba5",
        name: "基础知识"
      }
    ],
    gradeGroupId: "1",
    gradeGroupName: "小学",
    isCloze: 1,
    isDecidable: 1,
    isIntoAnswerTool: 0,
    keyboardType: 0,
    logicQuesTypeId: "10",
    logicQuesTypeName: "完形填空",
    modifyDate: "2018-07-28 11:37:07",
    normalAnswer: [["A"], ["A"], ["B"], ["B"]],
    oneQuestionMoreAnalysisArr: ["<p>本题考查对文学常识的掌握，共10分，每空2.5分。</p>"],
    queDesc: null,
    queId: "31679f12a9a34e7d854a7264c4dab313",
    queSource: "四年级上学期其它第7题10分",
    score: 0,
    subjectId: "1",
    subjectName: "语文",
    writtenQuesTypeId: "13f97b02f7e4f2c9d35ec1af32cd1001",
    writtenQuesTypeName: "基础知识"
  },
  {
    queId: "41a8cbed79714978ad88d70090e49126",
    subjectName: "英语",
    subjectId: "3",
    gradeGroupName: "初中",
    gradeGroupId: "2",
    logicQuesTypeName: "语音跟读",
    logicQuesTypeId: "11",
    writtenQuesTypeName: "语音跟读",
    writtenQuesTypeId: null,
    difficulty: 0,
    content:
      '<p>&nbsp;have the opportunity to live and work in the north as well as in the south of China, and the impression I got is that there are two very distinct Chinese looks. The northern girls are generally taller, of fairer and smoother complexion and mostly with double eyelids and sharper noses, as compared with their sisters in the south, especially those in Guangdong, Guangxi and Hainan!</p>\n<p>&nbsp;\n<audio controls="controls"><source src="http://pfile.haibian.com/paper-diyQue-audio/4b2253ce-d973-4d7c-8a96-f5ef4b08f44b.mp3" /></audio>\n&nbsp;</p>',
    answer: null,
    analysis: null,
    queSource: null,
    answerOptionList: null,
    examOptionList: null,
    isCloze: 0,
    modifyDate: "2017-05-02 20:09:28",
    score: 0,
    queDesc: null,
    childList: null,
    isIntoAnswerTool: 0,
    eleId: "07d18ce0dff4439cacfa66e382b6df1c",
    queIndex: 12,
    jsonSign: "jiaoyan",
    isCorrected: 0,
    parasiticQue: null,
    paperId: "e050bf0e74f24d68bd93cb3940a8b94f",
    isAddition: 1
  },
  {
    queId: "a02308c324aa417da481469cc9339822",
    subjectName: "英语",
    subjectId: "3",
    gradeGroupName: "初中",
    gradeGroupId: "2",
    logicQuesTypeName: "连词成句",
    logicQuesTypeId: "13",
    isPhoto: true,
    writtenQuesTypeName: "连词成句",
    writtenQuesTypeId: "1e7a8c4795d54339b38ae4553da13f7e",
    difficulty: 1,
    content: "denied   The little boy   stealing   .   a ball",
    answer: [["The little boy denied stealing a ball."]],
    analysis: ["<p>考查动名词。deny doing sth.否认做某事，用动名词。故答案为：The little boy denied stealing a ball.</p>"],
    queSource: "2017年北京初一上学期学而思暑",
    answerOptionList: null,
    examOptionList: [
      {
        id: "gkzdp4omn8ibepyukkistkfjk25a0000",
        name: "语言知识运用",
        childList: [
          {
            id: "gkzdp4omn8ibepyukkistkfjk25a0041",
            name: "非谓语动词",
            childList: [
              {
                id: "gkzdp4omn8ibepyukkistkfjk25a0042",
                name: "动名词"
              }
            ]
          }
        ]
      },
      {
        id: "gkzdp4omn8ibepyukkistkfjk25a0070",
        name: "书面表达",
        childList: [
          {
            id: "2654c03cfaa3424eb040fa2c59e55ea4",
            name: "连词成句"
          }
        ]
      }
    ],
    isCloze: 0,
    modifyDate: "2017-06-08 10:33:37",
    score: 0,
    queDesc: null,
    childList: null,
    isIntoAnswerTool: 0,
    eleId: "37cface8b10b4f16a22ad8e0f06313a6",
    queIndex: 1,
    jsonSign: "jiaoyan",
    isCorrected: 0,
    parasiticQue: null,
    paperId: "89a524fa2b2e4bee9f92f3c7cc3c8ae4",
    isAddition: 0
  }
];

var loadComplete = function loadComplete(data) {
  queDataList = data;
  console.log("渲染xxx", queDataList);
  queData = queDataList[currentIndex];

  renderQS(queData);
};

loadComplete(qsList);
// (function (cb) {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://static.speiyou.com/showPic/template-demo-data/data.json");
//   xhr.send();

//   xhr.onload = function () {
//     window.queDataList = JSON.parse(this.responseText).data;
//     cb(JSON.parse(this.responseText).data);
//   };
// })(loadComplete);
