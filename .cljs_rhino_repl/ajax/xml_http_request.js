// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__42647,handler){
var map__42648 = p__42647;
var map__42648__$1 = ((((!((map__42648 == null)))?((((map__42648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42648):map__42648);
var uri = cljs.core.get.call(null,map__42648__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__42648__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__42648__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__42648__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__42648__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__42648__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__42648__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__42648,map__42648__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__42646_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__42646_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__42648,map__42648__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___42660 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___42660)){
var response_type_42661 = temp__4657__auto___42660;
this$__$1.responseType = cljs.core.name.call(null,response_type_42661);
} else {
}

var seq__42650_42662 = cljs.core.seq.call(null,headers);
var chunk__42651_42663 = null;
var count__42652_42664 = (0);
var i__42653_42665 = (0);
while(true){
if((i__42653_42665 < count__42652_42664)){
var vec__42654_42666 = cljs.core._nth.call(null,chunk__42651_42663,i__42653_42665);
var k_42667 = cljs.core.nth.call(null,vec__42654_42666,(0),null);
var v_42668 = cljs.core.nth.call(null,vec__42654_42666,(1),null);
this$__$1.setRequestHeader(k_42667,v_42668);

var G__42669 = seq__42650_42662;
var G__42670 = chunk__42651_42663;
var G__42671 = count__42652_42664;
var G__42672 = (i__42653_42665 + (1));
seq__42650_42662 = G__42669;
chunk__42651_42663 = G__42670;
count__42652_42664 = G__42671;
i__42653_42665 = G__42672;
continue;
} else {
var temp__4657__auto___42673 = cljs.core.seq.call(null,seq__42650_42662);
if(temp__4657__auto___42673){
var seq__42650_42674__$1 = temp__4657__auto___42673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42650_42674__$1)){
var c__32390__auto___42675 = cljs.core.chunk_first.call(null,seq__42650_42674__$1);
var G__42676 = cljs.core.chunk_rest.call(null,seq__42650_42674__$1);
var G__42677 = c__32390__auto___42675;
var G__42678 = cljs.core.count.call(null,c__32390__auto___42675);
var G__42679 = (0);
seq__42650_42662 = G__42676;
chunk__42651_42663 = G__42677;
count__42652_42664 = G__42678;
i__42653_42665 = G__42679;
continue;
} else {
var vec__42657_42680 = cljs.core.first.call(null,seq__42650_42674__$1);
var k_42681 = cljs.core.nth.call(null,vec__42657_42680,(0),null);
var v_42682 = cljs.core.nth.call(null,vec__42657_42680,(1),null);
this$__$1.setRequestHeader(k_42681,v_42682);

var G__42683 = cljs.core.next.call(null,seq__42650_42674__$1);
var G__42684 = null;
var G__42685 = (0);
var G__42686 = (0);
seq__42650_42662 = G__42683;
chunk__42651_42663 = G__42684;
count__42652_42664 = G__42685;
i__42653_42665 = G__42686;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__31579__auto__ = body;
if(cljs.core.truth_(or__31579__auto__)){
return or__31579__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map