(this["webpackJsonpreact-would-you-rather"]=this["webpackJsonpreact-would-you-rather"]||[]).push([[0],{66:function(e,t,a){e.exports=a(83)},71:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),c=a.n(r),s=(a(71),a(24)),l=a(6),i=a(9),u=a(20),m=a(3);function d(e){return{type:"SET_USER",user:e}}var p=a(17),b=a.n(p),h=Object(s.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIEVE_USERS":return Object(m.a)(Object(m.a)({},e),t.users);case"ADD_USER_QUESTION":return Object(m.a)(Object(m.a)({},e),{},Object(i.a)({},t.userId,Object(m.a)(Object(m.a)({},e[t.userId]),{},{questions:[].concat(Object(u.a)(e[t.userId].questions),[t.qId])})));case"ADD_USER_ANSWER":return Object(m.a)(Object(m.a)({},e),{},Object(i.a)({},t.userId,Object(m.a)(Object(m.a)({},e[t.userId]),{},{answers:Object(m.a)(Object(m.a)({},e[t.userId].answers),{},Object(i.a)({},t.qId,t.selectedOption))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_QUESTIONS":return Object(m.a)(Object(m.a)({},e),t.questions);case"ADD_NEW_QUESTION":return Object(m.a)(Object(m.a)({},e),{},Object(i.a)({},t.question.id,t.question));case"ADD_QUESTION_ANSWER":return Object(m.a)(Object(m.a)({},e),{},Object(i.a)({},t.qId,Object(m.a)(Object(m.a)({},e[t.qId]),{},Object(i.a)({},t.selectedOption,Object(m.a)(Object(m.a)({},e[t.qId][t.selectedOption]),{},{votes:[].concat(Object(u.a)(e[t.qId][t.selectedOption].votes),[t.userId])})))));default:return e}},loggedIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.user;case"LOGOUT":return null;default:return e}},loadingBar:p.loadingBarReducer}),v=a(58),O=function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}},E=Object(s.a)(v.a,O),f=a(10),j=a(11),g=a(13),y=a(12),N=a(15),w=a(7),x=a(64),q={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://api.adorable.io/avatars/face/eyes3/nose2/mouth5/ff0",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://api.adorable.io/avatars/face/eyes4/nose5/mouth2/f00",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://api.adorable.io/avatars/face/eyes5/nose3/mouth3/0ff",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},T={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function I(e){return new Promise((function(t,a){var n=e.author,o=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout((function(){T=Object(m.a)(Object(m.a)({},T),{},Object(i.a)({},o.id,o)),q=Object(m.a)(Object(m.a)({},q),{},Object(i.a)({},n,Object(m.a)(Object(m.a)({},q[n]),{},{questions:q[n].questions.concat([o.id])}))),t(o)}),1e3)}))}function S(){return new Promise((function(e,t){setTimeout((function(){return e(Object(m.a)({},q))}),1e3)}))}function k(){return new Promise((function(e,t){setTimeout((function(){return e(Object(m.a)({},T))}),1e3)}))}function U(e,t,a){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise((function(e,o){setTimeout((function(){q=Object(m.a)(Object(m.a)({},q),{},Object(i.a)({},t,Object(m.a)(Object(m.a)({},q[t]),{},{answers:Object(m.a)(Object(m.a)({},q[t].answers),{},Object(i.a)({},a,n))}))),T=Object(m.a)(Object(m.a)({},T),{},Object(i.a)({},a,Object(m.a)(Object(m.a)({},T[a]),{},Object(i.a)({},n,Object(m.a)(Object(m.a)({},T[a][n]),{},{votes:T[a][n].votes.concat([t])}))))),e()}),500)}))}({authedUser:e,qid:t,answer:a})}function R(){return function(e){e(Object(p.showLoading)()),Promise.all([S(),k()]).then((function(e){var t=Object(x.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var a=t.users,n=t.questions;e(function(e){return{type:"RECEIEVE_USERS",users:e}}(a)),e(function(e){return{type:"RECEIVE_QUESTIONS",questions:e}}(n)),e(Object(p.hideLoading)())}))}}function C(e,t,a){return function(n){return n(Object(p.showLoading)()),U(e,t,a).then((function(){n(function(e,t,a){return{type:"ADD_QUESTION_ANSWER",selectedOption:a,userId:e,qId:t}}(e,t,a)),n(function(e,t,a){return{type:"ADD_USER_ANSWER",userId:e,qId:t,selectedOption:a}}(e,t,a)),n(Object(p.hideLoading)())})).catch((function(){alert("Some error occurred"),n(Object(p.hideLoading)())}))}}function A(e,t){return function(a,n){a(Object(p.showLoading)());var o,r,c,s=n().loggedIn;return(o=e,r=t,c=s,I({optionOneText:o,optionTwoText:r,author:c})).then((function(e){var t,n;a(function(e){return{type:"ADD_NEW_QUESTION",question:e}}(e)),a((t=s,n=e.id,{type:"ADD_USER_QUESTION",userId:t,qId:n}))})).then((function(){return a(Object(p.hideLoading)())}))}}var D=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={user:""},e.loginUser=function(t){t.preventDefault(),(0,e.props.dispatch)(d(e.state.user))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this,t=this.state.user,a=Object.values(this.props.users);return o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-8"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header text-center"},o.a.createElement("h3",null,"Welcome to Would You Rather App!"),o.a.createElement("span",null,"Please sign in to continue")),o.a.createElement("form",{className:"card-body",onSubmit:this.loginUser},o.a.createElement("div",{className:"form-group"},o.a.createElement("select",{className:"form-control",value:t,onChange:function(t){return e.setState({user:t.target.value})}},o.a.createElement("option",{value:"",disabled:!0},"Select a user"),a.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id}," ",e.name," ")})))),o.a.createElement("button",{className:"btn btn-primary form-control",type:"submit"}," Sign In ")))))}}]),a}(n.Component),L=Object(l.connect)((function(e){return{users:e.users}}))(D),_=a(89),z=a(65);var V=Object(l.connect)((function(e){return{users:e.users,loggedIn:e.loggedIn}}))((function(e){var t=e.users,a=e.loggedIn,n=e.dispatch,r=t[a],c=Object(w.f)();return o.a.createElement(_.a,{bg:"light",expand:"lg",sticky:"top"},o.a.createElement(_.a.Brand,null," Would You Rather "),o.a.createElement(_.a.Toggle,{"aria-controls":"navbar"}),o.a.createElement(_.a.Collapse,{id:"navbar"},o.a.createElement(z.a,{className:"mr-auto"},o.a.createElement(z.a.Link,{as:N.b,to:"/"}," Home "),o.a.createElement(z.a.Link,{as:N.b,to:"/add"}," New Question "),o.a.createElement(z.a.Link,{as:N.b,to:"/leaderboard"}," Leaderboard ")),o.a.createElement(z.a,{className:"ml-auto"},o.a.createElement(_.a.Text,{className:"mr-3"},"Hello, ",r.name,o.a.createElement("img",{className:"rounded-circle ml-2",src:r.avatarURL,alt:"Avatar",height:"30",width:"30"})),o.a.createElement(z.a.Link,{onClick:function(){n({type:"LOGOUT"}),c.push("/")}}," Logout "))))})),Q=a(85),W=a(86),B=a(45),P=a(90),H=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.questions,n=e.users,r=a[t],c=r.author,s=r.optionOne,l=n[c],i=l.name,u=l.avatarURL;return o.a.createElement("div",{className:"col-6 mx-auto my-5"},o.a.createElement(P.a,null,o.a.createElement(P.a.Header,{as:"h4"}," ",i," asks: "),o.a.createElement(P.a.Body,{className:"d-flex"},o.a.createElement("div",{className:"col-5 text-center border-right"},o.a.createElement("img",{src:u,alt:i,height:"150",width:"150",className:"rounded-circle"})),o.a.createElement("div",{className:"col-7"},o.a.createElement("h5",{className:"mb-3 text-captilize"}," Would you rather "),o.a.createElement("div",{className:"col-6 px-0 mb-5 text-truncate"}," ",s.text," "),o.a.createElement(N.b,{to:"/questions/".concat(t)},o.a.createElement("button",{className:"btn btn-outline-primary form-control"}," View Poll "))))))}}]),a}(n.Component);var J=Object(l.connect)((function(e,t){var a=e.questions,n=e.users;return{id:t.id,questions:a,users:n}}))(H),M=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.questions,a=e.users[e.loggedIn],n=function(e,a){return t[a].timestamp-t[e].timestamp},r=Object.keys(a.answers).sort(n),c=Object.keys(t).filter((function(e){return!r.includes(e)})).sort(n);return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 my-5"},o.a.createElement(Q.a,{defaultActiveKey:"unanswered",className:"nav-fill"},o.a.createElement(W.a,{eventKey:"unanswered",title:"Unanswered",className:"border"},o.a.createElement(B.a,null,c.map((function(e){return o.a.createElement(J,{key:e,id:e})})))),o.a.createElement(W.a,{eventKey:"answered",title:"Answered",className:"border"},o.a.createElement(B.a,null,r.map((function(e){return o.a.createElement(J,{key:e,id:e})})))))))}}]),a}(n.Component),F=Object(l.connect)((function(e){var t=e.users;return{questions:e.questions,users:t,loggedIn:e.loggedIn}}))(M),G=a(87);function K(e){var t=e.option,a=e.totalVotes,n=(t.votes.length/a.length*100).toFixed(2);return o.a.createElement("div",{className:"position-relative rounded-lg border py-2 px-3 mt-3"+(t.selected?" border-success":"")},t.selected&&o.a.createElement("span",{className:"badge badge-success position-absolute fixed-top col-3 ml-auto"}," Selected "),o.a.createElement("div",{className:"my-3"}," Would you rather ",t.text,"? "),o.a.createElement(G.a,{now:n,label:"".concat(n,"%"),className:"rounded-pill my-2"}),o.a.createElement("div",{className:"text-center p-1"},t.votes.length," out ",a.length," votes"))}var Y=Object(l.connect)((function(e){return{loggedIn:e.loggedIn}}))((function(e){var t=e.question,a=e.loggedIn,n=Object(m.a)(Object(m.a)({},t.optionOne),{},{selected:t.optionOne.votes.includes(a)}),r=Object(m.a)(Object(m.a)({},t.optionTwo),{},{selected:t.optionTwo.votes.includes(a)}),c=[].concat(Object(u.a)(n.votes),Object(u.a)(r.votes));return o.a.createElement("div",{className:"col-7"},o.a.createElement("h5",null," Results: "),o.a.createElement(K,{option:n,totalVotes:c}),o.a.createElement(K,{option:r,totalVotes:c}))})),$=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={selectedVal:""},e.updateSelection=function(t){var a=t.currentTarget.value;e.setState((function(){return{selectedVal:a}}))},e.submitAnswer=function(t){t.preventDefault();var a=e.props,n=a.loggedIn,o=a.question;(0,a.dispatch)(C(n,o.id,e.state.selectedVal))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.question,t=e.optionOne,a=e.optionTwo;return o.a.createElement("div",{className:"col-7"},o.a.createElement("h5",{className:"mb-3 text-capitalize"}," Would you rather "),o.a.createElement("form",{onSubmit:this.submitAnswer},o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label my-2"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"questionPoll",value:"optionOne",checked:"optionOne"===this.state.selectedVal,onChange:this.updateSelection}),t.text)),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label my-2"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"questionPoll",value:"optionTwo",checked:"optionTwo"===this.state.selectedVal,onChange:this.updateSelection}),a.text)),o.a.createElement("input",{type:"submit",className:"btn btn-primary form-control",disabled:""===this.state.selectedVal})))}}]),a}(n.Component),X=Object(l.connect)((function(e){return{loggedIn:e.loggedIn}}))($),Z=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.questions,a=e.users,n=e.match,r=e.loggedIn;if(void 0===t[n.params.id])return o.a.createElement(w.a,{to:"/404"});var c=t[n.params.id],s=a[c.author],l=[].concat(Object(u.a)(c.optionOne.votes),Object(u.a)(c.optionTwo.votes)),i=l.includes(r);return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6 mx-auto my-5"},o.a.createElement(P.a,null,o.a.createElement(P.a.Header,{as:"h4"}," ",s.name," asks: "),o.a.createElement(P.a.Body,{className:"d-flex"},o.a.createElement("div",{className:"col-5 text-center border-right"},o.a.createElement("img",{src:s.avatarURL,alt:s.name,height:"150",width:"150",className:"rounded-circle"})),i?o.a.createElement(Y,{question:c,totalVotes:l}):o.a.createElement(X,{question:c})))))}}]),a}(n.Component);var ee=Object(l.connect)((function(e,t){return{questions:e.questions,users:e.users,loggedIn:e.loggedIn}}))(Z);var te=function(e){var t=e.user,a=e.calculateTotal,n=t.name,r=t.avatarURL,c=t.answers,s=t.questions;return o.a.createElement(P.a,{className:"my-5"},o.a.createElement(P.a.Body,{className:"d-flex"},o.a.createElement("div",{className:"col-3 text-center border-right"},o.a.createElement("img",{src:r,alt:n,height:"100",width:"100",className:"rounded-circle"})),o.a.createElement("div",{className:"col-7"},o.a.createElement("h4",{className:"mb-4"}," ",n," "),o.a.createElement("div",{className:"d-flex pb-2 border-bottom"},o.a.createElement("span",null," Answered Questions "),o.a.createElement("span",{className:"ml-auto"}," ",Object.keys(c).length," ")),o.a.createElement("div",{className:"d-flex pt-2"},o.a.createElement("span",null," Created Questions "),o.a.createElement("span",{className:"ml-auto"}," ",s.length," "))),o.a.createElement("div",{className:"col-2"},o.a.createElement(P.a,{className:"text-center"},o.a.createElement(P.a.Header,null," Score "),o.a.createElement(P.a.Body,null,o.a.createElement("h5",{className:"rounded-circle bg-light text-primary my-0 p-2"},a(t)))))))},ae=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=function(e){return Object.keys(e.answers).length+e.questions.length},t=this.props.users;return t=Object.values(t).sort((function(t,a){return e(a)-e(t)})),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-8 mx-auto"},t.map((function(t){return o.a.createElement(te,{key:t.id,user:t,calculateTotal:e})}))))}}]),a}(n.Component),ne=Object(l.connect)((function(e){return{users:e.users}}))(ae),oe=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={optionOne:"",optionTwo:""},e.handleChange=function(t){var a=t.currentTarget,n=a.value;"optionOne"===a.id?e.setState((function(){return{optionOne:n}})):e.setState((function(){return{optionTwo:n}}))},e.saveQuestion=function(t){t.preventDefault();var a=e.state,n=a.optionOne,o=a.optionTwo;e.props.dispatch(A(n,o)),e.props.history.push("/")},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.optionOne,a=e.optionTwo;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6 mx-auto my-5"},o.a.createElement(P.a,null,o.a.createElement(P.a.Header,{className:"text-capitalized",as:"h3"}," Create new question "),o.a.createElement(P.a.Body,null,o.a.createElement("div",null," Complete the question: "),o.a.createElement("h4",{className:"mt-5 mb-3"}," Would you rather ..."),o.a.createElement("form",{onSubmit:this.saveQuestion},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Option One Text Here",id:"optionOne",value:t,onChange:this.handleChange}),o.a.createElement("div",{className:"my-3 position-relative text-center"},o.a.createElement("hr",{className:"position-absolute w-100"}),o.a.createElement("div",{className:"py-1"}," OR ")),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Option Two Text Here",id:"optionTwo",value:a,onChange:this.handleChange}),o.a.createElement("button",{type:"submit",className:"btn btn-primary form-control mt-3",disabled:""===t||""===a}," Submit "))))))}}]),a}(n.Component),re=Object(l.connect)()(oe),ce=a(88);var se=function(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-8 mx-auto my-5"},o.a.createElement(ce.a,{className:"text-center"},o.a.createElement("h3",null," Question not found!! "),o.a.createElement("div",null," Try adding a",o.a.createElement(N.b,{to:"/add"}," new question "),"or go to",o.a.createElement(N.b,{to:"/"}," homepage. ")))))},le=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(R())}},{key:"render",value:function(){return o.a.createElement(N.a,null,o.a.createElement(n.Fragment,null,o.a.createElement(b.a,null),o.a.createElement("div",{className:"container"},this.props.loading?null:this.props.loggedIn?o.a.createElement(n.Fragment,null,o.a.createElement(V,null),o.a.createElement(w.b,{path:"/",exact:!0,component:F}),o.a.createElement(w.b,{path:"/add",component:re}),o.a.createElement(w.b,{path:"/questions/:id",component:ee}),o.a.createElement(w.b,{path:"/leaderboard",component:ne}),o.a.createElement(w.b,{path:"/404",component:se})):o.a.createElement(L,null))))}}]),a}(n.Component),ie=Object(l.connect)((function(e){var t=e.loggedIn,a=e.users,n=e.questions,o=e.loadingBar;return{loggedIn:t,loading:!(Object.keys(a).length&&Object.keys(n).length)||o.default}}))(le),ue=Object(s.d)(h,E);c.a.render(o.a.createElement(l.Provider,{store:ue},o.a.createElement(ie,null)),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.f90a9f21.chunk.js.map