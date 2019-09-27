(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{172:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(180),r=n(174),l=(n(21),n(34),n(196)),c=n.n(l),s=n(175);n(182);var d=r.b.span.withConfig({displayName:"revolve__DoWord",componentId:"h0cdhe-0"})(["color:red;"]),m=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).cw=0,n.state={word:n.props.word[0],words:n.props.word},n.changeWord=n.changeWord.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){setInterval(this.changeWord,2e3)},i.changeWord=function(){this.cw=(this.cw+1)%this.props.word.length,this.setState({word:this.props.word[this.cw]})},i.render=function(){return o.a.createElement(d,null,this.state.word)},a}(o.a.Component),p=r.b.div.withConfig({displayName:"title__Slate",componentId:"sc-135430u-0"})(["text-shadow:1px 1px 10px #848181;"]),u=r.b.h1.withConfig({displayName:"title__TitleText",componentId:"sc-135430u-1"})(["color:white;font-size:5em;@media (max-width:","){font-size:5em;text-align:center;}@media (max-width:","){font-size:4em;text-align:center;}"],function(e){return e.theme.large},function(e){return e.theme.xsmall}),h=r.b.h2.withConfig({displayName:"title__DoText",componentId:"sc-135430u-2"})(["color:white;font-size:2em;@media (max-width:","){font-size:2em;text-align:center;}"],function(e){return e.theme.large}),f=r.b.div.withConfig({displayName:"title__Links",componentId:"sc-135430u-3"})(["display:flex;width:460px;@media (max-width:","){margin:0 auto;}@media (max-width:","){flex-wrap:wrap;justify-content:center;width:auto;}"],function(e){return e.theme.large},function(e){return e.theme.small}),g=r.b.div.withConfig({displayName:"title__Buttons",componentId:"sc-135430u-4"})(["padding:5px 20px;@media (max-width:","){padding:5px 0;width:70%;}"],function(e){return e.theme.small}),w=r.b.button.withConfig({displayName:"title__TitleButton",componentId:"sc-135430u-5"})(['background-color:#ffffff;border:0.1em solid #ffffff;border-radius:0.12em;box-sizing:border-box;color:#000000;display:block;float:left;font-family:"Roboto",sans-serif;font-weight:800;margin:0 0.3em 0.3em 0;padding:0.35em 1.2em;text-decoration:none;text-align:center;transition:all 0.2s;:hover{background-color:rgba(255,255,255,0);color:#ffffff;}@media (max-width:',"){width:100%;}"],function(e){return e.theme.small}),b=r.b.div.withConfig({displayName:"title__Icons",componentId:"sc-135430u-6"})(["font-size:3rem;opacity:1;i{color:white;padding:0 20px;}@media (max-width:","){text-align:center;width:100%;i{font-size:2.5rem;padding:10px 15px;}}"],function(e){return e.theme.small}),x=function(e){var t=e.name,n=e.word,a=e.but;return o.a.createElement(p,null,o.a.createElement(u,null,"Hi there!",o.a.createElement("br",null)," I am ",t,"."),o.a.createElement(h,null,"I like to... ",o.a.createElement(m,{word:n,color:"red"})," "),o.a.createElement(f,null,o.a.createElement(g,null,o.a.createElement(w,{onClick:a},"Learn more")),o.a.createElement(b,null,o.a.createElement("a",{href:"https://www.linkedin.com/in/smowrey/"},o.a.createElement("i",{class:"fab fa-linkedin"})),o.a.createElement("a",{href:"https://github.com/seanmowz"},o.a.createElement("i",{class:"fab fa-github"})),o.a.createElement("a",{href:"mailto:sean.mowrey@edu.uwaterloo.ca"},o.a.createElement("i",{class:"fas fa-envelope"})))))},y=n(200),v=n.n(y),E=r.b.div.withConfig({displayName:"about__Slate",componentId:"sc-8xjndh-0"})(['display:flex;flex-wrap:wrap;font-family:"Roboto",sans-serif;justify-content:center;padding:5px;']),_=r.b.h3.withConfig({displayName:"about__TitleText",componentId:"sc-8xjndh-1"})(["color:red;font-size:2em;"]),C=r.b.div.withConfig({displayName:"about__Text",componentId:"sc-8xjndh-2"})(["color:black;font-size:1em;margin:5px;width:75%;a{color:red;font-weight:100;text-decoration:none;}a:hover{text-decoration:underline;}@media (max-width:","){width:100%;}"],function(e){return e.theme.medium}),k=r.b.img.withConfig({displayName:"about__HeroImg",componentId:"sc-8xjndh-3"})(["max-height:20%;max-width:20%;width:auto;height:auto;margin:60px 0;-webkit-filter:blur(0);filter:blur(0);-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;box-shadow:10px 10px 5px #ccc;:hover{-webkit-filter:blur(2px);filter:blur(2px);}@media (max-width:","){max-width:200px;width:auto;height:auto;}"],function(e){return e.theme.medium}),I=function(){return o.a.createElement(E,null,o.a.createElement(C,null,o.a.createElement(_,null,"About Me."),"Hi! I am a 2B Computer Engineering student at the ",o.a.createElement("a",{href:"https://uwaterloo.ca/"},"University of Waterloo"),". I love building things that other people can use. I develop/build tools, websites, games, apps, and lego in the most efficient, user friendly, and modern ways. ",o.a.createElement("br",null),o.a.createElement("br",null)," I am currently an Undergraduate Research Assistant at the"," ",o.a.createElement("a",{href:"https://ov-research.uwaterloo.ca/NLP_lab.html"},"Natural Language Processing Lab")," ","affiliated with the"," ",o.a.createElement("a",{href:"https://uwaterloo.ca/artificial-intelligence-institute/"},"Waterloo.AI")," ","insitute at the University of Waterloo. I have had 3 coops so far with my last one being at EA Vancouver on the User Research team. In my spare time you can find me playing/watching hockey or eating sushi."),o.a.createElement(k,{src:v.a}))};n(201);var N=r.b.div.withConfig({displayName:"experienceCard__Container",componentId:"sc-239dzm-0"})(['flex-basis:calc(100% / 4);flex-grow:1;font-family:"Roboto",sans-serif;padding:5px;@media (max-width:',"){flex-basis:50%;}@media (max-width:","){flex-basis:100%;}"],function(e){return e.theme.medium},function(e){return e.theme.small}),F=r.b.div.withConfig({displayName:"experienceCard__Image",componentId:"sc-239dzm-1"})(["background-position:center;background-repeat:no-repeat;background-size:cover;border:1px solid ",";border-radius:5px;height:140px;overflow:hidden;transition:all 0.6s ease;width:100%;-webkit-transition:all 0.6s ease;&:hover{box-shadow:0px 5px 18px 0px rgba(0,0,0,0.3);transform:translateY(-5px);}"],function(e){return e.theme.border}),z=r.b.div.withConfig({displayName:"experienceCard__Title",componentId:"sc-239dzm-2"})(["font-size:1.1rem;font-weight:600;padding:5px 5px;"]),j=r.b.div.withConfig({displayName:"experienceCard__TimePeriod",componentId:"sc-239dzm-3"})(["font-size:0.7rem;padding:0 5px;padding-bottom:5px;"]),W=r.b.div.withConfig({displayName:"experienceCard__Subtitle",componentId:"sc-239dzm-4"})(["color:",";font-size:0.75rem;font-weight:100;line-height:1.6em;padding:0 5px;"],function(e){return e.theme.greyColor}),S=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(N,null,o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(F,{style:{backgroundImage:"url("+this.props.logo+")",backgroundColor:this.props.colour}})),o.a.createElement(z,null,this.props.title),o.a.createElement(j,null,this.props.timeperiod),o.a.createElement(W,null,this.props.subtitle))},a}(o.a.Component),T=n(202),A=n.n(T),D=n(203),R=n.n(D),L=n(204),M=n.n(L),P=n(205),J=n.n(P);var U=r.b.div.withConfig({displayName:"experienceSection__Container",componentId:"xqe21n-0"})(["display:flex;flex-flow:row;flex-wrap:wrap;justify-content:space-around;"]),q=r.b.h2.withConfig({displayName:"experienceSection__Title",componentId:"xqe21n-1"})([""]),B=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(q,null,"Work Experience"),o.a.createElement(U,null,o.a.createElement(S,{logo:J.a,colour:"#FFFFFF",title:"Electronic Arts",link:"https://www.ea.com/",timeperiod:"May 2019 - September 2019",subtitle:"Developer on the User Research team building a Natural Language Processing Tool to analyze massive amounts of text in seconds."}),o.a.createElement(S,{logo:M.a,colour:"#FFFFFF",title:"Ciena",link:"https://www.ciena.com/",timeperiod:"September 2018 - January 2019",subtitle:"Worked on next generation products, involved in data acquisition, board design, mechanical assemblies and software development."}),o.a.createElement(S,{logo:A.a,colour:"#FFFFFF",title:"Toronto Water",link:"https://www.toronto.ca/services-payments/water-environment/",timeperiod:"January 2018 - May 2018",subtitle:"Worked in Capital Works Delivery, helping to manage multi-million dollar projects on water treatment or delivery infrastructure."}),o.a.createElement(S,{logo:R.a,colour:"#FFFFFF",title:"Scentuals",link:"https://www.scentuals.com/",timeperiod:"June 2016- Present",subtitle:"Developed E-commerce websites as well as worked on production line optimizing efficiency and commissioning automated machinery. "})))},a}(o.a.Component),H=function(e){return o.a.createElement(c.a,Object.assign({},e,{responsiveWidth:900,render:function(t){t.state;var n=t.fullpageApi;return o.a.createElement("div",{id:"fullpage-wrapper"},o.a.createElement(s.a,null,o.a.createElement("div",{className:"section section1"},o.a.createElement(x,{name:e.name,word:e.words,but:function(){return n.moveSectionDown()}})),o.a.createElement("div",{className:"section"},o.a.createElement(I,null)),o.a.createElement("div",{className:"section"},o.a.createElement(B,null))))}}))},O={xsmall:"480px",small:"736px",medium:"980px",large:"1280px",xlarge:"1800px",greyColor:"#A5A5A5",greyLight:"#CCCCCC",border:"#D8D8D8",borderdark:"#3A3A3A"};t.default=function(){return o.a.createElement("div",null,o.a.createElement(i.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Sean's Website"),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Space+Mono&display=swap",rel:"stylesheet"}),o.a.createElement("script",{src:"https://kit.fontawesome.com/a9a21b29b4.js",crossorigin:"anonymous"})),o.a.createElement(r.a,{theme:O},o.a.createElement(H,{name:"Sean Mowrey",words:["develop","create","play hockey","volunteer","eat sushi","learn","sleep","build lego","hike"]})))}},175:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(11),r=n.n(i),l=n(174),c=n(176),s=n.n(c),d=(n(179),l.b.div.withConfig({displayName:"layout__PageEdge",componentId:"ii2kc2-0"})(["width:calc(100vw);height:calc(100vh);margin:0;padding:0;border:50px solid #fff;background-image:url(",");background-size:cover;@media (max-width:","){border:none;}"],s.a,function(e){return e.theme.medium})),m=l.b.div.withConfig({displayName:"layout__Border",componentId:"ii2kc2-1"})(["position:fixed;top:0;left:0;width:100%;height:100%;margin:0;padding:0;box-sizing:border-box;"]),p=l.b.div.withConfig({displayName:"layout__Container",componentId:"ii2kc2-2"})(["margin:0 auto;max-width:960px;padding:0px 1.0875rem 1.45rem;@media (max-width:","){padding:0px 0.7rem 0.7rem;}"],function(e){return e.theme.medium}),u=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null,o.a.createElement(m,null,o.a.createElement(p,null,o.a.createElement("main",null,t)))))};u.propTypes={children:r.a.node.isRequired},t.a=u},176:function(e,t,n){e.exports=n.p+"static/bg-ed9804083b7e1e2b5c2f1210ffeed8b9.jpg"},200:function(e,t,n){e.exports=n.p+"static/headshot-13c5bc89baae9125a5be10084fef782c.jpg"},202:function(e,t,n){e.exports=n.p+"static/toronto-d6f20e80a53a91df9239fa6e7345b401.jpg"},203:function(e,t,n){e.exports=n.p+"static/scentuals-c77a03e653e4e8bd1495bc9faf9c12ae.jpg"},204:function(e,t,n){e.exports=n.p+"static/ciena-84263320a943c32ac7b21c6f0daf6e67.jpg"},205:function(e,t,n){e.exports=n.p+"static/ea-a8e790091498bc8feb73a62497413435.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-c585e9042545e1d12ea7.js.map