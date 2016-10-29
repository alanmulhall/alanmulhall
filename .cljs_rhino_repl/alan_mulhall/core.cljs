(ns alan-mulhall.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [devtools.core :as devtools]
              [ajax.core :refer [GET]]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

(devtools/install!)

;; -------------------------
;; State

(def state (atom {:data "Not fetched"}))

;; -------------------------
;; Supporting functions

(defn handler [response]
  (swap! state assoc :data response))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn fetch-data []
  (GET "/api" {:handler handler
                 :error-handler error-handler}))

;; -------------------------
;; Views

(defn home-page []
  (.log js/console (range 200))
  (fetch-data)
  (fn []
    [:div [:h2 "Welcome to alan-mulhall"]
     [:div "State is: " (:data @state)]
     [:div [:a {:href "/about"} "go to about page"]]]))

(defn about-page []
  [:div [:h2 "About alan-mulhall"]
   [:div "State is: " (:data @state)]
   [:div [:a {:href "/"} "go to the home page"]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))