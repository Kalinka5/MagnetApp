(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[683],{8273:function(e,t,s){"use strict";s.r(t),s.d(t,{CountUp:function(){return n}});var i=function(){return(i=Object.assign||function(e){for(var t,s=1,i=arguments.length;s<i;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=function(){function e(e,t,s){var n=this;this.endVal=t,this.options=s,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){n.startTime||(n.startTime=e);var t=e-n.startTime;n.remaining=n.duration-t,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(t,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(t,n.startVal,n.endVal-n.startVal,n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(t/n.duration);var s=n.countDown?n.frameVal<n.endVal:n.frameVal>n.endVal;n.frameVal=s?n.endVal:n.frameVal,n.frameVal=Number(n.frameVal.toFixed(n.options.decimalPlaces)),n.printValue(n.frameVal),t<n.duration?n.rAF=requestAnimationFrame(n.count):null!==n.finalEndVal?n.update(n.finalEndVal):n.callback&&n.callback()},this.formatNumber=function(e){var t,s,i,a=(Math.abs(e).toFixed(n.options.decimalPlaces)+"").split(".");if(t=a[0],s=a.length>1?n.options.decimal+a[1]:"",n.options.useGrouping){i="";for(var r=0,l=t.length;r<l;++r)0!==r&&r%3==0&&(i=n.options.separator+i),i=t[l-r-1]+i;t=i}return n.options.numerals&&n.options.numerals.length&&(t=t.replace(/[0-9]/g,function(e){return n.options.numerals[+e]}),s=s.replace(/[0-9]/g,function(e){return n.options.numerals[+e]})),(e<0?"-":"")+n.options.prefix+t+s+n.options.suffix},this.easeOutExpo=function(e,t,s,i){return s*(1-Math.pow(2,-10*e/i))*1024/1023+t},this.options=i(i({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return n.handleScroll(n)}),window.onscroll=function(){window.onScrollFns.forEach(function(e){return e()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,s=e.el.getBoundingClientRect(),i=s.top+s.height+window.pageYOffset;i<t&&i>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):window.scrollY>i&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var t=this.countDown?1:-1;this.endVal=e+t*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},4938:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Candidates",function(){return s(8681)}])},8681:function(e,t,s){"use strict";s.r(t);var i=s(5893),n=s(7294),a=s(3898),r=s(4486),l=s(5675),o=s.n(l),c=s(1664),d=s.n(c),u=s(1121),h=s(9879),m=s(7857);let x=()=>((0,n.useRef)(null),(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsxs)("div",{className:" md:w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[#14213d96] ",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"/bg/candidates.gif",style:{position:"absolute",zIndex:"-1",height:"100vh",width:"100vw"}}),(0,i.jsx)("svg",{id:"wwrtopsvg",className:"fill-[#14213d]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none",children:(0,i.jsx)("path",{d:"M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"})})]}),(0,i.jsx)("div",{className:"py-28",children:(0,i.jsx)("h1",{className:"text-white text-5xl tracking-widest text-center font-extrabold",children:"Candidates"})}),(0,i.jsx)("div",{children:(0,i.jsx)("svg",{id:"candidatesvgbottom",className:"fill-[#14213d]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none",children:(0,i.jsx)("path",{d:"M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"})})})]}),(0,i.jsxs)("div",{className:"w-full bg-white",children:[(0,i.jsx)("div",{className:"fill-[#14213d] ",children:(0,i.jsx)("svg",{className:"absolute",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none",children:(0,i.jsx)("path",{className:"elementor-shape-fill",d:"M500,98.9L0,6.1V0h1000v6.1L500,98.9z"})})}),(0,i.jsxs)("div",{className:"grid md:grid-cols-2 ",children:[(0,i.jsxs)("div",{className:" md:w-[600px] mx-auto md:px-24 pb-16 py-6 pt-32",children:[(0,i.jsx)("h1",{className:"text-[#fca311] text-xl md:ml-3 md:text-left text-center ",children:"YOUR FUTURE STARTS HERE"}),(0,i.jsx)("p",{className:"text-sm leading-5 tracking-wider md:text-left text-center p-4",children:"Magnet Recruit is dedicated to empowering candidates to unleash their full potential through tailored opportunities. Your growth fuels our daily mission, and our Consultants are committed to showcasing the unique value you bring to our clients."})]}),(0,i.jsx)("div",{className:"bg-[url('/image/building.png')] "})]})]}),(0,i.jsx)("div",{className:"w-full bg-[#14213D] md:px-0 px-8 ",children:(0,i.jsxs)("div",{className:"grid md:grid-cols-2 md:w-[980px] m-auto",children:[(0,i.jsx)("div",{className:" py-20 flex mx-auto",children:(0,i.jsx)(o(),{alt:"image",src:"/image/chairs.JPG",width:400,height:200,className:" max-w-full md:h-[55vh] h-[40vh] object-contain rounded-2xl"})}),(0,i.jsxs)("div",{className:"py-8 px-2",children:[(0,i.jsx)("h1",{className:"text-[#fca311] md:text-left text-center tracking-widest text-xs py-4",children:"OUR PLACEMENT SERVICES"}),(0,i.jsxs)("h1",{className:"text-[#fca311] md:text-left text-center py-3 tracking-wider text-xl leading-loose",children:["MAXIMISE YOUR OPPORTUNITIES WITH",(0,i.jsx)("br",{})," MAGNET RECRUIT"]}),(0,i.jsx)("div",{className:"pt-2 pb-10",children:(0,i.jsx)(a.default,{})})]})]})}),(0,i.jsx)("div",{className:"bg-[#14213D] w-full ",children:(0,i.jsxs)("div",{className:"py-12 md:w-[900px] grid md:grid-cols-5 mx-auto",children:[(0,i.jsxs)("div",{className:" justify-center w-44 mx-auto",children:[(0,i.jsx)(o(),{src:"/image/bag.png",width:150,height:100,alt:"image",className:"mx-auto"}),(0,i.jsx)("div",{children:(0,i.jsx)("h1",{className:"text-[#fca311] text-center text-6xl font-bold ",id:"counter",children:(0,i.jsx)(m.ZP,{end:3.5,enableScrollSpy:!0})})}),(0,i.jsx)("h1",{className:"m-auto text-center text-white font-bold",children:"Weekly Successes"})]}),(0,i.jsxs)("div",{className:" justify-center w-44 mx-auto",children:[(0,i.jsx)(o(),{src:"/image/location.png",width:150,height:100,alt:"image",className:"mx-auto"}),(0,i.jsx)("h1",{className:"text-[#fca311] text-center text-6xl font-bold ",id:"counter",children:(0,i.jsx)(m.ZP,{end:12,enableScrollSpy:!0})}),(0,i.jsx)("h1",{className:"m-auto text-center text-white font-bold",children:"Global Clients"})]}),(0,i.jsxs)("div",{className:" justify-center w-44 mx-auto",children:[(0,i.jsx)(o(),{src:"/image/nots.png",width:150,height:100,alt:"image",className:"mx-auto"}),(0,i.jsxs)("h1",{className:"text-[#fca311] text-center text-6xl font-bold ",id:"counter",children:[(0,i.jsx)(m.ZP,{end:100,enableScrollSpy:!0})," %"]}),(0,i.jsx)("h1",{className:"m-auto text-center text-white font-bold",children:"Success (on retained)"})]}),(0,i.jsxs)("div",{className:" justify-center w-44 mx-auto",children:[(0,i.jsx)(o(),{src:"/image/search.png",width:150,height:100,alt:"image",className:"mx-auto"}),(0,i.jsx)("h1",{className:"text-[#fca311] text-center text-6xl font-bold ",id:"counter",children:(0,i.jsx)(m.ZP,{end:24,enableScrollSpy:!0})}),(0,i.jsx)("h1",{className:"m-auto text-center text-white font-bold",children:"Customer Service"})]}),(0,i.jsxs)("div",{className:" justify-center w-44 mx-auto",children:[(0,i.jsx)(o(),{src:"/image/arrow.png",width:150,height:100,alt:"image",className:"mx-auto"}),(0,i.jsxs)("h1",{className:"text-[#fca311] text-center text-6xl font-bold ",id:"counter",children:[(0,i.jsx)(m.ZP,{end:100,enableScrollSpy:!0})," %"]}),(0,i.jsx)("h1",{className:"m-auto text-center text-white font-bold",children:"Client Satisfaction"})]})]})}),(0,i.jsxs)("div",{className:"grid",children:[(0,i.jsx)("div",{className:"fill-[#14213d] ",children:(0,i.jsx)("svg",{id:"servicesbottomsvg",className:"absolute",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none",children:(0,i.jsx)("path",{className:"elementor-shape-fill",d:"M500,98.9L0,6.1V0h1000v6.1L500,98.9z"})})}),(0,i.jsx)("div",{className:"pt-14 w-full bg-white "})]}),(0,i.jsx)("div",{className:"w-full bg-white md:h-44 md:px-10",children:(0,i.jsx)(h.default,{})}),(0,i.jsxs)("div",{className:"bg-[#14213D] pt-4",children:[(0,i.jsx)("h1",{className:" text-center text-xl text-slate-300 font-bold",children:"SEND IN YOUR CV"}),(0,i.jsx)("div",{className:"items-center flex justify-center ",children:(0,i.jsxs)(d(),{href:"/SendCv",type:"submit",className:" flex my-10 px-4 p-2 rounded-sm hover:bg-[#fca311] hover:text-white bg-slate-200 ",children:[(0,i.jsx)(u.AM0,{className:"mx-2 my-auto"})," Send CV"]})})]}),(0,i.jsx)(r.default,{})]}));t.default=x},3898:function(e,t,s){"use strict";s.r(t);var i=s(5893),n=s(7294),a=s(9699);let r=()=>{let e=[{id:1,title:"1. Industry Expertise:",content:" Leveraging our in-depth knowledge of the industry, clients, and candidates, we prioritise placements in roles that align with individuals’ capabilities and career goals. Our consultants are dedicated to keeping candidates at the forefront, ensuring a tailored approach to exploring opportunities."},{id:2,title:"2. CV Assistance",content:"Recognising the importance of first impressions, we collaborate with you to highlight your potential and showcase the value you bring to prospective employers. Your CV is crafted to make a lasting positive impact."},{id:3,title:"3. Interview Readiness",content:"We ensure you step into interviews fully prepared and confident, allowing our clients to perceive the best version of yourself. Detailed briefings on the position, the organisation, expectations, and culture are provided to enhance your readiness."},{id:4,title:"4. Ongoing Support",content:"A successful placement marks the beginning of a lasting relationship. Beyond securing a job, we are committed to accompanying you on your journey to professional success. Regular follow-ups ensure we stay connected, checking on your progress and overall experience within your new organisation. For contractors, we maintain consistent contact throughout your contract, keeping you informed about new prospects and opportunities."}],{title:t,content:s}=e,[r,l]=(0,n.useState)(!1);return(0,i.jsx)("div",{className:"accordion-item",children:(0,i.jsx)("div",{className:"accordion",children:e.map((e,t)=>{let{title:s,content:n}=e;return(0,i.jsx)(a.default,{title:s,content:n},t+"accordian")})})})};t.default=r},9699:function(e,t,s){"use strict";s.r(t);var i=s(5893),n=s(7294),a=s(80);let r=e=>{let{title:t,content:s}=e,[r,l]=(0,n.useState)(!1);return(0,i.jsx)("div",{className:" bg-[#14213D] placeholder-gray-1000",children:(0,i.jsx)("div",{className:"accordion",children:(0,i.jsxs)("div",{className:"accordion-item border-b py-2 ",children:[(0,i.jsxs)("div",{className:"accordion-title flex justify-between",onClick:()=>l(!r),children:[(0,i.jsx)("div",{className:"text-white text-sm tracking-wider",children:t}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("div",{className:"order-last ease-in-out duration-150 text-white text-sm",children:!r&&(0,i.jsx)(a.p4F,{})}),(0,i.jsx)("div",{className:"order-last text-white text-sm",children:r&&(0,i.jsx)(a.Qa7,{})})]})]}),r&&(0,i.jsx)("div",{className:"accordion-content py-6 text-sm ease-in duration-150 tracking-wider text-white text-justify",children:s})]})})})};t.default=r},4486:function(e,t,s){"use strict";s.r(t);var i=s(5893);s(7294);var n=s(9042),a=s(8633),r=s(5675),l=s.n(r),o=s(1664),c=s.n(o),d=s(5647);let u=()=>(0,i.jsxs)("div",{className:"w-full bg-[#14213d] font-sans",children:[(0,i.jsx)("div",{className:"pt-10 md:w-[1240px] px-4 md:px-auto mx-auto",children:(0,i.jsx)(l(),{src:"/image/logo.png",width:400,height:80,quality:100,alt:"image"})}),(0,i.jsxs)("div",{className:"md:w-[1240px] md:grid md:grid-cols-3 mx-5 md:mx-auto",children:[(0,i.jsx)("div",{className:" md:grid ",children:(0,i.jsxs)("div",{className:"mt-5 mx-auto w-full",children:[(0,i.jsx)("h1",{className:"font-sans text-white text-center md:text-left text-2xl md:text-xl font-bold",children:"Get in Touch"}),(0,i.jsxs)("div",{className:"flex m-auto text-white px-2 md:px-0 py-2 items-center",children:[(0,i.jsx)(n.XAC,{size:30,className:"cursor-pointer",onClick:()=>{window.open("https://maps.app.goo.gl/LS3qzpn9gPPVKdcs5?g_st=iw","_blank")}}),(0,i.jsx)("p",{className:"text-white text-xs tracking-widest py-2 ml-4 cursor-pointer",onClick:()=>{window.open("https://maps.app.goo.gl/LS3qzpn9gPPVKdcs5?g_st=iw","_blank")},children:"69-71 Lever Street, Manchester M1 1FL"})]}),(0,i.jsxs)("div",{className:"flex m-auto text-white px-2 md:px-0 py-2 items-center",children:[(0,i.jsx)(n.JbR,{size:30}),(0,i.jsx)("a",{className:"text-white text-sm tracking-widest py-2 ml-4",href:"tel:0161 832 4265",children:"0161 718 6019"})]}),(0,i.jsxs)("div",{className:"flex m-auto text-white px-2 md:px-0 py-2 items-center",children:[(0,i.jsx)(n.hBs,{size:30}),(0,i.jsx)("a",{className:"text-white tracking-widest text-sm py-2 ml-4 cursor-pointer",href:"mailto:info@magnetrecruit.com",children:"info@magnetrecruit.com"})]}),(0,i.jsx)("div",{className:"flex m-auto text-white px-2 md:px-0 py-2",children:(0,i.jsx)("p",{className:"text-white text-center tracking-wide md:mx-0 mx-auto text-sm",children:"Interact with Us on Social Media"})}),(0,i.jsxs)("div",{className:"flex md:justify-start justify-center gap-6 text-white py-3",children:[(0,i.jsx)(c(),{href:"https://web.facebook.com/profile.php?id=61556291937071",children:(0,i.jsx)(a.k1O,{size:25,className:"text-white hover:fill-[#fca311]"})}),(0,i.jsx)(c(),{href:"https://twitter.com/megnetrecr6096",children:(0,i.jsx)(a.AMt,{size:25,className:"text-white hover:fill-[#fca311]"})}),(0,i.jsx)(c(),{href:"https://www.linkedin.com/company/magnet-recruit/",children:(0,i.jsx)(a.NQh,{size:25,className:"text-white hover:fill-[#fca311]"})}),(0,i.jsx)(c(),{href:"https://www.instagram.com/magnet_recruit_ltd/",children:(0,i.jsx)(a.Vs6,{size:25,className:"text-white hover:fill-[#fca311]"})}),(0,i.jsx)(c(),{href:"https://www.tiktok.com/@magnet_recruit_ltd?_t=8jALro7GIML&_r=1",children:(0,i.jsx)(a.k9h,{size:25,className:"text-white hover:fill-[#fca311]"})}),(0,i.jsx)(c(),{href:" https://www.threads.net/@magnet_recruit_ltd",children:(0,i.jsx)(a.qk9,{size:25,className:"text-white hover:fill-[#fca311]"})})]})]})}),(0,i.jsxs)("div",{className:"mt-5 px-4",children:[(0,i.jsx)("h1",{className:"font-sans text-white text-center md:text-left text-2xl md:text-xl font-bold ",children:"Quick Links"}),(0,i.jsx)("div",{className:"grid ",children:(0,i.jsxs)("ul",{className:"text-white text-center md:text-justify",children:[(0,i.jsx)(c(),{href:"/",children:(0,i.jsx)("li",{className:"py-2 text-[#fca311] md:text-sm hover:text-white",children:"Magnet Recruit"})}),(0,i.jsx)(c(),{href:"/WhoweAre",children:(0,i.jsx)("li",{className:"py-2 md:text-sm hover:text-[#fca311]",children:"Who We Are"})}),(0,i.jsx)(c(),{href:"/Client",children:(0,i.jsx)("li",{className:"py-2 md:text-sm hover:text-[#fca311]",children:"Clients"})}),(0,i.jsx)(c(),{href:"/Candidates",children:(0,i.jsx)("li",{className:"py-2 md:text-sm hover:text-[#fca311]",children:"Candidates"})}),(0,i.jsx)(c(),{href:"/SearchJob",children:(0,i.jsx)("li",{className:"py-2 md:text-sm hover:text-[#fca311]",children:"Search Job"})}),(0,i.jsx)(c(),{href:"/ContactUs",children:(0,i.jsx)("li",{className:"py-2 md:text-sm hover:text-[#fca311]",children:"Contact Us"})})]})})]}),(0,i.jsx)("div",{className:" mx-auto w-full h-[200px] overflow-hidden ",children:(0,i.jsx)(d.default,{})})]}),(0,i.jsx)("div",{className:" mt-12 flex justify-center text-white ",children:(0,i.jsxs)("ul",{className:"md:flex grid md:justify-between md:gap-14 text-center",children:[(0,i.jsx)(c(),{href:"/Component/PravicyPolicy",children:(0,i.jsx)("li",{className:"md:py-2 hover:text-[#fca311] text-sm",children:"Privacy Policy"})}),(0,i.jsx)(c(),{href:"/Component/CookiePolicy",children:(0,i.jsx)("li",{className:"md:py-2 hover:text-[#fca311] text-sm",children:"Cookie Policy"})}),(0,i.jsx)(c(),{href:"/Component/RetentionPolicy",children:(0,i.jsx)("li",{className:"md:py-2 hover:text-[#fca311] text-sm",children:"Retention Policy"})})]})}),(0,i.jsx)("div",{className:" text-center pb-4 text-xs text-white ",children:(0,i.jsx)("p",{children:"Copyright \xa9 2024 Magnet Recruit Limited. All Rights Reserved."})})]});t.default=u},9879:function(e,t,s){"use strict";s.r(t);var i=s(5893);s(7294);var n=s(5675),a=s.n(n),r=s(6066);s(7383),s(5714);let l=()=>(0,i.jsx)("div",{className:"w-full ",children:(0,i.jsx)("div",{className:"mx-auto px-16 max-h-[300px]",children:(0,i.jsxs)(r.Z,{dots:!1,infinite:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,speed:1e3,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}],className:"w-full p-2",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a(),{src:"/image/img-1.png",width:400,height:1,alt:"/"})}),(0,i.jsx)("div",{children:(0,i.jsx)(a(),{src:"/image/img-2.png",width:400,height:1,alt:"/"})}),(0,i.jsx)("div",{children:(0,i.jsx)(a(),{src:"/image/img-3.png",width:400,height:1,alt:"/"})}),(0,i.jsx)("div",{children:(0,i.jsx)(a(),{src:"/image/img-4.png",width:400,height:1,alt:"/"})}),(0,i.jsx)("div",{children:(0,i.jsx)(a(),{src:"/image/img-5.png",width:400,height:1,alt:"/"})}),(0,i.jsx)("div",{children:(0,i.jsx)(a(),{src:"/image/img-6.png",width:400,height:1,alt:"/"})}),(0,i.jsx)("div",{children:(0,i.jsx)(a(),{src:"/image/img-7.png",width:400,height:1,alt:"/"})}),(0,i.jsx)("div",{children:(0,i.jsx)(a(),{src:"/image/img-8.png",width:400,height:1,alt:"/"})}),(0,i.jsx)("div",{children:(0,i.jsx)(a(),{src:"/image/img-9.png",width:400,height:1,alt:"/"})})]})})});t.default=l},5647:function(e,t,s){"use strict";s.r(t);var i=s(5893),n=s(7294),a=s(3545);s(7619),s(4613);let r=()=>{let e=(0,a.Sx)().current;return(0,n.useEffect)(()=>{setTimeout(()=>{e.flyTo({center:[-2.2326231435647386,53.48357402423905],zoom:15,speed:1,curve:1,easing:e=>e})},2e3),console.log(window.scrollY)},[window.scrollY]),null};t.default=function(){let e=n.useRef();return(0,n.useEffect)(()=>{console.log(window.scrollY)}),(0,i.jsxs)(a.ZP,{mapboxAccessToken:"pk.eyJ1IjoiYWxpcmF6YW5hcXZpIiwiYSI6ImNsY3Z6YXlneDEyb3czd3F0OXMwcTQ5MmcifQ.MKpJk3PxcGoxELCATOffdg",initialViewState:{longitude:-2.2326231435647386,latitude:53.48357402423905,zoom:1},attribution:!1,ref:e,style:{width:"100%",height:"100%"},mapStyle:"mapbox://styles/mapbox/streets-v9",children:[(0,i.jsx)(a.Jx,{longitude:"-2.2326231435647386",latitude:"53.48357402423905",onClick:()=>window.open("https://maps.app.goo.gl/LS3qzpn9gPPVKdcs5?g_st=iw","_blank")}),(0,i.jsx)(r,{})]})}},7857:function(e,t,s){"use strict";var i=s(7294),n=s(8273);function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,i)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach(function(t){var i,n;i=e,n=s[t],t in i?Object.defineProperty(i,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var s,i,n=function(e,t){if(null==e)return{};var s,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)s=a[i],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)s=a[i],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?i.useLayoutEffect:i.useEffect;function d(e){var t=i.useRef(e);return c(function(){t.current=e}),i.useCallback(function(){for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];return t.current.apply(void 0,s)},[])}var u=function(e,t){var s=t.decimal,i=t.decimals,a=t.duration,r=t.easingFn,l=t.end,o=t.formattingFn,c=t.numerals,d=t.prefix,u=t.separator,h=t.start,m=t.suffix,x=t.useEasing,p=t.enableScrollSpy,f=t.scrollSpyDelay,g=t.scrollSpyOnce;return new n.CountUp(e,l,{startVal:h,duration:a,decimal:s,decimalPlaces:i,easingFn:r,formattingFn:o,numerals:c,separator:u,prefix:d,suffix:m,useEasing:x,useGrouping:!!u,enableScrollSpy:p,scrollSpyDelay:f,scrollSpyOnce:g})},h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},x=function(e){var t=i.useMemo(function(){return r(r({},m),e)},[e]),s=t.ref,n=t.startOnMount,a=t.enableReinitialize,l=t.delay,c=t.onEnd,x=t.onStart,p=t.onPauseResume,f=t.onReset,g=t.onUpdate,w=o(t,h),j=i.useRef(),v=i.useRef(),y=i.useRef(!1),N=d(function(){return u("string"==typeof s?s:s.current,w)}),b=d(function(e){var t=j.current;if(t&&!e)return t;var s=N();return j.current=s,s}),V=d(function(){var e=function(){return b(!0).start(function(){null==c||c({pauseResume:S,reset:E,start:R,update:O})})};l&&l>0?v.current=setTimeout(e,1e3*l):e(),null==x||x({pauseResume:S,reset:E,update:O})}),S=d(function(){b().pauseResume(),null==p||p({reset:E,start:R,update:O})}),E=d(function(){b().el&&(v.current&&clearTimeout(v.current),b().reset(),null==f||f({pauseResume:S,start:R,update:O}))}),O=d(function(e){b().update(e),null==g||g({pauseResume:S,reset:E,start:R})}),R=d(function(){E(),V()}),k=d(function(e){n&&(e&&E(),V())});return i.useEffect(function(){y.current?a&&k(!0):(y.current=!0,k())},[a,y,k,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),i.useEffect(function(){return function(){E()}},[E]),{start:R,pauseResume:S,reset:E,update:O,getCountUp:b}},p=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,s=e.redraw,n=e.containerProps,a=e.children,c=e.style,u=o(e,p),h=i.useRef(null),m=i.useRef(!1),f=x(r(r({},u),{},{ref:h,startOnMount:"function"!=typeof a||0===e.delay,enableReinitialize:!1})),g=f.start,w=f.reset,j=f.update,v=f.pauseResume,y=f.getCountUp,N=d(function(){g()}),b=d(function(t){e.preserveValue||w(),j(t)}),V=d(function(){if("function"==typeof e.children&&!(h.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}y()});return(i.useEffect(function(){V()},[V]),i.useEffect(function(){m.current&&b(e.end)},[e.end,b]),i.useEffect(function(){s&&m.current&&N()},[N,s,s&&e]),i.useEffect(function(){!s&&m.current&&N()},[N,s,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),i.useEffect(function(){m.current=!0},[]),"function"==typeof a)?a({countUpRef:h,start:g,reset:w,update:j,pauseResume:v,getCountUp:y}):i.createElement("span",l({className:t,ref:h,style:c},n),void 0!==e.start?y().formattingFn(e.start):"")}}},function(e){e.O(0,[738,644,321,838,817,300,373,774,888,179],function(){return e(e.s=4938)}),_N_E=e.O()}]);