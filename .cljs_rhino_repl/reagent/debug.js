// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__42798__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42799__i = 0, G__42799__a = new Array(arguments.length -  0);
while (G__42799__i < G__42799__a.length) {G__42799__a[G__42799__i] = arguments[G__42799__i + 0]; ++G__42799__i;}
  args = new cljs.core.IndexedSeq(G__42799__a,0);
} 
return G__42798__delegate.call(this,args);};
G__42798.cljs$lang$maxFixedArity = 0;
G__42798.cljs$lang$applyTo = (function (arglist__42800){
var args = cljs.core.seq(arglist__42800);
return G__42798__delegate(args);
});
G__42798.cljs$core$IFn$_invoke$arity$variadic = G__42798__delegate;
return G__42798;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__42801__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42802__i = 0, G__42802__a = new Array(arguments.length -  0);
while (G__42802__i < G__42802__a.length) {G__42802__a[G__42802__i] = arguments[G__42802__i + 0]; ++G__42802__i;}
  args = new cljs.core.IndexedSeq(G__42802__a,0);
} 
return G__42801__delegate.call(this,args);};
G__42801.cljs$lang$maxFixedArity = 0;
G__42801.cljs$lang$applyTo = (function (arglist__42803){
var args = cljs.core.seq(arglist__42803);
return G__42801__delegate(args);
});
G__42801.cljs$core$IFn$_invoke$arity$variadic = G__42801__delegate;
return G__42801;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map