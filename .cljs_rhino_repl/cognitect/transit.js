// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__42492_42496 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__42493_42497 = null;
var count__42494_42498 = (0);
var i__42495_42499 = (0);
while(true){
if((i__42495_42499 < count__42494_42498)){
var k_42500 = cljs.core._nth.call(null,chunk__42493_42497,i__42495_42499);
var v_42501 = (b[k_42500]);
(a[k_42500] = v_42501);

var G__42502 = seq__42492_42496;
var G__42503 = chunk__42493_42497;
var G__42504 = count__42494_42498;
var G__42505 = (i__42495_42499 + (1));
seq__42492_42496 = G__42502;
chunk__42493_42497 = G__42503;
count__42494_42498 = G__42504;
i__42495_42499 = G__42505;
continue;
} else {
var temp__4657__auto___42506 = cljs.core.seq.call(null,seq__42492_42496);
if(temp__4657__auto___42506){
var seq__42492_42507__$1 = temp__4657__auto___42506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42492_42507__$1)){
var c__32390__auto___42508 = cljs.core.chunk_first.call(null,seq__42492_42507__$1);
var G__42509 = cljs.core.chunk_rest.call(null,seq__42492_42507__$1);
var G__42510 = c__32390__auto___42508;
var G__42511 = cljs.core.count.call(null,c__32390__auto___42508);
var G__42512 = (0);
seq__42492_42496 = G__42509;
chunk__42493_42497 = G__42510;
count__42494_42498 = G__42511;
i__42495_42499 = G__42512;
continue;
} else {
var k_42513 = cljs.core.first.call(null,seq__42492_42507__$1);
var v_42514 = (b[k_42513]);
(a[k_42513] = v_42514);

var G__42515 = cljs.core.next.call(null,seq__42492_42507__$1);
var G__42516 = null;
var G__42517 = (0);
var G__42518 = (0);
seq__42492_42496 = G__42515;
chunk__42493_42497 = G__42516;
count__42494_42498 = G__42517;
i__42495_42499 = G__42518;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args42519 = [];
var len__32654__auto___42522 = arguments.length;
var i__32655__auto___42523 = (0);
while(true){
if((i__32655__auto___42523 < len__32654__auto___42522)){
args42519.push((arguments[i__32655__auto___42523]));

var G__42524 = (i__32655__auto___42523 + (1));
i__32655__auto___42523 = G__42524;
continue;
} else {
}
break;
}

var G__42521 = args42519.length;
switch (G__42521) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42519.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__42526 = (i + (2));
var G__42527 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__42526;
ret = G__42527;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__42528_42532 = cljs.core.seq.call(null,v);
var chunk__42529_42533 = null;
var count__42530_42534 = (0);
var i__42531_42535 = (0);
while(true){
if((i__42531_42535 < count__42530_42534)){
var x_42536 = cljs.core._nth.call(null,chunk__42529_42533,i__42531_42535);
ret.push(x_42536);

var G__42537 = seq__42528_42532;
var G__42538 = chunk__42529_42533;
var G__42539 = count__42530_42534;
var G__42540 = (i__42531_42535 + (1));
seq__42528_42532 = G__42537;
chunk__42529_42533 = G__42538;
count__42530_42534 = G__42539;
i__42531_42535 = G__42540;
continue;
} else {
var temp__4657__auto___42541 = cljs.core.seq.call(null,seq__42528_42532);
if(temp__4657__auto___42541){
var seq__42528_42542__$1 = temp__4657__auto___42541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42528_42542__$1)){
var c__32390__auto___42543 = cljs.core.chunk_first.call(null,seq__42528_42542__$1);
var G__42544 = cljs.core.chunk_rest.call(null,seq__42528_42542__$1);
var G__42545 = c__32390__auto___42543;
var G__42546 = cljs.core.count.call(null,c__32390__auto___42543);
var G__42547 = (0);
seq__42528_42532 = G__42544;
chunk__42529_42533 = G__42545;
count__42530_42534 = G__42546;
i__42531_42535 = G__42547;
continue;
} else {
var x_42548 = cljs.core.first.call(null,seq__42528_42542__$1);
ret.push(x_42548);

var G__42549 = cljs.core.next.call(null,seq__42528_42542__$1);
var G__42550 = null;
var G__42551 = (0);
var G__42552 = (0);
seq__42528_42532 = G__42549;
chunk__42529_42533 = G__42550;
count__42530_42534 = G__42551;
i__42531_42535 = G__42552;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__42553_42557 = cljs.core.seq.call(null,v);
var chunk__42554_42558 = null;
var count__42555_42559 = (0);
var i__42556_42560 = (0);
while(true){
if((i__42556_42560 < count__42555_42559)){
var x_42561 = cljs.core._nth.call(null,chunk__42554_42558,i__42556_42560);
ret.push(x_42561);

var G__42562 = seq__42553_42557;
var G__42563 = chunk__42554_42558;
var G__42564 = count__42555_42559;
var G__42565 = (i__42556_42560 + (1));
seq__42553_42557 = G__42562;
chunk__42554_42558 = G__42563;
count__42555_42559 = G__42564;
i__42556_42560 = G__42565;
continue;
} else {
var temp__4657__auto___42566 = cljs.core.seq.call(null,seq__42553_42557);
if(temp__4657__auto___42566){
var seq__42553_42567__$1 = temp__4657__auto___42566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42553_42567__$1)){
var c__32390__auto___42568 = cljs.core.chunk_first.call(null,seq__42553_42567__$1);
var G__42569 = cljs.core.chunk_rest.call(null,seq__42553_42567__$1);
var G__42570 = c__32390__auto___42568;
var G__42571 = cljs.core.count.call(null,c__32390__auto___42568);
var G__42572 = (0);
seq__42553_42557 = G__42569;
chunk__42554_42558 = G__42570;
count__42555_42559 = G__42571;
i__42556_42560 = G__42572;
continue;
} else {
var x_42573 = cljs.core.first.call(null,seq__42553_42567__$1);
ret.push(x_42573);

var G__42574 = cljs.core.next.call(null,seq__42553_42567__$1);
var G__42575 = null;
var G__42576 = (0);
var G__42577 = (0);
seq__42553_42557 = G__42574;
chunk__42554_42558 = G__42575;
count__42555_42559 = G__42576;
i__42556_42560 = G__42577;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__42578_42582 = cljs.core.seq.call(null,v);
var chunk__42579_42583 = null;
var count__42580_42584 = (0);
var i__42581_42585 = (0);
while(true){
if((i__42581_42585 < count__42580_42584)){
var x_42586 = cljs.core._nth.call(null,chunk__42579_42583,i__42581_42585);
ret.push(x_42586);

var G__42587 = seq__42578_42582;
var G__42588 = chunk__42579_42583;
var G__42589 = count__42580_42584;
var G__42590 = (i__42581_42585 + (1));
seq__42578_42582 = G__42587;
chunk__42579_42583 = G__42588;
count__42580_42584 = G__42589;
i__42581_42585 = G__42590;
continue;
} else {
var temp__4657__auto___42591 = cljs.core.seq.call(null,seq__42578_42582);
if(temp__4657__auto___42591){
var seq__42578_42592__$1 = temp__4657__auto___42591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42578_42592__$1)){
var c__32390__auto___42593 = cljs.core.chunk_first.call(null,seq__42578_42592__$1);
var G__42594 = cljs.core.chunk_rest.call(null,seq__42578_42592__$1);
var G__42595 = c__32390__auto___42593;
var G__42596 = cljs.core.count.call(null,c__32390__auto___42593);
var G__42597 = (0);
seq__42578_42582 = G__42594;
chunk__42579_42583 = G__42595;
count__42580_42584 = G__42596;
i__42581_42585 = G__42597;
continue;
} else {
var x_42598 = cljs.core.first.call(null,seq__42578_42592__$1);
ret.push(x_42598);

var G__42599 = cljs.core.next.call(null,seq__42578_42592__$1);
var G__42600 = null;
var G__42601 = (0);
var G__42602 = (0);
seq__42578_42582 = G__42599;
chunk__42579_42583 = G__42600;
count__42580_42584 = G__42601;
i__42581_42585 = G__42602;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args42603 = [];
var len__32654__auto___42618 = arguments.length;
var i__32655__auto___42619 = (0);
while(true){
if((i__32655__auto___42619 < len__32654__auto___42618)){
args42603.push((arguments[i__32655__auto___42619]));

var G__42620 = (i__32655__auto___42619 + (1));
i__32655__auto___42619 = G__42620;
continue;
} else {
}
break;
}

var G__42605 = args42603.length;
switch (G__42605) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42603.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__42606 = obj;
G__42606.push(kfn.call(null,k),vfn.call(null,v));

return G__42606;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x42607 = cljs.core.clone.call(null,handlers);
x42607.forEach = ((function (x42607,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__42608 = cljs.core.seq.call(null,coll);
var chunk__42609 = null;
var count__42610 = (0);
var i__42611 = (0);
while(true){
if((i__42611 < count__42610)){
var vec__42612 = cljs.core._nth.call(null,chunk__42609,i__42611);
var k = cljs.core.nth.call(null,vec__42612,(0),null);
var v = cljs.core.nth.call(null,vec__42612,(1),null);
f.call(null,v,k);

var G__42622 = seq__42608;
var G__42623 = chunk__42609;
var G__42624 = count__42610;
var G__42625 = (i__42611 + (1));
seq__42608 = G__42622;
chunk__42609 = G__42623;
count__42610 = G__42624;
i__42611 = G__42625;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42608);
if(temp__4657__auto__){
var seq__42608__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42608__$1)){
var c__32390__auto__ = cljs.core.chunk_first.call(null,seq__42608__$1);
var G__42626 = cljs.core.chunk_rest.call(null,seq__42608__$1);
var G__42627 = c__32390__auto__;
var G__42628 = cljs.core.count.call(null,c__32390__auto__);
var G__42629 = (0);
seq__42608 = G__42626;
chunk__42609 = G__42627;
count__42610 = G__42628;
i__42611 = G__42629;
continue;
} else {
var vec__42615 = cljs.core.first.call(null,seq__42608__$1);
var k = cljs.core.nth.call(null,vec__42615,(0),null);
var v = cljs.core.nth.call(null,vec__42615,(1),null);
f.call(null,v,k);

var G__42630 = cljs.core.next.call(null,seq__42608__$1);
var G__42631 = null;
var G__42632 = (0);
var G__42633 = (0);
seq__42608 = G__42630;
chunk__42609 = G__42631;
count__42610 = G__42632;
i__42611 = G__42633;
continue;
}
} else {
return null;
}
}
break;
}
});})(x42607,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x42607;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args42634 = [];
var len__32654__auto___42640 = arguments.length;
var i__32655__auto___42641 = (0);
while(true){
if((i__32655__auto___42641 < len__32654__auto___42640)){
args42634.push((arguments[i__32655__auto___42641]));

var G__42642 = (i__32655__auto___42641 + (1));
i__32655__auto___42641 = G__42642;
continue;
} else {
}
break;
}

var G__42636 = args42634.length;
switch (G__42636) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42634.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit42637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit42637 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta42638){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta42638 = meta42638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit42637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42639,meta42638__$1){
var self__ = this;
var _42639__$1 = this;
return (new cognitect.transit.t_cognitect$transit42637(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta42638__$1));
});

cognitect.transit.t_cognitect$transit42637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42639){
var self__ = this;
var _42639__$1 = this;
return self__.meta42638;
});

cognitect.transit.t_cognitect$transit42637.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit42637.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit42637.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit42637.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit42637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta42638","meta42638",-826733896,null)], null);
});

cognitect.transit.t_cognitect$transit42637.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit42637.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit42637";

cognitect.transit.t_cognitect$transit42637.cljs$lang$ctorPrWriter = (function (this__32185__auto__,writer__32186__auto__,opt__32187__auto__){
return cljs.core._write.call(null,writer__32186__auto__,"cognitect.transit/t_cognitect$transit42637");
});

cognitect.transit.__GT_t_cognitect$transit42637 = (function cognitect$transit$__GT_t_cognitect$transit42637(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta42638){
return (new cognitect.transit.t_cognitect$transit42637(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta42638));
});

}

return (new cognitect.transit.t_cognitect$transit42637(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__31579__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__31579__auto__)){
return or__31579__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map