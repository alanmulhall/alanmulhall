(ns alan-mulhall.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [cheshire.core :as json]
            [alan-mulhall.middleware :refer [wrap-middleware]]
            [taoensso.timbre :as timbre
             :refer [log  trace  debug  info  warn  error  fatal  report
                     logf tracef debugf infof warnf errorf fatalf reportf
                     spy get-env]]
            [ring.util.response :refer [response]]
            [config.core :refer [env]]))

(def mount-target
  [:div#app
      [:h3 "ClojureScript has not been compiled!"]
      [:p "please run "
       [:b "lein figwheel"]
       " in order to start the compiler"]])

;; https://www.jayway.com/2014/09/08/combining-a-site-and-api-in-compojure/
(defn json-response [data & [status]]
  {:status  (or status 200)
   :headers {"Content-Type" "application/json; charset=utf-8"}
   :body    (json/generate-string data)})

(defn head []
    [:head
     [:meta {:charset "utf-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1"}]
     (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(defn loading-page []
  (html5
    (head)
    [:body {:class "body-container"}
     mount-target
     (include-js "/js/app.js")]))

(defn cards-page []
  (html5
    (head)
    [:body
     mount-target
     (include-js "/js/app_devcards.js")]))

(defn api-page []
  (json-response {:greeting "hello world"}))

(defroutes routes
  (GET "/" [] (loading-page))
  (GET "/about" [] (loading-page))
  (GET "/cards" [] (cards-page))
  (GET "/api" [] (api-page))
  (resources "/")
  (not-found "Not Found"))

(def app (wrap-middleware #'routes))
