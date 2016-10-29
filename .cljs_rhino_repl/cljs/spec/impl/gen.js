// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34846 = arguments.length;
var i__32655__auto___34847 = (0);
while(true){
if((i__32655__auto___34847 < len__32654__auto___34846)){
args__32661__auto__.push((arguments[i__32655__auto___34847]));

var G__34848 = (i__32655__auto___34847 + (1));
i__32655__auto___34847 = G__34848;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq34845){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34845));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34850 = arguments.length;
var i__32655__auto___34851 = (0);
while(true){
if((i__32655__auto___34851 < len__32654__auto___34850)){
args__32661__auto__.push((arguments[i__32655__auto___34851]));

var G__34852 = (i__32655__auto___34851 + (1));
i__32655__auto___34851 = G__34852;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq34849){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34849));
});

var g_QMARK__34853 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_34854 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34853){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34853))
,null));
var mkg_34855 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34853,g_34854){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34853,g_34854))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__34853,g_34854,mkg_34855){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34853).call(null,x);
});})(g_QMARK__34853,g_34854,mkg_34855))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__34853,g_34854,mkg_34855){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_34855).call(null,gfn);
});})(g_QMARK__34853,g_34854,mkg_34855))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__34853,g_34854,mkg_34855){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_34854).call(null,generator);
});})(g_QMARK__34853,g_34854,mkg_34855))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32864__auto___34874 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__32864__auto___34874){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34875 = arguments.length;
var i__32655__auto___34876 = (0);
while(true){
if((i__32655__auto___34876 < len__32654__auto___34875)){
args__32661__auto__.push((arguments[i__32655__auto___34876]));

var G__34877 = (i__32655__auto___34876 + (1));
i__32655__auto___34876 = G__34877;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34874))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34874){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34874),args);
});})(g__32864__auto___34874))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__32864__auto___34874){
return (function (seq34856){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34856));
});})(g__32864__auto___34874))
;


var g__32864__auto___34878 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__32864__auto___34878){
return (function cljs$spec$impl$gen$list(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34879 = arguments.length;
var i__32655__auto___34880 = (0);
while(true){
if((i__32655__auto___34880 < len__32654__auto___34879)){
args__32661__auto__.push((arguments[i__32655__auto___34880]));

var G__34881 = (i__32655__auto___34880 + (1));
i__32655__auto___34880 = G__34881;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34878))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34878){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34878),args);
});})(g__32864__auto___34878))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__32864__auto___34878){
return (function (seq34857){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34857));
});})(g__32864__auto___34878))
;


var g__32864__auto___34882 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__32864__auto___34882){
return (function cljs$spec$impl$gen$map(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34883 = arguments.length;
var i__32655__auto___34884 = (0);
while(true){
if((i__32655__auto___34884 < len__32654__auto___34883)){
args__32661__auto__.push((arguments[i__32655__auto___34884]));

var G__34885 = (i__32655__auto___34884 + (1));
i__32655__auto___34884 = G__34885;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34882))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34882){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34882),args);
});})(g__32864__auto___34882))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__32864__auto___34882){
return (function (seq34858){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34858));
});})(g__32864__auto___34882))
;


var g__32864__auto___34886 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__32864__auto___34886){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34887 = arguments.length;
var i__32655__auto___34888 = (0);
while(true){
if((i__32655__auto___34888 < len__32654__auto___34887)){
args__32661__auto__.push((arguments[i__32655__auto___34888]));

var G__34889 = (i__32655__auto___34888 + (1));
i__32655__auto___34888 = G__34889;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34886))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34886){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34886),args);
});})(g__32864__auto___34886))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__32864__auto___34886){
return (function (seq34859){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34859));
});})(g__32864__auto___34886))
;


var g__32864__auto___34890 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__32864__auto___34890){
return (function cljs$spec$impl$gen$set(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34891 = arguments.length;
var i__32655__auto___34892 = (0);
while(true){
if((i__32655__auto___34892 < len__32654__auto___34891)){
args__32661__auto__.push((arguments[i__32655__auto___34892]));

var G__34893 = (i__32655__auto___34892 + (1));
i__32655__auto___34892 = G__34893;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34890))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34890){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34890),args);
});})(g__32864__auto___34890))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__32864__auto___34890){
return (function (seq34860){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34860));
});})(g__32864__auto___34890))
;


