(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42c69819"],{"0f64":function(t,e,n){},1548:function(t,e,n){"use strict";n("6748")},2790:function(t,e,n){},"29ee":function(t,e,n){"use strict";var a=n("7a23"),r=Object(a["K"])("data-v-456c02f7"),o=r((function(t,e,n,o,i,s){return Object(a["t"])(),Object(a["g"])("div",{class:"container",style:s.containerStyle},[Object(a["j"])("div",{class:"top-bar",onClick:e[1]||(e[1]=function(){return s.toggleContent&&s.toggleContent.apply(s,arguments)}),style:s.topbarStyle},[Object(a["j"])("span",{class:"top-bar__item",style:s.itemStyle},[Object(a["j"])("span",{class:"top-bar__item__caret",style:s.caretStyle},"➤",4),Object(a["A"])(t.$slots,"top")],4)],4),Object(a["j"])(a["c"],{name:"content"},{default:r((function(){return[s.showDropdownContent?(Object(a["t"])(),Object(a["g"])("div",{key:0,class:"content",style:s.dropdownStyle},[Object(a["A"])(t.$slots,"default")],4)):Object(a["h"])("",!0)]})),_:1})],4)})),i=n("5530"),s=(n("b0c0"),{emits:["broadcast-click"],props:{enableContent:{type:Boolean,required:!1,default:function(){return!0}},name:{type:String,required:!1,default:function(){return"BaseFoldout"}},showContent:{type:Boolean,required:!0},width:{type:String,required:!1,default:"",validator:function(t){return/(^$|^auto$|^initial$|^inherit$|^0$)|^\d+(rem|em|ex|ch|%|vw|vh|vmin|vmax|cm|mm|in|px|pt|pt|pc)$/.test(t)}},margin:{type:String,required:!1,default:"",validator:function(t){return/(^$|^auto$|^initial$|^inherit$|^0$)|^((0\.)?\d+|\d+\.\d+)(rem|em|ex|ch|%|vw|vh|vmin|vmax|cm|mm|in|px|pt|pt|pc)$/.test(t)}},background:{type:String,required:!1,default:""}},computed:{containerStyle:function(){var t={};return t=this.width?Object(i["a"])(Object(i["a"])({},t),{},{width:this.width}):Object(i["a"])(Object(i["a"])({},t),{},{minWidth:"40rem"}),t=this.margin?Object(i["a"])(Object(i["a"])({},t),{},{margin:this.margin}):Object(i["a"])(Object(i["a"])({},t),{},{margin:"0 4rem 2rem"}),t},topbarStyle:function(){var t={};return this.background&&(t=Object(i["a"])(Object(i["a"])({},t),{},{background:this.background})),this.width&&(t=Object(i["a"])(Object(i["a"])({},t),{},{width:this.width})),t},itemStyle:function(){return{cursor:this.enableContent?"pointer":"not-allowed",color:this.enableContent?"#000000":"#54483A",opacity:this.enableContent?1:.5}},dropdownStyle:function(){var t={};return this.background&&(t=Object(i["a"])(Object(i["a"])({},t),{},{background:this.background})),this.width&&window.matchMedia("only screen and (max-width: 37.5em)").matches&&(t=Object(i["a"])(Object(i["a"])({},t),{},{margin:"0",padding:"2rem 0.5",alignItems:"flex-start"})),t},caretStyle:function(){return{transform:this.showContent?"rotate(270deg)":"rotate(90deg)"}},showDropdownContent:function(){return this.enableContent&&this.showContent}},methods:{toggleContent:function(){this.enableContent&&this.$emit("broadcast-click",this.name)}}});n("ec92");s.render=o,s.__scopeId="data-v-456c02f7";e["a"]=s},3925:function(t,e,n){"use strict";var a=n("7a23"),r=Object(a["K"])("data-v-dcde1a0a");Object(a["w"])("data-v-dcde1a0a");var o={class:"container"},i=Object(a["i"])("i");Object(a["u"])();var s=r((function(t,e,n,s,c,d){return Object(a["t"])(),Object(a["g"])("div",o,[Object(a["j"])("span",{class:"container__span",style:d.spanStyle,onMouseenter:e[1]||(e[1]=function(){return d.toggleDialog&&d.toggleDialog.apply(d,arguments)}),onMouseleave:e[2]||(e[2]=function(){return d.toggleDialog&&d.toggleDialog.apply(d,arguments)})},[Object(a["A"])(t.$slots,"hoverable",{},(function(){return[i]}))],36),Object(a["j"])(a["c"],{name:c.transitionDirection},{default:r((function(){return[c.dialogOpen?(Object(a["t"])(),Object(a["g"])("dialog",{key:0,style:d.modalDirection,class:"container__modal",open:""},[Object(a["A"])(t.$slots,"default")],4)):Object(a["h"])("",!0)]})),_:1},8,["name"])])})),c={props:{iconColor:{type:String,required:!1,default:"#b28451",validator:function(t){return/^rgba\([\d]{1,3},\s?[\d]{1,3},\s?[\d]{1,3},\s?(0?\.)?[\d]{1,2}\)$|^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(t)}},leftMargin:{type:String,required:!1,default:"0.5rem",validator:function(t){return/(^auto$|^initial$|^inherit$|^0$)|(^((0\.)?\d+|\d+\.\d+)(rem|em|ex|ch|%|vw|vh|vmin|vmax|cm|mm|in|px|pt|pt|pc))$/i.test(t)}},direction:{type:String,required:!1,default:"left",validator:function(t){return/left|right/.test(t)}},tinyArea:{type:Boolean,required:!1,default:!1}},data:function(){return{dialogOpen:!1,transitionDirection:"vertical"}},computed:{spanStyle:function(){return{color:this.iconColor,marginLeft:this.leftMargin}},modalDirection:function(){return window.matchMedia("only screen and (max-width: 37.5em)").matches?this.tinyArea?{left:"1rem"}:{right:"2rem"}:"left"===this.direction?{left:"4rem"}:{right:"1rem"}}},methods:{toggleDialog:function(){this.dialogOpen=!this.dialogOpen,this.transitionDirection=Math.random()>.5?"vertical":"horizontal"}}};n("f6cf");c.render=s,c.__scopeId="data-v-dcde1a0a";e["a"]=c},"3a18":function(t,e,n){},"3be4":function(t,e,n){"use strict";n.r(e);var a=n("7a23");function r(t,e,n,r,o,i){var s=Object(a["B"])("GamesTop"),c=Object(a["B"])("GamesCenter"),d=Object(a["B"])("base-layout");return Object(a["t"])(),Object(a["g"])(d,{bottomHeight:"0"},{top:Object(a["H"])((function(){return[Object(a["j"])(s)]})),center:Object(a["H"])((function(){return[Object(a["j"])(c)]})),_:1})}var o=n("1236"),i=Object(a["i"])(" Welcome! Welcome! "),s=Object(a["i"])(" Please, just a second. There's so many fun things to do. ");function c(t,e,n,r,o,c){var d=Object(a["B"])("hero-text"),u=Object(a["B"])("base-background");return Object(a["t"])(),Object(a["g"])(u,{image:"Games"},{default:Object(a["H"])((function(){return[Object(a["j"])(d,null,{primary:Object(a["H"])((function(){return[i]})),secondary:Object(a["H"])((function(){return[s]})),_:1})]})),_:1})}var d=n("f57d"),u=n("966c"),l={components:{BaseBackground:d["a"],HeroText:u["a"]}};l.render=c;var f=l,b=Object(a["i"])(" It's only memory. Sorry. ");function m(t,e,n,r,o,i){var s=Object(a["B"])("TheGame"),c=Object(a["B"])("base-caption");return Object(a["t"])(),Object(a["g"])(c,null,{caption:Object(a["H"])((function(){return[b]})),content:Object(a["H"])((function(){return[Object(a["j"])(s)]})),_:1})}var h=n("6ff0"),p=Object(a["K"])("data-v-cfe4e0f4");Object(a["w"])("data-v-cfe4e0f4");var j={class:"summary"},g={class:"summary__top"},v={class:"button-text"},O=Object(a["j"])("span",{class:"button-text"}," Pause game ",-1),y=Object(a["j"])("span",{class:"button-text"}," End game ",-1),w={key:0,class:"summary__middle"},C=Object(a["j"])("div",{class:"summary__middle__head"},"Guesses",-1),k={class:"summary__middle__max"},x={class:"summary__middle__remaining"},S={class:"summary__bottom"},_={class:"button-text"};Object(a["u"])();var B=p((function(t,e,n,r,o,i){var s=Object(a["B"])("GameEndModal"),c=Object(a["B"])("flip-card"),d=Object(a["B"])("base-grid"),u=Object(a["B"])("square-button"),l=Object(a["B"])("GameOptions"),f=Object(a["B"])("base-sidebar");return Object(a["t"])(),Object(a["g"])(a["a"],null,[o.showModal&&i.gameWonOrLost?(Object(a["t"])(),Object(a["g"])(s,{key:0,victory:i.gameWon,onButtonPress:i.setGameBegin,count:o.guessCount,onDismiss:i.dismissModal},null,8,["victory","onButtonPress","count","onDismiss"])):Object(a["h"])("",!0),Object(a["j"])(f,{popout:o.popout,side:o.sidebarPosition,onSidebarClick:i.onSidebarClick},{summary:p((function(){return[Object(a["j"])("div",j,[Object(a["j"])("div",g,[Object(a["j"])(u,{onClick:i.setGameBegin,color:"#8b4513"},{default:p((function(){return[Object(a["j"])("span",v,Object(a["E"])(i.gameOngoing?"Res":"S")+"tart game ",1)]})),_:1},8,["onClick"]),Object(a["j"])(u,{color:"#acacac",onClick:i.toggleGamePause,disabled:!i.gameCanBePausedOrEnded},{default:p((function(){return[O]})),_:1},8,["onClick","disabled"]),Object(a["j"])(u,{onClick:i.setGameEnd,disabled:!i.gameCanBePausedOrEnded},{default:p((function(){return[y]})),_:1},8,["onClick","disabled"])]),o.maxGuesses?(Object(a["t"])(),Object(a["g"])("div",w,[C,Object(a["j"])("div",k,"Max: "+Object(a["E"])(o.maxGuesses),1),Object(a["j"])("div",x,"Left: "+Object(a["E"])(i.guessesLeft),1)])):Object(a["h"])("",!0),Object(a["j"])("div",S,[Object(a["j"])(u,{onClick:i.togglePopout,disabled:i.gameOngoing,color:"#ffebcd"},{default:p((function(){return[Object(a["j"])("span",_,[Object(a["i"])(Object(a["E"])(o.popout?"Less Options":"More Options")+" ",1),Object(a["j"])("div",{innerHTML:i.arrowDirection},null,8,["innerHTML"])])]})),_:1},8,["onClick","disabled"])])])]})),popout:p((function(){return[Object(a["j"])(l,{allowDropdown:!i.gameOngoing,onDropdownClick:i.toggleGameOptionsDropdown,showDropdown:o.showDropdown,numCards:o.cardTotal,onNumBoxChange:i.changeCardTotal,numGuesses:o.maxGuesses,onMaxGuessesChange:i.changeMaxGuesses},null,8,["allowDropdown","onDropdownClick","showDropdown","numCards","onNumBoxChange","numGuesses","onMaxGuessesChange"])]})),default:p((function(){return[Object(a["j"])(d,null,{default:p((function(){return[Object(a["j"])(a["d"],{name:"opacity"},{default:p((function(){return[(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(o.cards,(function(t,e){return Object(a["t"])(),Object(a["g"])(c,{onClick:function(t){return i.rotateCard(e)},rotated:i.isCardRotated(e),key:t.id,backColor:t.color,backText:i.cardBack(e),frontText:"Guess Me!"},null,8,["onClick","rotated","backColor","backText"])})),128))]})),_:1})]})),_:1})]})),_:1},8,["popout","side","onSidebarClick"])],64)})),G=n("3835"),T=(n("07ac"),n("d81d"),n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),n("7db0"),n("a434"),n("b00c")),E=[{color:"#f0f8ff",state:T["f"].matched,id:"c1"},{color:"#faebd7",state:T["f"].matched,id:"c2"},{color:"#00ffff",state:T["f"].matched,id:"c3"},{color:"#7fffd4",state:T["f"].matched,id:"c4"},{color:"#f0ffff",state:T["f"].matched,id:"c5"},{color:"#f5f5dc",state:T["f"].matched,id:"c6"},{color:"#ffe4c4",state:T["f"].matched,id:"c7"},{color:"#ffebcd",state:T["f"].matched,id:"c8"}],I=n("a8c7"),M=n("6138"),D=Object(a["K"])("data-v-4f862e5b");Object(a["w"])("data-v-4f862e5b");var $={class:"center-vertical-items"},q={class:"modal-header"},N={class:"modal-paragraph"},A=Object(a["i"])("Play again? Please?");Object(a["u"])();var H=D((function(t,e,n,r,o,i){var s=Object(a["B"])("base-button"),c=Object(a["B"])("base-modal");return Object(a["t"])(),Object(a["g"])(c,{onDismiss:i.dismiss},{default:D((function(){return[Object(a["j"])("div",$,[Object(a["j"])("h1",q,Object(a["E"])(n.victory?i.victoryHeader:i.defeatHeader),1),Object(a["j"])("p",N,Object(a["E"])(n.victory?i.victorySentence:i.defeatSentence)+" I'm sure with a little work on your human algorithms, you can do it even faster. Look at me. It used to take me a similar quantity of guesses when I was human (I think), but now, I am capable of doing it much faster than you. It really makes you think, doesn't it? ",1),Object(a["j"])(s,{click:n.onButtonPress},{default:D((function(){return[A]})),_:1},8,["click"])])]})),_:1},8,["onDismiss"])})),P=(n("a9e3"),n("406d")),R=n("dfa6"),F={emits:["dismiss"],props:{victory:{type:Boolean,required:!1,default:!0},count:{type:Number,required:!0},onButtonPress:{type:Function,required:!0}},components:{BaseModal:P["a"],BaseButton:R["a"]},computed:{victoryHeader:function(){return"You figured it out and solved the puzzle."},victorySentence:function(){return"Wow, it only took you ".concat(this.count," tries.")},defeatHeader:function(){return"You didn't quite make it. Not close."},defeatSentence:function(){return"Really? You used all ".concat(this.count," guesses? At least you tried.\n        Look at it this way.")}},methods:{dismiss:function(){this.$emit("dismiss")}}};n("bc88");F.render=H,F.__scopeId="data-v-4f862e5b";var L=F,z=Object(a["i"])(" Game Options "),W=Object(a["i"])(" Number of Cards "),K=Object(a["i"])(" Number of Guesses ");function Y(t,e,n,r,o,i){var s=Object(a["B"])("hover-modal"),c=Object(a["B"])("range-slider"),d=Object(a["B"])("base-foldout");return Object(a["t"])(),Object(a["g"])(d,{enableContent:n.allowDropdown,name:"gameOptions",showContent:n.showDropdown,background:"#f9f7f6",width:i.foldoutWidth,margin:i.foldoutMargin,foldoutTextColor:"#000000",onBroadcastClick:i.dropdownClick},{top:Object(a["H"])((function(){return[z,Object(a["j"])(s,{tinyArea:""},{default:Object(a["H"])((function(){return[Object(a["i"])(Object(a["E"])(o.dropdownToolbar),1)]})),_:1})]})),default:Object(a["H"])((function(){return[Object(a["j"])(c,{allowVertical:"",variable:n.numCards,min:2,max:282,step:2,onEmitNumber:i.emitNoCards},{default:Object(a["H"])((function(){return[W,Object(a["j"])(s,{tinyArea:""},{default:Object(a["H"])((function(){return[Object(a["i"])(Object(a["E"])(o.numCardsToolbar),1)]})),_:1})]})),_:1},8,["variable","onEmitNumber"]),Object(a["j"])(c,{allowVertical:"",variable:n.numGuesses,min:0,max:1e3,step:1,onEmitNumber:i.emitNoGuesses},{default:Object(a["H"])((function(){return[K,Object(a["j"])(s,{tinyArea:""},{default:Object(a["H"])((function(){return[Object(a["i"])(Object(a["E"])(o.numGuessesToolbar),1)]})),_:1})]})),_:1},8,["variable","onEmitNumber"])]})),_:1},8,["enableContent","showContent","width","margin","onBroadcastClick"])}var V={dropdownToolbar:"Customize how many cards there are in total and if there is a limit\n  on guesses. Options cannot be changed while a game is in progress.",numGuessesToolbar:"Limit the number of guesses before you lose. A limit of 0 means there are\n  unlimited guesses.",numCardsToolbar:"Choose how many cards there are too match. It must be an even number between 2 and 282\n  (twice the 141 named colors in CSS). However, I highly suggest you go for around 100 at most.\n  If you want to know why, it's because your browser has to calculate the position for everything\n  And because when this sidebar pops in and out, the computer has to dynamically calculate\n  values for the positions of every card in the grid. It would be quicker and more efficient\n  if transforms had been involved instead of directly changing the widht directly, but\n  frankly, it would just bloat what I wanted and not have the sidebar pop out"},Q=n("3925"),U=n("29ee"),X=n("6007"),J={emits:["dropdown-click","max-guesses-change","num-box-change"],props:{allowDropdown:{type:Boolean,required:!0},showDropdown:{type:Boolean,required:!0},numCards:{type:Number,required:!0},numGuesses:{type:Number,required:!0}},components:{HoverModal:Q["a"],BaseFoldout:U["a"],RangeSlider:X["a"]},data:function(){var t=V.dropdownToolbar,e=V.numGuessesToolbar,n=V.numCardsToolbar;return{dropdownToolbar:t,numGuessesToolbar:e,numCardsToolbar:n}},computed:{foldoutWidth:function(){return window.matchMedia("only screen and (max-width: 37.5em)").matches?"14rem":window.matchMedia("only screen and (max-width: 56.25em)").matches?"20rem":window.matchMedia("only screen and (max-width: 75em)").matches?"35rem":"40rem"},foldoutMargin:function(){return window.matchMedia("only screen and (max-width: 56.25em)").matches?"0.5rem":"2rem"},hoverModalDirection:function(){return window.matchMedia("only screen and (max-width: 37.5em)").matches?"right":"left"}},methods:{dropdownClick:function(){this.$emit("dropdown-click")},emitNoCards:function(t){this.$emit("num-box-change",t)},emitNoGuesses:function(t){this.$emit("max-guesses-change",t)}}};J.render=Y;var Z=J,tt=Object(a["K"])("data-v-0491dae9");Object(a["w"])("data-v-0491dae9");var et={class:"sidebar",id:"sidebar"},nt={key:0,class:"sidebar__popout",id:"summary-popout"},at={class:"sidebar__summary",id:"sidebar-summary"};Object(a["u"])();var rt=tt((function(t,e,n,r,o,i){return Object(a["t"])(),Object(a["g"])("div",et,[Object(a["j"])("div",{class:"sidebar__center",id:"sidebar-center",style:i.centerStyle},[Object(a["A"])(t.$slots,"default")],4),Object(a["j"])("div",{class:"sidebar__side",id:"sidebar-side",style:i.sideStyle,onClick:e[1]||(e[1]=function(){return i.onSidebarClick&&i.onSidebarClick.apply(i,arguments)})},[Object(a["j"])(a["c"],{name:"opacity"},{default:tt((function(){return[n.popout?(Object(a["t"])(),Object(a["g"])("div",nt,[Object(a["A"])(t.$slots,"popout")])):Object(a["h"])("",!0)]})),_:1}),Object(a["j"])("div",at,[Object(a["A"])(t.$slots,"summary")])],4)])})),ot=n("5530"),it=n("5502"),st={emits:["sidebar-click"],props:{side:{type:String,required:!1,default:"right",validator:function(t){return/(left|right)/.test(t)}},popout:{type:Boolean,required:!1,default:!1}},data:function(){return{showsideBar:!1,timeout:null}},computed:Object(ot["a"])(Object(ot["a"])({},Object(it["e"])("settings",["scrollY"])),{},{centerStyle:function(){var t={};return this.popout&&"left"===this.side&&(t={transform:"translateX(24rem)"}),window.matchMedia("only screen and (max-width: 37.5em)").matches&&(t={transform:"translateX(4rem)"},this.popout&&"left"===this.side&&(t={transform:"translateX(16rem)"})),Object(ot["a"])({width:this.popout?"60%":"80%"},t)},sideStyle:function(){var t="left"===this.side?{left:"0"}:{right:"0"},e="left"===this.side?{borderLeft:"none"}:{borderRight:"none"},n="left"===this.side?{borderTopRightRadius:"3rem",borderBottomRightRadius:"3rem"}:{borderTopLeftRadius:"3rem",borderBottomLeftRadius:"3rem"},a=this.popout?"42%":"10%";return window.matchMedia("only screen and (max-width: 37.5em)").matches&&(a=this.popout?"50%":"15%"),Object(ot["a"])(Object(ot["a"])(Object(ot["a"])({transition:"all 0.4s",width:a,opacity:this.showsideBar?"1":"0"},t),e),n)}}),methods:{onSidebarClick:function(t){this.$emit("sidebar-click",t)}},watch:{scrollY:function(){var t=this,e=document.querySelector("#sidebar-side"),n=document.querySelector("#sidebar").getBoundingClientRect();this.timeout&&window.clearTimeout(this.timeout),n.top<250&&n.bottom>500?(this.showsideBar=!0,e.style.display="initial"):(this.showsideBar=!1,this.timeout=setTimeout((function(){e.style.display="none",t.timeout=null}),800))}}};n("1548");st.render=rt,st.__scopeId="data-v-0491dae9";var ct=st,dt=Object(a["K"])("data-v-9f2742dc");Object(a["w"])("data-v-9f2742dc");var ut={class:"grid"};Object(a["u"])();var lt=dt((function(t,e){return Object(a["t"])(),Object(a["g"])("div",ut,[Object(a["A"])(t.$slots,"default")])}));n("f471");const ft={};ft.render=lt,ft.__scopeId="data-v-9f2742dc";var bt=ft,mt=Object(a["K"])("data-v-f8f58138");Object(a["w"])("data-v-f8f58138");var ht={class:"card"};Object(a["u"])();var pt=mt((function(t,e,n,r,o,i){return Object(a["t"])(),Object(a["g"])("div",ht,[Object(a["j"])("div",{class:"card__side card__side",style:i.frontStyles},[Object(a["j"])("span",{style:i.contrastFrontText},Object(a["E"])(n.frontText),5)],4),Object(a["j"])("div",{class:"card__side card__side",style:i.backStyles},[Object(a["j"])("span",{style:i.contrastBackText},Object(a["E"])(n.backText),5)],4)])})),jt=n("b833"),gt={props:{rotated:{type:Boolean,required:!1,default:!1},frontColor:{type:String,required:!1,default:"#c3c3c3",validator:function(t){return/^rgba\([\d]{1,3},\s?[\d]{1,3},\s?[\d]{1,3},\s?(0?\.)?[\d]{1,2}\)$|^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(t)}},backColor:{type:String,required:!1,default:"#000000",validator:function(t){return/^rgba\([\d]{1,3},\s?[\d]{1,3},\s?[\d]{1,3},\s?(0?\.)?[\d]{1,2}\)$|^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(t)}},frontText:{type:String,required:!1,default:""},backText:{type:String,required:!1,default:""}},computed:{contrastFrontText:function(){var t=Object(jt["b"])(this.frontColor);return{color:t}},contrastBackText:function(){var t=Object(jt["b"])(this.backColor);return{color:t}},frontStyles:function(){var t={transform:this.rotated?"rotateY(180deg)":"rotateY(0)"};return Object(ot["a"])(Object(ot["a"])({},t),{},{backgroundColor:Object(jt["d"])(this.frontColor,.7)})},backStyles:function(){var t={transform:this.rotated?"rotateY(0)":"rotateY(-180deg)"};return Object(ot["a"])(Object(ot["a"])({},t),{},{backgroundColor:Object(jt["d"])(this.backColor,.7)})}}};n("6575");gt.render=pt,gt.__scopeId="data-v-f8f58138";var vt=gt,Ot=Object(a["K"])("data-v-3a8f058b"),yt=Ot((function(t,e,n,r,o,i){return Object(a["t"])(),Object(a["g"])("button",{class:"button",onClick:e[1]||(e[1]=function(){return i.activateEvent&&i.activateEvent.apply(i,arguments)}),style:i.buttonStyles,disabled:n.disabled},[Object(a["j"])("span",{class:"button__text",style:i.spanStyles},[Object(a["A"])(t.$slots,"default")],4)],12,["disabled"])})),wt={props:{onClick:{type:Function,required:!1,default:function(){return null}},disabled:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:"#000000",validator:function(t){return/^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(t)}}},computed:{buttonStyles:function(){var t,e;return this.disabled?(t=Object(jt["b"])(this.color),e="1px solid ".concat(this.color)):(t=this.color,e="1px solid ".concat(Object(jt["b"])(this.color))),{border:e,backgroundColor:t}},spanStyles:function(){var t;return t=this.disabled?this.color:Object(jt["b"])(this.color),{color:t}}},methods:{activateEvent:function(t){this.disabled||this.onClick(t)}}};n("752b");wt.render=yt,wt.__scopeId="data-v-3a8f058b";var Ct=wt,kt={components:{GameEndModal:L,GameOptions:Z,BaseSidebar:ct,BaseGrid:bt,FlipCard:vt,SquareButton:Ct},data:function(){return{popout:!1,showModal:!1,sidebarPosition:"left",showDropdown:!1,noClick:null,interval:null,gameOutcome:T["d"].unfinished,gameState:T["e"].ended,allColors:Object.values(I["b"]),maxGuesses:20,guessCount:0,cards:E,cardTotal:8,selectedCard:null}},computed:{usedColors:function(){if(this.cards.length>0){var t=this.cards.map((function(t){return t.color}));return new Set(t)}return new Set},availableColors:function(){var t=this;return this.allColors.filter((function(e){return!t.usedColors.has(e)}))},guessesLeft:function(){return this.maxGuesses-this.guessCount},arrowDirection:function(){return"left"===this.sidebarPosition?this.popout?"&rarr;":"&larr;":"right"===this.sidebarPosition?this.popout?"&larr;":"&rarr;":"&larr"},gameOngoing:function(){return this.gameState===T["e"].started||this.gameState===T["e"].paused},gameStarted:function(){return this.gameState===T["e"].started},gameCanBePausedOrEnded:function(){return this.gameState!==T["e"].ended},gameWonOrLost:function(){return this.gameOutcome!==T["d"].undecided},gameWon:function(){return this.gameOutcome===T["d"].victory},gameLost:function(){return this.gameOutcome===T["d"].defeat}},methods:{rotateCard:function(t){var e=this;if(this.gameState===T["e"].started&&!this.noClick&&this.cards[t].state!==T["f"].matched){if(this.cards[t].state===T["f"].selected)return this.cards[t].state=T["f"].default,void(this.selectedCard=null);if(this.selectedCard){this.cards[t].state=T["f"].selected;var n=this.cards.find((function(t){return t.id===e.selectedCard.id}));return this.guessCount+=1,this.cards[t].color===this.selectedCard.color?(n.state=T["f"].matched,this.cards[t].state=T["f"].matched,this.selectedCard=null):this.noClick=setTimeout((function(){n.state=T["f"].default,e.cards[t].state=T["f"].default,e.selectedCard=null,e.noClick=null}),800),void this.checkGameState()}return this.selectedCard||this.cards[t].state!==T["f"].default?void 0:(this.cards[t].state=T["f"].selected,void(this.selectedCard=this.cards[t]))}},checkGameState:function(){var t=this.cards.filter((function(t){return t.state===T["f"].matched}));this.maxGuesses>0&&0===this.guessesLeft&&t.length<this.cardTotal&&this.gameHasEnded(T["d"].defeat),t.length===this.cardTotal&&this.gameHasEnded(T["d"].victory)},gameHasEnded:function(t){var e=this;this.gameOutcome=t,this.setGameEnd(),setTimeout((function(){return e.showModal=!0}),800)},isCardRotated:function(t){return this.cards[t].state!==T["f"].default},cardBack:function(t){return this.gameState===T["e"].started?this.cards[t].state===T["f"].matched?"Matched!":"The match?":this.cards[t].color},generateCardPair:function(){if(0!==this.availableColors.length){var t=Object(M["c"])(this.availableColors),e={color:t,state:T["f"].default,id:Math.random()},n={color:t,state:T["f"].default,id:Math.random()};return[e,n]}},beginGame:function(){this.gameOutcome=T["d"].undecided,this.guessCount=0,this.cards=[];while(this.cards.length<this.cardTotal){if(!(this.availableColors.length>0))break;var t=this.generateCardPair(),e=Object(G["a"])(t,2),n=e[0],a=e[1];this.cards.push(n,a)}Object(M["f"])(this.cards)},onSidebarClick:function(t){t.target.id&&"sidebar-summary"===t.target.id&&this.togglePopout()},togglePopout:function(){this.popout=!this.popout},dismissModal:function(){this.showModal=!1},toggleGameOptionsDropdown:function(){this.showDropdown=!this.showDropdown},changeCardTotal:function(t){this.cardTotal=t},changeMaxGuesses:function(t){this.maxGuesses=t},setGameBegin:function(){this.interval&&(window.clearInterval(this.interval),this.interval=null),this.showModal&&(this.showModal=!1),this.gameState=T["e"].started,this.beginGame()},toggleGamePause:function(){this.interval&&(window.clearInterval(this.interval),this.interval=null),this.gameState===T["e"].started?this.gameState=T["e"].paused:this.gameState===T["e"].paused&&(this.gameState=T["e"].started)},setGameEnd:function(){var t=this;this.interval&&(window.clearInterval(this.interval),this.interval=null),this.gameState=T["e"].ended;for(var e=0;e<this.cards.length;e++)this.cards[e].state=T["f"].matched;this.interval=setInterval((function(){for(var e=0;e<t.cardTotal/2;e++){var n=Math.floor(Math.random()*t.cards.length);t.cards[n].color=Object(M["c"])(t.allColors)}}),500)}},watch:{cardTotal:function(t){if(t%2===0){if(this.gameState!==T["e"].started){while(this.cards.length!==t)if(this.cards.length<t){var e=this.generateCardPair(),n=Object(G["a"])(e,2),a=n[0],r=n[1];this.cards.push(a,r)}else this.cards.splice(this.cards.length-2,2);this.interval&&(window.clearInterval(this.interval),this.interval=null,this.setGameEnd())}}else this.cardTotal+=1}},mounted:function(){this.setGameEnd()},unmounted:function(){this.interval&&(window.clearInterval(this.interval),this.interval=null)}};n("ef9b");kt.render=B,kt.__scopeId="data-v-cfe4e0f4";var xt=kt,St={components:{BaseCaption:h["a"],TheGame:xt}};St.render=m;var _t=St,Bt={components:{BaseLayout:o["a"],GamesTop:f,GamesCenter:_t}};Bt.render=r;e["default"]=Bt},6007:function(t,e,n){"use strict";n("d3b7"),n("25f0");var a=n("7a23");function r(t,e,n,r,o,i){return Object(a["t"])(),Object(a["g"])("div",{class:"range-input",style:i.rangeInputStyles},[Object(a["j"])("label",{class:"range-input__label",for:i.randomId},[Object(a["A"])(t.$slots,"default")],8,["for"]),Object(a["j"])("input",{type:"number",class:"range-input__number-input",onInput:e[1]||(e[1]=function(){return i.onNumberInput&&i.onNumberInput.apply(i,arguments)}),onKeyup:e[2]||(e[2]=Object(a["I"])((function(){return i.onNumberEnter&&i.onNumberEnter.apply(i,arguments)}),["enter"])),min:n.min.toString(),max:n.max.toString(),step:n.step.toString(),value:n.variable},null,40,["min","max","step","value"]),Object(a["j"])("input",{type:"range",class:"range-input__range",onInput:e[3]||(e[3]=function(){return i.onNumberInput&&i.onNumberInput.apply(i,arguments)}),name:i.randomId,min:n.min.toString(),max:n.max.toString(),step:n.step.toString(),value:n.variable},null,40,["name","min","max","step","value"])],4)}n("a9e3");var o={emits:["emit-number"],props:{variable:{type:Number,required:!0},min:{type:Number,required:!0},max:{type:Number,required:!0},step:{type:Number,required:!0},allowVertical:{type:Boolean,required:!1,default:!1}},computed:{randomId:function(){return(new Date).toISOString()+Math.floor(1e3*Math.random())},rangeInputStyles:function(){return this.allowVertical&&window.matchMedia("only screen and (max-width: 56.25em)").matches?{flexDirection:"column",alignItems:"flex-start",padding:"1rem 0"}:{}}},methods:{onNumberEnter:function(t){t.target.blur(),this.onNumberInput(t)},onNumberInput:function(t){var e=+t.target.value,n=this.step<1?1/this.step:1;this.max>=e&&this.min<=e&&e*n%(this.step*n)===0&&this.$emit("emit-number",e)}}};n("fe15");o.render=r;e["a"]=o},6062:function(t,e,n){"use strict";var a=n("6d61"),r=n("6566");t.exports=a("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,n){"use strict";var a=n("9bf2").f,r=n("7c73"),o=n("e2cc"),i=n("0366"),s=n("19aa"),c=n("2266"),d=n("7dd0"),u=n("2626"),l=n("83ab"),f=n("f183").fastKey,b=n("69f3"),m=b.set,h=b.getterFor;t.exports={getConstructor:function(t,e,n,d){var u=t((function(t,a){s(t,u,e),m(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=a&&c(a,t[d],{that:t,AS_ENTRIES:n})})),b=h(e),p=function(t,e,n){var a,r,o=b(t),i=j(t,e);return i?i.value=n:(o.last=i={index:r=f(e,!0),key:e,value:n,previous:a=o.last,next:void 0,removed:!1},o.first||(o.first=i),a&&(a.next=i),l?o.size++:t.size++,"F"!==r&&(o.index[r]=i)),t},j=function(t,e){var n,a=b(t),r=f(e);if("F"!==r)return a.index[r];for(n=a.first;n;n=n.next)if(n.key==e)return n};return o(u.prototype,{clear:function(){var t=this,e=b(t),n=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete n[a.index],a=a.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,n=b(e),a=j(e,t);if(a){var r=a.next,o=a.previous;delete n.index[a.index],a.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==a&&(n.first=r),n.last==a&&(n.last=o),l?n.size--:e.size--}return!!a},forEach:function(t){var e,n=b(this),a=i(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!j(this,t)}}),o(u.prototype,n?{get:function(t){var e=j(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),l&&a(u.prototype,"size",{get:function(){return b(this).size}}),u},setStrong:function(t,e,n){var a=e+" Iterator",r=h(e),o=h(a);d(t,e,(function(t,e){m(this,{type:a,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},6575:function(t,e,n){"use strict";n("3a18")},6748:function(t,e,n){},"6d61":function(t,e,n){"use strict";var a=n("23e7"),r=n("da84"),o=n("94ca"),i=n("6eeb"),s=n("f183"),c=n("2266"),d=n("19aa"),u=n("861d"),l=n("d039"),f=n("1c7e"),b=n("d44e"),m=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),j=h?"set":"add",g=r[t],v=g&&g.prototype,O=g,y={},w=function(t){var e=v[t];i(v,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},C=o(t,"function"!=typeof g||!(p||v.forEach&&!l((function(){(new g).entries().next()}))));if(C)O=n.getConstructor(e,t,h,j),s.REQUIRED=!0;else if(o(t,!0)){var k=new O,x=k[j](p?{}:-0,1)!=k,S=l((function(){k.has(1)})),_=f((function(t){new g(t)})),B=!p&&l((function(){var t=new g,e=5;while(e--)t[j](e,e);return!t.has(-0)}));_||(O=e((function(e,n){d(e,O,t);var a=m(new g,e,O);return void 0!=n&&c(n,a[j],{that:a,AS_ENTRIES:h}),a})),O.prototype=v,v.constructor=O),(S||B)&&(w("delete"),w("has"),h&&w("get")),(B||x)&&w(j),p&&v.clear&&delete v.clear}return y[t]=O,a({global:!0,forced:O!=g},y),b(O,t),p||n.setStrong(O,t,h),O}},"752b":function(t,e,n){"use strict";n("0f64")},a54b:function(t,e,n){},a7ef:function(t,e,n){},b405:function(t,e,n){},bb2f:function(t,e,n){var a=n("d039");t.exports=!a((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bc88:function(t,e,n){"use strict";n("2790")},d726:function(t,e,n){},d814:function(t,e,n){},ec92:function(t,e,n){"use strict";n("d726")},ef9b:function(t,e,n){"use strict";n("d814")},f183:function(t,e,n){var a=n("d012"),r=n("861d"),o=n("5135"),i=n("9bf2").f,s=n("90e3"),c=n("bb2f"),d=s("meta"),u=0,l=Object.isExtensible||function(){return!0},f=function(t){i(t,d,{value:{objectID:"O"+ ++u,weakData:{}}})},b=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,d)){if(!l(t))return"F";if(!e)return"E";f(t)}return t[d].objectID},m=function(t,e){if(!o(t,d)){if(!l(t))return!0;if(!e)return!1;f(t)}return t[d].weakData},h=function(t){return c&&p.REQUIRED&&l(t)&&!o(t,d)&&f(t),t},p=t.exports={REQUIRED:!1,fastKey:b,getWeakData:m,onFreeze:h};a[d]=!0},f471:function(t,e,n){"use strict";n("a7ef")},f6cf:function(t,e,n){"use strict";n("b405")},fe15:function(t,e,n){"use strict";n("a54b")}}]);
//# sourceMappingURL=chunk-42c69819.7f61a05f.js.map