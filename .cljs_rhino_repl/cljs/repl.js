// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33860){
var map__33885 = p__33860;
var map__33885__$1 = ((((!((map__33885 == null)))?((((map__33885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33885):map__33885);
var m = map__33885__$1;
var n = cljs.core.get.call(null,map__33885__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33887_33909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33888_33910 = null;
var count__33889_33911 = (0);
var i__33890_33912 = (0);
while(true){
if((i__33890_33912 < count__33889_33911)){
var f_33913 = cljs.core._nth.call(null,chunk__33888_33910,i__33890_33912);
cljs.core.println.call(null,"  ",f_33913);

var G__33914 = seq__33887_33909;
var G__33915 = chunk__33888_33910;
var G__33916 = count__33889_33911;
var G__33917 = (i__33890_33912 + (1));
seq__33887_33909 = G__33914;
chunk__33888_33910 = G__33915;
count__33889_33911 = G__33916;
i__33890_33912 = G__33917;
continue;
} else {
var temp__4657__auto___33918 = cljs.core.seq.call(null,seq__33887_33909);
if(temp__4657__auto___33918){
var seq__33887_33919__$1 = temp__4657__auto___33918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33887_33919__$1)){
var c__32390__auto___33920 = cljs.core.chunk_first.call(null,seq__33887_33919__$1);
var G__33921 = cljs.core.chunk_rest.call(null,seq__33887_33919__$1);
var G__33922 = c__32390__auto___33920;
var G__33923 = cljs.core.count.call(null,c__32390__auto___33920);
var G__33924 = (0);
seq__33887_33909 = G__33921;
chunk__33888_33910 = G__33922;
count__33889_33911 = G__33923;
i__33890_33912 = G__33924;
continue;
} else {
var f_33925 = cljs.core.first.call(null,seq__33887_33919__$1);
cljs.core.println.call(null,"  ",f_33925);

var G__33926 = cljs.core.next.call(null,seq__33887_33919__$1);
var G__33927 = null;
var G__33928 = (0);
var G__33929 = (0);
seq__33887_33909 = G__33926;
chunk__33888_33910 = G__33927;
count__33889_33911 = G__33928;
i__33890_33912 = G__33929;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33930 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__31579__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__31579__auto__)){
return or__31579__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33930);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33930)))?cljs.core.second.call(null,arglists_33930):arglists_33930));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33891_33931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33892_33932 = null;
var count__33893_33933 = (0);
var i__33894_33934 = (0);
while(true){
if((i__33894_33934 < count__33893_33933)){
var vec__33895_33935 = cljs.core._nth.call(null,chunk__33892_33932,i__33894_33934);
var name_33936 = cljs.core.nth.call(null,vec__33895_33935,(0),null);
var map__33898_33937 = cljs.core.nth.call(null,vec__33895_33935,(1),null);
var map__33898_33938__$1 = ((((!((map__33898_33937 == null)))?((((map__33898_33937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33898_33937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33898_33937):map__33898_33937);
var doc_33939 = cljs.core.get.call(null,map__33898_33938__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33940 = cljs.core.get.call(null,map__33898_33938__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33936);

cljs.core.println.call(null," ",arglists_33940);

if(cljs.core.truth_(doc_33939)){
cljs.core.println.call(null," ",doc_33939);
} else {
}

var G__33941 = seq__33891_33931;
var G__33942 = chunk__33892_33932;
var G__33943 = count__33893_33933;
var G__33944 = (i__33894_33934 + (1));
seq__33891_33931 = G__33941;
chunk__33892_33932 = G__33942;
count__33893_33933 = G__33943;
i__33894_33934 = G__33944;
continue;
} else {
var temp__4657__auto___33945 = cljs.core.seq.call(null,seq__33891_33931);
if(temp__4657__auto___33945){
var seq__33891_33946__$1 = temp__4657__auto___33945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33891_33946__$1)){
var c__32390__auto___33947 = cljs.core.chunk_first.call(null,seq__33891_33946__$1);
var G__33948 = cljs.core.chunk_rest.call(null,seq__33891_33946__$1);
var G__33949 = c__32390__auto___33947;
var G__33950 = cljs.core.count.call(null,c__32390__auto___33947);
var G__33951 = (0);
seq__33891_33931 = G__33948;
chunk__33892_33932 = G__33949;
count__33893_33933 = G__33950;
i__33894_33934 = G__33951;
continue;
} else {
var vec__33900_33952 = cljs.core.first.call(null,seq__33891_33946__$1);
var name_33953 = cljs.core.nth.call(null,vec__33900_33952,(0),null);
var map__33903_33954 = cljs.core.nth.call(null,vec__33900_33952,(1),null);
var map__33903_33955__$1 = ((((!((map__33903_33954 == null)))?((((map__33903_33954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33903_33954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33903_33954):map__33903_33954);
var doc_33956 = cljs.core.get.call(null,map__33903_33955__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33957 = cljs.core.get.call(null,map__33903_33955__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33953);

cljs.core.println.call(null," ",arglists_33957);

if(cljs.core.truth_(doc_33956)){
cljs.core.println.call(null," ",doc_33956);
} else {
}

var G__33958 = cljs.core.next.call(null,seq__33891_33946__$1);
var G__33959 = null;
var G__33960 = (0);
var G__33961 = (0);
seq__33891_33931 = G__33958;
chunk__33892_33932 = G__33959;
count__33893_33933 = G__33960;
i__33894_33934 = G__33961;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__33905 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33906 = null;
var count__33907 = (0);
var i__33908 = (0);
while(true){
if((i__33908 < count__33907)){
var role = cljs.core._nth.call(null,chunk__33906,i__33908);
var temp__4657__auto___33962__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33962__$1)){
var spec_33963 = temp__4657__auto___33962__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33963));
} else {
}

var G__33964 = seq__33905;
var G__33965 = chunk__33906;
var G__33966 = count__33907;
var G__33967 = (i__33908 + (1));
seq__33905 = G__33964;
chunk__33906 = G__33965;
count__33907 = G__33966;
i__33908 = G__33967;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33905);
if(temp__4657__auto____$1){
var seq__33905__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33905__$1)){
var c__32390__auto__ = cljs.core.chunk_first.call(null,seq__33905__$1);
var G__33968 = cljs.core.chunk_rest.call(null,seq__33905__$1);
var G__33969 = c__32390__auto__;
var G__33970 = cljs.core.count.call(null,c__32390__auto__);
var G__33971 = (0);
seq__33905 = G__33968;
chunk__33906 = G__33969;
count__33907 = G__33970;
i__33908 = G__33971;
continue;
} else {
var role = cljs.core.first.call(null,seq__33905__$1);
var temp__4657__auto___33972__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33972__$2)){
var spec_33973 = temp__4657__auto___33972__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33973));
} else {
}

var G__33974 = cljs.core.next.call(null,seq__33905__$1);
var G__33975 = null;
var G__33976 = (0);
var G__33977 = (0);
seq__33905 = G__33974;
chunk__33906 = G__33975;
count__33907 = G__33976;
i__33908 = G__33977;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map