var g__32864__auto___34894 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__32864__auto___34894){
return (function cljs$spec$impl$gen$vector(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34895 = arguments.length;
var i__32655__auto___34896 = (0);
while(true){
if((i__32655__auto___34896 < len__32654__auto___34895)){
args__32661__auto__.push((arguments[i__32655__auto___34896]));

var G__34897 = (i__32655__auto___34896 + (1));
i__32655__auto___34896 = G__34897;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34894))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34894){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34894),args);
});})(g__32864__auto___34894))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__32864__auto___34894){
return (function (seq34861){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34861));
});})(g__32864__auto___34894))
;


var g__32864__auto___34898 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__32864__auto___34898){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34899 = arguments.length;
var i__32655__auto___34900 = (0);
while(true){
if((i__32655__auto___34900 < len__32654__auto___34899)){
args__32661__auto__.push((arguments[i__32655__auto___34900]));

var G__34901 = (i__32655__auto___34900 + (1));
i__32655__auto___34900 = G__34901;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34898))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34898){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34898),args);
});})(g__32864__auto___34898))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__32864__auto___34898){
return (function (seq34862){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34862));
});})(g__32864__auto___34898))
;


var g__32864__auto___34902 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__32864__auto___34902){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34903 = arguments.length;
var i__32655__auto___34904 = (0);
while(true){
if((i__32655__auto___34904 < len__32654__auto___34903)){
args__32661__auto__.push((arguments[i__32655__auto___34904]));

var G__34905 = (i__32655__auto___34904 + (1));
i__32655__auto___34904 = G__34905;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34902))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34902){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34902),args);
});})(g__32864__auto___34902))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__32864__auto___34902){
return (function (seq34863){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34863));
});})(g__32864__auto___34902))
;


var g__32864__auto___34906 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__32864__auto___34906){
return (function cljs$spec$impl$gen$elements(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34907 = arguments.length;
var i__32655__auto___34908 = (0);
while(true){
if((i__32655__auto___34908 < len__32654__auto___34907)){
args__32661__auto__.push((arguments[i__32655__auto___34908]));

var G__34909 = (i__32655__auto___34908 + (1));
i__32655__auto___34908 = G__34909;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34906))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34906){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34906),args);
});})(g__32864__auto___34906))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__32864__auto___34906){
return (function (seq34864){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34864));
});})(g__32864__auto___34906))
;


var g__32864__auto___34910 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__32864__auto___34910){
return (function cljs$spec$impl$gen$bind(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34911 = arguments.length;
var i__32655__auto___34912 = (0);
while(true){
if((i__32655__auto___34912 < len__32654__auto___34911)){
args__32661__auto__.push((arguments[i__32655__auto___34912]));

var G__34913 = (i__32655__auto___34912 + (1));
i__32655__auto___34912 = G__34913;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34910))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34910){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34910),args);
});})(g__32864__auto___34910))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__32864__auto___34910){
return (function (seq34865){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34865));
});})(g__32864__auto___34910))
;


var g__32864__auto___34914 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__32864__auto___34914){
return (function cljs$spec$impl$gen$choose(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34915 = arguments.length;
var i__32655__auto___34916 = (0);
while(true){
if((i__32655__auto___34916 < len__32654__auto___34915)){
args__32661__auto__.push((arguments[i__32655__auto___34916]));

var G__34917 = (i__32655__auto___34916 + (1));
i__32655__auto___34916 = G__34917;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34914))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34914){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34914),args);
});})(g__32864__auto___34914))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__32864__auto___34914){
return (function (seq34866){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34866));
});})(g__32864__auto___34914))
;


var g__32864__auto___34918 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__32864__auto___34918){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34919 = arguments.length;
var i__32655__auto___34920 = (0);
while(true){
if((i__32655__auto___34920 < len__32654__auto___34919)){
args__32661__auto__.push((arguments[i__32655__auto___34920]));

var G__34921 = (i__32655__auto___34920 + (1));
i__32655__auto___34920 = G__34921;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34918))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34918){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34918),args);
});})(g__32864__auto___34918))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__32864__auto___34918){
return (function (seq34867){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34867));
});})(g__32864__auto___34918))
;


