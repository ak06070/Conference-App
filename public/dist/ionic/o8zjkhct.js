/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents("o8zjkhct",function(i,n,t,o,e){var s=function(i,n){var t=new i,o=new i;o.addElement(n.querySelector(".loading-backdrop"));var e=new i;return e.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.3),e.fromTo("opacity",.01,1).fromTo("scale",1.1,1),t.addElement(n).easing("ease-in-out").duration(200).add(o).add(e)},a=function(i,n){var t=new i,o=new i;o.addElement(n.querySelector(".loading-backdrop"));var e=new i;return e.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.3,0),e.fromTo("opacity",.99,0).fromTo("scale",1,.9),t.addElement(n).easing("ease-in-out").duration(200).add(o).add(e)},r=function(){function i(){this.showSpinner=null,this.dismissOnPageChange=!1,this.showBackdrop=!0}return i.prototype.present=function(){var i=this;return new Promise(function(n){i._present(n)})},i.prototype._present=function(i){var n=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionLoadingWillPresent.emit({loading:this});var t=this.enterAnimation;t||(t=s),this.animationCtrl.create(t,this.el).then(function(t){n.animation=t,t.onFinish(function(t){t.destroy(),n.ionViewDidEnter(),i()}).play()})},i.prototype.dismiss=function(){var i=this;return clearTimeout(this.durationTimeout),this.animation&&(this.animation.destroy(),this.animation=null),new Promise(function(n){i.ionLoadingWillDismiss.emit({loading:i});var t=i.exitAnimation;t||(t=a),i.animationCtrl.create(t,i.el).then(function(t){i.animation=t,t.onFinish(function(t){t.destroy(),i.ionLoadingDidDismiss.emit({loading:i}),o.dom.write(function(){i.el.parentNode.removeChild(i.el)}),n()}).play()})})},i.prototype.componentDidunload=function(){this.ionLoadingDidUnload.emit({loading:this})},i.prototype.onDismiss=function(i){i.stopPropagation(),i.preventDefault(),this.dismiss()},i.prototype.componentDidLoad=function(){this.spinner||(this.spinner=this.config.get("loadingSpinner",this.config.get("spinner","lines"))),null!==this.showSpinner&&void 0!==this.showSpinner||(this.showSpinner=!(!this.spinner||"hide"===this.spinner)),this.ionLoadingDidLoad.emit({loading:this})},i.prototype.ionViewDidEnter=function(){var i=this,n=document.activeElement;n&&n.blur&&n.blur(),"number"==typeof this.duration&&this.duration>10&&(this.durationTimeout=setTimeout(function(){return i.dismiss()},this.duration)),this.ionLoadingDidPresent.emit({loading:this})},i.prototype.render=function(){this.cssClass&&this.cssClass;var i=[];return this.showSpinner&&i.push(n("div",{c:{"loading-spinner":!0}},n("ion-spinner",{p:{name:this.spinner}}))),this.content&&i.push(n("div",{c:{"loading-content":!0}},this.content)),[n("ion-gesture",{c:{"loading-backdrop":!0,"hide-backdrop":!this.showBackdrop},p:{attachTo:"parent",autoBlockAll:!0}}),n("div",{c:{"loading-wrapper":!0},a:{role:"dialog"}},i)]},i}(),d=function(){function i(){this.ids=0,this.loadingResolves={},this.loadings=[]}return i.prototype.create=function(i){var n=this,t=document.createElement("ion-loading"),o=this.ids++;return t.id="loading-"+o,t.style.zIndex=(2e4+o).toString(),Object.assign(t,i),(document.querySelector("ion-app")||document.body).appendChild(t),new Promise(function(i){n.loadingResolves[t.id]=i})},i.prototype.viewDidLoad=function(i){var n=i.detail.loading,t=this.loadingResolves[n.id];t&&(t(n),delete this.loadingResolves[n.id])},i.prototype.willPresent=function(i){this.loadings.push(i.detail.loading)},i.prototype.willDismiss=function(i){var n=this.loadings.indexOf(i.detail.loading);n>-1&&this.loadings.splice(n,1)},i.prototype.escapeKeyUp=function(){var i=this.loadings[this.loadings.length-1];i&&i.dismiss()},i}();i["ION-LOADING"]=r,i["ION-LOADING-CTRL"]=d},["ION-LOADING",[["animationCtrl",4,0,"ion-animation"],["config",3,0,"config"],["content",1],["cssClass",1],["dismissOnPageChange",1,1],["duration",1,2],["el",7],["enterAnimation",1],["exitAnimation",1],["id",1],["showBackdrop",1,1],["showSpinner",5],["spinner",5]],{theme:"loading"},[["ionLoadingDidLoad"],["ionLoadingDidPresent"],["ionLoadingWillPresent"],["ionLoadingWillDismiss"],["ionLoadingDidDismiss"],["ionLoadingDidUnload"]]],["ION-LOADING-CTRL",[["create",6]],{}]);