(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.sass":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.sass ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  background-color: #000;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  height: 100%;\n  width: 100%;\n}\nbody p {\n  color: rgba(255, 255, 255, 0.5);\n}\nsection {\n  font-family: \"Rajdhani\", sans-serif;\n  text-align: center;\n  overflow: hidden;\n}\nmobile-nav {\n  display: hidden;\n}\n.nav-link {\n  color: white;\n  font-size: 2vw;\n  font-family: \"Rajdhani\", sans-serif;\n}\n.navbar-brand {\n  color: white;\n  font-family: \"Raleway Dots\", cursive;\n}\n.navbar-brand:hover {\n  color: red;\n}\n.nav-item {\n  font-family: \"Rajdhani\", sans-serif;\n}\n.jumbotron {\n  background-color: #000;\n  color: white;\n  text-align: center;\n}\n.company {\n  color: #fff;\n}\n.description {\n  color: rgba(255, 255, 255, 0.5);\n}\n.technologies {\n  color: rgba(255, 255, 255, 0.5);\n}\n.responsiblities ul li {\n  color: rgba(255, 255, 255, 0.5);\n}\n.contact {\n  background-color: #8080801f;\n  border-radius: 1vw;\n  padding: 4vw 4vw;\n  margin-bottom: 5vw;\n  color: white;\n  width: 50%;\n}\n.on-success {\n  color: green;\n}\n.on-error {\n  color: red;\n}\n.list-group-item {\n  background-color: #000;\n}\n.page-section {\n  position: relative;\n}\n@media (max-width: 600px) {\n  section {\n    padding: 4vh 0;\n    margin: 0 0;\n  }\n\n  .intro {\n    height: 100vh;\n    padding: 5vh 0 1vh 0;\n  }\n  .intro .mobile-nav {\n    margin: 3vh 0;\n    display: block;\n  }\n  .intro .full-nav {\n    display: none;\n  }\n  .intro .container {\n    height: 100%;\n    border: 1px solid;\n    overflow: hidden;\n  }\n  .intro nav .navbar-brand {\n    font-size: 14vw;\n    margin: 4vh 0;\n  }\n  .intro nav .nav-link {\n    font-size: 4vw;\n  }\n  .intro #para {\n    padding: 2vh 0;\n  }\n  .intro #para h1 {\n    font-size: 6vw;\n  }\n  .intro #para ul {\n    padding: 3vh 0;\n  }\n\n  .work h2 {\n    margin: 8vw;\n    font-size: 8vw;\n  }\n  .work .description {\n    margin: 2vw;\n    font-size: 4vw;\n    padding: 0 0;\n  }\n  .work .technologies {\n    margin: 2vw;\n    font-size: 2vw;\n  }\n  .work .responsiblities {\n    margin: 2vw;\n  }\n  .work .responsiblities ul li {\n    font-size: 3vw;\n  }\n\n  .contact {\n    margin: 8vw auto;\n    width: 80%;\n  }\n}\n@media (min-width: 600px) {\n  .container {\n    max-width: 90%;\n  }\n  .container section {\n    padding: 0 0;\n    margin: 0 0;\n  }\n\n  .intro {\n    height: 100vh;\n  }\n  .intro .mobile-nav {\n    margin: 2vh 0;\n    display: block;\n  }\n  .intro .full-nav {\n    display: none;\n  }\n  .intro .container {\n    height: 100%;\n    border: 1px solid;\n    overflow: hidden;\n  }\n  .intro nav .navbar-brand {\n    font-size: 13vw;\n    margin: 4vh 0 1vh 0;\n  }\n  .intro nav .row {\n    margin: 0 0;\n  }\n  .intro #para {\n    padding: 4vw 0;\n  }\n  .intro #para .jumbotron {\n    padding: 0 0;\n    margin: 0 0;\n  }\n  .intro #para .jumbotron h1 {\n    font-size: 8vw;\n  }\n  .intro #para ul {\n    padding: 4vw 0;\n  }\n\n  .work h2 {\n    margin: 8vw;\n    font-size: 8vw;\n  }\n  .work .description {\n    margin: 1vw;\n    font-size: 3vw;\n    padding: 0 0;\n  }\n  .work .technologies {\n    margin: 2vw;\n    font-size: 2vw;\n  }\n  .work .responsiblities {\n    margin: 1vw;\n  }\n  .work .responsiblities ul li {\n    font-size: 2vw;\n  }\n\n  .contact {\n    margin: 8vw auto;\n    width: 80%;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width: 90%;\n  }\n  .container section {\n    padding: 3vh 0;\n    margin: 0 0 0 0;\n  }\n\n  .intro {\n    height: 100vh;\n    padding: 0 0 !important;\n    margin: 0 0 5vh 0 !important;\n  }\n  .intro .mobile-nav {\n    margin: 0;\n    display: block;\n  }\n  .intro .full-nav {\n    display: none;\n  }\n  .intro .container {\n    height: 100%;\n    border: 1px solid;\n    overflow: hidden;\n  }\n  .intro nav .navbar-brand {\n    font-size: 11vw;\n    margin: 0;\n  }\n  .intro nav .row {\n    margin: 0 0;\n  }\n  .intro #para {\n    padding: 1vw 0;\n  }\n  .intro #para .jumbotron {\n    padding: 0 0;\n    margin: 0 0;\n  }\n  .intro #para .jumbotron h1 {\n    font-size: 3vw;\n  }\n  .intro #para ul {\n    padding: 1vw 0;\n  }\n\n  .work h2 {\n    margin: 1vw;\n    font-size: 7vw;\n  }\n  .work .description {\n    margin: 1vw;\n    font-size: 2.5vw;\n    padding: 0 0;\n  }\n  .work .technologies {\n    margin: 1vw;\n    font-size: 1.5vw;\n  }\n  .work .responsiblities {\n    margin: 1vw;\n  }\n  .work .responsiblities ul li {\n    font-size: 2vw;\n  }\n\n  .contact {\n    margin: 4vw auto;\n    width: 50%;\n  }\n}\n@media (min-width: 1760px) {\n  #para .jumbotron h1 {\n    font-size: 6vw !important;\n  }\n}\n.reveal {\n  position: relative;\n  transform: translateY(150px);\n  opacity: 0;\n  transition: 1s all ease;\n}\n.reveal.active {\n  transform: translateY(0);\n  opacity: 1;\n}\nsvg {\n  font-family: \"Russo One\", sans-serif;\n  width: 100%;\n  height: 100%;\n}\nsvg text {\n  text-transform: uppercase;\n  -webkit-animation: stroke 5s 1 alternate;\n          animation: stroke 5s 1 alternate;\n  stroke-width: 2;\n  stroke: #ffffff;\n  font-size: 140px;\n}\n@-webkit-keyframes stroke {\n  0% {\n    fill: rgba(72, 138, 20, 0);\n    stroke: #365fa0;\n    stroke-dashoffset: 25%;\n    stroke-dasharray: 0 50%;\n    stroke-width: 2;\n  }\n  70% {\n    fill: rgba(72, 138, 20, 0);\n    stroke: #ffffff;\n  }\n  80% {\n    fill: #488acc14;\n    stroke: #ffffff;\n    stroke-width: 3;\n  }\n  100% {\n    fill: #488acc14;\n    stroke: rgba(54, 95, 160, 0);\n    stroke-dashoffset: -25%;\n    stroke-dasharray: 50% 0;\n    stroke-width: 0;\n  }\n}\n@keyframes stroke {\n  0% {\n    fill: rgba(72, 138, 20, 0);\n    stroke: #365fa0;\n    stroke-dashoffset: 25%;\n    stroke-dasharray: 0 50%;\n    stroke-width: 2;\n  }\n  70% {\n    fill: rgba(72, 138, 20, 0);\n    stroke: #ffffff;\n  }\n  80% {\n    fill: #488acc14;\n    stroke: #ffffff;\n    stroke-width: 3;\n  }\n  100% {\n    fill: #488acc14;\n    stroke: rgba(54, 95, 160, 0);\n    stroke-dashoffset: -25%;\n    stroke-dasharray: 50% 0;\n    stroke-width: 0;\n  }\n}\n.nav-link {\n  font-family: \"Fira Mono\", monospace;\n  -webkit-animation: glitch 1s linear infinite;\n          animation: glitch 1s linear infinite;\n}\n.nav-link:before, .nav-link:after {\n  content: attr(title);\n  position: absolute;\n  left: 0;\n}\n.nav-link:before {\n  -webkit-animation: glitchTop 1s linear infinite;\n          animation: glitchTop 1s linear infinite;\n  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);\n}\n.nav-link:after {\n  -webkit-animation: glitchBotom 1.5s linear infinite;\n          animation: glitchBotom 1.5s linear infinite;\n  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);\n  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);\n}\n@-webkit-keyframes glitch {\n  2%, 64% {\n    transform: translate(2px, 0) skew(0deg);\n  }\n  4%, 60% {\n    transform: translate(-2px, 0) skew(0deg);\n  }\n  62% {\n    transform: translate(0, 0) skew(5deg);\n  }\n}\n@keyframes glitch {\n  2%, 64% {\n    transform: translate(2px, 0) skew(0deg);\n  }\n  4%, 60% {\n    transform: translate(-2px, 0) skew(0deg);\n  }\n  62% {\n    transform: translate(0, 0) skew(5deg);\n  }\n}\n@-webkit-keyframes glitchTop {\n  2%, 64% {\n    transform: translate(2px, -2px);\n  }\n  4%, 60% {\n    transform: translate(-2px, 2px);\n  }\n  62% {\n    transform: translate(13px, -1px) skew(-13deg);\n  }\n}\n@keyframes glitchTop {\n  2%, 64% {\n    transform: translate(2px, -2px);\n  }\n  4%, 60% {\n    transform: translate(-2px, 2px);\n  }\n  62% {\n    transform: translate(13px, -1px) skew(-13deg);\n  }\n}\n@-webkit-keyframes glitchBotom {\n  2%, 64% {\n    transform: translate(-2px, 0);\n  }\n  4%, 60% {\n    transform: translate(-2px, 0);\n  }\n  62% {\n    transform: translate(-22px, 5px) skew(21deg);\n  }\n}\n@keyframes glitchBotom {\n  2%, 64% {\n    transform: translate(-2px, 0);\n  }\n  4%, 60% {\n    transform: translate(-2px, 0);\n  }\n  62% {\n    transform: translate(-22px, 5px) skew(21deg);\n  }\n}", "",{"version":3,"sources":["/Users/rohanjaiswal/Documents/Sites/angular tuts/portfolio/src/styles.sass","styles.sass"],"names":[],"mappings":"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","file":"styles.sass","sourcesContent":["/* You can add global styles to this file, and also import other style files */\nbody\n    background-color: #000\n\n* \n  box-sizing: border-box\nbody \n    height: 100%\n    width: 100%\n    p\n        color: rgba(255,255,255,.5)\nsection\n    font-family: 'Rajdhani', sans-serif\n    text-align: center\n    overflow: hidden\n\nmobile-nav\n    display: hidden\n\n.nav-link\n    color: white\n    font-size:2vw\n    font-family: 'Rajdhani', sans-serif\n.navbar-brand\n    color: white\n    font-family: 'Raleway Dots', cursive\n.navbar-brand:hover\n    color: red\n.nav-item\n    font-family: 'Rajdhani', sans-serif\n\n.jumbotron\n    background-color: #000\n    color: white\n    text-align: center\n\n// work\n.company\n    color: #fff\n.description\n    color: rgba(255,255,255,.5)\n.technologies\n    color: rgba(255,255,255,.5)\n.responsiblities\n    ul\n        li\n            color: rgba(255,255,255,.5)\n\n//contact\n.contact\n    background-color: #8080801f\n    border-radius: 1vw\n    padding: 4vw 4vw\n    margin-bottom: 5vw\n    color: white\n    width: 50%\n\n.on-success\n    color: green\n\n.on-error\n    color: red\n\n.list-group-item\n    background-color:#000\n\n.page-section\n    position: relative\n//end contact\n\n// Extra small devices (portrait phones, less than 576px)\n@media (max-width: 600px) \n    section\n        padding: 4vh 0 \n        margin: 0 0\n\n    .intro\n        height: 100vh\n        padding: 5vh 0 1vh 0\n        .mobile-nav\n            margin: 3vh 0\n            display: block\n        .full-nav\n            display: none\n        .container\n            height: 100%\n            border: 1px solid\n            overflow: hidden\n        nav\n            .navbar-brand\n                font-size: 14vw\n                margin: 4vh 0\n            .nav-link\n                font-size: 4vw\n        #para\n            padding: 2vh 0\n            h1\n                font-size: 6vw\n            ul\n                padding: 3vh 0 \n\n    .work\n        h2\n            margin: 8vw\n            font-size:8vw\n        .description \n            margin: 2vw \n            font-size: 4vw\n            padding: 0 0\n        .technologies\n            margin: 2vw \n            font-size: 2vw\n        .responsiblities\n            margin: 2vw \n            ul\n                li\n                    font-size: 3vw\n\n    .contact\n        margin: 8vw auto \n        width: 80%\n\n// Small devices (landscape phones, less than 768px)\n@media (min-width: 600px) \n    .container\n        max-width:90%\n        section\n            padding: 0 0\n            margin: 0 0\n    \n    .intro\n        height: 100vh\n        .mobile-nav\n            margin: 2vh 0\n            display: block\n        .full-nav\n            display: none\n        .container\n            height: 100%\n            border: 1px solid\n            overflow: hidden\n        nav\n            .navbar-brand\n                font-size: 13vw\n                margin: 4vh 0 1vh 0\n            .row \n                margin: 0 0\n        #para\n            padding: 4vw 0\n            .jumbotron\n                padding: 0 0\n                margin: 0 0\n                h1\n                    font-size: 8vw\n            ul\n                padding: 4vw 0 \n\n    .work\n        h2\n            margin: 8vw\n            font-size:8vw\n        .description \n            margin: 1vw \n            font-size: 3vw\n            padding: 0 0\n        .technologies\n            margin: 2vw \n            font-size: 2vw\n        .responsiblities\n            margin: 1vw \n            ul\n                li\n                    font-size: 2vw\n\n    .contact\n        margin: 8vw auto \n        width: 80%\n\n// Medium devices (tablets, less than 992px)\n@media (min-width: 992px) \n    .container\n        max-width:90%\n        section\n            padding: 3vh 0\n            margin: 0 0 0 0\n    .intro\n        height: 100vh\n        padding: 0 0 !important\n        margin: 0 0 5vh 0 !important\n        .mobile-nav\n            margin: 0\n            display: block\n        .full-nav\n            display: none\n        .container\n            height: 100%\n            border: 1px solid\n            overflow: hidden\n        nav\n            .navbar-brand\n                font-size: 11vw\n                margin: 0\n            .row \n                margin: 0 0\n        #para\n            padding: 1vw 0\n            .jumbotron\n                padding: 0 0\n                margin: 0 0\n                h1\n                    font-size: 3vw\n            ul\n                padding: 1vw 0 \n\n    .work\n        h2\n            margin: 1vw\n            font-size:7vw\n        .description \n            margin: 1vw \n            font-size: 2.5vw\n            padding: 0 0\n        .technologies\n            margin: 1vw \n            font-size: 1.5vw\n        .responsiblities\n            margin: 1vw \n            ul\n                li\n                    font-size: 2vw\n\n    .contact\n        margin: 4vw auto \n        width: 50%\n    \n    // Medium devices (tablets, less than 992px)\n@media (min-width: 1760px) \n        #para\n            .jumbotron\n                h1\n                    font-size: 6vw !important\n\n.reveal\n  position: relative\n  transform: translateY(150px)\n  opacity: 0\n  transition: 1s all ease\n\n\n.reveal.active\n  transform: translateY(0)\n  opacity: 1\n\nsvg \n  font-family: 'Russo One', sans-serif\n  width: 100% \n  height: 100%\n\nsvg text \n  text-transform: uppercase\n  animation: stroke 5s 1 alternate\n  stroke-width: 2\n  stroke: #ffffff\n  font-size: 140px\n\n@keyframes stroke \n  0%   \n    fill: rgba(72,138,20,0) \n    stroke: rgba(54,95,160,1)\n    stroke-dashoffset: 25% \n    stroke-dasharray: 0 50% \n    stroke-width: 2\n\t\n  70%\n    fill: rgba(72,138,20,0) \n    stroke: #ffffff\n  80%  \n    fill: #488acc14\n    stroke: #ffffff\n    stroke-width: 3 \n  100%\n    fill: #488acc14\n    stroke: rgba(54,95,160,0) \n    stroke-dashoffset: -25% \n    stroke-dasharray: 50% 0 \n    stroke-width: 0\n\t\n.nav-link\n  font-family: 'Fira Mono', monospace\n  animation: glitch 1s linear infinite\n\n  &:before, &:after\n    content: attr(title)\n    position: absolute\n    left: 0\n\n  &:before\n    animation: glitchTop 1s linear infinite\n    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%)\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%)\n\n  &:after\n    animation: glitchBotom 1.5s linear infinite\n    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%)\n    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%)\n\n@keyframes glitch\n  2%,64%\n    transform: translate(2px, 0) skew(0deg)\n\n  4%,60%\n    transform: translate(-2px, 0) skew(0deg)\n\n  62%\n    transform: translate(0, 0) skew(5deg)\n\n@keyframes glitchTop\n  2%,64%\n    transform: translate(2px, -2px)\n\n  4%,60%\n    transform: translate(-2px, 2px)\n\n  62%\n    transform: translate(13px, -1px) skew(-13deg)\n\n@keyframes glitchBotom\n  2%,64%\n    transform: translate(-2px, 0)\n\n  4%,60%\n    transform: translate(-2px, 0)\n\n  62%\n    transform: translate(-22px, 5px) skew(21deg)\n","/* You can add global styles to this file, and also import other style files */\nbody {\n  background-color: #000;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100%;\n  width: 100%;\n}\nbody p {\n  color: rgba(255, 255, 255, 0.5);\n}\n\nsection {\n  font-family: \"Rajdhani\", sans-serif;\n  text-align: center;\n  overflow: hidden;\n}\n\nmobile-nav {\n  display: hidden;\n}\n\n.nav-link {\n  color: white;\n  font-size: 2vw;\n  font-family: \"Rajdhani\", sans-serif;\n}\n\n.navbar-brand {\n  color: white;\n  font-family: \"Raleway Dots\", cursive;\n}\n\n.navbar-brand:hover {\n  color: red;\n}\n\n.nav-item {\n  font-family: \"Rajdhani\", sans-serif;\n}\n\n.jumbotron {\n  background-color: #000;\n  color: white;\n  text-align: center;\n}\n\n.company {\n  color: #fff;\n}\n\n.description {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.technologies {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.responsiblities ul li {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.contact {\n  background-color: #8080801f;\n  border-radius: 1vw;\n  padding: 4vw 4vw;\n  margin-bottom: 5vw;\n  color: white;\n  width: 50%;\n}\n\n.on-success {\n  color: green;\n}\n\n.on-error {\n  color: red;\n}\n\n.list-group-item {\n  background-color: #000;\n}\n\n.page-section {\n  position: relative;\n}\n\n@media (max-width: 600px) {\n  section {\n    padding: 4vh 0;\n    margin: 0 0;\n  }\n\n  .intro {\n    height: 100vh;\n    padding: 5vh 0 1vh 0;\n  }\n  .intro .mobile-nav {\n    margin: 3vh 0;\n    display: block;\n  }\n  .intro .full-nav {\n    display: none;\n  }\n  .intro .container {\n    height: 100%;\n    border: 1px solid;\n    overflow: hidden;\n  }\n  .intro nav .navbar-brand {\n    font-size: 14vw;\n    margin: 4vh 0;\n  }\n  .intro nav .nav-link {\n    font-size: 4vw;\n  }\n  .intro #para {\n    padding: 2vh 0;\n  }\n  .intro #para h1 {\n    font-size: 6vw;\n  }\n  .intro #para ul {\n    padding: 3vh 0;\n  }\n\n  .work h2 {\n    margin: 8vw;\n    font-size: 8vw;\n  }\n  .work .description {\n    margin: 2vw;\n    font-size: 4vw;\n    padding: 0 0;\n  }\n  .work .technologies {\n    margin: 2vw;\n    font-size: 2vw;\n  }\n  .work .responsiblities {\n    margin: 2vw;\n  }\n  .work .responsiblities ul li {\n    font-size: 3vw;\n  }\n\n  .contact {\n    margin: 8vw auto;\n    width: 80%;\n  }\n}\n@media (min-width: 600px) {\n  .container {\n    max-width: 90%;\n  }\n  .container section {\n    padding: 0 0;\n    margin: 0 0;\n  }\n\n  .intro {\n    height: 100vh;\n  }\n  .intro .mobile-nav {\n    margin: 2vh 0;\n    display: block;\n  }\n  .intro .full-nav {\n    display: none;\n  }\n  .intro .container {\n    height: 100%;\n    border: 1px solid;\n    overflow: hidden;\n  }\n  .intro nav .navbar-brand {\n    font-size: 13vw;\n    margin: 4vh 0 1vh 0;\n  }\n  .intro nav .row {\n    margin: 0 0;\n  }\n  .intro #para {\n    padding: 4vw 0;\n  }\n  .intro #para .jumbotron {\n    padding: 0 0;\n    margin: 0 0;\n  }\n  .intro #para .jumbotron h1 {\n    font-size: 8vw;\n  }\n  .intro #para ul {\n    padding: 4vw 0;\n  }\n\n  .work h2 {\n    margin: 8vw;\n    font-size: 8vw;\n  }\n  .work .description {\n    margin: 1vw;\n    font-size: 3vw;\n    padding: 0 0;\n  }\n  .work .technologies {\n    margin: 2vw;\n    font-size: 2vw;\n  }\n  .work .responsiblities {\n    margin: 1vw;\n  }\n  .work .responsiblities ul li {\n    font-size: 2vw;\n  }\n\n  .contact {\n    margin: 8vw auto;\n    width: 80%;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width: 90%;\n  }\n  .container section {\n    padding: 3vh 0;\n    margin: 0 0 0 0;\n  }\n\n  .intro {\n    height: 100vh;\n    padding: 0 0 !important;\n    margin: 0 0 5vh 0 !important;\n  }\n  .intro .mobile-nav {\n    margin: 0;\n    display: block;\n  }\n  .intro .full-nav {\n    display: none;\n  }\n  .intro .container {\n    height: 100%;\n    border: 1px solid;\n    overflow: hidden;\n  }\n  .intro nav .navbar-brand {\n    font-size: 11vw;\n    margin: 0;\n  }\n  .intro nav .row {\n    margin: 0 0;\n  }\n  .intro #para {\n    padding: 1vw 0;\n  }\n  .intro #para .jumbotron {\n    padding: 0 0;\n    margin: 0 0;\n  }\n  .intro #para .jumbotron h1 {\n    font-size: 3vw;\n  }\n  .intro #para ul {\n    padding: 1vw 0;\n  }\n\n  .work h2 {\n    margin: 1vw;\n    font-size: 7vw;\n  }\n  .work .description {\n    margin: 1vw;\n    font-size: 2.5vw;\n    padding: 0 0;\n  }\n  .work .technologies {\n    margin: 1vw;\n    font-size: 1.5vw;\n  }\n  .work .responsiblities {\n    margin: 1vw;\n  }\n  .work .responsiblities ul li {\n    font-size: 2vw;\n  }\n\n  .contact {\n    margin: 4vw auto;\n    width: 50%;\n  }\n}\n@media (min-width: 1760px) {\n  #para .jumbotron h1 {\n    font-size: 6vw !important;\n  }\n}\n.reveal {\n  position: relative;\n  transform: translateY(150px);\n  opacity: 0;\n  transition: 1s all ease;\n}\n\n.reveal.active {\n  transform: translateY(0);\n  opacity: 1;\n}\n\nsvg {\n  font-family: \"Russo One\", sans-serif;\n  width: 100%;\n  height: 100%;\n}\n\nsvg text {\n  text-transform: uppercase;\n  animation: stroke 5s 1 alternate;\n  stroke-width: 2;\n  stroke: #ffffff;\n  font-size: 140px;\n}\n\n@keyframes stroke {\n  0% {\n    fill: rgba(72, 138, 20, 0);\n    stroke: #365fa0;\n    stroke-dashoffset: 25%;\n    stroke-dasharray: 0 50%;\n    stroke-width: 2;\n  }\n  70% {\n    fill: rgba(72, 138, 20, 0);\n    stroke: #ffffff;\n  }\n  80% {\n    fill: #488acc14;\n    stroke: #ffffff;\n    stroke-width: 3;\n  }\n  100% {\n    fill: #488acc14;\n    stroke: rgba(54, 95, 160, 0);\n    stroke-dashoffset: -25%;\n    stroke-dasharray: 50% 0;\n    stroke-width: 0;\n  }\n}\n.nav-link {\n  font-family: \"Fira Mono\", monospace;\n  animation: glitch 1s linear infinite;\n}\n.nav-link:before, .nav-link:after {\n  content: attr(title);\n  position: absolute;\n  left: 0;\n}\n.nav-link:before {\n  animation: glitchTop 1s linear infinite;\n  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);\n}\n.nav-link:after {\n  animation: glitchBotom 1.5s linear infinite;\n  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);\n  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);\n}\n\n@keyframes glitch {\n  2%, 64% {\n    transform: translate(2px, 0) skew(0deg);\n  }\n  4%, 60% {\n    transform: translate(-2px, 0) skew(0deg);\n  }\n  62% {\n    transform: translate(0, 0) skew(5deg);\n  }\n}\n@keyframes glitchTop {\n  2%, 64% {\n    transform: translate(2px, -2px);\n  }\n  4%, 60% {\n    transform: translate(-2px, 2px);\n  }\n  62% {\n    transform: translate(13px, -1px) skew(-13deg);\n  }\n}\n@keyframes glitchBotom {\n  2%, 64% {\n    transform: translate(-2px, 0);\n  }\n  4%, 60% {\n    transform: translate(-2px, 0);\n  }\n  62% {\n    transform: translate(-22px, 5px) skew(21deg);\n  }\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.sass":
/*!*************************!*\
  !*** ./src/styles.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.sass");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rohanjaiswal/Documents/Sites/angular tuts/portfolio/src/styles.sass */"./src/styles.sass");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map