var g__32864__auto___34922 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__32864__auto___34922){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34923 = arguments.length;
var i__32655__auto___34924 = (0);
while(true){
if((i__32655__auto___34924 < len__32654__auto___34923)){
args__32661__auto__.push((arguments[i__32655__auto___34924]));

var G__34925 = (i__32655__auto___34924 + (1));
i__32655__auto___34924 = G__34925;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34922))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34922){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34922),args);
});})(g__32864__auto___34922))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__32864__auto___34922){
return (function (seq34868){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34868));
});})(g__32864__auto___34922))
;


var g__32864__auto___34926 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__32864__auto___34926){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34927 = arguments.length;
var i__32655__auto___34928 = (0);
while(true){
if((i__32655__auto___34928 < len__32654__auto___34927)){
args__32661__auto__.push((arguments[i__32655__auto___34928]));

var G__34929 = (i__32655__auto___34928 + (1));
i__32655__auto___34928 = G__34929;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34926))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34926){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34926),args);
});})(g__32864__auto___34926))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__32864__auto___34926){
return (function (seq34869){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34869));
});})(g__32864__auto___34926))
;


var g__32864__auto___34930 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__32864__auto___34930){
return (function cljs$spec$impl$gen$sample(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34931 = arguments.length;
var i__32655__auto___34932 = (0);
while(true){
if((i__32655__auto___34932 < len__32654__auto___34931)){
args__32661__auto__.push((arguments[i__32655__auto___34932]));

var G__34933 = (i__32655__auto___34932 + (1));
i__32655__auto___34932 = G__34933;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34930))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34930){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34930),args);
});})(g__32864__auto___34930))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__32864__auto___34930){
return (function (seq34870){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34870));
});})(g__32864__auto___34930))
;


var g__32864__auto___34934 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__32864__auto___34934){
return (function cljs$spec$impl$gen$return(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34935 = arguments.length;
var i__32655__auto___34936 = (0);
while(true){
if((i__32655__auto___34936 < len__32654__auto___34935)){
args__32661__auto__.push((arguments[i__32655__auto___34936]));

var G__34937 = (i__32655__auto___34936 + (1));
i__32655__auto___34936 = G__34937;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34934))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34934){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34934),args);
});})(g__32864__auto___34934))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__32864__auto___34934){
return (function (seq34871){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34871));
});})(g__32864__auto___34934))
;


var g__32864__auto___34938 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__32864__auto___34938){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34939 = arguments.length;
var i__32655__auto___34940 = (0);
while(true){
if((i__32655__auto___34940 < len__32654__auto___34939)){
args__32661__auto__.push((arguments[i__32655__auto___34940]));

var G__34941 = (i__32655__auto___34940 + (1));
i__32655__auto___34940 = G__34941;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34938))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34938){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34938),args);
});})(g__32864__auto___34938))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32864__auto___34938){
return (function (seq34872){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34872));
});})(g__32864__auto___34938))
;


var g__32864__auto___34942 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__32864__auto___34942){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34943 = arguments.length;
var i__32655__auto___34944 = (0);
while(true){
if((i__32655__auto___34944 < len__32654__auto___34943)){
args__32661__auto__.push((arguments[i__32655__auto___34944]));

var G__34945 = (i__32655__auto___34944 + (1));
i__32655__auto___34944 = G__34945;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32864__auto___34942))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___34942){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32864__auto___34942),args);
});})(g__32864__auto___34942))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__32864__auto___34942){
return (function (seq34873){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34873));
});})(g__32864__auto___34942))
;

var g__32877__auto___34967 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__32877__auto___34967){
return (function cljs$spec$impl$gen$any(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34968 = arguments.length;
var i__32655__auto___34969 = (0);
while(true){
if((i__32655__auto___34969 < len__32654__auto___34968)){
args__32661__auto__.push((arguments[i__32655__auto___34969]));

var G__34970 = (i__32655__auto___34969 + (1));
i__32655__auto___34969 = G__34970;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___34967))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___34967){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___34967);
});})(g__32877__auto___34967))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__32877__auto___34967){
return (function (seq34946){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34946));
});})(g__32877__auto___34967))
;


