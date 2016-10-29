// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async46344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46344 = (function (fn_handler,f,meta46345){
this.fn_handler = fn_handler;
this.f = f;
this.meta46345 = meta46345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46346,meta46345__$1){
var self__ = this;
var _46346__$1 = this;
return (new cljs.core.async.t_cljs$core$async46344(self__.fn_handler,self__.f,meta46345__$1));
});

cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46346){
var self__ = this;
var _46346__$1 = this;
return self__.meta46345;
});

cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta46345","meta46345",436257189,null)], null);
});

cljs.core.async.t_cljs$core$async46344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46344";

cljs.core.async.t_cljs$core$async46344.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cljs.core.async/t_cljs$core$async46344");
});

cljs.core.async.__GT_t_cljs$core$async46344 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async46344(fn_handler__$1,f__$1,meta46345){
return (new cljs.core.async.t_cljs$core$async46344(fn_handler__$1,f__$1,meta46345));
});

}

return (new cljs.core.async.t_cljs$core$async46344(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args46349 = [];
var len__32654__auto___46352 = arguments.length;
var i__32655__auto___46353 = (0);
while(true){
if((i__32655__auto___46353 < len__32654__auto___46352)){
args46349.push((arguments[i__32655__auto___46353]));

var G__46354 = (i__32655__auto___46353 + (1));
i__32655__auto___46353 = G__46354;
continue;
} else {
}
break;
}

var G__46351 = args46349.length;
switch (G__46351) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46349.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args46356 = [];
var len__32654__auto___46359 = arguments.length;
var i__32655__auto___46360 = (0);
while(true){
if((i__32655__auto___46360 < len__32654__auto___46359)){
args46356.push((arguments[i__32655__auto___46360]));

var G__46361 = (i__32655__auto___46360 + (1));
i__32655__auto___46360 = G__46361;
continue;
} else {
}
break;
}

var G__46358 = args46356.length;
switch (G__46358) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46356.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_46363 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46363);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46363,ret){
return (function (){
return fn1.call(null,val_46363);
});})(val_46363,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args46364 = [];
var len__32654__auto___46367 = arguments.length;
var i__32655__auto___46368 = (0);
while(true){
if((i__32655__auto___46368 < len__32654__auto___46367)){
args46364.push((arguments[i__32655__auto___46368]));

var G__46369 = (i__32655__auto___46368 + (1));
i__32655__auto___46368 = G__46369;
continue;
} else {
}
break;
}

var G__46366 = args46364.length;
switch (G__46366) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46364.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__32494__auto___46371 = n;
var x_46372 = (0);
while(true){
if((x_46372 < n__32494__auto___46371)){
(a[x_46372] = (0));

var G__46373 = (x_46372 + (1));
x_46372 = G__46373;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__46374 = (i + (1));
i = G__46374;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46378 = (function (alt_flag,flag,meta46379){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta46379 = meta46379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46380,meta46379__$1){
var self__ = this;
var _46380__$1 = this;
return (new cljs.core.async.t_cljs$core$async46378(self__.alt_flag,self__.flag,meta46379__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46380){
var self__ = this;
var _46380__$1 = this;
return self__.meta46379;
});})(flag))
;

cljs.core.async.t_cljs$core$async46378.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46378.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46379","meta46379",-1979642569,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46378";

cljs.core.async.t_cljs$core$async46378.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cljs.core.async/t_cljs$core$async46378");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46378 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46378(alt_flag__$1,flag__$1,meta46379){
return (new cljs.core.async.t_cljs$core$async46378(alt_flag__$1,flag__$1,meta46379));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46378(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46384 = (function (alt_handler,flag,cb,meta46385){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta46385 = meta46385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46386,meta46385__$1){
var self__ = this;
var _46386__$1 = this;
return (new cljs.core.async.t_cljs$core$async46384(self__.alt_handler,self__.flag,self__.cb,meta46385__$1));
});

cljs.core.async.t_cljs$core$async46384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46386){
var self__ = this;
var _46386__$1 = this;
return self__.meta46385;
});

cljs.core.async.t_cljs$core$async46384.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46385","meta46385",-318325181,null)], null);
});

cljs.core.async.t_cljs$core$async46384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46384";

cljs.core.async.t_cljs$core$async46384.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cljs.core.async/t_cljs$core$async46384");
});

cljs.core.async.__GT_t_cljs$core$async46384 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46384(alt_handler__$1,flag__$1,cb__$1,meta46385){
return (new cljs.core.async.t_cljs$core$async46384(alt_handler__$1,flag__$1,cb__$1,meta46385));
});

}

