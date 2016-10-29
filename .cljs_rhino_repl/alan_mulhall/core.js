// Compiled by ClojureScript 1.9.229 {}
goog.provide('alan_mulhall.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('devtools.core');
goog.require('accountant.core');
devtools.core.install_BANG_.call(null);
alan_mulhall.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),"Not fetched"], null));
alan_mulhall.core.handler = (function alan_mulhall$core$handler(response){
return cljs.core.swap_BANG_.call(null,alan_mulhall.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),response);
});
alan_mulhall.core.error_handler = (function alan_mulhall$core$error_handler(p__49254){
var map__49257 = p__49254;
var map__49257__$1 = ((((!((map__49257 == null)))?((((map__49257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49257):map__49257);
var status = cljs.core.get.call(null,map__49257__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__49257__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
alan_mulhall.core.fetch_data = (function alan_mulhall$core$fetch_data(){
return ajax.core.GET.call(null,"/api",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),alan_mulhall.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),alan_mulhall.core.error_handler], null));
});
alan_mulhall.core.home_page = (function alan_mulhall$core$home_page(){
console.log(cljs.core.range.call(null,(200)));

alan_mulhall.core.fetch_data.call(null);

return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to alan-mulhall"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"State is: ",new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,alan_mulhall.core.state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"go to about page"], null)], null)], null);
});
});
alan_mulhall.core.about_page = (function alan_mulhall$core$about_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About alan-mulhall"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"State is: ",new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,alan_mulhall.core.state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"go to the home page"], null)], null)], null);
});
alan_mulhall.core.current_page = (function alan_mulhall$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
var action__39538__auto___49264 = (function (params__39539__auto__){
if(cljs.core.map_QMARK_.call(null,params__39539__auto__)){
var map__49259 = params__39539__auto__;
var map__49259__$1 = ((((!((map__49259 == null)))?((((map__49259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49259):map__49259);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return alan_mulhall.core.home_page;},new cljs.core.Symbol("alan-mulhall.core","home-page","alan-mulhall.core/home-page",-207894418,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"alan-mulhall.core","alan-mulhall.core",-1511246141,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/alanmulhall/Workspace/Personal/clojurescript/alan-mulhall/src/cljs/alan_mulhall/core.cljs",16,1,32,32,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(alan_mulhall.core.home_page)?alan_mulhall.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__39539__auto__)){
var vec__49261 = params__39539__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return alan_mulhall.core.home_page;},new cljs.core.Symbol("alan-mulhall.core","home-page","alan-mulhall.core/home-page",-207894418,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"alan-mulhall.core","alan-mulhall.core",-1511246141,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/alanmulhall/Workspace/Personal/clojurescript/alan-mulhall/src/cljs/alan_mulhall/core.cljs",16,1,32,32,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(alan_mulhall.core.home_page)?alan_mulhall.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__39538__auto___49264);

var action__39538__auto___49270 = (function (params__39539__auto__){
if(cljs.core.map_QMARK_.call(null,params__39539__auto__)){
var map__49265 = params__39539__auto__;
var map__49265__$1 = ((((!((map__49265 == null)))?((((map__49265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49265):map__49265);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return alan_mulhall.core.about_page;},new cljs.core.Symbol("alan-mulhall.core","about-page","alan-mulhall.core/about-page",-1485994974,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"alan-mulhall.core","alan-mulhall.core",-1511246141,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/alanmulhall/Workspace/Personal/clojurescript/alan-mulhall/src/cljs/alan_mulhall/core.cljs",17,1,40,40,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(alan_mulhall.core.about_page)?alan_mulhall.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__39539__auto__)){
var vec__49267 = params__39539__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return alan_mulhall.core.about_page;},new cljs.core.Symbol("alan-mulhall.core","about-page","alan-mulhall.core/about-page",-1485994974,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"alan-mulhall.core","alan-mulhall.core",-1511246141,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/alanmulhall/Workspace/Personal/clojurescript/alan-mulhall/src/cljs/alan_mulhall/core.cljs",17,1,40,40,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(alan_mulhall.core.about_page)?alan_mulhall.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__39538__auto___49270);

alan_mulhall.core.mount_root = (function alan_mulhall$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alan_mulhall.core.current_page], null),document.getElementById("app"));
});
alan_mulhall.core.init_BANG_ = (function alan_mulhall$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return alan_mulhall.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map