var g__32877__auto___34971 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__32877__auto___34971){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34972 = arguments.length;
var i__32655__auto___34973 = (0);
while(true){
if((i__32655__auto___34973 < len__32654__auto___34972)){
args__32661__auto__.push((arguments[i__32655__auto___34973]));

var G__34974 = (i__32655__auto___34973 + (1));
i__32655__auto___34973 = G__34974;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___34971))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___34971){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___34971);
});})(g__32877__auto___34971))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__32877__auto___34971){
return (function (seq34947){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34947));
});})(g__32877__auto___34971))
;


var g__32877__auto___34975 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__32877__auto___34975){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34976 = arguments.length;
var i__32655__auto___34977 = (0);
while(true){
if((i__32655__auto___34977 < len__32654__auto___34976)){
args__32661__auto__.push((arguments[i__32655__auto___34977]));

var G__34978 = (i__32655__auto___34977 + (1));
i__32655__auto___34977 = G__34978;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___34975))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___34975){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___34975);
});})(g__32877__auto___34975))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__32877__auto___34975){
return (function (seq34948){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34948));
});})(g__32877__auto___34975))
;


var g__32877__auto___34979 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__32877__auto___34979){
return (function cljs$spec$impl$gen$char(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34980 = arguments.length;
var i__32655__auto___34981 = (0);
while(true){
if((i__32655__auto___34981 < len__32654__auto___34980)){
args__32661__auto__.push((arguments[i__32655__auto___34981]));

var G__34982 = (i__32655__auto___34981 + (1));
i__32655__auto___34981 = G__34982;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___34979))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___34979){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___34979);
});})(g__32877__auto___34979))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__32877__auto___34979){
return (function (seq34949){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34949));
});})(g__32877__auto___34979))
;


var g__32877__auto___34983 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__32877__auto___34983){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34984 = arguments.length;
var i__32655__auto___34985 = (0);
while(true){
if((i__32655__auto___34985 < len__32654__auto___34984)){
args__32661__auto__.push((arguments[i__32655__auto___34985]));

var G__34986 = (i__32655__auto___34985 + (1));
i__32655__auto___34985 = G__34986;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___34983))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___34983){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___34983);
});})(g__32877__auto___34983))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__32877__auto___34983){
return (function (seq34950){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34950));
});})(g__32877__auto___34983))
;


var g__32877__auto___34987 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__32877__auto___34987){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34988 = arguments.length;
var i__32655__auto___34989 = (0);
while(true){
if((i__32655__auto___34989 < len__32654__auto___34988)){
args__32661__auto__.push((arguments[i__32655__auto___34989]));

var G__34990 = (i__32655__auto___34989 + (1));
i__32655__auto___34989 = G__34990;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___34987))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___34987){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___34987);
});})(g__32877__auto___34987))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__32877__auto___34987){
return (function (seq34951){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34951));
});})(g__32877__auto___34987))
;


var g__32877__auto___34991 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__32877__auto___34991){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34992 = arguments.length;
var i__32655__auto___34993 = (0);
while(true){
if((i__32655__auto___34993 < len__32654__auto___34992)){
args__32661__auto__.push((arguments[i__32655__auto___34993]));

var G__34994 = (i__32655__auto___34993 + (1));
i__32655__auto___34993 = G__34994;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___34991))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___34991){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___34991);
});})(g__32877__auto___34991))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__32877__auto___34991){
return (function (seq34952){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34952));
});})(g__32877__auto___34991))
;


var g__32877__auto___34995 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__32877__auto___34995){
return (function cljs$spec$impl$gen$double(var_args){
var args__32661__auto__ = [];
var len__32654__auto___34996 = arguments.length;
var i__32655__auto___34997 = (0);
while(true){
if((i__32655__auto___34997 < len__32654__auto___34996)){
args__32661__auto__.push((arguments[i__32655__auto___34997]));

var G__34998 = (i__32655__auto___34997 + (1));
i__32655__auto___34997 = G__34998;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___34995))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___34995){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___34995);
});})(g__32877__auto___34995))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__32877__auto___34995){
return (function (seq34953){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34953));
});})(g__32877__auto___34995))
;


