(this.webpackJsonpdemokratieerleben=this.webpackJsonpdemokratieerleben||[]).push([[16],{206:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},233:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var r=a(206),n=a(30),l=a(34),i=a(32),s=a(31),o=a(33),c=a(0),u=a.n(c),p=a(5),d=(a(233),a(40));function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=Object(c.lazy)((function(){return Promise.all([a.e(1),a.e(11)]).then(a.bind(null,264))})),b={AnnaVater:"Anna gefiel diese Idee und so machte sie sich auf zur Ortsgruppe der sozialistischen Arbeiterjugend.",AnnaMutter:"Anna behagte nicht, was ihre Mutter erz\xe4hlt hatte. Von einer Freundin hatte sie von der sozialistischen Arbeiterjugend geh\xf6rt, die jedes Jahr in den Sommerferien Ferienlager veranstaltete. Das wollte sie sich mal ansehen!","AnnaGro\xdfvater":"Anna wurde traurig bei dem Gedanken an ihrer verstorbene Gro\xdfmutter, die sie sehr geliebt hatte. Es musste doch noch andere M\xf6glichkeiten geben, sein Leben zu bestreiten. Hilfe und Rat erhoffte sie sich von der Ortsgruppe der sozialistischen Arbeiterjugend, von der sie einen Aushang in der Schule gesehen hatte.",KarlVater:"Karl gefiel diese Idee und so machte er sich auf zur Ortsgruppe der sozialistischen Arbeiterjugend.",KarlMutter:"Karl behagte nicht, was seine Mutter erz\xe4hlt hatte. Von einem Freund hatte er von der sozialistischen Arbeiterjugend geh\xf6rt, die jedes Jahr in den Sommerferien Ferienlager veranstaltete. Das wollte er sich mal ansehen!","KarlGro\xdfmutter":"Karl wurde traurig bei dem Gedanken an seinen verstorbenen Gro\xdfvater, den er sehr geliebt hatte. Es musste doch noch andere M\xf6glichkeiten geben, sein Leben zu bestreiten. Hilfe und Rat erhoffte er sich von der Ortsgruppe der sozialistischen Arbeiterjugend, von der er einen Aushang in der Schule gesehen hatte."},y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).handleCheckBoard=function(e){e&&setTimeout((function(){return a.setState({hasPuzzleSolved:!0})}),1500)},a.state={avatar:a.props.location.state?a.props.location.state.avatar:"Anna",family:a.props.location.state?a.props.location.state.family:"Mutter",hasPuzzleSolved:!1},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(d.a,{class:"family"},u.a.createElement("div",{className:"title"},u.a.createElement("h1",{className:"title"},"Bei ",this.state.avatar)),u.a.createElement("div",{className:"box"},u.a.createElement("p",null,b[this.state.avatar+this.state.family])),u.a.createElement(u.a.Fragment,null),u.a.createElement("div",{className:"box"},u.a.createElement("p",null,this.state.avatar," hat einen Stadtplan mit dem eingezeichneten Weg zur Ortsgruppe bekommen. Nur leider ist dieser in mehrere Teile zerrissen. Hilf ",this.state.avatar,", ihn wieder zusammenzuf\xfcgen, um zum Treffpunkt der Ortsgruppe zu gelangen. Ziehe dazu die durcheinandergew\xfcrfelten Kartenausschnitte in das entsprechende vorgezeichnete Feld. Wenn du das Puzzle richtig gel\xf6st hast, kommst du zum n\xe4chsten Kapitel.")),u.a.createElement(u.a.Fragment,null,u.a.createElement(f,{onCheckBoard:this.handleCheckBoard}),this.state.hasPuzzleSolved&&u.a.createElement(p.a,{exact:!0,to:{pathname:"/localgroup",state:m({},this.state)}})))}}]),t}(c.Component);t.default=y},30:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return r}))},31:function(e,t,a){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return r}))},32:function(e,t,a){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){return(n="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function l(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}a.d(t,"a",(function(){return l}))},33:function(e,t,a){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}a.d(t,"a",(function(){return n}))},34:function(e,t,a){"use strict";function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}a.d(t,"a",(function(){return n}))},40:function(e,t,a){"use strict";var r=a(30),n=a(34),l=a(32),i=a(31),s=a(33),o=a(0),c=a.n(o),u=(a(41),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"parallax ".concat(this.props.class)},this.props.children[0]&&c.a.createElement("div",{id:"header",className:"parallax__group"},c.a.createElement("div",{className:"parallax__layer parallax__layer--base"},this.props.children[0])),this.props.children[1]&&c.a.createElement("div",{id:"group2",className:"parallax__group"},c.a.createElement("div",{className:"parallax__layer parallax__layer--base"},this.props.children[1]),c.a.createElement("div",{className:"parallax__layer parallax__layer--deep"})),this.props.children[2]&&c.a.createElement("div",{id:"group3",className:"parallax__group"},c.a.createElement("div",{className:"parallax__layer parallax__layer--base"},this.props.children[2]),c.a.createElement("div",{className:"parallax__layer parallax__layer--back"})),this.props.children[3]&&c.a.createElement("div",{id:"group4",className:"parallax__group"},c.a.createElement("div",{className:"parallax__layer parallax__layer--fore"},this.props.children[3])),this.props.children[4]&&c.a.createElement("div",{id:"group5",className:"parallax__group"},c.a.createElement("div",{className:"parallax__layer parallax__layer--fore"},this.props.children[4]),c.a.createElement("div",{className:"parallax__layer parallax__layer--base"})),this.props.children[5]&&c.a.createElement("div",{id:"group6",className:"parallax__group"},c.a.createElement("div",{className:"parallax__layer parallax__layer--back"}),c.a.createElement("div",{className:"parallax__layer parallax__layer--base"}),c.a.createElement("div",{className:"parallax__layer parallax__layer--fore"},this.props.children[5])),this.props.children[6]&&c.a.createElement("div",{id:"group7",className:"parallax__group"},c.a.createElement("div",{className:"parallax__layer parallax__layer--fore"},this.props.children[6]),c.a.createElement("div",{className:"parallax__layer parallax__layer--back"})))}}]),t}(o.Component));t.a=u},41:function(e,t,a){}}]);
//# sourceMappingURL=16.fdb906ee.chunk.js.map