(ns alan-mulhall.prod
  (:require [alan-mulhall.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