var g__32877__auto___34999 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__32877__auto___34999){
return (function cljs$spec$impl$gen$int(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35000 = arguments.length;
var i__32655__auto___35001 = (0);
while(true){
if((i__32655__auto___35001 < len__32654__auto___35000)){
args__32661__auto__.push((arguments[i__32655__auto___35001]));

var G__35002 = (i__32655__auto___35001 + (1));
i__32655__auto___35001 = G__35002;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___34999))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___34999){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___34999);
});})(g__32877__auto___34999))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__32877__auto___34999){
return (function (seq34954){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34954));
});})(g__32877__auto___34999))
;


var g__32877__auto___35003 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__32877__auto___35003){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35004 = arguments.length;
var i__32655__auto___35005 = (0);
while(true){
if((i__32655__auto___35005 < len__32654__auto___35004)){
args__32661__auto__.push((arguments[i__32655__auto___35005]));

var G__35006 = (i__32655__auto___35005 + (1));
i__32655__auto___35005 = G__35006;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35003))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35003){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35003);
});})(g__32877__auto___35003))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__32877__auto___35003){
return (function (seq34955){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34955));
});})(g__32877__auto___35003))
;


var g__32877__auto___35007 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__32877__auto___35007){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35008 = arguments.length;
var i__32655__auto___35009 = (0);
while(true){
if((i__32655__auto___35009 < len__32654__auto___35008)){
args__32661__auto__.push((arguments[i__32655__auto___35009]));

var G__35010 = (i__32655__auto___35009 + (1));
i__32655__auto___35009 = G__35010;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35007))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35007){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35007);
});})(g__32877__auto___35007))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__32877__auto___35007){
return (function (seq34956){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34956));
});})(g__32877__auto___35007))
;


var g__32877__auto___35011 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__32877__auto___35011){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35012 = arguments.length;
var i__32655__auto___35013 = (0);
while(true){
if((i__32655__auto___35013 < len__32654__auto___35012)){
args__32661__auto__.push((arguments[i__32655__auto___35013]));

var G__35014 = (i__32655__auto___35013 + (1));
i__32655__auto___35013 = G__35014;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35011))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35011){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35011);
});})(g__32877__auto___35011))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__32877__auto___35011){
return (function (seq34957){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34957));
});})(g__32877__auto___35011))
;


var g__32877__auto___35015 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__32877__auto___35015){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35016 = arguments.length;
var i__32655__auto___35017 = (0);
while(true){
if((i__32655__auto___35017 < len__32654__auto___35016)){
args__32661__auto__.push((arguments[i__32655__auto___35017]));

var G__35018 = (i__32655__auto___35017 + (1));
i__32655__auto___35017 = G__35018;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35015))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35015){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35015);
});})(g__32877__auto___35015))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__32877__auto___35015){
return (function (seq34958){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34958));
});})(g__32877__auto___35015))
;


var g__32877__auto___35019 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__32877__auto___35019){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35020 = arguments.length;
var i__32655__auto___35021 = (0);
while(true){
if((i__32655__auto___35021 < len__32654__auto___35020)){
args__32661__auto__.push((arguments[i__32655__auto___35021]));

var G__35022 = (i__32655__auto___35021 + (1));
i__32655__auto___35021 = G__35022;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35019))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35019){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35019);
});})(g__32877__auto___35019))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__32877__auto___35019){
return (function (seq34959){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34959));
});})(g__32877__auto___35019))
;


var g__32877__auto___35023 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__32877__auto___35023){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35024 = arguments.length;
var i__32655__auto___35025 = (0);
while(true){
if((i__32655__auto___35025 < len__32654__auto___35024)){
args__32661__auto__.push((arguments[i__32655__auto___35025]));

var G__35026 = (i__32655__auto___35025 + (1));
i__32655__auto___35025 = G__35026;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35023))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35023){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35023);
});})(g__32877__auto___35023))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__32877__auto___35023){
return (function (seq34960){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34960));
});})(g__32877__auto___35023))
;