return (new cljs.core.async.t_cljs$core$async46384(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46387_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46387_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46388_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46388_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__31579__auto__ = wport;
if(cljs.core.truth_(or__31579__auto__)){
return or__31579__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46389 = (i + (1));
i = G__46389;
continue;
}
} else {
return null;
}
break;
}
})();
var or__31579__auto__ = ret;
if(cljs.core.truth_(or__31579__auto__)){
return or__31579__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__31567__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__31567__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__31567__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__32661__auto__ = [];
var len__32654__auto___46395 = arguments.length;
var i__32655__auto___46396 = (0);
while(true){
if((i__32655__auto___46396 < len__32654__auto___46395)){
args__32661__auto__.push((arguments[i__32655__auto___46396]));

var G__46397 = (i__32655__auto___46396 + (1));
i__32655__auto___46396 = G__46397;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((1) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32662__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46392){
var map__46393 = p__46392;
var map__46393__$1 = ((((!((map__46393 == null)))?((((map__46393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46393):map__46393);
var opts = map__46393__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46390){
var G__46391 = cljs.core.first.call(null,seq46390);
var seq46390__$1 = cljs.core.next.call(null,seq46390);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46391,seq46390__$1);
});

/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args46398 = [];
var len__32654__auto___46448 = arguments.length;
var i__32655__auto___46449 = (0);
while(true){
if((i__32655__auto___46449 < len__32654__auto___46448)){
args46398.push((arguments[i__32655__auto___46449]));

var G__46450 = (i__32655__auto___46449 + (1));
i__32655__auto___46449 = G__46450;
continue;
} else {
}
break;
}

var G__46400 = args46398.length;
switch (G__46400) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46398.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37193__auto___46452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___46452){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___46452){
return (function (state_46424){
var state_val_46425 = (state_46424[(1)]);
if((state_val_46425 === (7))){
var inst_46420 = (state_46424[(2)]);
var state_46424__$1 = state_46424;
var statearr_46426_46453 = state_46424__$1;
(statearr_46426_46453[(2)] = inst_46420);

(statearr_46426_46453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46425 === (1))){
var state_46424__$1 = state_46424;
var statearr_46427_46454 = state_46424__$1;
(statearr_46427_46454[(2)] = null);

(statearr_46427_46454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46425 === (4))){
var inst_46403 = (state_46424[(7)]);
var inst_46403__$1 = (state_46424[(2)]);
var inst_46404 = (inst_46403__$1 == null);
var state_46424__$1 = (function (){var statearr_46428 = state_46424;
(statearr_46428[(7)] = inst_46403__$1);

return statearr_46428;
})();
if(cljs.core.truth_(inst_46404)){
var statearr_46429_46455 = state_46424__$1;
(statearr_46429_46455[(1)] = (5));

} else {
var statearr_46430_46456 = state_46424__$1;
(statearr_46430_46456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46425 === (13))){
var state_46424__$1 = state_46424;
var statearr_46431_46457 = state_46424__$1;
(statearr_46431_46457[(2)] = null);

(statearr_46431_46457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46425 === (6))){
var inst_46403 = (state_46424[(7)]);
var state_46424__$1 = state_46424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46424__$1,(11),to,inst_46403);
} else {
if((state_val_46425 === (3))){
var inst_46422 = (state_46424[(2)]);
var state_46424__$1 = state_46424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46424__$1,inst_46422);
} else {
if((state_val_46425 === (12))){
var state_46424__$1 = state_46424;
var statearr_46432_46458 = state_46424__$1;
(statearr_46432_46458[(2)] = null);

(statearr_46432_46458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46425 === (2))){
var state_46424__$1 = state_46424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46424__$1,(4),from);
} else {
if((state_val_46425 === (11))){
var inst_46413 = (state_46424[(2)]);
var state_46424__$1 = state_46424;
if(cljs.core.truth_(inst_46413)){
var statearr_46433_46459 = state_46424__$1;
(statearr_46433_46459[(1)] = (12));

} else {
var statearr_46434_46460 = state_46424__$1;
(statearr_46434_46460[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46425 === (9))){
var state_46424__$1 = state_46424;
var statearr_46435_46461 = state_46424__$1;
(statearr_46435_46461[(2)] = null);

(statearr_46435_46461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46425 === (5))){
var state_46424__$1 = state_46424;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46436_46462 = state_46424__$1;
(statearr_46436_46462[(1)] = (8));

} else {
var statearr_46437_46463 = state_46424__$1;
(statearr_46437_46463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46425 === (14))){
var inst_46418 = (state_46424[(2)]);
var state_46424__$1 = state_46424;
var statearr_46438_46464 = state_46424__$1;
(statearr_46438_46464[(2)] = inst_46418);

(statearr_46438_46464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46425 === (10))){
var inst_46410 = (state_46424[(2)]);
var state_46424__$1 = state_46424;
var statearr_46439_46465 = state_46424__$1;
(statearr_46439_46465[(2)] = inst_46410);

(statearr_46439_46465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46425 === (8))){
var inst_46407 = cljs.core.async.close_BANG_.call(null,to);
var state_46424__$1 = state_46424;
var statearr_46440_46466 = state_46424__$1;
(statearr_46440_46466[(2)] = inst_46407);

(statearr_46440_46466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___46452))
;
return ((function (switch__37128__auto__,c__37193__auto___46452){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_46444 = [null,null,null,null,null,null,null,null];
(statearr_46444[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_46444[(1)] = (1));

return statearr_46444;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_46424){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_46424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e46445){if((e46445 instanceof Object)){
var ex__37132__auto__ = e46445;
var statearr_46446_46467 = state_46424;
(statearr_46446_46467[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46468 = state_46424;
state_46424 = G__46468;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_46424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_46424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___46452))
})();
var state__37195__auto__ = (function (){var statearr_46447 = f__37194__auto__.call(null);
(statearr_46447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___46452);

return statearr_46447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___46452))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__46656){
var vec__46657 = p__46656;
var v = cljs.core.nth.call(null,vec__46657,(0),null);
var p = cljs.core.nth.call(null,vec__46657,(1),null);
var job = vec__46657;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37193__auto___46843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___46843,res,vec__46657,v,p,job,jobs,results){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___46843,res,vec__46657,v,p,job,jobs,results){
return (function (state_46664){
var state_val_46665 = (state_46664[(1)]);
if((state_val_46665 === (1))){
var state_46664__$1 = state_46664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46664__$1,(2),res,v);
} else {
if((state_val_46665 === (2))){
var inst_46661 = (state_46664[(2)]);
var inst_46662 = cljs.core.async.close_BANG_.call(null,res);
var state_46664__$1 = (function (){var statearr_46666 = state_46664;
(statearr_46666[(7)] = inst_46661);

return statearr_46666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46664__$1,inst_46662);
} else {
return null;
}
}
});})(c__37193__auto___46843,res,vec__46657,v,p,job,jobs,results))
;
return ((function (switch__37128__auto__,c__37193__auto___46843,res,vec__46657,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_46670 = [null,null,null,null,null,null,null,null];
(statearr_46670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__);

(statearr_46670[(1)] = (1));

return statearr_46670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1 = (function (state_46664){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_46664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e46671){if((e46671 instanceof Object)){
var ex__37132__auto__ = e46671;
var statearr_46672_46844 = state_46664;
(statearr_46672_46844[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46845 = state_46664;
state_46664 = G__46845;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = function(state_46664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1.call(this,state_46664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___46843,res,vec__46657,v,p,job,jobs,results))
})();
var state__37195__auto__ = (function (){var statearr_46673 = f__37194__auto__.call(null);
(statearr_46673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___46843);

return statearr_46673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___46843,res,vec__46657,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46674){
var vec__46675 = p__46674;
var v = cljs.core.nth.call(null,vec__46675,(0),null);
var p = cljs.core.nth.call(null,vec__46675,(1),null);
var job = vec__46675;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__32494__auto___46846 = n;
var __46847 = (0);
while(true){
if((__46847 < n__32494__auto___46846)){
var G__46678_46848 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__46678_46848) {
case "compute":
var c__37193__auto___46850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46847,c__37193__auto___46850,G__46678_46848,n__32494__auto___46846,jobs,results,process,async){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (__46847,c__37193__auto___46850,G__46678_46848,n__32494__auto___46846,jobs,results,process,async){
return (function (state_46691){
var state_val_46692 = (state_46691[(1)]);
if((state_val_46692 === (1))){
var state_46691__$1 = state_46691;
var statearr_46693_46851 = state_46691__$1;
(statearr_46693_46851[(2)] = null);

(statearr_46693_46851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46692 === (2))){
var state_46691__$1 = state_46691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46691__$1,(4),jobs);
} else {
if((state_val_46692 === (3))){
var inst_46689 = (state_46691[(2)]);
var state_46691__$1 = state_46691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46691__$1,inst_46689);
} else {
if((state_val_46692 === (4))){
var inst_46681 = (state_46691[(2)]);
var inst_46682 = process.call(null,inst_46681);
var state_46691__$1 = state_46691;
if(cljs.core.truth_(inst_46682)){
var statearr_46694_46852 = state_46691__$1;
(statearr_46694_46852[(1)] = (5));

} else {
var statearr_46695_46853 = state_46691__$1;
(statearr_46695_46853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46692 === (5))){
var state_46691__$1 = state_46691;
var statearr_46696_46854 = state_46691__$1;
(statearr_46696_46854[(2)] = null);

(statearr_46696_46854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46692 === (6))){
var state_46691__$1 = state_46691;
var statearr_46697_46855 = state_46691__$1;
(statearr_46697_46855[(2)] = null);

(statearr_46697_46855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46692 === (7))){
var inst_46687 = (state_46691[(2)]);
var state_46691__$1 = state_46691;
var statearr_46698_46856 = state_46691__$1;
(statearr_46698_46856[(2)] = inst_46687);

(statearr_46698_46856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46847,c__37193__auto___46850,G__46678_46848,n__32494__auto___46846,jobs,results,process,async))
;
return ((function (__46847,switch__37128__auto__,c__37193__auto___46850,G__46678_46848,n__32494__auto___46846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_46702 = [null,null,null,null,null,null,null];
(statearr_46702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__);

(statearr_46702[(1)] = (1));

return statearr_46702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1 = (function (state_46691){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_46691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e46703){if((e46703 instanceof Object)){
var ex__37132__auto__ = e46703;
var statearr_46704_46857 = state_46691;
(statearr_46704_46857[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46858 = state_46691;
state_46691 = G__46858;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = function(state_46691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1.call(this,state_46691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__;
})()
;})(__46847,switch__37128__auto__,c__37193__auto___46850,G__46678_46848,n__32494__auto___46846,jobs,results,process,async))
})();
var state__37195__auto__ = (function (){var statearr_46705 = f__37194__auto__.call(null);
(statearr_46705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___46850);

return statearr_46705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(__46847,c__37193__auto___46850,G__46678_46848,n__32494__auto___46846,jobs,results,process,async))
);


break;
case "async":
var c__37193__auto___46859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46847,c__37193__auto___46859,G__46678_46848,n__32494__auto___46846,jobs,results,process,async){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (__46847,c__37193__auto___46859,G__46678_46848,n__32494__auto___46846,jobs,results,process,async){
return (function (state_46718){
var state_val_46719 = (state_46718[(1)]);
if((state_val_46719 === (1))){
var state_46718__$1 = state_46718;
var statearr_46720_46860 = state_46718__$1;
(statearr_46720_46860[(2)] = null);

(statearr_46720_46860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46719 === (2))){
var state_46718__$1 = state_46718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46718__$1,(4),jobs);
} else {
if((state_val_46719 === (3))){
var inst_46716 = (state_46718[(2)]);
var state_46718__$1 = state_46718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46718__$1,inst_46716);
} else {
if((state_val_46719 === (4))){
var inst_46708 = (state_46718[(2)]);
var inst_46709 = async.call(null,inst_46708);
var state_46718__$1 = state_46718;
if(cljs.core.truth_(inst_46709)){
var statearr_46721_46861 = state_46718__$1;
(statearr_46721_46861[(1)] = (5));

} else {
var statearr_46722_46862 = state_46718__$1;
(statearr_46722_46862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46719 === (5))){
var state_46718__$1 = state_46718;
var statearr_46723_46863 = state_46718__$1;
(statearr_46723_46863[(2)] = null);

(statearr_46723_46863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46719 === (6))){
var state_46718__$1 = state_46718;
var statearr_46724_46864 = state_46718__$1;
(statearr_46724_46864[(2)] = null);

(statearr_46724_46864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46719 === (7))){
var inst_46714 = (state_46718[(2)]);
var state_46718__$1 = state_46718;
var statearr_46725_46865 = state_46718__$1;
(statearr_46725_46865[(2)] = inst_46714);

(statearr_46725_46865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46847,c__37193__auto___46859,G__46678_46848,n__32494__auto___46846,jobs,results,process,async))
;
return ((function (__46847,switch__37128__auto__,c__37193__auto___46859,G__46678_46848,n__32494__auto___46846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_46729 = [null,null,null,null,null,null,null];
(statearr_46729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__);

(statearr_46729[(1)] = (1));

return statearr_46729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1 = (function (state_46718){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_46718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e46730){if((e46730 instanceof Object)){
var ex__37132__auto__ = e46730;
var statearr_46731_46866 = state_46718;
(statearr_46731_46866[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46867 = state_46718;
state_46718 = G__46867;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = function(state_46718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1.call(this,state_46718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__;
})()
;})(__46847,switch__37128__auto__,c__37193__auto___46859,G__46678_46848,n__32494__auto___46846,jobs,results,process,async))
})();
var state__37195__auto__ = (function (){var statearr_46732 = f__37194__auto__.call(null);
(statearr_46732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___46859);

return statearr_46732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(__46847,c__37193__auto___46859,G__46678_46848,n__32494__auto___46846,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__46868 = (__46847 + (1));
__46847 = G__46868;
continue;
} else {
}
break;
}

var c__37193__auto___46869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___46869,jobs,results,process,async){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___46869,jobs,results,process,async){
return (function (state_46754){
var state_val_46755 = (state_46754[(1)]);
if((state_val_46755 === (1))){
var state_46754__$1 = state_46754;
var statearr_46756_46870 = state_46754__$1;
(statearr_46756_46870[(2)] = null);

(statearr_46756_46870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (2))){
var state_46754__$1 = state_46754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46754__$1,(4),from);
} else {
if((state_val_46755 === (3))){
var inst_46752 = (state_46754[(2)]);
var state_46754__$1 = state_46754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46754__$1,inst_46752);
} else {
if((state_val_46755 === (4))){
var inst_46735 = (state_46754[(7)]);
var inst_46735__$1 = (state_46754[(2)]);
var inst_46736 = (inst_46735__$1 == null);
var state_46754__$1 = (function (){var statearr_46757 = state_46754;
(statearr_46757[(7)] = inst_46735__$1);

return statearr_46757;
})();
if(cljs.core.truth_(inst_46736)){
var statearr_46758_46871 = state_46754__$1;
(statearr_46758_46871[(1)] = (5));

} else {
var statearr_46759_46872 = state_46754__$1;
(statearr_46759_46872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (5))){
var inst_46738 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46754__$1 = state_46754;
var statearr_46760_46873 = state_46754__$1;
(statearr_46760_46873[(2)] = inst_46738);

(statearr_46760_46873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (6))){
var inst_46740 = (state_46754[(8)]);
var inst_46735 = (state_46754[(7)]);
var inst_46740__$1 = cljs.core.async.chan.call(null,(1));
var inst_46741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46742 = [inst_46735,inst_46740__$1];
var inst_46743 = (new cljs.core.PersistentVector(null,2,(5),inst_46741,inst_46742,null));
var state_46754__$1 = (function (){var statearr_46761 = state_46754;
(statearr_46761[(8)] = inst_46740__$1);

return statearr_46761;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46754__$1,(8),jobs,inst_46743);
} else {
if((state_val_46755 === (7))){
var inst_46750 = (state_46754[(2)]);
var state_46754__$1 = state_46754;
var statearr_46762_46874 = state_46754__$1;
(statearr_46762_46874[(2)] = inst_46750);

(statearr_46762_46874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46755 === (8))){
var inst_46740 = (state_46754[(8)]);
var inst_46745 = (state_46754[(2)]);
var state_46754__$1 = (function (){var statearr_46763 = state_46754;
(statearr_46763[(9)] = inst_46745);

return statearr_46763;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46754__$1,(9),results,inst_46740);
} else {
if((state_val_46755 === (9))){
var inst_46747 = (state_46754[(2)]);
var state_46754__$1 = (function (){var statearr_46764 = state_46754;
(statearr_46764[(10)] = inst_46747);

return statearr_46764;
})();
var statearr_46765_46875 = state_46754__$1;
(statearr_46765_46875[(2)] = null);

(statearr_46765_46875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___46869,jobs,results,process,async))
;
return ((function (switch__37128__auto__,c__37193__auto___46869,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_46769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__);

(statearr_46769[(1)] = (1));

return statearr_46769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1 = (function (state_46754){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_46754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e46770){if((e46770 instanceof Object)){
var ex__37132__auto__ = e46770;
var statearr_46771_46876 = state_46754;
(statearr_46771_46876[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46877 = state_46754;
state_46754 = G__46877;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = function(state_46754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1.call(this,state_46754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___46869,jobs,results,process,async))
})();
var state__37195__auto__ = (function (){var statearr_46772 = f__37194__auto__.call(null);
(statearr_46772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___46869);

return statearr_46772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___46869,jobs,results,process,async))
);


var c__37193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto__,jobs,results,process,async){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto__,jobs,results,process,async){
return (function (state_46810){
var state_val_46811 = (state_46810[(1)]);
if((state_val_46811 === (7))){
var inst_46806 = (state_46810[(2)]);
var state_46810__$1 = state_46810;
var statearr_46812_46878 = state_46810__$1;
(statearr_46812_46878[(2)] = inst_46806);

(statearr_46812_46878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (20))){
var state_46810__$1 = state_46810;
var statearr_46813_46879 = state_46810__$1;
(statearr_46813_46879[(2)] = null);

(statearr_46813_46879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (1))){
var state_46810__$1 = state_46810;
var statearr_46814_46880 = state_46810__$1;
(statearr_46814_46880[(2)] = null);

(statearr_46814_46880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (4))){
var inst_46775 = (state_46810[(7)]);
var inst_46775__$1 = (state_46810[(2)]);
var inst_46776 = (inst_46775__$1 == null);
var state_46810__$1 = (function (){var statearr_46815 = state_46810;
(statearr_46815[(7)] = inst_46775__$1);

return statearr_46815;
})();
if(cljs.core.truth_(inst_46776)){
var statearr_46816_46881 = state_46810__$1;
(statearr_46816_46881[(1)] = (5));

} else {
var statearr_46817_46882 = state_46810__$1;
(statearr_46817_46882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (15))){
var inst_46788 = (state_46810[(8)]);
var state_46810__$1 = state_46810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46810__$1,(18),to,inst_46788);
} else {
if((state_val_46811 === (21))){
var inst_46801 = (state_46810[(2)]);
var state_46810__$1 = state_46810;
var statearr_46818_46883 = state_46810__$1;
(statearr_46818_46883[(2)] = inst_46801);

(statearr_46818_46883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (13))){
var inst_46803 = (state_46810[(2)]);
var state_46810__$1 = (function (){var statearr_46819 = state_46810;
(statearr_46819[(9)] = inst_46803);

return statearr_46819;
})();
var statearr_46820_46884 = state_46810__$1;
(statearr_46820_46884[(2)] = null);

(statearr_46820_46884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (6))){
var inst_46775 = (state_46810[(7)]);
var state_46810__$1 = state_46810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46810__$1,(11),inst_46775);
} else {
if((state_val_46811 === (17))){
var inst_46796 = (state_46810[(2)]);
var state_46810__$1 = state_46810;
if(cljs.core.truth_(inst_46796)){
var statearr_46821_46885 = state_46810__$1;
(statearr_46821_46885[(1)] = (19));

} else {
var statearr_46822_46886 = state_46810__$1;
(statearr_46822_46886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (3))){
var inst_46808 = (state_46810[(2)]);
var state_46810__$1 = state_46810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46810__$1,inst_46808);
} else {
if((state_val_46811 === (12))){
var inst_46785 = (state_46810[(10)]);
var state_46810__$1 = state_46810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46810__$1,(14),inst_46785);
} else {
if((state_val_46811 === (2))){
var state_46810__$1 = state_46810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46810__$1,(4),results);
} else {
if((state_val_46811 === (19))){
var state_46810__$1 = state_46810;
var statearr_46823_46887 = state_46810__$1;
(statearr_46823_46887[(2)] = null);

(statearr_46823_46887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (11))){
var inst_46785 = (state_46810[(2)]);
var state_46810__$1 = (function (){var statearr_46824 = state_46810;
(statearr_46824[(10)] = inst_46785);

return statearr_46824;
})();
var statearr_46825_46888 = state_46810__$1;
(statearr_46825_46888[(2)] = null);

(statearr_46825_46888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (9))){
var state_46810__$1 = state_46810;
var statearr_46826_46889 = state_46810__$1;
(statearr_46826_46889[(2)] = null);

(statearr_46826_46889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (5))){
var state_46810__$1 = state_46810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46827_46890 = state_46810__$1;
(statearr_46827_46890[(1)] = (8));

} else {
var statearr_46828_46891 = state_46810__$1;
(statearr_46828_46891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (14))){
var inst_46788 = (state_46810[(8)]);
var inst_46790 = (state_46810[(11)]);
var inst_46788__$1 = (state_46810[(2)]);
var inst_46789 = (inst_46788__$1 == null);
var inst_46790__$1 = cljs.core.not.call(null,inst_46789);
var state_46810__$1 = (function (){var statearr_46829 = state_46810;
(statearr_46829[(8)] = inst_46788__$1);

(statearr_46829[(11)] = inst_46790__$1);

return statearr_46829;
})();
if(inst_46790__$1){
var statearr_46830_46892 = state_46810__$1;
(statearr_46830_46892[(1)] = (15));

} else {
var statearr_46831_46893 = state_46810__$1;
(statearr_46831_46893[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (16))){
var inst_46790 = (state_46810[(11)]);
var state_46810__$1 = state_46810;
var statearr_46832_46894 = state_46810__$1;
(statearr_46832_46894[(2)] = inst_46790);

(statearr_46832_46894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (10))){
var inst_46782 = (state_46810[(2)]);
var state_46810__$1 = state_46810;
var statearr_46833_46895 = state_46810__$1;
(statearr_46833_46895[(2)] = inst_46782);

(statearr_46833_46895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (18))){
var inst_46793 = (state_46810[(2)]);
var state_46810__$1 = state_46810;
var statearr_46834_46896 = state_46810__$1;
(statearr_46834_46896[(2)] = inst_46793);

(statearr_46834_46896[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46811 === (8))){
var inst_46779 = cljs.core.async.close_BANG_.call(null,to);
var state_46810__$1 = state_46810;
var statearr_46835_46897 = state_46810__$1;
(statearr_46835_46897[(2)] = inst_46779);

(statearr_46835_46897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto__,jobs,results,process,async))
;
return ((function (switch__37128__auto__,c__37193__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_46839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__);

(statearr_46839[(1)] = (1));

return statearr_46839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1 = (function (state_46810){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_46810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e46840){if((e46840 instanceof Object)){
var ex__37132__auto__ = e46840;
var statearr_46841_46898 = state_46810;
(statearr_46841_46898[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46899 = state_46810;
state_46810 = G__46899;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = function(state_46810){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1.call(this,state_46810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto__,jobs,results,process,async))
})();
var state__37195__auto__ = (function (){var statearr_46842 = f__37194__auto__.call(null);
(statearr_46842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto__);

return statearr_46842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto__,jobs,results,process,async))
);

return c__37193__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args46900 = [];
var len__32654__auto___46903 = arguments.length;
var i__32655__auto___46904 = (0);
while(true){
if((i__32655__auto___46904 < len__32654__auto___46903)){
args46900.push((arguments[i__32655__auto___46904]));

var G__46905 = (i__32655__auto___46904 + (1));
i__32655__auto___46904 = G__46905;
continue;
} else {
}
break;
}

var G__46902 = args46900.length;
switch (G__46902) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46900.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args46907 = [];
var len__32654__auto___46910 = arguments.length;
var i__32655__auto___46911 = (0);
while(true){
if((i__32655__auto___46911 < len__32654__auto___46910)){
args46907.push((arguments[i__32655__auto___46911]));

var G__46912 = (i__32655__auto___46911 + (1));
i__32655__auto___46911 = G__46912;
continue;
} else {
}
break;
}

var G__46909 = args46907.length;
switch (G__46909) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46907.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args46914 = [];
var len__32654__auto___46967 = arguments.length;
var i__32655__auto___46968 = (0);
while(true){
if((i__32655__auto___46968 < len__32654__auto___46967)){
args46914.push((arguments[i__32655__auto___46968]));

var G__46969 = (i__32655__auto___46968 + (1));
i__32655__auto___46968 = G__46969;
continue;
} else {
}
break;
}

var G__46916 = args46914.length;
switch (G__46916) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46914.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37193__auto___46971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___46971,tc,fc){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___46971,tc,fc){
return (function (state_46942){
var state_val_46943 = (state_46942[(1)]);
if((state_val_46943 === (7))){
var inst_46938 = (state_46942[(2)]);
var state_46942__$1 = state_46942;
var statearr_46944_46972 = state_46942__$1;
(statearr_46944_46972[(2)] = inst_46938);

(statearr_46944_46972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46943 === (1))){
var state_46942__$1 = state_46942;
var statearr_46945_46973 = state_46942__$1;
(statearr_46945_46973[(2)] = null);

(statearr_46945_46973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46943 === (4))){
var inst_46919 = (state_46942[(7)]);
var inst_46919__$1 = (state_46942[(2)]);
var inst_46920 = (inst_46919__$1 == null);
var state_46942__$1 = (function (){var statearr_46946 = state_46942;
(statearr_46946[(7)] = inst_46919__$1);

return statearr_46946;
})();
if(cljs.core.truth_(inst_46920)){
var statearr_46947_46974 = state_46942__$1;
(statearr_46947_46974[(1)] = (5));

} else {
var statearr_46948_46975 = state_46942__$1;
(statearr_46948_46975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46943 === (13))){
var state_46942__$1 = state_46942;
var statearr_46949_46976 = state_46942__$1;
(statearr_46949_46976[(2)] = null);

(statearr_46949_46976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46943 === (6))){
var inst_46919 = (state_46942[(7)]);
var inst_46925 = p.call(null,inst_46919);
var state_46942__$1 = state_46942;
if(cljs.core.truth_(inst_46925)){
var statearr_46950_46977 = state_46942__$1;
(statearr_46950_46977[(1)] = (9));

} else {
var statearr_46951_46978 = state_46942__$1;
(statearr_46951_46978[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46943 === (3))){
var inst_46940 = (state_46942[(2)]);
var state_46942__$1 = state_46942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46942__$1,inst_46940);
} else {
if((state_val_46943 === (12))){
var state_46942__$1 = state_46942;
var statearr_46952_46979 = state_46942__$1;
(statearr_46952_46979[(2)] = null);

(statearr_46952_46979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46943 === (2))){
var state_46942__$1 = state_46942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46942__$1,(4),ch);
} else {
if((state_val_46943 === (11))){
var inst_46919 = (state_46942[(7)]);
var inst_46929 = (state_46942[(2)]);
var state_46942__$1 = state_46942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46942__$1,(8),inst_46929,inst_46919);
} else {
if((state_val_46943 === (9))){
var state_46942__$1 = state_46942;
var statearr_46953_46980 = state_46942__$1;
(statearr_46953_46980[(2)] = tc);

(statearr_46953_46980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46943 === (5))){
var inst_46922 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46923 = cljs.core.async.close_BANG_.call(null,fc);
var state_46942__$1 = (function (){var statearr_46954 = state_46942;
(statearr_46954[(8)] = inst_46922);

return statearr_46954;
})();
var statearr_46955_46981 = state_46942__$1;
(statearr_46955_46981[(2)] = inst_46923);

(statearr_46955_46981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46943 === (14))){
var inst_46936 = (state_46942[(2)]);
var state_46942__$1 = state_46942;
var statearr_46956_46982 = state_46942__$1;
(statearr_46956_46982[(2)] = inst_46936);

(statearr_46956_46982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46943 === (10))){
var state_46942__$1 = state_46942;
var statearr_46957_46983 = state_46942__$1;
(statearr_46957_46983[(2)] = fc);

(statearr_46957_46983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46943 === (8))){
var inst_46931 = (state_46942[(2)]);
var state_46942__$1 = state_46942;
if(cljs.core.truth_(inst_46931)){
var statearr_46958_46984 = state_46942__$1;
(statearr_46958_46984[(1)] = (12));

} else {
var statearr_46959_46985 = state_46942__$1;
(statearr_46959_46985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___46971,tc,fc))
;
return ((function (switch__37128__auto__,c__37193__auto___46971,tc,fc){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_46963 = [null,null,null,null,null,null,null,null,null];
(statearr_46963[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_46963[(1)] = (1));

return statearr_46963;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_46942){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_46942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e46964){if((e46964 instanceof Object)){
var ex__37132__auto__ = e46964;
var statearr_46965_46986 = state_46942;
(statearr_46965_46986[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46987 = state_46942;
state_46942 = G__46987;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_46942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_46942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___46971,tc,fc))
})();
var state__37195__auto__ = (function (){var statearr_46966 = f__37194__auto__.call(null);
(statearr_46966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___46971);

return statearr_46966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___46971,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto__){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto__){
return (function (state_47034){
var state_val_47035 = (state_47034[(1)]);
if((state_val_47035 === (1))){
var inst_47020 = init;
var state_47034__$1 = (function (){var statearr_47036 = state_47034;
(statearr_47036[(7)] = inst_47020);

return statearr_47036;
})();
var statearr_47037_47052 = state_47034__$1;
(statearr_47037_47052[(2)] = null);

(statearr_47037_47052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (2))){
var state_47034__$1 = state_47034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47034__$1,(4),ch);
} else {
if((state_val_47035 === (3))){
var inst_47032 = (state_47034[(2)]);
var state_47034__$1 = state_47034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47034__$1,inst_47032);
} else {
if((state_val_47035 === (4))){
var inst_47023 = (state_47034[(8)]);
var inst_47023__$1 = (state_47034[(2)]);
var inst_47024 = (inst_47023__$1 == null);
var state_47034__$1 = (function (){var statearr_47038 = state_47034;
(statearr_47038[(8)] = inst_47023__$1);

return statearr_47038;
})();
if(cljs.core.truth_(inst_47024)){
var statearr_47039_47053 = state_47034__$1;
(statearr_47039_47053[(1)] = (5));

} else {
var statearr_47040_47054 = state_47034__$1;
(statearr_47040_47054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (5))){
var inst_47020 = (state_47034[(7)]);
var state_47034__$1 = state_47034;
var statearr_47041_47055 = state_47034__$1;
(statearr_47041_47055[(2)] = inst_47020);

(statearr_47041_47055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (6))){
var inst_47023 = (state_47034[(8)]);
var inst_47020 = (state_47034[(7)]);
var inst_47027 = f.call(null,inst_47020,inst_47023);
var inst_47020__$1 = inst_47027;
var state_47034__$1 = (function (){var statearr_47042 = state_47034;
(statearr_47042[(7)] = inst_47020__$1);

return statearr_47042;
})();
var statearr_47043_47056 = state_47034__$1;
(statearr_47043_47056[(2)] = null);

(statearr_47043_47056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47035 === (7))){
var inst_47030 = (state_47034[(2)]);
var state_47034__$1 = state_47034;
var statearr_47044_47057 = state_47034__$1;
(statearr_47044_47057[(2)] = inst_47030);

(statearr_47044_47057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__37193__auto__))
;
return ((function (switch__37128__auto__,c__37193__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37129__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37129__auto____0 = (function (){
var statearr_47048 = [null,null,null,null,null,null,null,null,null];
(statearr_47048[(0)] = cljs$core$async$reduce_$_state_machine__37129__auto__);

(statearr_47048[(1)] = (1));

return statearr_47048;
});
var cljs$core$async$reduce_$_state_machine__37129__auto____1 = (function (state_47034){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_47034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e47049){if((e47049 instanceof Object)){
var ex__37132__auto__ = e47049;
var statearr_47050_47058 = state_47034;
(statearr_47050_47058[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47059 = state_47034;
state_47034 = G__47059;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37129__auto__ = function(state_47034){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37129__auto____1.call(this,state_47034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37129__auto____0;
cljs$core$async$reduce_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37129__auto____1;
return cljs$core$async$reduce_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto__))
})();
var state__37195__auto__ = (function (){var statearr_47051 = f__37194__auto__.call(null);
(statearr_47051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto__);

return statearr_47051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto__))
);

return c__37193__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args47060 = [];
var len__32654__auto___47112 = arguments.length;
var i__32655__auto___47113 = (0);
while(true){
if((i__32655__auto___47113 < len__32654__auto___47112)){
args47060.push((arguments[i__32655__auto___47113]));

var G__47114 = (i__32655__auto___47113 + (1));
i__32655__auto___47113 = G__47114;
continue;
} else {
}
break;
}

var G__47062 = args47060.length;
switch (G__47062) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47060.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto__){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto__){
return (function (state_47087){
var state_val_47088 = (state_47087[(1)]);
if((state_val_47088 === (7))){
var inst_47069 = (state_47087[(2)]);
var state_47087__$1 = state_47087;
var statearr_47089_47116 = state_47087__$1;
(statearr_47089_47116[(2)] = inst_47069);

(statearr_47089_47116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (1))){
var inst_47063 = cljs.core.seq.call(null,coll);
var inst_47064 = inst_47063;
var state_47087__$1 = (function (){var statearr_47090 = state_47087;
(statearr_47090[(7)] = inst_47064);

return statearr_47090;
})();
var statearr_47091_47117 = state_47087__$1;
(statearr_47091_47117[(2)] = null);

(statearr_47091_47117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (4))){
var inst_47064 = (state_47087[(7)]);
var inst_47067 = cljs.core.first.call(null,inst_47064);
var state_47087__$1 = state_47087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47087__$1,(7),ch,inst_47067);
} else {
if((state_val_47088 === (13))){
var inst_47081 = (state_47087[(2)]);
var state_47087__$1 = state_47087;
var statearr_47092_47118 = state_47087__$1;
(statearr_47092_47118[(2)] = inst_47081);

(statearr_47092_47118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (6))){
var inst_47072 = (state_47087[(2)]);
var state_47087__$1 = state_47087;
if(cljs.core.truth_(inst_47072)){
var statearr_47093_47119 = state_47087__$1;
(statearr_47093_47119[(1)] = (8));

} else {
var statearr_47094_47120 = state_47087__$1;
(statearr_47094_47120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (3))){
var inst_47085 = (state_47087[(2)]);
var state_47087__$1 = state_47087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47087__$1,inst_47085);
} else {
if((state_val_47088 === (12))){
var state_47087__$1 = state_47087;
var statearr_47095_47121 = state_47087__$1;
(statearr_47095_47121[(2)] = null);

(statearr_47095_47121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (2))){
var inst_47064 = (state_47087[(7)]);
var state_47087__$1 = state_47087;
if(cljs.core.truth_(inst_47064)){
var statearr_47096_47122 = state_47087__$1;
(statearr_47096_47122[(1)] = (4));

} else {
var statearr_47097_47123 = state_47087__$1;
(statearr_47097_47123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (11))){
var inst_47078 = cljs.core.async.close_BANG_.call(null,ch);
var state_47087__$1 = state_47087;
var statearr_47098_47124 = state_47087__$1;
(statearr_47098_47124[(2)] = inst_47078);

(statearr_47098_47124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (9))){
var state_47087__$1 = state_47087;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47099_47125 = state_47087__$1;
(statearr_47099_47125[(1)] = (11));

} else {
var statearr_47100_47126 = state_47087__$1;
(statearr_47100_47126[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (5))){
var inst_47064 = (state_47087[(7)]);
var state_47087__$1 = state_47087;
var statearr_47101_47127 = state_47087__$1;
(statearr_47101_47127[(2)] = inst_47064);

(statearr_47101_47127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (10))){
var inst_47083 = (state_47087[(2)]);
var state_47087__$1 = state_47087;
var statearr_47102_47128 = state_47087__$1;
(statearr_47102_47128[(2)] = inst_47083);

(statearr_47102_47128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (8))){
var inst_47064 = (state_47087[(7)]);
var inst_47074 = cljs.core.next.call(null,inst_47064);
var inst_47064__$1 = inst_47074;
var state_47087__$1 = (function (){var statearr_47103 = state_47087;
(statearr_47103[(7)] = inst_47064__$1);

return statearr_47103;
})();
var statearr_47104_47129 = state_47087__$1;
(statearr_47104_47129[(2)] = null);

(statearr_47104_47129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto__))
;
return ((function (switch__37128__auto__,c__37193__auto__){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_47108 = [null,null,null,null,null,null,null,null];
(statearr_47108[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_47108[(1)] = (1));

return statearr_47108;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_47087){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_47087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e47109){if((e47109 instanceof Object)){
var ex__37132__auto__ = e47109;
var statearr_47110_47130 = state_47087;
(statearr_47110_47130[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47131 = state_47087;
state_47087 = G__47131;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_47087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_47087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto__))
})();
var state__37195__auto__ = (function (){var statearr_47111 = f__37194__auto__.call(null);
(statearr_47111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto__);

return statearr_47111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto__))
);

return c__37193__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__32242__auto__ = (((_ == null))?null:_);
var m__32243__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,_);
} else {
var m__32243__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__32242__auto__ = (((m == null))?null:m);
var m__32243__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__32243__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__32242__auto__ = (((m == null))?null:m);
var m__32243__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,m,ch);
} else {
var m__32243__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__32242__auto__ = (((m == null))?null:m);
var m__32243__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,m);
} else {
var m__32243__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47357 = (function (mult,ch,cs,meta47358){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta47358 = meta47358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47359,meta47358__$1){
var self__ = this;
var _47359__$1 = this;
return (new cljs.core.async.t_cljs$core$async47357(self__.mult,self__.ch,self__.cs,meta47358__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47359){
var self__ = this;
var _47359__$1 = this;
return self__.meta47358;
});})(cs))
;

cljs.core.async.t_cljs$core$async47357.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47357.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async47357.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47357.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47357.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47357.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47358","meta47358",-283513424,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47357";

cljs.core.async.t_cljs$core$async47357.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cljs.core.async/t_cljs$core$async47357");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47357 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47357(mult__$1,ch__$1,cs__$1,meta47358){
return (new cljs.core.async.t_cljs$core$async47357(mult__$1,ch__$1,cs__$1,meta47358));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47357(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37193__auto___47582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___47582,cs,m,dchan,dctr,done){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___47582,cs,m,dchan,dctr,done){
return (function (state_47494){
var state_val_47495 = (state_47494[(1)]);
if((state_val_47495 === (7))){
var inst_47490 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47496_47583 = state_47494__$1;
(statearr_47496_47583[(2)] = inst_47490);

(statearr_47496_47583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (20))){
var inst_47393 = (state_47494[(7)]);
var inst_47405 = cljs.core.first.call(null,inst_47393);
var inst_47406 = cljs.core.nth.call(null,inst_47405,(0),null);
var inst_47407 = cljs.core.nth.call(null,inst_47405,(1),null);
var state_47494__$1 = (function (){var statearr_47497 = state_47494;
(statearr_47497[(8)] = inst_47406);

return statearr_47497;
})();
if(cljs.core.truth_(inst_47407)){
var statearr_47498_47584 = state_47494__$1;
(statearr_47498_47584[(1)] = (22));

} else {
var statearr_47499_47585 = state_47494__$1;
(statearr_47499_47585[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (27))){
var inst_47437 = (state_47494[(9)]);
var inst_47435 = (state_47494[(10)]);
var inst_47442 = (state_47494[(11)]);
var inst_47362 = (state_47494[(12)]);
var inst_47442__$1 = cljs.core._nth.call(null,inst_47435,inst_47437);
var inst_47443 = cljs.core.async.put_BANG_.call(null,inst_47442__$1,inst_47362,done);
var state_47494__$1 = (function (){var statearr_47500 = state_47494;
(statearr_47500[(11)] = inst_47442__$1);

return statearr_47500;
})();
if(cljs.core.truth_(inst_47443)){
var statearr_47501_47586 = state_47494__$1;
(statearr_47501_47586[(1)] = (30));

} else {
var statearr_47502_47587 = state_47494__$1;
(statearr_47502_47587[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (1))){
var state_47494__$1 = state_47494;
var statearr_47503_47588 = state_47494__$1;
(statearr_47503_47588[(2)] = null);

(statearr_47503_47588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (24))){
var inst_47393 = (state_47494[(7)]);
var inst_47412 = (state_47494[(2)]);
var inst_47413 = cljs.core.next.call(null,inst_47393);
var inst_47371 = inst_47413;
var inst_47372 = null;
var inst_47373 = (0);
var inst_47374 = (0);
var state_47494__$1 = (function (){var statearr_47504 = state_47494;
(statearr_47504[(13)] = inst_47372);

(statearr_47504[(14)] = inst_47412);

(statearr_47504[(15)] = inst_47373);

(statearr_47504[(16)] = inst_47374);

(statearr_47504[(17)] = inst_47371);

return statearr_47504;
})();
var statearr_47505_47589 = state_47494__$1;
(statearr_47505_47589[(2)] = null);

(statearr_47505_47589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (39))){
var state_47494__$1 = state_47494;
var statearr_47509_47590 = state_47494__$1;
(statearr_47509_47590[(2)] = null);

(statearr_47509_47590[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (4))){
var inst_47362 = (state_47494[(12)]);
var inst_47362__$1 = (state_47494[(2)]);
var inst_47363 = (inst_47362__$1 == null);
var state_47494__$1 = (function (){var statearr_47510 = state_47494;
(statearr_47510[(12)] = inst_47362__$1);

return statearr_47510;
})();
if(cljs.core.truth_(inst_47363)){
var statearr_47511_47591 = state_47494__$1;
(statearr_47511_47591[(1)] = (5));

} else {
var statearr_47512_47592 = state_47494__$1;
(statearr_47512_47592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (15))){
var inst_47372 = (state_47494[(13)]);
var inst_47373 = (state_47494[(15)]);
var inst_47374 = (state_47494[(16)]);
var inst_47371 = (state_47494[(17)]);
var inst_47389 = (state_47494[(2)]);
var inst_47390 = (inst_47374 + (1));
var tmp47506 = inst_47372;
var tmp47507 = inst_47373;
var tmp47508 = inst_47371;
var inst_47371__$1 = tmp47508;
var inst_47372__$1 = tmp47506;
var inst_47373__$1 = tmp47507;
var inst_47374__$1 = inst_47390;
var state_47494__$1 = (function (){var statearr_47513 = state_47494;
(statearr_47513[(13)] = inst_47372__$1);

(statearr_47513[(18)] = inst_47389);

(statearr_47513[(15)] = inst_47373__$1);

(statearr_47513[(16)] = inst_47374__$1);

(statearr_47513[(17)] = inst_47371__$1);

return statearr_47513;
})();
var statearr_47514_47593 = state_47494__$1;
(statearr_47514_47593[(2)] = null);

(statearr_47514_47593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (21))){
var inst_47416 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47518_47594 = state_47494__$1;
(statearr_47518_47594[(2)] = inst_47416);

(statearr_47518_47594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (31))){
var inst_47442 = (state_47494[(11)]);
var inst_47446 = done.call(null,null);
var inst_47447 = cljs.core.async.untap_STAR_.call(null,m,inst_47442);
var state_47494__$1 = (function (){var statearr_47519 = state_47494;
(statearr_47519[(19)] = inst_47446);

return statearr_47519;
})();
var statearr_47520_47595 = state_47494__$1;
(statearr_47520_47595[(2)] = inst_47447);

(statearr_47520_47595[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (32))){
var inst_47436 = (state_47494[(20)]);
var inst_47437 = (state_47494[(9)]);
var inst_47434 = (state_47494[(21)]);
var inst_47435 = (state_47494[(10)]);
var inst_47449 = (state_47494[(2)]);
var inst_47450 = (inst_47437 + (1));
var tmp47515 = inst_47436;
var tmp47516 = inst_47434;
var tmp47517 = inst_47435;
var inst_47434__$1 = tmp47516;
var inst_47435__$1 = tmp47517;
var inst_47436__$1 = tmp47515;
var inst_47437__$1 = inst_47450;
var state_47494__$1 = (function (){var statearr_47521 = state_47494;
(statearr_47521[(20)] = inst_47436__$1);

(statearr_47521[(9)] = inst_47437__$1);

(statearr_47521[(21)] = inst_47434__$1);

(statearr_47521[(22)] = inst_47449);

(statearr_47521[(10)] = inst_47435__$1);

return statearr_47521;
})();
var statearr_47522_47596 = state_47494__$1;
(statearr_47522_47596[(2)] = null);

(statearr_47522_47596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (40))){
var inst_47462 = (state_47494[(23)]);
var inst_47466 = done.call(null,null);
var inst_47467 = cljs.core.async.untap_STAR_.call(null,m,inst_47462);
var state_47494__$1 = (function (){var statearr_47523 = state_47494;
(statearr_47523[(24)] = inst_47466);

return statearr_47523;
})();
var statearr_47524_47597 = state_47494__$1;
(statearr_47524_47597[(2)] = inst_47467);

(statearr_47524_47597[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (33))){
var inst_47453 = (state_47494[(25)]);
var inst_47455 = cljs.core.chunked_seq_QMARK_.call(null,inst_47453);
var state_47494__$1 = state_47494;
if(inst_47455){
var statearr_47525_47598 = state_47494__$1;
(statearr_47525_47598[(1)] = (36));

} else {
var statearr_47526_47599 = state_47494__$1;
(statearr_47526_47599[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (13))){
var inst_47383 = (state_47494[(26)]);
var inst_47386 = cljs.core.async.close_BANG_.call(null,inst_47383);
var state_47494__$1 = state_47494;
var statearr_47527_47600 = state_47494__$1;
(statearr_47527_47600[(2)] = inst_47386);

(statearr_47527_47600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (22))){
var inst_47406 = (state_47494[(8)]);
var inst_47409 = cljs.core.async.close_BANG_.call(null,inst_47406);
var state_47494__$1 = state_47494;
var statearr_47528_47601 = state_47494__$1;
(statearr_47528_47601[(2)] = inst_47409);

(statearr_47528_47601[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (36))){
var inst_47453 = (state_47494[(25)]);
var inst_47457 = cljs.core.chunk_first.call(null,inst_47453);
var inst_47458 = cljs.core.chunk_rest.call(null,inst_47453);
var inst_47459 = cljs.core.count.call(null,inst_47457);
var inst_47434 = inst_47458;
var inst_47435 = inst_47457;
var inst_47436 = inst_47459;
var inst_47437 = (0);
var state_47494__$1 = (function (){var statearr_47529 = state_47494;
(statearr_47529[(20)] = inst_47436);

(statearr_47529[(9)] = inst_47437);

(statearr_47529[(21)] = inst_47434);

(statearr_47529[(10)] = inst_47435);

return statearr_47529;
})();
var statearr_47530_47602 = state_47494__$1;
(statearr_47530_47602[(2)] = null);

(statearr_47530_47602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (41))){
var inst_47453 = (state_47494[(25)]);
var inst_47469 = (state_47494[(2)]);
var inst_47470 = cljs.core.next.call(null,inst_47453);
var inst_47434 = inst_47470;
var inst_47435 = null;
var inst_47436 = (0);
var inst_47437 = (0);
var state_47494__$1 = (function (){var statearr_47531 = state_47494;
(statearr_47531[(20)] = inst_47436);

(statearr_47531[(9)] = inst_47437);

(statearr_47531[(21)] = inst_47434);

(statearr_47531[(10)] = inst_47435);

(statearr_47531[(27)] = inst_47469);

return statearr_47531;
})();
var statearr_47532_47603 = state_47494__$1;
(statearr_47532_47603[(2)] = null);

(statearr_47532_47603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (43))){
var state_47494__$1 = state_47494;
var statearr_47533_47604 = state_47494__$1;
(statearr_47533_47604[(2)] = null);

(statearr_47533_47604[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (29))){
var inst_47478 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47534_47605 = state_47494__$1;
(statearr_47534_47605[(2)] = inst_47478);

(statearr_47534_47605[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (44))){
var inst_47487 = (state_47494[(2)]);
var state_47494__$1 = (function (){var statearr_47535 = state_47494;
(statearr_47535[(28)] = inst_47487);

return statearr_47535;
})();
var statearr_47536_47606 = state_47494__$1;
(statearr_47536_47606[(2)] = null);

(statearr_47536_47606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (6))){
var inst_47426 = (state_47494[(29)]);
var inst_47425 = cljs.core.deref.call(null,cs);
var inst_47426__$1 = cljs.core.keys.call(null,inst_47425);
var inst_47427 = cljs.core.count.call(null,inst_47426__$1);
var inst_47428 = cljs.core.reset_BANG_.call(null,dctr,inst_47427);
var inst_47433 = cljs.core.seq.call(null,inst_47426__$1);
var inst_47434 = inst_47433;
var inst_47435 = null;
var inst_47436 = (0);
var inst_47437 = (0);
var state_47494__$1 = (function (){var statearr_47537 = state_47494;
(statearr_47537[(30)] = inst_47428);

(statearr_47537[(20)] = inst_47436);

(statearr_47537[(9)] = inst_47437);

(statearr_47537[(21)] = inst_47434);

(statearr_47537[(10)] = inst_47435);

(statearr_47537[(29)] = inst_47426__$1);

return statearr_47537;
})();
var statearr_47538_47607 = state_47494__$1;
(statearr_47538_47607[(2)] = null);

(statearr_47538_47607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (28))){
var inst_47434 = (state_47494[(21)]);
var inst_47453 = (state_47494[(25)]);
var inst_47453__$1 = cljs.core.seq.call(null,inst_47434);
var state_47494__$1 = (function (){var statearr_47539 = state_47494;
(statearr_47539[(25)] = inst_47453__$1);

return statearr_47539;
})();
if(inst_47453__$1){
var statearr_47540_47608 = state_47494__$1;
(statearr_47540_47608[(1)] = (33));

} else {
var statearr_47541_47609 = state_47494__$1;
(statearr_47541_47609[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (25))){
var inst_47436 = (state_47494[(20)]);
var inst_47437 = (state_47494[(9)]);
var inst_47439 = (inst_47437 < inst_47436);
var inst_47440 = inst_47439;
var state_47494__$1 = state_47494;
if(cljs.core.truth_(inst_47440)){
var statearr_47542_47610 = state_47494__$1;
(statearr_47542_47610[(1)] = (27));

} else {
var statearr_47543_47611 = state_47494__$1;
(statearr_47543_47611[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (34))){
var state_47494__$1 = state_47494;
var statearr_47544_47612 = state_47494__$1;
(statearr_47544_47612[(2)] = null);

(statearr_47544_47612[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (17))){
var state_47494__$1 = state_47494;
var statearr_47545_47613 = state_47494__$1;
(statearr_47545_47613[(2)] = null);

(statearr_47545_47613[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (3))){
var inst_47492 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47494__$1,inst_47492);
} else {
if((state_val_47495 === (12))){
var inst_47421 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47546_47614 = state_47494__$1;
(statearr_47546_47614[(2)] = inst_47421);

(statearr_47546_47614[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (2))){
var state_47494__$1 = state_47494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47494__$1,(4),ch);
} else {
if((state_val_47495 === (23))){
var state_47494__$1 = state_47494;
var statearr_47547_47615 = state_47494__$1;
(statearr_47547_47615[(2)] = null);

(statearr_47547_47615[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (35))){
var inst_47476 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47548_47616 = state_47494__$1;
(statearr_47548_47616[(2)] = inst_47476);

(statearr_47548_47616[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (19))){
var inst_47393 = (state_47494[(7)]);
var inst_47397 = cljs.core.chunk_first.call(null,inst_47393);
var inst_47398 = cljs.core.chunk_rest.call(null,inst_47393);
var inst_47399 = cljs.core.count.call(null,inst_47397);
var inst_47371 = inst_47398;
var inst_47372 = inst_47397;
var inst_47373 = inst_47399;
var inst_47374 = (0);
var state_47494__$1 = (function (){var statearr_47549 = state_47494;
(statearr_47549[(13)] = inst_47372);

(statearr_47549[(15)] = inst_47373);

(statearr_47549[(16)] = inst_47374);

(statearr_47549[(17)] = inst_47371);

return statearr_47549;
})();
var statearr_47550_47617 = state_47494__$1;
(statearr_47550_47617[(2)] = null);

(statearr_47550_47617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (11))){
var inst_47393 = (state_47494[(7)]);
var inst_47371 = (state_47494[(17)]);
var inst_47393__$1 = cljs.core.seq.call(null,inst_47371);
var state_47494__$1 = (function (){var statearr_47551 = state_47494;
(statearr_47551[(7)] = inst_47393__$1);

return statearr_47551;
})();
if(inst_47393__$1){
var statearr_47552_47618 = state_47494__$1;
(statearr_47552_47618[(1)] = (16));

} else {
var statearr_47553_47619 = state_47494__$1;
(statearr_47553_47619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (9))){
var inst_47423 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47554_47620 = state_47494__$1;
(statearr_47554_47620[(2)] = inst_47423);

(statearr_47554_47620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (5))){
var inst_47369 = cljs.core.deref.call(null,cs);
var inst_47370 = cljs.core.seq.call(null,inst_47369);
var inst_47371 = inst_47370;
var inst_47372 = null;
var inst_47373 = (0);
var inst_47374 = (0);
var state_47494__$1 = (function (){var statearr_47555 = state_47494;
(statearr_47555[(13)] = inst_47372);

(statearr_47555[(15)] = inst_47373);

(statearr_47555[(16)] = inst_47374);

(statearr_47555[(17)] = inst_47371);

return statearr_47555;
})();
var statearr_47556_47621 = state_47494__$1;
(statearr_47556_47621[(2)] = null);

(statearr_47556_47621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (14))){
var state_47494__$1 = state_47494;
var statearr_47557_47622 = state_47494__$1;
(statearr_47557_47622[(2)] = null);

(statearr_47557_47622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (45))){
var inst_47484 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47558_47623 = state_47494__$1;
(statearr_47558_47623[(2)] = inst_47484);

(statearr_47558_47623[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (26))){
var inst_47426 = (state_47494[(29)]);
var inst_47480 = (state_47494[(2)]);
var inst_47481 = cljs.core.seq.call(null,inst_47426);
var state_47494__$1 = (function (){var statearr_47559 = state_47494;
(statearr_47559[(31)] = inst_47480);

return statearr_47559;
})();
if(inst_47481){
var statearr_47560_47624 = state_47494__$1;
(statearr_47560_47624[(1)] = (42));

} else {
var statearr_47561_47625 = state_47494__$1;
(statearr_47561_47625[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (16))){
var inst_47393 = (state_47494[(7)]);
var inst_47395 = cljs.core.chunked_seq_QMARK_.call(null,inst_47393);
var state_47494__$1 = state_47494;
if(inst_47395){
var statearr_47562_47626 = state_47494__$1;
(statearr_47562_47626[(1)] = (19));

} else {
var statearr_47563_47627 = state_47494__$1;
(statearr_47563_47627[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (38))){
var inst_47473 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47564_47628 = state_47494__$1;
(statearr_47564_47628[(2)] = inst_47473);

(statearr_47564_47628[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (30))){
var state_47494__$1 = state_47494;
var statearr_47565_47629 = state_47494__$1;
(statearr_47565_47629[(2)] = null);

(statearr_47565_47629[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (10))){
var inst_47372 = (state_47494[(13)]);
var inst_47374 = (state_47494[(16)]);
var inst_47382 = cljs.core._nth.call(null,inst_47372,inst_47374);
var inst_47383 = cljs.core.nth.call(null,inst_47382,(0),null);
var inst_47384 = cljs.core.nth.call(null,inst_47382,(1),null);
var state_47494__$1 = (function (){var statearr_47566 = state_47494;
(statearr_47566[(26)] = inst_47383);

return statearr_47566;
})();
if(cljs.core.truth_(inst_47384)){
var statearr_47567_47630 = state_47494__$1;
(statearr_47567_47630[(1)] = (13));

} else {
var statearr_47568_47631 = state_47494__$1;
(statearr_47568_47631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (18))){
var inst_47419 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47569_47632 = state_47494__$1;
(statearr_47569_47632[(2)] = inst_47419);

(statearr_47569_47632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (42))){
var state_47494__$1 = state_47494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47494__$1,(45),dchan);
} else {
if((state_val_47495 === (37))){
var inst_47362 = (state_47494[(12)]);
var inst_47462 = (state_47494[(23)]);
var inst_47453 = (state_47494[(25)]);
var inst_47462__$1 = cljs.core.first.call(null,inst_47453);
var inst_47463 = cljs.core.async.put_BANG_.call(null,inst_47462__$1,inst_47362,done);
var state_47494__$1 = (function (){var statearr_47570 = state_47494;
(statearr_47570[(23)] = inst_47462__$1);

return statearr_47570;
})();
if(cljs.core.truth_(inst_47463)){
var statearr_47571_47633 = state_47494__$1;
(statearr_47571_47633[(1)] = (39));

} else {
var statearr_47572_47634 = state_47494__$1;
(statearr_47572_47634[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (8))){
var inst_47373 = (state_47494[(15)]);
var inst_47374 = (state_47494[(16)]);
var inst_47376 = (inst_47374 < inst_47373);
var inst_47377 = inst_47376;
var state_47494__$1 = state_47494;
if(cljs.core.truth_(inst_47377)){
var statearr_47573_47635 = state_47494__$1;
(statearr_47573_47635[(1)] = (10));

} else {
var statearr_47574_47636 = state_47494__$1;
(statearr_47574_47636[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___47582,cs,m,dchan,dctr,done))
;
return ((function (switch__37128__auto__,c__37193__auto___47582,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37129__auto__ = null;
var cljs$core$async$mult_$_state_machine__37129__auto____0 = (function (){
var statearr_47578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47578[(0)] = cljs$core$async$mult_$_state_machine__37129__auto__);

(statearr_47578[(1)] = (1));

return statearr_47578;
});
var cljs$core$async$mult_$_state_machine__37129__auto____1 = (function (state_47494){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_47494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e47579){if((e47579 instanceof Object)){
var ex__37132__auto__ = e47579;
var statearr_47580_47637 = state_47494;
(statearr_47580_47637[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47638 = state_47494;
state_47494 = G__47638;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37129__auto__ = function(state_47494){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37129__auto____1.call(this,state_47494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37129__auto____0;
cljs$core$async$mult_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37129__auto____1;
return cljs$core$async$mult_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___47582,cs,m,dchan,dctr,done))
})();
var state__37195__auto__ = (function (){var statearr_47581 = f__37194__auto__.call(null);
(statearr_47581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___47582);

return statearr_47581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___47582,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args47639 = [];
var len__32654__auto___47642 = arguments.length;
var i__32655__auto___47643 = (0);
while(true){
if((i__32655__auto___47643 < len__32654__auto___47642)){
args47639.push((arguments[i__32655__auto___47643]));

var G__47644 = (i__32655__auto___47643 + (1));
i__32655__auto___47643 = G__47644;
continue;
} else {
}
break;
}

var G__47641 = args47639.length;
switch (G__47641) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47639.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__32242__auto__ = (((m == null))?null:m);
var m__32243__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,m,ch);
} else {
var m__32243__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__32242__auto__ = (((m == null))?null:m);
var m__32243__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,m,ch);
} else {
var m__32243__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__32242__auto__ = (((m == null))?null:m);
var m__32243__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,m);
} else {
var m__32243__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__32242__auto__ = (((m == null))?null:m);
var m__32243__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,m,state_map);
} else {
var m__32243__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__32242__auto__ = (((m == null))?null:m);
var m__32243__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,m,mode);
} else {
var m__32243__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__32661__auto__ = [];
var len__32654__auto___47656 = arguments.length;
var i__32655__auto___47657 = (0);
while(true){
if((i__32655__auto___47657 < len__32654__auto___47656)){
args__32661__auto__.push((arguments[i__32655__auto___47657]));

var G__47658 = (i__32655__auto___47657 + (1));
i__32655__auto___47657 = G__47658;
continue;
} else {
}
break;
}

var argseq__32662__auto__ = ((((3) < args__32661__auto__.length))?(new cljs.core.IndexedSeq(args__32661__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32662__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47650){
var map__47651 = p__47650;
var map__47651__$1 = ((((!((map__47651 == null)))?((((map__47651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47651):map__47651);
var opts = map__47651__$1;
var statearr_47653_47659 = state;
(statearr_47653_47659[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__47651,map__47651__$1,opts){
return (function (val){
var statearr_47654_47660 = state;
(statearr_47654_47660[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47651,map__47651__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_47655_47661 = state;
(statearr_47655_47661[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47646){
var G__47647 = cljs.core.first.call(null,seq47646);
var seq47646__$1 = cljs.core.next.call(null,seq47646);
var G__47648 = cljs.core.first.call(null,seq47646__$1);
var seq47646__$2 = cljs.core.next.call(null,seq47646__$1);
var G__47649 = cljs.core.first.call(null,seq47646__$2);
var seq47646__$3 = cljs.core.next.call(null,seq47646__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47647,G__47648,G__47649,seq47646__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47827 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47827 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47828){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47828 = meta47828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47829,meta47828__$1){
var self__ = this;
var _47829__$1 = this;
return (new cljs.core.async.t_cljs$core$async47827(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47828__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47829){
var self__ = this;
var _47829__$1 = this;
return self__.meta47828;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47827.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47827.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async47827.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47827.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47827.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47827.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47827.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47827.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47828","meta47828",1957929606,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47827.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47827";

cljs.core.async.t_cljs$core$async47827.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cljs.core.async/t_cljs$core$async47827");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47827 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47827(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47828){
return (new cljs.core.async.t_cljs$core$async47827(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47828));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47827(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37193__auto___47992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___47992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___47992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47929){
var state_val_47930 = (state_47929[(1)]);
if((state_val_47930 === (7))){
var inst_47845 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
var statearr_47931_47993 = state_47929__$1;
(statearr_47931_47993[(2)] = inst_47845);

(statearr_47931_47993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (20))){
var inst_47857 = (state_47929[(7)]);
var state_47929__$1 = state_47929;
var statearr_47932_47994 = state_47929__$1;
(statearr_47932_47994[(2)] = inst_47857);

(statearr_47932_47994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (27))){
var state_47929__$1 = state_47929;
var statearr_47933_47995 = state_47929__$1;
(statearr_47933_47995[(2)] = null);

(statearr_47933_47995[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (1))){
var inst_47833 = (state_47929[(8)]);
var inst_47833__$1 = calc_state.call(null);
var inst_47835 = (inst_47833__$1 == null);
var inst_47836 = cljs.core.not.call(null,inst_47835);
var state_47929__$1 = (function (){var statearr_47934 = state_47929;
(statearr_47934[(8)] = inst_47833__$1);

return statearr_47934;
})();
if(inst_47836){
var statearr_47935_47996 = state_47929__$1;
(statearr_47935_47996[(1)] = (2));

} else {
var statearr_47936_47997 = state_47929__$1;
(statearr_47936_47997[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (24))){
var inst_47880 = (state_47929[(9)]);
var inst_47889 = (state_47929[(10)]);
var inst_47903 = (state_47929[(11)]);
var inst_47903__$1 = inst_47880.call(null,inst_47889);
var state_47929__$1 = (function (){var statearr_47937 = state_47929;
(statearr_47937[(11)] = inst_47903__$1);

return statearr_47937;
})();
if(cljs.core.truth_(inst_47903__$1)){
var statearr_47938_47998 = state_47929__$1;
(statearr_47938_47998[(1)] = (29));

} else {
var statearr_47939_47999 = state_47929__$1;
(statearr_47939_47999[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (4))){
var inst_47848 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
if(cljs.core.truth_(inst_47848)){
var statearr_47940_48000 = state_47929__$1;
(statearr_47940_48000[(1)] = (8));

} else {
var statearr_47941_48001 = state_47929__$1;
(statearr_47941_48001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (15))){
var inst_47874 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
if(cljs.core.truth_(inst_47874)){
var statearr_47942_48002 = state_47929__$1;
(statearr_47942_48002[(1)] = (19));

} else {
var statearr_47943_48003 = state_47929__$1;
(statearr_47943_48003[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (21))){
var inst_47879 = (state_47929[(12)]);
var inst_47879__$1 = (state_47929[(2)]);
var inst_47880 = cljs.core.get.call(null,inst_47879__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47881 = cljs.core.get.call(null,inst_47879__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47882 = cljs.core.get.call(null,inst_47879__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47929__$1 = (function (){var statearr_47944 = state_47929;
(statearr_47944[(13)] = inst_47881);

(statearr_47944[(9)] = inst_47880);

(statearr_47944[(12)] = inst_47879__$1);

return statearr_47944;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47929__$1,(22),inst_47882);
} else {
if((state_val_47930 === (31))){
var inst_47911 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
if(cljs.core.truth_(inst_47911)){
var statearr_47945_48004 = state_47929__$1;
(statearr_47945_48004[(1)] = (32));

} else {
var statearr_47946_48005 = state_47929__$1;
(statearr_47946_48005[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (32))){
var inst_47888 = (state_47929[(14)]);
var state_47929__$1 = state_47929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47929__$1,(35),out,inst_47888);
} else {
if((state_val_47930 === (33))){
var inst_47879 = (state_47929[(12)]);
var inst_47857 = inst_47879;
var state_47929__$1 = (function (){var statearr_47947 = state_47929;
(statearr_47947[(7)] = inst_47857);

return statearr_47947;
})();
var statearr_47948_48006 = state_47929__$1;
(statearr_47948_48006[(2)] = null);

(statearr_47948_48006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (13))){
var inst_47857 = (state_47929[(7)]);
var inst_47864 = inst_47857.cljs$lang$protocol_mask$partition0$;
var inst_47865 = (inst_47864 & (64));
var inst_47866 = inst_47857.cljs$core$ISeq$;
var inst_47867 = (inst_47865) || (inst_47866);
var state_47929__$1 = state_47929;
if(cljs.core.truth_(inst_47867)){
var statearr_47949_48007 = state_47929__$1;
(statearr_47949_48007[(1)] = (16));

} else {
var statearr_47950_48008 = state_47929__$1;
(statearr_47950_48008[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (22))){
var inst_47889 = (state_47929[(10)]);
var inst_47888 = (state_47929[(14)]);
var inst_47887 = (state_47929[(2)]);
var inst_47888__$1 = cljs.core.nth.call(null,inst_47887,(0),null);
var inst_47889__$1 = cljs.core.nth.call(null,inst_47887,(1),null);
var inst_47890 = (inst_47888__$1 == null);
var inst_47891 = cljs.core._EQ_.call(null,inst_47889__$1,change);
var inst_47892 = (inst_47890) || (inst_47891);
var state_47929__$1 = (function (){var statearr_47951 = state_47929;
(statearr_47951[(10)] = inst_47889__$1);

(statearr_47951[(14)] = inst_47888__$1);

return statearr_47951;
})();
if(cljs.core.truth_(inst_47892)){
var statearr_47952_48009 = state_47929__$1;
(statearr_47952_48009[(1)] = (23));

} else {
var statearr_47953_48010 = state_47929__$1;
(statearr_47953_48010[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (36))){
var inst_47879 = (state_47929[(12)]);
var inst_47857 = inst_47879;
var state_47929__$1 = (function (){var statearr_47954 = state_47929;
(statearr_47954[(7)] = inst_47857);

return statearr_47954;
})();
var statearr_47955_48011 = state_47929__$1;
(statearr_47955_48011[(2)] = null);

(statearr_47955_48011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (29))){
var inst_47903 = (state_47929[(11)]);
var state_47929__$1 = state_47929;
var statearr_47956_48012 = state_47929__$1;
(statearr_47956_48012[(2)] = inst_47903);

(statearr_47956_48012[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (6))){
var state_47929__$1 = state_47929;
var statearr_47957_48013 = state_47929__$1;
(statearr_47957_48013[(2)] = false);

(statearr_47957_48013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (28))){
var inst_47899 = (state_47929[(2)]);
var inst_47900 = calc_state.call(null);
var inst_47857 = inst_47900;
var state_47929__$1 = (function (){var statearr_47958 = state_47929;
(statearr_47958[(15)] = inst_47899);

(statearr_47958[(7)] = inst_47857);

return statearr_47958;
})();
var statearr_47959_48014 = state_47929__$1;
(statearr_47959_48014[(2)] = null);

(statearr_47959_48014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (25))){
var inst_47925 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
var statearr_47960_48015 = state_47929__$1;
(statearr_47960_48015[(2)] = inst_47925);

(statearr_47960_48015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (34))){
var inst_47923 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
var statearr_47961_48016 = state_47929__$1;
(statearr_47961_48016[(2)] = inst_47923);

(statearr_47961_48016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (17))){
var state_47929__$1 = state_47929;
var statearr_47962_48017 = state_47929__$1;
(statearr_47962_48017[(2)] = false);

(statearr_47962_48017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (3))){
var state_47929__$1 = state_47929;
var statearr_47963_48018 = state_47929__$1;
(statearr_47963_48018[(2)] = false);

(statearr_47963_48018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (12))){
var inst_47927 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47929__$1,inst_47927);
} else {
if((state_val_47930 === (2))){
var inst_47833 = (state_47929[(8)]);
var inst_47838 = inst_47833.cljs$lang$protocol_mask$partition0$;
var inst_47839 = (inst_47838 & (64));
var inst_47840 = inst_47833.cljs$core$ISeq$;
var inst_47841 = (inst_47839) || (inst_47840);
var state_47929__$1 = state_47929;
if(cljs.core.truth_(inst_47841)){
var statearr_47964_48019 = state_47929__$1;
(statearr_47964_48019[(1)] = (5));

} else {
var statearr_47965_48020 = state_47929__$1;
(statearr_47965_48020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (23))){
var inst_47888 = (state_47929[(14)]);
var inst_47894 = (inst_47888 == null);
var state_47929__$1 = state_47929;
if(cljs.core.truth_(inst_47894)){
var statearr_47966_48021 = state_47929__$1;
(statearr_47966_48021[(1)] = (26));

} else {
var statearr_47967_48022 = state_47929__$1;
(statearr_47967_48022[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (35))){
var inst_47914 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
if(cljs.core.truth_(inst_47914)){
var statearr_47968_48023 = state_47929__$1;
(statearr_47968_48023[(1)] = (36));

} else {
var statearr_47969_48024 = state_47929__$1;
(statearr_47969_48024[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (19))){
var inst_47857 = (state_47929[(7)]);
var inst_47876 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47857);
var state_47929__$1 = state_47929;
var statearr_47970_48025 = state_47929__$1;
(statearr_47970_48025[(2)] = inst_47876);

(statearr_47970_48025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (11))){
var inst_47857 = (state_47929[(7)]);
var inst_47861 = (inst_47857 == null);
var inst_47862 = cljs.core.not.call(null,inst_47861);
var state_47929__$1 = state_47929;
if(inst_47862){
var statearr_47971_48026 = state_47929__$1;
(statearr_47971_48026[(1)] = (13));

} else {
var statearr_47972_48027 = state_47929__$1;
(statearr_47972_48027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (9))){
var inst_47833 = (state_47929[(8)]);
var state_47929__$1 = state_47929;
var statearr_47973_48028 = state_47929__$1;
(statearr_47973_48028[(2)] = inst_47833);

(statearr_47973_48028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (5))){
var state_47929__$1 = state_47929;
var statearr_47974_48029 = state_47929__$1;
(statearr_47974_48029[(2)] = true);

(statearr_47974_48029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (14))){
var state_47929__$1 = state_47929;
var statearr_47975_48030 = state_47929__$1;
(statearr_47975_48030[(2)] = false);

(statearr_47975_48030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (26))){
var inst_47889 = (state_47929[(10)]);
var inst_47896 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47889);
var state_47929__$1 = state_47929;
var statearr_47976_48031 = state_47929__$1;
(statearr_47976_48031[(2)] = inst_47896);

(statearr_47976_48031[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (16))){
var state_47929__$1 = state_47929;
var statearr_47977_48032 = state_47929__$1;
(statearr_47977_48032[(2)] = true);

(statearr_47977_48032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (38))){
var inst_47919 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
var statearr_47978_48033 = state_47929__$1;
(statearr_47978_48033[(2)] = inst_47919);

(statearr_47978_48033[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (30))){
var inst_47881 = (state_47929[(13)]);
var inst_47880 = (state_47929[(9)]);
var inst_47889 = (state_47929[(10)]);
var inst_47906 = cljs.core.empty_QMARK_.call(null,inst_47880);
var inst_47907 = inst_47881.call(null,inst_47889);
var inst_47908 = cljs.core.not.call(null,inst_47907);
var inst_47909 = (inst_47906) && (inst_47908);
var state_47929__$1 = state_47929;
var statearr_47979_48034 = state_47929__$1;
(statearr_47979_48034[(2)] = inst_47909);

(statearr_47979_48034[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (10))){
var inst_47833 = (state_47929[(8)]);
var inst_47853 = (state_47929[(2)]);
var inst_47854 = cljs.core.get.call(null,inst_47853,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47855 = cljs.core.get.call(null,inst_47853,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47856 = cljs.core.get.call(null,inst_47853,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47857 = inst_47833;
var state_47929__$1 = (function (){var statearr_47980 = state_47929;
(statearr_47980[(16)] = inst_47855);

(statearr_47980[(17)] = inst_47856);

(statearr_47980[(7)] = inst_47857);

(statearr_47980[(18)] = inst_47854);

return statearr_47980;
})();
var statearr_47981_48035 = state_47929__$1;
(statearr_47981_48035[(2)] = null);

(statearr_47981_48035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (18))){
var inst_47871 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
var statearr_47982_48036 = state_47929__$1;
(statearr_47982_48036[(2)] = inst_47871);

(statearr_47982_48036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (37))){
var state_47929__$1 = state_47929;
var statearr_47983_48037 = state_47929__$1;
(statearr_47983_48037[(2)] = null);

(statearr_47983_48037[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (8))){
var inst_47833 = (state_47929[(8)]);
var inst_47850 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47833);
var state_47929__$1 = state_47929;
var statearr_47984_48038 = state_47929__$1;
(statearr_47984_48038[(2)] = inst_47850);

(statearr_47984_48038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___47992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37128__auto__,c__37193__auto___47992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37129__auto__ = null;
var cljs$core$async$mix_$_state_machine__37129__auto____0 = (function (){
var statearr_47988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47988[(0)] = cljs$core$async$mix_$_state_machine__37129__auto__);

(statearr_47988[(1)] = (1));

return statearr_47988;
});
var cljs$core$async$mix_$_state_machine__37129__auto____1 = (function (state_47929){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_47929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e47989){if((e47989 instanceof Object)){
var ex__37132__auto__ = e47989;
var statearr_47990_48039 = state_47929;
(statearr_47990_48039[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48040 = state_47929;
state_47929 = G__48040;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37129__auto__ = function(state_47929){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37129__auto____1.call(this,state_47929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37129__auto____0;
cljs$core$async$mix_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37129__auto____1;
return cljs$core$async$mix_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___47992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37195__auto__ = (function (){var statearr_47991 = f__37194__auto__.call(null);
(statearr_47991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___47992);

return statearr_47991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___47992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__32242__auto__ = (((p == null))?null:p);
var m__32243__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__32243__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__32242__auto__ = (((p == null))?null:p);
var m__32243__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,p,v,ch);
} else {
var m__32243__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args48041 = [];
var len__32654__auto___48044 = arguments.length;
var i__32655__auto___48045 = (0);
while(true){
if((i__32655__auto___48045 < len__32654__auto___48044)){
args48041.push((arguments[i__32655__auto___48045]));

var G__48046 = (i__32655__auto___48045 + (1));
i__32655__auto___48045 = G__48046;
continue;
} else {
}
break;
}

var G__48043 = args48041.length;
switch (G__48043) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48041.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__32242__auto__ = (((p == null))?null:p);
var m__32243__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,p);
} else {
var m__32243__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__32242__auto__ = (((p == null))?null:p);
var m__32243__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32242__auto__)]);
if(!((m__32243__auto__ == null))){
return m__32243__auto__.call(null,p,v);
} else {
var m__32243__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__32243__auto____$1 == null))){
return m__32243__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args48049 = [];
var len__32654__auto___48174 = arguments.length;
var i__32655__auto___48175 = (0);
while(true){
if((i__32655__auto___48175 < len__32654__auto___48174)){
args48049.push((arguments[i__32655__auto___48175]));

var G__48176 = (i__32655__auto___48175 + (1));
i__32655__auto___48175 = G__48176;
continue;
} else {
}
break;
}

var G__48051 = args48049.length;
switch (G__48051) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48049.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__31579__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__31579__auto__)){
return or__31579__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__31579__auto__,mults){
return (function (p1__48048_SHARP_){
if(cljs.core.truth_(p1__48048_SHARP_.call(null,topic))){
return p1__48048_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48048_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__31579__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48052 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48053){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48053 = meta48053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48054,meta48053__$1){
var self__ = this;
var _48054__$1 = this;
return (new cljs.core.async.t_cljs$core$async48052(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48053__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48054){
var self__ = this;
var _48054__$1 = this;
return self__.meta48053;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48052.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48052.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async48052.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48052.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48052.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48052.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48052.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48053","meta48053",-1934444506,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48052";

cljs.core.async.t_cljs$core$async48052.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cljs.core.async/t_cljs$core$async48052");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48052 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48052(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48053){
return (new cljs.core.async.t_cljs$core$async48052(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48053));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48052(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37193__auto___48178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___48178,mults,ensure_mult,p){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___48178,mults,ensure_mult,p){
return (function (state_48126){
var state_val_48127 = (state_48126[(1)]);
if((state_val_48127 === (7))){
var inst_48122 = (state_48126[(2)]);
var state_48126__$1 = state_48126;
var statearr_48128_48179 = state_48126__$1;
(statearr_48128_48179[(2)] = inst_48122);

(statearr_48128_48179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (20))){
var state_48126__$1 = state_48126;
var statearr_48129_48180 = state_48126__$1;
(statearr_48129_48180[(2)] = null);

(statearr_48129_48180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (1))){
var state_48126__$1 = state_48126;
var statearr_48130_48181 = state_48126__$1;
(statearr_48130_48181[(2)] = null);

(statearr_48130_48181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (24))){
var inst_48105 = (state_48126[(7)]);
var inst_48114 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48105);
var state_48126__$1 = state_48126;
var statearr_48131_48182 = state_48126__$1;
(statearr_48131_48182[(2)] = inst_48114);

(statearr_48131_48182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (4))){
var inst_48057 = (state_48126[(8)]);
var inst_48057__$1 = (state_48126[(2)]);
var inst_48058 = (inst_48057__$1 == null);
var state_48126__$1 = (function (){var statearr_48132 = state_48126;
(statearr_48132[(8)] = inst_48057__$1);

return statearr_48132;
})();
if(cljs.core.truth_(inst_48058)){
var statearr_48133_48183 = state_48126__$1;
(statearr_48133_48183[(1)] = (5));

} else {
var statearr_48134_48184 = state_48126__$1;
(statearr_48134_48184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (15))){
var inst_48099 = (state_48126[(2)]);
var state_48126__$1 = state_48126;
var statearr_48135_48185 = state_48126__$1;
(statearr_48135_48185[(2)] = inst_48099);

(statearr_48135_48185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (21))){
var inst_48119 = (state_48126[(2)]);
var state_48126__$1 = (function (){var statearr_48136 = state_48126;
(statearr_48136[(9)] = inst_48119);

return statearr_48136;
})();
var statearr_48137_48186 = state_48126__$1;
(statearr_48137_48186[(2)] = null);

(statearr_48137_48186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (13))){
var inst_48081 = (state_48126[(10)]);
var inst_48083 = cljs.core.chunked_seq_QMARK_.call(null,inst_48081);
var state_48126__$1 = state_48126;
if(inst_48083){
var statearr_48138_48187 = state_48126__$1;
(statearr_48138_48187[(1)] = (16));

} else {
var statearr_48139_48188 = state_48126__$1;
(statearr_48139_48188[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (22))){
var inst_48111 = (state_48126[(2)]);
var state_48126__$1 = state_48126;
if(cljs.core.truth_(inst_48111)){
var statearr_48140_48189 = state_48126__$1;
(statearr_48140_48189[(1)] = (23));

} else {
var statearr_48141_48190 = state_48126__$1;
(statearr_48141_48190[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (6))){
var inst_48105 = (state_48126[(7)]);
var inst_48057 = (state_48126[(8)]);
var inst_48107 = (state_48126[(11)]);
var inst_48105__$1 = topic_fn.call(null,inst_48057);
var inst_48106 = cljs.core.deref.call(null,mults);
var inst_48107__$1 = cljs.core.get.call(null,inst_48106,inst_48105__$1);
var state_48126__$1 = (function (){var statearr_48142 = state_48126;
(statearr_48142[(7)] = inst_48105__$1);

(statearr_48142[(11)] = inst_48107__$1);

return statearr_48142;
})();
if(cljs.core.truth_(inst_48107__$1)){
var statearr_48143_48191 = state_48126__$1;
(statearr_48143_48191[(1)] = (19));

} else {
var statearr_48144_48192 = state_48126__$1;
(statearr_48144_48192[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (25))){
var inst_48116 = (state_48126[(2)]);
var state_48126__$1 = state_48126;
var statearr_48145_48193 = state_48126__$1;
(statearr_48145_48193[(2)] = inst_48116);

(statearr_48145_48193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (17))){
var inst_48081 = (state_48126[(10)]);
var inst_48090 = cljs.core.first.call(null,inst_48081);
var inst_48091 = cljs.core.async.muxch_STAR_.call(null,inst_48090);
var inst_48092 = cljs.core.async.close_BANG_.call(null,inst_48091);
var inst_48093 = cljs.core.next.call(null,inst_48081);
var inst_48067 = inst_48093;
var inst_48068 = null;
var inst_48069 = (0);
var inst_48070 = (0);
var state_48126__$1 = (function (){var statearr_48146 = state_48126;
(statearr_48146[(12)] = inst_48068);

(statearr_48146[(13)] = inst_48067);

(statearr_48146[(14)] = inst_48092);

(statearr_48146[(15)] = inst_48070);

(statearr_48146[(16)] = inst_48069);

return statearr_48146;
})();
var statearr_48147_48194 = state_48126__$1;
(statearr_48147_48194[(2)] = null);

(statearr_48147_48194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (3))){
var inst_48124 = (state_48126[(2)]);
var state_48126__$1 = state_48126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48126__$1,inst_48124);
} else {
if((state_val_48127 === (12))){
var inst_48101 = (state_48126[(2)]);
var state_48126__$1 = state_48126;
var statearr_48148_48195 = state_48126__$1;
(statearr_48148_48195[(2)] = inst_48101);

(statearr_48148_48195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (2))){
var state_48126__$1 = state_48126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48126__$1,(4),ch);
} else {
if((state_val_48127 === (23))){
var state_48126__$1 = state_48126;
var statearr_48149_48196 = state_48126__$1;
(statearr_48149_48196[(2)] = null);

(statearr_48149_48196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (19))){
var inst_48057 = (state_48126[(8)]);
var inst_48107 = (state_48126[(11)]);
var inst_48109 = cljs.core.async.muxch_STAR_.call(null,inst_48107);
var state_48126__$1 = state_48126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48126__$1,(22),inst_48109,inst_48057);
} else {
if((state_val_48127 === (11))){
var inst_48081 = (state_48126[(10)]);
var inst_48067 = (state_48126[(13)]);
var inst_48081__$1 = cljs.core.seq.call(null,inst_48067);
var state_48126__$1 = (function (){var statearr_48150 = state_48126;
(statearr_48150[(10)] = inst_48081__$1);

return statearr_48150;
})();
if(inst_48081__$1){
var statearr_48151_48197 = state_48126__$1;
(statearr_48151_48197[(1)] = (13));

} else {
var statearr_48152_48198 = state_48126__$1;
(statearr_48152_48198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (9))){
var inst_48103 = (state_48126[(2)]);
var state_48126__$1 = state_48126;
var statearr_48153_48199 = state_48126__$1;
(statearr_48153_48199[(2)] = inst_48103);

(statearr_48153_48199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (5))){
var inst_48064 = cljs.core.deref.call(null,mults);
var inst_48065 = cljs.core.vals.call(null,inst_48064);
var inst_48066 = cljs.core.seq.call(null,inst_48065);
var inst_48067 = inst_48066;
var inst_48068 = null;
var inst_48069 = (0);
var inst_48070 = (0);
var state_48126__$1 = (function (){var statearr_48154 = state_48126;
(statearr_48154[(12)] = inst_48068);

(statearr_48154[(13)] = inst_48067);

(statearr_48154[(15)] = inst_48070);

(statearr_48154[(16)] = inst_48069);

return statearr_48154;
})();
var statearr_48155_48200 = state_48126__$1;
(statearr_48155_48200[(2)] = null);

(statearr_48155_48200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (14))){
var state_48126__$1 = state_48126;
var statearr_48159_48201 = state_48126__$1;
(statearr_48159_48201[(2)] = null);

(statearr_48159_48201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (16))){
var inst_48081 = (state_48126[(10)]);
var inst_48085 = cljs.core.chunk_first.call(null,inst_48081);
var inst_48086 = cljs.core.chunk_rest.call(null,inst_48081);
var inst_48087 = cljs.core.count.call(null,inst_48085);
var inst_48067 = inst_48086;
var inst_48068 = inst_48085;
var inst_48069 = inst_48087;
var inst_48070 = (0);
var state_48126__$1 = (function (){var statearr_48160 = state_48126;
(statearr_48160[(12)] = inst_48068);

(statearr_48160[(13)] = inst_48067);

(statearr_48160[(15)] = inst_48070);

(statearr_48160[(16)] = inst_48069);

return statearr_48160;
})();
var statearr_48161_48202 = state_48126__$1;
(statearr_48161_48202[(2)] = null);

(statearr_48161_48202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (10))){
var inst_48068 = (state_48126[(12)]);
var inst_48067 = (state_48126[(13)]);
var inst_48070 = (state_48126[(15)]);
var inst_48069 = (state_48126[(16)]);
var inst_48075 = cljs.core._nth.call(null,inst_48068,inst_48070);
var inst_48076 = cljs.core.async.muxch_STAR_.call(null,inst_48075);
var inst_48077 = cljs.core.async.close_BANG_.call(null,inst_48076);
var inst_48078 = (inst_48070 + (1));
var tmp48156 = inst_48068;
var tmp48157 = inst_48067;
var tmp48158 = inst_48069;
var inst_48067__$1 = tmp48157;
var inst_48068__$1 = tmp48156;
var inst_48069__$1 = tmp48158;
var inst_48070__$1 = inst_48078;
var state_48126__$1 = (function (){var statearr_48162 = state_48126;
(statearr_48162[(12)] = inst_48068__$1);

(statearr_48162[(13)] = inst_48067__$1);

(statearr_48162[(17)] = inst_48077);

(statearr_48162[(15)] = inst_48070__$1);

(statearr_48162[(16)] = inst_48069__$1);

return statearr_48162;
})();
var statearr_48163_48203 = state_48126__$1;
(statearr_48163_48203[(2)] = null);

(statearr_48163_48203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (18))){
var inst_48096 = (state_48126[(2)]);
var state_48126__$1 = state_48126;
var statearr_48164_48204 = state_48126__$1;
(statearr_48164_48204[(2)] = inst_48096);

(statearr_48164_48204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48127 === (8))){
var inst_48070 = (state_48126[(15)]);
var inst_48069 = (state_48126[(16)]);
var inst_48072 = (inst_48070 < inst_48069);
var inst_48073 = inst_48072;
var state_48126__$1 = state_48126;
if(cljs.core.truth_(inst_48073)){
var statearr_48165_48205 = state_48126__$1;
(statearr_48165_48205[(1)] = (10));

} else {
var statearr_48166_48206 = state_48126__$1;
(statearr_48166_48206[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___48178,mults,ensure_mult,p))
;
return ((function (switch__37128__auto__,c__37193__auto___48178,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_48170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48170[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_48170[(1)] = (1));

return statearr_48170;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_48126){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_48126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e48171){if((e48171 instanceof Object)){
var ex__37132__auto__ = e48171;
var statearr_48172_48207 = state_48126;
(statearr_48172_48207[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48208 = state_48126;
state_48126 = G__48208;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_48126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_48126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___48178,mults,ensure_mult,p))
})();
var state__37195__auto__ = (function (){var statearr_48173 = f__37194__auto__.call(null);
(statearr_48173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___48178);

return statearr_48173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___48178,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args48209 = [];
var len__32654__auto___48212 = arguments.length;
var i__32655__auto___48213 = (0);
while(true){
if((i__32655__auto___48213 < len__32654__auto___48212)){
args48209.push((arguments[i__32655__auto___48213]));

var G__48214 = (i__32655__auto___48213 + (1));
i__32655__auto___48213 = G__48214;
continue;
} else {
}
break;
}

var G__48211 = args48209.length;
switch (G__48211) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48209.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args48216 = [];
var len__32654__auto___48219 = arguments.length;
var i__32655__auto___48220 = (0);
while(true){
if((i__32655__auto___48220 < len__32654__auto___48219)){
args48216.push((arguments[i__32655__auto___48220]));

var G__48221 = (i__32655__auto___48220 + (1));
i__32655__auto___48220 = G__48221;
continue;
} else {
}
break;
}

var G__48218 = args48216.length;
switch (G__48218) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48216.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args48223 = [];
var len__32654__auto___48294 = arguments.length;
var i__32655__auto___48295 = (0);
while(true){
if((i__32655__auto___48295 < len__32654__auto___48294)){
args48223.push((arguments[i__32655__auto___48295]));

var G__48296 = (i__32655__auto___48295 + (1));
i__32655__auto___48295 = G__48296;
continue;
} else {
}
break;
}

var G__48225 = args48223.length;
switch (G__48225) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48223.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37193__auto___48298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___48298,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___48298,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48264){
var state_val_48265 = (state_48264[(1)]);
if((state_val_48265 === (7))){
var state_48264__$1 = state_48264;
var statearr_48266_48299 = state_48264__$1;
(statearr_48266_48299[(2)] = null);

(statearr_48266_48299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (1))){
var state_48264__$1 = state_48264;
var statearr_48267_48300 = state_48264__$1;
(statearr_48267_48300[(2)] = null);

(statearr_48267_48300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (4))){
var inst_48228 = (state_48264[(7)]);
var inst_48230 = (inst_48228 < cnt);
var state_48264__$1 = state_48264;
if(cljs.core.truth_(inst_48230)){
var statearr_48268_48301 = state_48264__$1;
(statearr_48268_48301[(1)] = (6));

} else {
var statearr_48269_48302 = state_48264__$1;
(statearr_48269_48302[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (15))){
var inst_48260 = (state_48264[(2)]);
var state_48264__$1 = state_48264;
var statearr_48270_48303 = state_48264__$1;
(statearr_48270_48303[(2)] = inst_48260);

(statearr_48270_48303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (13))){
var inst_48253 = cljs.core.async.close_BANG_.call(null,out);
var state_48264__$1 = state_48264;
var statearr_48271_48304 = state_48264__$1;
(statearr_48271_48304[(2)] = inst_48253);

(statearr_48271_48304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (6))){
var state_48264__$1 = state_48264;
var statearr_48272_48305 = state_48264__$1;
(statearr_48272_48305[(2)] = null);

(statearr_48272_48305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (3))){
var inst_48262 = (state_48264[(2)]);
var state_48264__$1 = state_48264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48264__$1,inst_48262);
} else {
if((state_val_48265 === (12))){
var inst_48250 = (state_48264[(8)]);
var inst_48250__$1 = (state_48264[(2)]);
var inst_48251 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48250__$1);
var state_48264__$1 = (function (){var statearr_48273 = state_48264;
(statearr_48273[(8)] = inst_48250__$1);

return statearr_48273;
})();
if(cljs.core.truth_(inst_48251)){
var statearr_48274_48306 = state_48264__$1;
(statearr_48274_48306[(1)] = (13));

} else {
var statearr_48275_48307 = state_48264__$1;
(statearr_48275_48307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (2))){
var inst_48227 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48228 = (0);
var state_48264__$1 = (function (){var statearr_48276 = state_48264;
(statearr_48276[(9)] = inst_48227);

(statearr_48276[(7)] = inst_48228);

return statearr_48276;
})();
var statearr_48277_48308 = state_48264__$1;
(statearr_48277_48308[(2)] = null);

(statearr_48277_48308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (11))){
var inst_48228 = (state_48264[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48264,(10),Object,null,(9));
var inst_48237 = chs__$1.call(null,inst_48228);
var inst_48238 = done.call(null,inst_48228);
var inst_48239 = cljs.core.async.take_BANG_.call(null,inst_48237,inst_48238);
var state_48264__$1 = state_48264;
var statearr_48278_48309 = state_48264__$1;
(statearr_48278_48309[(2)] = inst_48239);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48264__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (9))){
var inst_48228 = (state_48264[(7)]);
var inst_48241 = (state_48264[(2)]);
var inst_48242 = (inst_48228 + (1));
var inst_48228__$1 = inst_48242;
var state_48264__$1 = (function (){var statearr_48279 = state_48264;
(statearr_48279[(7)] = inst_48228__$1);

(statearr_48279[(10)] = inst_48241);

return statearr_48279;
})();
var statearr_48280_48310 = state_48264__$1;
(statearr_48280_48310[(2)] = null);

(statearr_48280_48310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (5))){
var inst_48248 = (state_48264[(2)]);
var state_48264__$1 = (function (){var statearr_48281 = state_48264;
(statearr_48281[(11)] = inst_48248);

return statearr_48281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48264__$1,(12),dchan);
} else {
if((state_val_48265 === (14))){
var inst_48250 = (state_48264[(8)]);
var inst_48255 = cljs.core.apply.call(null,f,inst_48250);
var state_48264__$1 = state_48264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48264__$1,(16),out,inst_48255);
} else {
if((state_val_48265 === (16))){
var inst_48257 = (state_48264[(2)]);
var state_48264__$1 = (function (){var statearr_48282 = state_48264;
(statearr_48282[(12)] = inst_48257);

return statearr_48282;
})();
var statearr_48283_48311 = state_48264__$1;
(statearr_48283_48311[(2)] = null);

(statearr_48283_48311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (10))){
var inst_48232 = (state_48264[(2)]);
var inst_48233 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48264__$1 = (function (){var statearr_48284 = state_48264;
(statearr_48284[(13)] = inst_48232);

return statearr_48284;
})();
var statearr_48285_48312 = state_48264__$1;
(statearr_48285_48312[(2)] = inst_48233);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48264__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48265 === (8))){
var inst_48246 = (state_48264[(2)]);
var state_48264__$1 = state_48264;
var statearr_48286_48313 = state_48264__$1;
(statearr_48286_48313[(2)] = inst_48246);

(statearr_48286_48313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___48298,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37128__auto__,c__37193__auto___48298,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_48290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48290[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_48290[(1)] = (1));

return statearr_48290;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_48264){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_48264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e48291){if((e48291 instanceof Object)){
var ex__37132__auto__ = e48291;
var statearr_48292_48314 = state_48264;
(statearr_48292_48314[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48315 = state_48264;
state_48264 = G__48315;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_48264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_48264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___48298,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37195__auto__ = (function (){var statearr_48293 = f__37194__auto__.call(null);
(statearr_48293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___48298);

return statearr_48293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___48298,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args48317 = [];
var len__32654__auto___48375 = arguments.length;
var i__32655__auto___48376 = (0);
while(true){
if((i__32655__auto___48376 < len__32654__auto___48375)){
args48317.push((arguments[i__32655__auto___48376]));

var G__48377 = (i__32655__auto___48376 + (1));
i__32655__auto___48376 = G__48377;
continue;
} else {
}
break;
}

var G__48319 = args48317.length;
switch (G__48319) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48317.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37193__auto___48379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___48379,out){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___48379,out){
return (function (state_48351){
var state_val_48352 = (state_48351[(1)]);
if((state_val_48352 === (7))){
var inst_48331 = (state_48351[(7)]);
var inst_48330 = (state_48351[(8)]);
var inst_48330__$1 = (state_48351[(2)]);
var inst_48331__$1 = cljs.core.nth.call(null,inst_48330__$1,(0),null);
var inst_48332 = cljs.core.nth.call(null,inst_48330__$1,(1),null);
var inst_48333 = (inst_48331__$1 == null);
var state_48351__$1 = (function (){var statearr_48353 = state_48351;
(statearr_48353[(9)] = inst_48332);

(statearr_48353[(7)] = inst_48331__$1);

(statearr_48353[(8)] = inst_48330__$1);

return statearr_48353;
})();
if(cljs.core.truth_(inst_48333)){
var statearr_48354_48380 = state_48351__$1;
(statearr_48354_48380[(1)] = (8));

} else {
var statearr_48355_48381 = state_48351__$1;
(statearr_48355_48381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (1))){
var inst_48320 = cljs.core.vec.call(null,chs);
var inst_48321 = inst_48320;
var state_48351__$1 = (function (){var statearr_48356 = state_48351;
(statearr_48356[(10)] = inst_48321);

return statearr_48356;
})();
var statearr_48357_48382 = state_48351__$1;
(statearr_48357_48382[(2)] = null);

(statearr_48357_48382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (4))){
var inst_48321 = (state_48351[(10)]);
var state_48351__$1 = state_48351;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48351__$1,(7),inst_48321);
} else {
if((state_val_48352 === (6))){
var inst_48347 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
var statearr_48358_48383 = state_48351__$1;
(statearr_48358_48383[(2)] = inst_48347);

(statearr_48358_48383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (3))){
var inst_48349 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48351__$1,inst_48349);
} else {
if((state_val_48352 === (2))){
var inst_48321 = (state_48351[(10)]);
var inst_48323 = cljs.core.count.call(null,inst_48321);
var inst_48324 = (inst_48323 > (0));
var state_48351__$1 = state_48351;
if(cljs.core.truth_(inst_48324)){
var statearr_48360_48384 = state_48351__$1;
(statearr_48360_48384[(1)] = (4));

} else {
var statearr_48361_48385 = state_48351__$1;
(statearr_48361_48385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (11))){
var inst_48321 = (state_48351[(10)]);
var inst_48340 = (state_48351[(2)]);
var tmp48359 = inst_48321;
var inst_48321__$1 = tmp48359;
var state_48351__$1 = (function (){var statearr_48362 = state_48351;
(statearr_48362[(10)] = inst_48321__$1);

(statearr_48362[(11)] = inst_48340);

return statearr_48362;
})();
var statearr_48363_48386 = state_48351__$1;
(statearr_48363_48386[(2)] = null);

(statearr_48363_48386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (9))){
var inst_48331 = (state_48351[(7)]);
var state_48351__$1 = state_48351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48351__$1,(11),out,inst_48331);
} else {
if((state_val_48352 === (5))){
var inst_48345 = cljs.core.async.close_BANG_.call(null,out);
var state_48351__$1 = state_48351;
var statearr_48364_48387 = state_48351__$1;
(statearr_48364_48387[(2)] = inst_48345);

(statearr_48364_48387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (10))){
var inst_48343 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
var statearr_48365_48388 = state_48351__$1;
(statearr_48365_48388[(2)] = inst_48343);

(statearr_48365_48388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (8))){
var inst_48332 = (state_48351[(9)]);
var inst_48321 = (state_48351[(10)]);
var inst_48331 = (state_48351[(7)]);
var inst_48330 = (state_48351[(8)]);
var inst_48335 = (function (){var cs = inst_48321;
var vec__48326 = inst_48330;
var v = inst_48331;
var c = inst_48332;
return ((function (cs,vec__48326,v,c,inst_48332,inst_48321,inst_48331,inst_48330,state_val_48352,c__37193__auto___48379,out){
return (function (p1__48316_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48316_SHARP_);
});
;})(cs,vec__48326,v,c,inst_48332,inst_48321,inst_48331,inst_48330,state_val_48352,c__37193__auto___48379,out))
})();
var inst_48336 = cljs.core.filterv.call(null,inst_48335,inst_48321);
var inst_48321__$1 = inst_48336;
var state_48351__$1 = (function (){var statearr_48366 = state_48351;
(statearr_48366[(10)] = inst_48321__$1);

return statearr_48366;
})();
var statearr_48367_48389 = state_48351__$1;
(statearr_48367_48389[(2)] = null);

(statearr_48367_48389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___48379,out))
;
return ((function (switch__37128__auto__,c__37193__auto___48379,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_48371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48371[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_48371[(1)] = (1));

return statearr_48371;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_48351){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_48351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e48372){if((e48372 instanceof Object)){
var ex__37132__auto__ = e48372;
var statearr_48373_48390 = state_48351;
(statearr_48373_48390[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48391 = state_48351;
state_48351 = G__48391;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_48351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_48351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___48379,out))
})();
var state__37195__auto__ = (function (){var statearr_48374 = f__37194__auto__.call(null);
(statearr_48374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___48379);

return statearr_48374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___48379,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args48392 = [];
var len__32654__auto___48441 = arguments.length;
var i__32655__auto___48442 = (0);
while(true){
if((i__32655__auto___48442 < len__32654__auto___48441)){
args48392.push((arguments[i__32655__auto___48442]));

var G__48443 = (i__32655__auto___48442 + (1));
i__32655__auto___48442 = G__48443;
continue;
} else {
}
break;
}

var G__48394 = args48392.length;
switch (G__48394) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48392.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37193__auto___48445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___48445,out){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___48445,out){
return (function (state_48418){
var state_val_48419 = (state_48418[(1)]);
if((state_val_48419 === (7))){
var inst_48400 = (state_48418[(7)]);
var inst_48400__$1 = (state_48418[(2)]);
var inst_48401 = (inst_48400__$1 == null);
var inst_48402 = cljs.core.not.call(null,inst_48401);
var state_48418__$1 = (function (){var statearr_48420 = state_48418;
(statearr_48420[(7)] = inst_48400__$1);

return statearr_48420;
})();
if(inst_48402){
var statearr_48421_48446 = state_48418__$1;
(statearr_48421_48446[(1)] = (8));

} else {
var statearr_48422_48447 = state_48418__$1;
(statearr_48422_48447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (1))){
var inst_48395 = (0);
var state_48418__$1 = (function (){var statearr_48423 = state_48418;
(statearr_48423[(8)] = inst_48395);

return statearr_48423;
})();
var statearr_48424_48448 = state_48418__$1;
(statearr_48424_48448[(2)] = null);

(statearr_48424_48448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (4))){
var state_48418__$1 = state_48418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48418__$1,(7),ch);
} else {
if((state_val_48419 === (6))){
var inst_48413 = (state_48418[(2)]);
var state_48418__$1 = state_48418;
var statearr_48425_48449 = state_48418__$1;
(statearr_48425_48449[(2)] = inst_48413);

(statearr_48425_48449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (3))){
var inst_48415 = (state_48418[(2)]);
var inst_48416 = cljs.core.async.close_BANG_.call(null,out);
var state_48418__$1 = (function (){var statearr_48426 = state_48418;
(statearr_48426[(9)] = inst_48415);

return statearr_48426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48418__$1,inst_48416);
} else {
if((state_val_48419 === (2))){
var inst_48395 = (state_48418[(8)]);
var inst_48397 = (inst_48395 < n);
var state_48418__$1 = state_48418;
if(cljs.core.truth_(inst_48397)){
var statearr_48427_48450 = state_48418__$1;
(statearr_48427_48450[(1)] = (4));

} else {
var statearr_48428_48451 = state_48418__$1;
(statearr_48428_48451[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (11))){
var inst_48395 = (state_48418[(8)]);
var inst_48405 = (state_48418[(2)]);
var inst_48406 = (inst_48395 + (1));
var inst_48395__$1 = inst_48406;
var state_48418__$1 = (function (){var statearr_48429 = state_48418;
(statearr_48429[(8)] = inst_48395__$1);

(statearr_48429[(10)] = inst_48405);

return statearr_48429;
})();
var statearr_48430_48452 = state_48418__$1;
(statearr_48430_48452[(2)] = null);

(statearr_48430_48452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (9))){
var state_48418__$1 = state_48418;
var statearr_48431_48453 = state_48418__$1;
(statearr_48431_48453[(2)] = null);

(statearr_48431_48453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (5))){
var state_48418__$1 = state_48418;
var statearr_48432_48454 = state_48418__$1;
(statearr_48432_48454[(2)] = null);

(statearr_48432_48454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (10))){
var inst_48410 = (state_48418[(2)]);
var state_48418__$1 = state_48418;
var statearr_48433_48455 = state_48418__$1;
(statearr_48433_48455[(2)] = inst_48410);

(statearr_48433_48455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (8))){
var inst_48400 = (state_48418[(7)]);
var state_48418__$1 = state_48418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48418__$1,(11),out,inst_48400);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___48445,out))
;
return ((function (switch__37128__auto__,c__37193__auto___48445,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_48437 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48437[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_48437[(1)] = (1));

return statearr_48437;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_48418){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_48418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e48438){if((e48438 instanceof Object)){
var ex__37132__auto__ = e48438;
var statearr_48439_48456 = state_48418;
(statearr_48439_48456[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48457 = state_48418;
state_48418 = G__48457;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_48418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_48418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___48445,out))
})();
var state__37195__auto__ = (function (){var statearr_48440 = f__37194__auto__.call(null);
(statearr_48440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___48445);

return statearr_48440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___48445,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48465 = (function (map_LT_,f,ch,meta48466){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48466 = meta48466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48467,meta48466__$1){
var self__ = this;
var _48467__$1 = this;
return (new cljs.core.async.t_cljs$core$async48465(self__.map_LT_,self__.f,self__.ch,meta48466__$1));
});

cljs.core.async.t_cljs$core$async48465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48467){
var self__ = this;
var _48467__$1 = this;
return self__.meta48466;
});

cljs.core.async.t_cljs$core$async48465.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48465.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48465.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48468 = (function (map_LT_,f,ch,meta48466,_,fn1,meta48469){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48466 = meta48466;
this._ = _;
this.fn1 = fn1;
this.meta48469 = meta48469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48470,meta48469__$1){
var self__ = this;
var _48470__$1 = this;
return (new cljs.core.async.t_cljs$core$async48468(self__.map_LT_,self__.f,self__.ch,self__.meta48466,self__._,self__.fn1,meta48469__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48470){
var self__ = this;
var _48470__$1 = this;
return self__.meta48469;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48468.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48458_SHARP_){
return f1.call(null,(((p1__48458_SHARP_ == null))?null:self__.f.call(null,p1__48458_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48468.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48466","meta48466",-1064289473,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48465","cljs.core.async/t_cljs$core$async48465",628579758,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48469","meta48469",-1706985790,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48468";

cljs.core.async.t_cljs$core$async48468.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cljs.core.async/t_cljs$core$async48468");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48468 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48468(map_LT___$1,f__$1,ch__$1,meta48466__$1,___$2,fn1__$1,meta48469){
return (new cljs.core.async.t_cljs$core$async48468(map_LT___$1,f__$1,ch__$1,meta48466__$1,___$2,fn1__$1,meta48469));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48468(self__.map_LT_,self__.f,self__.ch,self__.meta48466,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__31567__auto__ = ret;
if(cljs.core.truth_(and__31567__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__31567__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48465.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48466","meta48466",-1064289473,null)], null);
});

cljs.core.async.t_cljs$core$async48465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48465";

cljs.core.async.t_cljs$core$async48465.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cljs.core.async/t_cljs$core$async48465");
});

cljs.core.async.__GT_t_cljs$core$async48465 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48465(map_LT___$1,f__$1,ch__$1,meta48466){
return (new cljs.core.async.t_cljs$core$async48465(map_LT___$1,f__$1,ch__$1,meta48466));
});

}

return (new cljs.core.async.t_cljs$core$async48465(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48474 = (function (map_GT_,f,ch,meta48475){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta48475 = meta48475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48476,meta48475__$1){
var self__ = this;
var _48476__$1 = this;
return (new cljs.core.async.t_cljs$core$async48474(self__.map_GT_,self__.f,self__.ch,meta48475__$1));
});

cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48476){
var self__ = this;
var _48476__$1 = this;
return self__.meta48475;
});

cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48475","meta48475",-311114979,null)], null);
});

cljs.core.async.t_cljs$core$async48474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48474";

cljs.core.async.t_cljs$core$async48474.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cljs.core.async/t_cljs$core$async48474");
});

cljs.core.async.__GT_t_cljs$core$async48474 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48474(map_GT___$1,f__$1,ch__$1,meta48475){
return (new cljs.core.async.t_cljs$core$async48474(map_GT___$1,f__$1,ch__$1,meta48475));
});

}

return (new cljs.core.async.t_cljs$core$async48474(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48480 = (function (filter_GT_,p,ch,meta48481){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta48481 = meta48481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48482,meta48481__$1){
var self__ = this;
var _48482__$1 = this;
return (new cljs.core.async.t_cljs$core$async48480(self__.filter_GT_,self__.p,self__.ch,meta48481__$1));
});

cljs.core.async.t_cljs$core$async48480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48482){
var self__ = this;
var _48482__$1 = this;
return self__.meta48481;
});

cljs.core.async.t_cljs$core$async48480.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48480.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48480.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48480.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48480.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48480.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48480.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48481","meta48481",271727139,null)], null);
});

cljs.core.async.t_cljs$core$async48480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48480";

cljs.core.async.t_cljs$core$async48480.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cljs.core.async/t_cljs$core$async48480");
});

cljs.core.async.__GT_t_cljs$core$async48480 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48480(filter_GT___$1,p__$1,ch__$1,meta48481){
return (new cljs.core.async.t_cljs$core$async48480(filter_GT___$1,p__$1,ch__$1,meta48481));
});

}

return (new cljs.core.async.t_cljs$core$async48480(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args48483 = [];
var len__32654__auto___48527 = arguments.length;
var i__32655__auto___48528 = (0);
while(true){
if((i__32655__auto___48528 < len__32654__auto___48527)){
args48483.push((arguments[i__32655__auto___48528]));

var G__48529 = (i__32655__auto___48528 + (1));
i__32655__auto___48528 = G__48529;
continue;
} else {
}
break;
}

var G__48485 = args48483.length;
switch (G__48485) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48483.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37193__auto___48531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___48531,out){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___48531,out){
return (function (state_48506){
var state_val_48507 = (state_48506[(1)]);
if((state_val_48507 === (7))){
var inst_48502 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
var statearr_48508_48532 = state_48506__$1;
(statearr_48508_48532[(2)] = inst_48502);

(statearr_48508_48532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (1))){
var state_48506__$1 = state_48506;
var statearr_48509_48533 = state_48506__$1;
(statearr_48509_48533[(2)] = null);

(statearr_48509_48533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (4))){
var inst_48488 = (state_48506[(7)]);
var inst_48488__$1 = (state_48506[(2)]);
var inst_48489 = (inst_48488__$1 == null);
var state_48506__$1 = (function (){var statearr_48510 = state_48506;
(statearr_48510[(7)] = inst_48488__$1);

return statearr_48510;
})();
if(cljs.core.truth_(inst_48489)){
var statearr_48511_48534 = state_48506__$1;
(statearr_48511_48534[(1)] = (5));

} else {
var statearr_48512_48535 = state_48506__$1;
(statearr_48512_48535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (6))){
var inst_48488 = (state_48506[(7)]);
var inst_48493 = p.call(null,inst_48488);
var state_48506__$1 = state_48506;
if(cljs.core.truth_(inst_48493)){
var statearr_48513_48536 = state_48506__$1;
(statearr_48513_48536[(1)] = (8));

} else {
var statearr_48514_48537 = state_48506__$1;
(statearr_48514_48537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (3))){
var inst_48504 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48506__$1,inst_48504);
} else {
if((state_val_48507 === (2))){
var state_48506__$1 = state_48506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48506__$1,(4),ch);
} else {
if((state_val_48507 === (11))){
var inst_48496 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
var statearr_48515_48538 = state_48506__$1;
(statearr_48515_48538[(2)] = inst_48496);

(statearr_48515_48538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (9))){
var state_48506__$1 = state_48506;
var statearr_48516_48539 = state_48506__$1;
(statearr_48516_48539[(2)] = null);

(statearr_48516_48539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (5))){
var inst_48491 = cljs.core.async.close_BANG_.call(null,out);
var state_48506__$1 = state_48506;
var statearr_48517_48540 = state_48506__$1;
(statearr_48517_48540[(2)] = inst_48491);

(statearr_48517_48540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (10))){
var inst_48499 = (state_48506[(2)]);
var state_48506__$1 = (function (){var statearr_48518 = state_48506;
(statearr_48518[(8)] = inst_48499);

return statearr_48518;
})();
var statearr_48519_48541 = state_48506__$1;
(statearr_48519_48541[(2)] = null);

(statearr_48519_48541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (8))){
var inst_48488 = (state_48506[(7)]);
var state_48506__$1 = state_48506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48506__$1,(11),out,inst_48488);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___48531,out))
;
return ((function (switch__37128__auto__,c__37193__auto___48531,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_48523 = [null,null,null,null,null,null,null,null,null];
(statearr_48523[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_48523[(1)] = (1));

return statearr_48523;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_48506){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_48506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e48524){if((e48524 instanceof Object)){
var ex__37132__auto__ = e48524;
var statearr_48525_48542 = state_48506;
(statearr_48525_48542[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48543 = state_48506;
state_48506 = G__48543;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_48506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_48506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___48531,out))
})();
var state__37195__auto__ = (function (){var statearr_48526 = f__37194__auto__.call(null);
(statearr_48526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___48531);

return statearr_48526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___48531,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args48544 = [];
var len__32654__auto___48547 = arguments.length;
var i__32655__auto___48548 = (0);
while(true){
if((i__32655__auto___48548 < len__32654__auto___48547)){
args48544.push((arguments[i__32655__auto___48548]));

var G__48549 = (i__32655__auto___48548 + (1));
i__32655__auto___48548 = G__48549;
continue;
} else {
}
break;
}

var G__48546 = args48544.length;
switch (G__48546) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48544.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto__){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto__){
return (function (state_48716){
var state_val_48717 = (state_48716[(1)]);
if((state_val_48717 === (7))){
var inst_48712 = (state_48716[(2)]);
var state_48716__$1 = state_48716;
var statearr_48718_48759 = state_48716__$1;
(statearr_48718_48759[(2)] = inst_48712);

(statearr_48718_48759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (20))){
var inst_48682 = (state_48716[(7)]);
var inst_48693 = (state_48716[(2)]);
var inst_48694 = cljs.core.next.call(null,inst_48682);
var inst_48668 = inst_48694;
var inst_48669 = null;
var inst_48670 = (0);
var inst_48671 = (0);
var state_48716__$1 = (function (){var statearr_48719 = state_48716;
(statearr_48719[(8)] = inst_48668);

(statearr_48719[(9)] = inst_48693);

(statearr_48719[(10)] = inst_48669);

(statearr_48719[(11)] = inst_48671);

(statearr_48719[(12)] = inst_48670);

return statearr_48719;
})();
var statearr_48720_48760 = state_48716__$1;
(statearr_48720_48760[(2)] = null);

(statearr_48720_48760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (1))){
var state_48716__$1 = state_48716;
var statearr_48721_48761 = state_48716__$1;
(statearr_48721_48761[(2)] = null);

(statearr_48721_48761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (4))){
var inst_48657 = (state_48716[(13)]);
var inst_48657__$1 = (state_48716[(2)]);
var inst_48658 = (inst_48657__$1 == null);
var state_48716__$1 = (function (){var statearr_48722 = state_48716;
(statearr_48722[(13)] = inst_48657__$1);

return statearr_48722;
})();
if(cljs.core.truth_(inst_48658)){
var statearr_48723_48762 = state_48716__$1;
(statearr_48723_48762[(1)] = (5));

} else {
var statearr_48724_48763 = state_48716__$1;
(statearr_48724_48763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (15))){
var state_48716__$1 = state_48716;
var statearr_48728_48764 = state_48716__$1;
(statearr_48728_48764[(2)] = null);

(statearr_48728_48764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (21))){
var state_48716__$1 = state_48716;
var statearr_48729_48765 = state_48716__$1;
(statearr_48729_48765[(2)] = null);

(statearr_48729_48765[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (13))){
var inst_48668 = (state_48716[(8)]);
var inst_48669 = (state_48716[(10)]);
var inst_48671 = (state_48716[(11)]);
var inst_48670 = (state_48716[(12)]);
var inst_48678 = (state_48716[(2)]);
var inst_48679 = (inst_48671 + (1));
var tmp48725 = inst_48668;
var tmp48726 = inst_48669;
var tmp48727 = inst_48670;
var inst_48668__$1 = tmp48725;
var inst_48669__$1 = tmp48726;
var inst_48670__$1 = tmp48727;
var inst_48671__$1 = inst_48679;
var state_48716__$1 = (function (){var statearr_48730 = state_48716;
(statearr_48730[(8)] = inst_48668__$1);

(statearr_48730[(10)] = inst_48669__$1);

(statearr_48730[(14)] = inst_48678);

(statearr_48730[(11)] = inst_48671__$1);

(statearr_48730[(12)] = inst_48670__$1);

return statearr_48730;
})();
var statearr_48731_48766 = state_48716__$1;
(statearr_48731_48766[(2)] = null);

(statearr_48731_48766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (22))){
var state_48716__$1 = state_48716;
var statearr_48732_48767 = state_48716__$1;
(statearr_48732_48767[(2)] = null);

(statearr_48732_48767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (6))){
var inst_48657 = (state_48716[(13)]);
var inst_48666 = f.call(null,inst_48657);
var inst_48667 = cljs.core.seq.call(null,inst_48666);
var inst_48668 = inst_48667;
var inst_48669 = null;
var inst_48670 = (0);
var inst_48671 = (0);
var state_48716__$1 = (function (){var statearr_48733 = state_48716;
(statearr_48733[(8)] = inst_48668);

(statearr_48733[(10)] = inst_48669);

(statearr_48733[(11)] = inst_48671);

(statearr_48733[(12)] = inst_48670);

return statearr_48733;
})();
var statearr_48734_48768 = state_48716__$1;
(statearr_48734_48768[(2)] = null);

(statearr_48734_48768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (17))){
var inst_48682 = (state_48716[(7)]);
var inst_48686 = cljs.core.chunk_first.call(null,inst_48682);
var inst_48687 = cljs.core.chunk_rest.call(null,inst_48682);
var inst_48688 = cljs.core.count.call(null,inst_48686);
var inst_48668 = inst_48687;
var inst_48669 = inst_48686;
var inst_48670 = inst_48688;
var inst_48671 = (0);
var state_48716__$1 = (function (){var statearr_48735 = state_48716;
(statearr_48735[(8)] = inst_48668);

(statearr_48735[(10)] = inst_48669);

(statearr_48735[(11)] = inst_48671);

(statearr_48735[(12)] = inst_48670);

return statearr_48735;
})();
var statearr_48736_48769 = state_48716__$1;
(statearr_48736_48769[(2)] = null);

(statearr_48736_48769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (3))){
var inst_48714 = (state_48716[(2)]);
var state_48716__$1 = state_48716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48716__$1,inst_48714);
} else {
if((state_val_48717 === (12))){
var inst_48702 = (state_48716[(2)]);
var state_48716__$1 = state_48716;
var statearr_48737_48770 = state_48716__$1;
(statearr_48737_48770[(2)] = inst_48702);

(statearr_48737_48770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (2))){
var state_48716__$1 = state_48716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48716__$1,(4),in$);
} else {
if((state_val_48717 === (23))){
var inst_48710 = (state_48716[(2)]);
var state_48716__$1 = state_48716;
var statearr_48738_48771 = state_48716__$1;
(statearr_48738_48771[(2)] = inst_48710);

(statearr_48738_48771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (19))){
var inst_48697 = (state_48716[(2)]);
var state_48716__$1 = state_48716;
var statearr_48739_48772 = state_48716__$1;
(statearr_48739_48772[(2)] = inst_48697);

(statearr_48739_48772[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (11))){
var inst_48668 = (state_48716[(8)]);
var inst_48682 = (state_48716[(7)]);
var inst_48682__$1 = cljs.core.seq.call(null,inst_48668);
var state_48716__$1 = (function (){var statearr_48740 = state_48716;
(statearr_48740[(7)] = inst_48682__$1);

return statearr_48740;
})();
if(inst_48682__$1){
var statearr_48741_48773 = state_48716__$1;
(statearr_48741_48773[(1)] = (14));

} else {
var statearr_48742_48774 = state_48716__$1;
(statearr_48742_48774[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (9))){
var inst_48704 = (state_48716[(2)]);
var inst_48705 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48716__$1 = (function (){var statearr_48743 = state_48716;
(statearr_48743[(15)] = inst_48704);

return statearr_48743;
})();
if(cljs.core.truth_(inst_48705)){
var statearr_48744_48775 = state_48716__$1;
(statearr_48744_48775[(1)] = (21));

} else {
var statearr_48745_48776 = state_48716__$1;
(statearr_48745_48776[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (5))){
var inst_48660 = cljs.core.async.close_BANG_.call(null,out);
var state_48716__$1 = state_48716;
var statearr_48746_48777 = state_48716__$1;
(statearr_48746_48777[(2)] = inst_48660);

(statearr_48746_48777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (14))){
var inst_48682 = (state_48716[(7)]);
var inst_48684 = cljs.core.chunked_seq_QMARK_.call(null,inst_48682);
var state_48716__$1 = state_48716;
if(inst_48684){
var statearr_48747_48778 = state_48716__$1;
(statearr_48747_48778[(1)] = (17));

} else {
var statearr_48748_48779 = state_48716__$1;
(statearr_48748_48779[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (16))){
var inst_48700 = (state_48716[(2)]);
var state_48716__$1 = state_48716;
var statearr_48749_48780 = state_48716__$1;
(statearr_48749_48780[(2)] = inst_48700);

(statearr_48749_48780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48717 === (10))){
var inst_48669 = (state_48716[(10)]);
var inst_48671 = (state_48716[(11)]);
var inst_48676 = cljs.core._nth.call(null,inst_48669,inst_48671);
var state_48716__$1 = state_48716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48716__$1,(13),out,inst_48676);
} else {
if((state_val_48717 === (18))){
var inst_48682 = (state_48716[(7)]);
var inst_48691 = cljs.core.first.call(null,inst_48682);
var state_48716__$1 = state_48716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48716__$1,(20),out,inst_48691);
} else {
if((state_val_48717 === (8))){
var inst_48671 = (state_48716[(11)]);
var inst_48670 = (state_48716[(12)]);
var inst_48673 = (inst_48671 < inst_48670);
var inst_48674 = inst_48673;
var state_48716__$1 = state_48716;
if(cljs.core.truth_(inst_48674)){
var statearr_48750_48781 = state_48716__$1;
(statearr_48750_48781[(1)] = (10));

} else {
var statearr_48751_48782 = state_48716__$1;
(statearr_48751_48782[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto__))
;
return ((function (switch__37128__auto__,c__37193__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_48755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48755[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__);

(statearr_48755[(1)] = (1));

return statearr_48755;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____1 = (function (state_48716){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_48716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e48756){if((e48756 instanceof Object)){
var ex__37132__auto__ = e48756;
var statearr_48757_48783 = state_48716;
(statearr_48757_48783[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48784 = state_48716;
state_48716 = G__48784;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__ = function(state_48716){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____1.call(this,state_48716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto__))
})();
var state__37195__auto__ = (function (){var statearr_48758 = f__37194__auto__.call(null);
(statearr_48758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto__);

return statearr_48758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto__))
);

return c__37193__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args48785 = [];
var len__32654__auto___48788 = arguments.length;
var i__32655__auto___48789 = (0);
while(true){
if((i__32655__auto___48789 < len__32654__auto___48788)){
args48785.push((arguments[i__32655__auto___48789]));

var G__48790 = (i__32655__auto___48789 + (1));
i__32655__auto___48789 = G__48790;
continue;
} else {
}
break;
}

var G__48787 = args48785.length;
switch (G__48787) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48785.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args48792 = [];
var len__32654__auto___48795 = arguments.length;
var i__32655__auto___48796 = (0);
while(true){
if((i__32655__auto___48796 < len__32654__auto___48795)){
args48792.push((arguments[i__32655__auto___48796]));

var G__48797 = (i__32655__auto___48796 + (1));
i__32655__auto___48796 = G__48797;
continue;
} else {
}
break;
}

var G__48794 = args48792.length;
switch (G__48794) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48792.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args48799 = [];
var len__32654__auto___48850 = arguments.length;
var i__32655__auto___48851 = (0);
while(true){
if((i__32655__auto___48851 < len__32654__auto___48850)){
args48799.push((arguments[i__32655__auto___48851]));

var G__48852 = (i__32655__auto___48851 + (1));
i__32655__auto___48851 = G__48852;
continue;
} else {
}
break;
}

var G__48801 = args48799.length;
switch (G__48801) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48799.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37193__auto___48854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___48854,out){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___48854,out){
return (function (state_48825){
var state_val_48826 = (state_48825[(1)]);
if((state_val_48826 === (7))){
var inst_48820 = (state_48825[(2)]);
var state_48825__$1 = state_48825;
var statearr_48827_48855 = state_48825__$1;
(statearr_48827_48855[(2)] = inst_48820);

(statearr_48827_48855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48826 === (1))){
var inst_48802 = null;
var state_48825__$1 = (function (){var statearr_48828 = state_48825;
(statearr_48828[(7)] = inst_48802);

return statearr_48828;
})();
var statearr_48829_48856 = state_48825__$1;
(statearr_48829_48856[(2)] = null);

(statearr_48829_48856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48826 === (4))){
var inst_48805 = (state_48825[(8)]);
var inst_48805__$1 = (state_48825[(2)]);
var inst_48806 = (inst_48805__$1 == null);
var inst_48807 = cljs.core.not.call(null,inst_48806);
var state_48825__$1 = (function (){var statearr_48830 = state_48825;
(statearr_48830[(8)] = inst_48805__$1);

return statearr_48830;
})();
if(inst_48807){
var statearr_48831_48857 = state_48825__$1;
(statearr_48831_48857[(1)] = (5));

} else {
var statearr_48832_48858 = state_48825__$1;
(statearr_48832_48858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48826 === (6))){
var state_48825__$1 = state_48825;
var statearr_48833_48859 = state_48825__$1;
(statearr_48833_48859[(2)] = null);

(statearr_48833_48859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48826 === (3))){
var inst_48822 = (state_48825[(2)]);
var inst_48823 = cljs.core.async.close_BANG_.call(null,out);
var state_48825__$1 = (function (){var statearr_48834 = state_48825;
(statearr_48834[(9)] = inst_48822);

return statearr_48834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48825__$1,inst_48823);
} else {
if((state_val_48826 === (2))){
var state_48825__$1 = state_48825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48825__$1,(4),ch);
} else {
if((state_val_48826 === (11))){
var inst_48805 = (state_48825[(8)]);
var inst_48814 = (state_48825[(2)]);
var inst_48802 = inst_48805;
var state_48825__$1 = (function (){var statearr_48835 = state_48825;
(statearr_48835[(10)] = inst_48814);

(statearr_48835[(7)] = inst_48802);

return statearr_48835;
})();
var statearr_48836_48860 = state_48825__$1;
(statearr_48836_48860[(2)] = null);

(statearr_48836_48860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48826 === (9))){
var inst_48805 = (state_48825[(8)]);
var state_48825__$1 = state_48825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48825__$1,(11),out,inst_48805);
} else {
if((state_val_48826 === (5))){
var inst_48802 = (state_48825[(7)]);
var inst_48805 = (state_48825[(8)]);
var inst_48809 = cljs.core._EQ_.call(null,inst_48805,inst_48802);
var state_48825__$1 = state_48825;
if(inst_48809){
var statearr_48838_48861 = state_48825__$1;
(statearr_48838_48861[(1)] = (8));

} else {
var statearr_48839_48862 = state_48825__$1;
(statearr_48839_48862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48826 === (10))){
var inst_48817 = (state_48825[(2)]);
var state_48825__$1 = state_48825;
var statearr_48840_48863 = state_48825__$1;
(statearr_48840_48863[(2)] = inst_48817);

(statearr_48840_48863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48826 === (8))){
var inst_48802 = (state_48825[(7)]);
var tmp48837 = inst_48802;
var inst_48802__$1 = tmp48837;
var state_48825__$1 = (function (){var statearr_48841 = state_48825;
(statearr_48841[(7)] = inst_48802__$1);

return statearr_48841;
})();
var statearr_48842_48864 = state_48825__$1;
(statearr_48842_48864[(2)] = null);

(statearr_48842_48864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___48854,out))
;
return ((function (switch__37128__auto__,c__37193__auto___48854,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_48846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48846[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_48846[(1)] = (1));

return statearr_48846;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_48825){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_48825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e48847){if((e48847 instanceof Object)){
var ex__37132__auto__ = e48847;
var statearr_48848_48865 = state_48825;
(statearr_48848_48865[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48866 = state_48825;
state_48825 = G__48866;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_48825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_48825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___48854,out))
})();
var state__37195__auto__ = (function (){var statearr_48849 = f__37194__auto__.call(null);
(statearr_48849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___48854);

return statearr_48849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___48854,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args48867 = [];
var len__32654__auto___48937 = arguments.length;
var i__32655__auto___48938 = (0);
while(true){
if((i__32655__auto___48938 < len__32654__auto___48937)){
args48867.push((arguments[i__32655__auto___48938]));

var G__48939 = (i__32655__auto___48938 + (1));
i__32655__auto___48938 = G__48939;
continue;
} else {
}
break;
}

var G__48869 = args48867.length;
switch (G__48869) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48867.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37193__auto___48941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___48941,out){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___48941,out){
return (function (state_48907){
var state_val_48908 = (state_48907[(1)]);
if((state_val_48908 === (7))){
var inst_48903 = (state_48907[(2)]);
var state_48907__$1 = state_48907;
var statearr_48909_48942 = state_48907__$1;
(statearr_48909_48942[(2)] = inst_48903);

(statearr_48909_48942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48908 === (1))){
var inst_48870 = (new Array(n));
var inst_48871 = inst_48870;
var inst_48872 = (0);
var state_48907__$1 = (function (){var statearr_48910 = state_48907;
(statearr_48910[(7)] = inst_48872);

(statearr_48910[(8)] = inst_48871);

return statearr_48910;
})();
var statearr_48911_48943 = state_48907__$1;
(statearr_48911_48943[(2)] = null);

(statearr_48911_48943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48908 === (4))){
var inst_48875 = (state_48907[(9)]);
var inst_48875__$1 = (state_48907[(2)]);
var inst_48876 = (inst_48875__$1 == null);
var inst_48877 = cljs.core.not.call(null,inst_48876);
var state_48907__$1 = (function (){var statearr_48912 = state_48907;
(statearr_48912[(9)] = inst_48875__$1);

return statearr_48912;
})();
if(inst_48877){
var statearr_48913_48944 = state_48907__$1;
(statearr_48913_48944[(1)] = (5));

} else {
var statearr_48914_48945 = state_48907__$1;
(statearr_48914_48945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48908 === (15))){
var inst_48897 = (state_48907[(2)]);
var state_48907__$1 = state_48907;
var statearr_48915_48946 = state_48907__$1;
(statearr_48915_48946[(2)] = inst_48897);

(statearr_48915_48946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48908 === (13))){
var state_48907__$1 = state_48907;
var statearr_48916_48947 = state_48907__$1;
(statearr_48916_48947[(2)] = null);

(statearr_48916_48947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48908 === (6))){
var inst_48872 = (state_48907[(7)]);
var inst_48893 = (inst_48872 > (0));
var state_48907__$1 = state_48907;
if(cljs.core.truth_(inst_48893)){
var statearr_48917_48948 = state_48907__$1;
(statearr_48917_48948[(1)] = (12));

} else {
var statearr_48918_48949 = state_48907__$1;
(statearr_48918_48949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48908 === (3))){
var inst_48905 = (state_48907[(2)]);
var state_48907__$1 = state_48907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48907__$1,inst_48905);
} else {
if((state_val_48908 === (12))){
var inst_48871 = (state_48907[(8)]);
var inst_48895 = cljs.core.vec.call(null,inst_48871);
var state_48907__$1 = state_48907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48907__$1,(15),out,inst_48895);
} else {
if((state_val_48908 === (2))){
var state_48907__$1 = state_48907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48907__$1,(4),ch);
} else {
if((state_val_48908 === (11))){
var inst_48887 = (state_48907[(2)]);
var inst_48888 = (new Array(n));
var inst_48871 = inst_48888;
var inst_48872 = (0);
var state_48907__$1 = (function (){var statearr_48919 = state_48907;
(statearr_48919[(10)] = inst_48887);

(statearr_48919[(7)] = inst_48872);

(statearr_48919[(8)] = inst_48871);

return statearr_48919;
})();
var statearr_48920_48950 = state_48907__$1;
(statearr_48920_48950[(2)] = null);

(statearr_48920_48950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48908 === (9))){
var inst_48871 = (state_48907[(8)]);
var inst_48885 = cljs.core.vec.call(null,inst_48871);
var state_48907__$1 = state_48907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48907__$1,(11),out,inst_48885);
} else {
if((state_val_48908 === (5))){
var inst_48872 = (state_48907[(7)]);
var inst_48871 = (state_48907[(8)]);
var inst_48880 = (state_48907[(11)]);
var inst_48875 = (state_48907[(9)]);
var inst_48879 = (inst_48871[inst_48872] = inst_48875);
var inst_48880__$1 = (inst_48872 + (1));
var inst_48881 = (inst_48880__$1 < n);
var state_48907__$1 = (function (){var statearr_48921 = state_48907;
(statearr_48921[(12)] = inst_48879);

(statearr_48921[(11)] = inst_48880__$1);

return statearr_48921;
})();
if(cljs.core.truth_(inst_48881)){
var statearr_48922_48951 = state_48907__$1;
(statearr_48922_48951[(1)] = (8));

} else {
var statearr_48923_48952 = state_48907__$1;
(statearr_48923_48952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48908 === (14))){
var inst_48900 = (state_48907[(2)]);
var inst_48901 = cljs.core.async.close_BANG_.call(null,out);
var state_48907__$1 = (function (){var statearr_48925 = state_48907;
(statearr_48925[(13)] = inst_48900);

return statearr_48925;
})();
var statearr_48926_48953 = state_48907__$1;
(statearr_48926_48953[(2)] = inst_48901);

(statearr_48926_48953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48908 === (10))){
var inst_48891 = (state_48907[(2)]);
var state_48907__$1 = state_48907;
var statearr_48927_48954 = state_48907__$1;
(statearr_48927_48954[(2)] = inst_48891);

(statearr_48927_48954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48908 === (8))){
var inst_48871 = (state_48907[(8)]);
var inst_48880 = (state_48907[(11)]);
var tmp48924 = inst_48871;
var inst_48871__$1 = tmp48924;
var inst_48872 = inst_48880;
var state_48907__$1 = (function (){var statearr_48928 = state_48907;
(statearr_48928[(7)] = inst_48872);

(statearr_48928[(8)] = inst_48871__$1);

return statearr_48928;
})();
var statearr_48929_48955 = state_48907__$1;
(statearr_48929_48955[(2)] = null);

(statearr_48929_48955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___48941,out))
;
return ((function (switch__37128__auto__,c__37193__auto___48941,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_48933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48933[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_48933[(1)] = (1));

return statearr_48933;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_48907){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_48907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e48934){if((e48934 instanceof Object)){
var ex__37132__auto__ = e48934;
var statearr_48935_48956 = state_48907;
(statearr_48935_48956[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48957 = state_48907;
state_48907 = G__48957;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_48907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_48907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___48941,out))
})();
var state__37195__auto__ = (function (){var statearr_48936 = f__37194__auto__.call(null);
(statearr_48936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___48941);

return statearr_48936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___48941,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args48958 = [];
var len__32654__auto___49032 = arguments.length;
var i__32655__auto___49033 = (0);
while(true){
if((i__32655__auto___49033 < len__32654__auto___49032)){
args48958.push((arguments[i__32655__auto___49033]));

var G__49034 = (i__32655__auto___49033 + (1));
i__32655__auto___49033 = G__49034;
continue;
} else {
}
break;
}

var G__48960 = args48958.length;
switch (G__48960) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48958.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37193__auto___49036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37193__auto___49036,out){
return (function (){
var f__37194__auto__ = (function (){var switch__37128__auto__ = ((function (c__37193__auto___49036,out){
return (function (state_49002){
var state_val_49003 = (state_49002[(1)]);
if((state_val_49003 === (7))){
var inst_48998 = (state_49002[(2)]);
var state_49002__$1 = state_49002;
var statearr_49004_49037 = state_49002__$1;
(statearr_49004_49037[(2)] = inst_48998);

(statearr_49004_49037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (1))){
var inst_48961 = [];
var inst_48962 = inst_48961;
var inst_48963 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49002__$1 = (function (){var statearr_49005 = state_49002;
(statearr_49005[(7)] = inst_48963);

(statearr_49005[(8)] = inst_48962);

return statearr_49005;
})();
var statearr_49006_49038 = state_49002__$1;
(statearr_49006_49038[(2)] = null);

(statearr_49006_49038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (4))){
var inst_48966 = (state_49002[(9)]);
var inst_48966__$1 = (state_49002[(2)]);
var inst_48967 = (inst_48966__$1 == null);
var inst_48968 = cljs.core.not.call(null,inst_48967);
var state_49002__$1 = (function (){var statearr_49007 = state_49002;
(statearr_49007[(9)] = inst_48966__$1);

return statearr_49007;
})();
if(inst_48968){
var statearr_49008_49039 = state_49002__$1;
(statearr_49008_49039[(1)] = (5));

} else {
var statearr_49009_49040 = state_49002__$1;
(statearr_49009_49040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (15))){
var inst_48992 = (state_49002[(2)]);
var state_49002__$1 = state_49002;
var statearr_49010_49041 = state_49002__$1;
(statearr_49010_49041[(2)] = inst_48992);

(statearr_49010_49041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (13))){
var state_49002__$1 = state_49002;
var statearr_49011_49042 = state_49002__$1;
(statearr_49011_49042[(2)] = null);

(statearr_49011_49042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (6))){
var inst_48962 = (state_49002[(8)]);
var inst_48987 = inst_48962.length;
var inst_48988 = (inst_48987 > (0));
var state_49002__$1 = state_49002;
if(cljs.core.truth_(inst_48988)){
var statearr_49012_49043 = state_49002__$1;
(statearr_49012_49043[(1)] = (12));

} else {
var statearr_49013_49044 = state_49002__$1;
(statearr_49013_49044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (3))){
var inst_49000 = (state_49002[(2)]);
var state_49002__$1 = state_49002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49002__$1,inst_49000);
} else {
if((state_val_49003 === (12))){
var inst_48962 = (state_49002[(8)]);
var inst_48990 = cljs.core.vec.call(null,inst_48962);
var state_49002__$1 = state_49002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49002__$1,(15),out,inst_48990);
} else {
if((state_val_49003 === (2))){
var state_49002__$1 = state_49002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49002__$1,(4),ch);
} else {
if((state_val_49003 === (11))){
var inst_48970 = (state_49002[(10)]);
var inst_48966 = (state_49002[(9)]);
var inst_48980 = (state_49002[(2)]);
var inst_48981 = [];
var inst_48982 = inst_48981.push(inst_48966);
var inst_48962 = inst_48981;
var inst_48963 = inst_48970;
var state_49002__$1 = (function (){var statearr_49014 = state_49002;
(statearr_49014[(7)] = inst_48963);

(statearr_49014[(8)] = inst_48962);

(statearr_49014[(11)] = inst_48980);

(statearr_49014[(12)] = inst_48982);

return statearr_49014;
})();
var statearr_49015_49045 = state_49002__$1;
(statearr_49015_49045[(2)] = null);

(statearr_49015_49045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (9))){
var inst_48962 = (state_49002[(8)]);
var inst_48978 = cljs.core.vec.call(null,inst_48962);
var state_49002__$1 = state_49002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49002__$1,(11),out,inst_48978);
} else {
if((state_val_49003 === (5))){
var inst_48970 = (state_49002[(10)]);
var inst_48963 = (state_49002[(7)]);
var inst_48966 = (state_49002[(9)]);
var inst_48970__$1 = f.call(null,inst_48966);
var inst_48971 = cljs.core._EQ_.call(null,inst_48970__$1,inst_48963);
var inst_48972 = cljs.core.keyword_identical_QMARK_.call(null,inst_48963,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48973 = (inst_48971) || (inst_48972);
var state_49002__$1 = (function (){var statearr_49016 = state_49002;
(statearr_49016[(10)] = inst_48970__$1);

return statearr_49016;
})();
if(cljs.core.truth_(inst_48973)){
var statearr_49017_49046 = state_49002__$1;
(statearr_49017_49046[(1)] = (8));

} else {
var statearr_49018_49047 = state_49002__$1;
(statearr_49018_49047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (14))){
var inst_48995 = (state_49002[(2)]);
var inst_48996 = cljs.core.async.close_BANG_.call(null,out);
var state_49002__$1 = (function (){var statearr_49020 = state_49002;
(statearr_49020[(13)] = inst_48995);

return statearr_49020;
})();
var statearr_49021_49048 = state_49002__$1;
(statearr_49021_49048[(2)] = inst_48996);

(statearr_49021_49048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (10))){
var inst_48985 = (state_49002[(2)]);
var state_49002__$1 = state_49002;
var statearr_49022_49049 = state_49002__$1;
(statearr_49022_49049[(2)] = inst_48985);

(statearr_49022_49049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (8))){
var inst_48970 = (state_49002[(10)]);
var inst_48962 = (state_49002[(8)]);
var inst_48966 = (state_49002[(9)]);
var inst_48975 = inst_48962.push(inst_48966);
var tmp49019 = inst_48962;
var inst_48962__$1 = tmp49019;
var inst_48963 = inst_48970;
var state_49002__$1 = (function (){var statearr_49023 = state_49002;
(statearr_49023[(14)] = inst_48975);

(statearr_49023[(7)] = inst_48963);

(statearr_49023[(8)] = inst_48962__$1);

return statearr_49023;
})();
var statearr_49024_49050 = state_49002__$1;
(statearr_49024_49050[(2)] = null);

(statearr_49024_49050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37193__auto___49036,out))
;
return ((function (switch__37128__auto__,c__37193__auto___49036,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_49028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49028[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_49028[(1)] = (1));

return statearr_49028;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_49002){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_49002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e49029){if((e49029 instanceof Object)){
var ex__37132__auto__ = e49029;
var statearr_49030_49051 = state_49002;
(statearr_49030_49051[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49052 = state_49002;
state_49002 = G__49052;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_49002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_49002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37193__auto___49036,out))
})();
var state__37195__auto__ = (function (){var statearr_49031 = f__37194__auto__.call(null);
(statearr_49031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37193__auto___49036);

return statearr_49031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37195__auto__);
});})(c__37193__auto___49036,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map