// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__32661__auto__ = [];
var len__32654__auto___43342 = arguments.length;
var i__32655__auto___43343 = (0);
while(true){
if((i__32655__auto___43343 < len__32654__auto___43342)){
args__32661__auto__.push((arguments[i__32655__auto___43343]));

var G__43344 = (i__32655__auto___43343 + (1));
i__32655__auto___43343 = G__43344;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((1) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32662__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__43338){
var vec__43339 = p__43338;
var default$ = cljs.core.nth.call(null,vec__43339,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq43336){
var G__43337 = cljs.core.first.call(null,seq43336);
var seq43336__$1 = cljs.core.next.call(null,seq43336);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__43337,seq43336__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__32661__auto__ = [];
var len__32654__auto___43351 = arguments.length;
var i__32655__auto___43352 = (0);
while(true){
if((i__32655__auto___43352 < len__32654__auto___43351)){
args__32661__auto__.push((arguments[i__32655__auto___43352]));

var G__43353 = (i__32655__auto___43352 + (1));
i__32655__auto___43352 = G__43353;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((1) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32662__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__43347){
var vec__43348 = p__43347;
var default$ = cljs.core.nth.call(null,vec__43348,(0),null);
var or__31579__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__31579__auto__)){
return or__31579__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq43345){
var G__43346 = cljs.core.first.call(null,seq43345);
var seq43345__$1 = cljs.core.next.call(null,seq43345);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__43346,seq43345__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__32661__auto__ = [];
var len__32654__auto___43356 = arguments.length;
var i__32655__auto___43357 = (0);
while(true){
if((i__32655__auto___43357 < len__32654__auto___43356)){
args__32661__auto__.push((arguments[i__32655__auto___43357]));

var G__43358 = (i__32655__auto___43357 + (1));
i__32655__auto___43357 = G__43358;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((1) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32662__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq43354){
var G__43355 = cljs.core.first.call(null,seq43354);
var seq43354__$1 = cljs.core.next.call(null,seq43354);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43355,seq43354__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__32661__auto__ = [];
var len__32654__auto___43365 = arguments.length;
var i__32655__auto___43366 = (0);
while(true){
if((i__32655__auto___43366 < len__32654__auto___43365)){
args__32661__auto__.push((arguments[i__32655__auto___43366]));

var G__43367 = (i__32655__auto___43366 + (1));
i__32655__auto___43366 = G__43367;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((1) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32662__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__43361){
var vec__43362 = p__43361;
var default$ = cljs.core.nth.call(null,vec__43362,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq43359){
var G__43360 = cljs.core.first.call(null,seq43359);
var seq43359__$1 = cljs.core.next.call(null,seq43359);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43360,seq43359__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__32661__auto__ = [];
var len__32654__auto___43374 = arguments.length;
var i__32655__auto___43375 = (0);
while(true){
if((i__32655__auto___43375 < len__32654__auto___43374)){
args__32661__auto__.push((arguments[i__32655__auto___43375]));

var G__43376 = (i__32655__auto___43375 + (1));
i__32655__auto___43375 = G__43376;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((1) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32662__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__43370){
var vec__43371 = p__43370;
var default$ = cljs.core.nth.call(null,vec__43371,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq43368){
var G__43369 = cljs.core.first.call(null,seq43368);
var seq43368__$1 = cljs.core.next.call(null,seq43368);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43369,seq43368__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__32661__auto__ = [];
var len__32654__auto___43381 = arguments.length;
var i__32655__auto___43382 = (0);
while(true){
if((i__32655__auto___43382 < len__32654__auto___43381)){
args__32661__auto__.push((arguments[i__32655__auto___43382]));

var G__43383 = (i__32655__auto___43382 + (1));
i__32655__auto___43382 = G__43383;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((2) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32662__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__43377_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__43377_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq43378){
var G__43379 = cljs.core.first.call(null,seq43378);
var seq43378__$1 = cljs.core.next.call(null,seq43378);
var G__43380 = cljs.core.first.call(null,seq43378__$1);
var seq43378__$2 = cljs.core.next.call(null,seq43378__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43379,G__43380,seq43378__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__32661__auto__ = [];
var len__32654__auto___43388 = arguments.length;
var i__32655__auto___43389 = (0);
while(true){
if((i__32655__auto___43389 < len__32654__auto___43388)){
args__32661__auto__.push((arguments[i__32655__auto___43389]));

var G__43390 = (i__32655__auto___43389 + (1));
i__32655__auto___43389 = G__43390;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((2) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32662__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__43384_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__43384_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq43385){
var G__43386 = cljs.core.first.call(null,seq43385);
var seq43385__$1 = cljs.core.next.call(null,seq43385);
var G__43387 = cljs.core.first.call(null,seq43385__$1);
var seq43385__$2 = cljs.core.next.call(null,seq43385__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43386,G__43387,seq43385__$2);
});


//# sourceMappingURL=session.js.map