var g__32877__auto___35027 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__32877__auto___35027){
return (function cljs$spec$impl$gen$string(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35028 = arguments.length;
var i__32655__auto___35029 = (0);
while(true){
if((i__32655__auto___35029 < len__32654__auto___35028)){
args__32661__auto__.push((arguments[i__32655__auto___35029]));

var G__35030 = (i__32655__auto___35029 + (1));
i__32655__auto___35029 = G__35030;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35027))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35027){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35027);
});})(g__32877__auto___35027))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__32877__auto___35027){
return (function (seq34961){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34961));
});})(g__32877__auto___35027))
;


var g__32877__auto___35031 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__32877__auto___35031){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35032 = arguments.length;
var i__32655__auto___35033 = (0);
while(true){
if((i__32655__auto___35033 < len__32654__auto___35032)){
args__32661__auto__.push((arguments[i__32655__auto___35033]));

var G__35034 = (i__32655__auto___35033 + (1));
i__32655__auto___35033 = G__35034;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35031))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35031){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35031);
});})(g__32877__auto___35031))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__32877__auto___35031){
return (function (seq34962){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34962));
});})(g__32877__auto___35031))
;


var g__32877__auto___35035 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__32877__auto___35035){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35036 = arguments.length;
var i__32655__auto___35037 = (0);
while(true){
if((i__32655__auto___35037 < len__32654__auto___35036)){
args__32661__auto__.push((arguments[i__32655__auto___35037]));

var G__35038 = (i__32655__auto___35037 + (1));
i__32655__auto___35037 = G__35038;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35035))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35035){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35035);
});})(g__32877__auto___35035))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__32877__auto___35035){
return (function (seq34963){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34963));
});})(g__32877__auto___35035))
;


var g__32877__auto___35039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__32877__auto___35039){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35040 = arguments.length;
var i__32655__auto___35041 = (0);
while(true){
if((i__32655__auto___35041 < len__32654__auto___35040)){
args__32661__auto__.push((arguments[i__32655__auto___35041]));

var G__35042 = (i__32655__auto___35041 + (1));
i__32655__auto___35041 = G__35042;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35039))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35039){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35039);
});})(g__32877__auto___35039))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__32877__auto___35039){
return (function (seq34964){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34964));
});})(g__32877__auto___35039))
;


var g__32877__auto___35043 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__32877__auto___35043){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35044 = arguments.length;
var i__32655__auto___35045 = (0);
while(true){
if((i__32655__auto___35045 < len__32654__auto___35044)){
args__32661__auto__.push((arguments[i__32655__auto___35045]));

var G__35046 = (i__32655__auto___35045 + (1));
i__32655__auto___35045 = G__35046;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35043))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35043){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35043);
});})(g__32877__auto___35043))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__32877__auto___35043){
return (function (seq34965){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34965));
});})(g__32877__auto___35043))
;


var g__32877__auto___35047 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__32877__auto___35047){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35048 = arguments.length;
var i__32655__auto___35049 = (0);
while(true){
if((i__32655__auto___35049 < len__32654__auto___35048)){
args__32661__auto__.push((arguments[i__32655__auto___35049]));

var G__35050 = (i__32655__auto___35049 + (1));
i__32655__auto___35049 = G__35050;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});})(g__32877__auto___35047))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32877__auto___35047){
return (function (args){
return cljs.core.deref.call(null,g__32877__auto___35047);
});})(g__32877__auto___35047))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__32877__auto___35047){
return (function (seq34966){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34966));
});})(g__32877__auto___35047))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__32661__auto__ = [];
var len__32654__auto___35053 = arguments.length;
var i__32655__auto___35054 = (0);
while(true){
if((i__32655__auto___35054 < len__32654__auto___35053)){
args__32661__auto__.push((arguments[i__32655__auto___35054]));

var G__35055 = (i__32655__auto___35054 + (1));
i__32655__auto___35054 = G__35055;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((0) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__32662__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35051_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35051_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35052){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35052));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35056_SHARP_){
return (new Date(p1__35056_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map