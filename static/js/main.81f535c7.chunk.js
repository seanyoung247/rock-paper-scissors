(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],[,,,,,,,,function(e,s,t){},,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var c=t(3),i=t(4),n=t(2),a=t(6),o=t(5),r=t(1),l=t.n(r),h=t(9),u=t.n(h),p=(t(14),t(15),t.p+"static/media/logo.a4a2b39f.svg"),m=t.p+"static/media/logo-bonus.9bf8aeb8.svg",d={basic:["scissors","paper","rock"],spock:["scissors","paper","rock","lizard","spock"]};Object.freeze(d);var j={basic:"Rock Paper Scissors",spock:"Rock Paper Scissors Lizard Spock"};Object.freeze(j);var g=["basic","spock"];Object.freeze(g);var b=function(){function e(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"basic";Object(c.a)(this,e),this._mode=s,this._choices=d[this._mode],this._players=[{id:0,name:"Tie",score:0,choice:-1},{id:1,name:"You",score:0,choice:-1},{id:2,name:"The House",score:0,choice:-1}],this._winner=null}return Object(i.a)(e,[{key:"getValue",value:function(e){return this._choices[e]}},{key:"choiceCount",get:function(){return this._choices.length}},{key:"choices",get:function(){return this._choices}},{key:"mode",get:function(){return this._mode},set:function(e){var s=d[e];s&&(this._mode=e,this._choices=s)}},{key:"modes",get:function(){return g}},{key:"getGameTitle",value:function(){return j[this._mode]}},{key:"getGameTitles",value:function(){return j}},{key:"getPlayer",value:function(e){return this.isValidPlayer(e)?this._players[e]:null}},{key:"ties",get:function(){return this._players[0].score}},{key:"winner",get:function(){return this._winner}},{key:"randomChoice",value:function(){return Math.floor(Math.random()*this._choices.length)}},{key:"isValidChoice",value:function(e){return e>=0&&e<this._choices.length}},{key:"isValidPlayer",value:function(e){return e>0&&e<this._players.length}},{key:"_allPlayersHavePicked",value:function(){for(var e=1;e<this._players.length;e++)if(!this.isValidChoice(this._players[e].choice))return!1;return!0}},{key:"_checkWinner",value:function(e,s){var t=function(e,s){return(e+s)%s},c=e-s;return c&&t(t(c,this._choices.length),2)+1}},{key:"setPlayerChoice",value:function(e,s){this.isValidChoice(s)&&this.isValidPlayer(e)&&(this._players[e].choice=s)}},{key:"scoreGame",value:function(){if(this._allPlayersHavePicked()){var e=this._checkWinner(this._players[1].choice,this._players[2].choice);this._players[e].score++,this._winner=this._players[e]}}},{key:"newRound",value:function(){for(var e=0;e<this._players.length;e++)this._players[e].choice=-1;this._winner=null}},{key:"resetGame",value:function(){for(var e=0;e<this._players.length;e++)this._players[e].choice=-1,this._players[e].score=0;this._winner=null,sessionStorage.clear()}},{key:"saveGame",value:function(){sessionStorage.setItem("game_saved","true"),sessionStorage.setItem("game_mode",this._mode);for(var e=0;e<this._players.length;e++)sessionStorage.setItem("player".concat(e),this._players[e].score)}},{key:"loadGame",value:function(){this.mode=sessionStorage.getItem("game_mode")||"basic",this._choices=d[this._mode];for(var e=0;e<this._players.length;e++)this._players[e].score=parseInt(sessionStorage.getItem("player".concat(e))||0)}}]),e}(),O=b,v=(t(16),t.p+"static/media/icon-close.bde602ec.svg"),f=(t(17),t(0));var y=function(e){return Object(f.jsxs)("button",{className:"menu-icon ".concat(e.show&&"open"),onClick:e.toggle,children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]})},x=function(e){Object(a.a)(t,e);var s=Object(o.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=s.call(this,e)).state={show:i.props.show},i.toggleShow=i.toggleShow.bind(Object(n.a)(i)),i}return Object(i.a)(t,[{key:"toggleShow",value:function(){this.setState((function(e,s){return{show:!e.show}}))}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(r.Fragment,{children:[Object(f.jsx)(y,{show:this.state.show,toggle:this.toggleShow}),Object(f.jsx)("div",{className:this.state.show?"menu-dialog show":"menu-dialog",children:Object(f.jsxs)("div",{className:"menu-wrapper",children:[Object(f.jsx)("h2",{children:"Current Game"}),Object(f.jsxs)("div",{children:[this.props.player.one," -vs- ",this.props.player.two]}),Object(f.jsxs)("ul",{className:"score-list",children:[Object(f.jsxs)("li",{children:["Wins: ",this.props.score.player]}),Object(f.jsxs)("li",{children:["Loses: ",this.props.score.opponent]}),Object(f.jsxs)("li",{children:["Ties: ",this.props.score.ties]})]}),Object(f.jsx)("button",{className:"menu-button",onClick:function(){return e.props.settings.callback("reset",!0)},children:"Restart Game"}),Object(f.jsx)("h2",{children:"Settings"}),Object(f.jsx)("label",{htmlFor:"gameModes",children:"Game : "}),Object(f.jsx)("select",{className:"game-mode",name:"gameModes",value:this.props.settings.mode,onChange:function(s){return e.props.settings.callback("mode",s.target.value)},children:this.props.settings.modes.map((function(s,t){return Object(f.jsx)("option",{value:s,children:e.props.settings.names[s]},t)}))}),Object(f.jsx)("button",{className:"menu-close",onClick:this.toggleShow,children:Object(f.jsx)("img",{src:v,alt:"Close"})})]})})]})}}]),t}(r.Component);x.defaultProps={show:!1};var k=x;t(19);function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{position:"top"};return Object(f.jsx)("div",{className:"tooltip-wrapper ".concat(e.position),children:Object(f.jsx)("div",{className:"tooltip-body",children:e.children})})}t(20);var _=function(e){return Object(f.jsxs)("div",{className:"score-panel tooltipped",children:[Object(f.jsx)("p",{className:"score-title",children:" Score "}),Object(f.jsxs)("p",{className:"score-display",children:[" ",e.score.player||0," "]}),Object(f.jsxs)(w,{position:"bottom",children:[Object(f.jsxs)("span",{children:["Wins: ",e.score.player,", "]}),Object(f.jsxs)("span",{children:["Loses: ",e.score.opponent,", "]}),Object(f.jsxs)("span",{children:["Ties: ",e.score.ties," "]})]})]})};t(8),t(21);var S=function(e){return Object(f.jsxs)("div",{className:"chooser ".concat(e.className),children:[Object(f.jsx)("div",{className:"circle"}),Object(f.jsx)("ul",{style:{"--n":e.choices.length},children:e.choices.map((function(s,t){return Object(f.jsx)("li",{style:{"--i":t},children:Object(f.jsx)("button",{className:"".concat(e.itemClass," ").concat(s),onClick:function(){return e.choose(e.player,t)},children:s})},t)}))})]})},N=(t(22),["Tied","Win","Lose"]);var C=function(e){var s=e.game,t=s.winner,c=t?t.id:0,i=s.getPlayer(1),n=s.getPlayer(2),a=i.choice>=0?s.getValue(i.choice):"empty",o=n.choice>=0?s.getValue(n.choice):"empty";return Object(f.jsxs)("div",{className:"display",children:[Object(f.jsx)("div",{className:"player one",children:Object(f.jsxs)("div",{className:"player-container",children:[Object(f.jsx)("div",{className:"badge-container ".concat(1===c&&"won"),children:Object(f.jsx)("div",{className:"badge ".concat(a),children:a})}),Object(f.jsxs)("p",{className:"name",children:[i.name," picked"]})]})}),Object(f.jsx)("div",{className:"player two",children:Object(f.jsxs)("div",{className:"player-container",children:[Object(f.jsx)("div",{className:"badge-container ".concat(2===c&&"won"),children:Object(f.jsx)("div",{className:"badge ".concat(o),children:o})}),Object(f.jsxs)("p",{className:"name",children:[n.name," picked"]})]})}),t&&Object(f.jsxs)("div",{className:"winner-box",children:[Object(f.jsxs)("h2",{children:["You ",N[t.id]]}),Object(f.jsx)("button",{onClick:e.reset,children:"Play Again"})]})]})},P=function(e){Object(a.a)(t,e);var s=Object(o.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=s.call(this,e)).setChoice=i.setChoice.bind(Object(n.a)(i)),i.steps=[{setup:function(){return i.props.game.newRound()},render:function(){return Object(f.jsx)(S,{choices:i.props.game.choices,player:1,choose:i.setChoice,className:i.props.game.mode,itemClass:"badge"})}},{setup:function(){return setTimeout((function(){return i.setStep(2)}),1e3)},render:function(){return Object(f.jsx)(C,{game:i.props.game})}},{setup:function(){var e=i.props.game.randomChoice();i.props.game.setPlayerChoice(2,e),setTimeout((function(){return i.setStep(3)}),1e3)},render:function(){return Object(f.jsx)(C,{game:i.props.game})}},{setup:function(){i.props.game.scoreGame(),i.props.setScore(i.props.game.getPlayer(1).score,i.props.game.getPlayer(2).score,i.props.game.ties)},render:function(){return Object(f.jsx)(C,{game:i.props.game,reset:function(){return i.setStep(0)}})}}],i}return Object(i.a)(t,[{key:"setStep",value:function(e){this.steps[e].setup(),this.props.settings("step",e)}},{key:"setChoice",value:function(e,s){this.props.game.setPlayerChoice(e,s),this.setStep(this.props.step+1)}},{key:"render",value:function(){return this.steps[this.props.step].render()}}]),t}(r.Component);t(23);var G=function(e){return Object(f.jsx)(r.Fragment,{children:e.show&&Object(f.jsx)("div",{className:"modal-wrapper",onClick:e.toggle,children:Object(f.jsx)("div",{className:"modal-dialog",onClick:function(e){return e.stopPropagation()},children:e.children})})})},T=(t(24),{basic:t.p+"static/media/image-rules.258b753f.svg",spock:t.p+"static/media/image-rules-bonus.513320fb.svg"}),V=function(e){Object(a.a)(t,e);var s=Object(o.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=s.call(this,e)).state={show:i.props.show},i.toggleShow=i.toggleShow.bind(Object(n.a)(i)),i}return Object(i.a)(t,[{key:"toggleShow",value:function(){this.setState((function(e,s){return{show:!e.show}}))}},{key:"render",value:function(){return Object(f.jsxs)(r.Fragment,{children:[Object(f.jsx)("button",{className:"modal-trigger",onClick:this.toggleShow,children:"Rules"}),Object(f.jsxs)(G,{show:this.state.show,toggle:this.toggleShow,children:[Object(f.jsx)("h2",{className:"rules-title",children:"Rules"}),Object(f.jsx)("img",{className:"rules-image",src:T[this.props.rules],alt:"Paper beats Rock beats Scissors beats Paper"}),Object(f.jsx)("button",{className:"rules-close",onClick:this.toggleShow,children:Object(f.jsx)("img",{src:v,alt:"Close"})})]})]})}}]),t}(r.Component);V.defaultProps={show:!1,rules:"basic"};var R=V,I={basic:p,spock:m},z=function(e){Object(a.a)(t,e);var s=Object(o.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=s.call(this,e)).game=new O,i.game.loadGame(),i.state={mode:i.game.mode,step:0,score:i.game.getPlayer(1).score,opponent:i.game.getPlayer(2).score,ties:i.game.ties},i.settings=i.settings.bind(Object(n.a)(i)),i.setScore=i.setScore.bind(Object(n.a)(i)),i}return Object(i.a)(t,[{key:"settings",value:function(e,s){switch(e){case"step":this.setState({step:s});break;case"mode":this.game.modes.includes(s)&&(this.game.mode=s,this.game.resetGame(),this.setState({step:0,score:0,opponent:0,ties:0,mode:this.game.mode}));break;case"reset":this.game.resetGame(),this.setState({step:0,score:0,opponent:0,ties:0})}this.game.saveGame()}},{key:"setScore",value:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.game.saveGame(),this.setState({score:e,opponent:s,ties:t})}},{key:"render",value:function(){var e={player:this.state.score,opponent:this.state.opponent,ties:this.state.ties};return document.title=this.game.getGameTitle(),Object(f.jsxs)(l.a.StrictMode,{children:[Object(f.jsxs)("header",{children:[Object(f.jsx)("div",{className:"col title",children:Object(f.jsx)("img",{className:"title-img",src:I[this.state.mode],alt:this.game.getGameTitle()})}),Object(f.jsx)("div",{className:"col menu",children:Object(f.jsx)(k,{score:e,player:{one:this.game.getPlayer(1).name,two:this.game.getPlayer(2).name},settings:{mode:this.game.mode,modes:this.game.modes,names:this.game.getGameTitles(),callback:this.settings}})}),Object(f.jsx)("div",{className:"col score",children:Object(f.jsx)(_,{score:e})})]}),Object(f.jsx)("section",{className:"gamePanel",children:Object(f.jsx)(P,{game:this.game,step:this.state.step,settings:this.settings,setScore:this.setScore})}),Object(f.jsx)("footer",{children:Object(f.jsx)(R,{show:!1,rules:this.state.mode})})]})}}]),t}(l.a.Component);u.a.render(Object(f.jsx)(z,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.81f535c7.chunk.js.map