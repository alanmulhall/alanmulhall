Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :admin do
    resources :images, except: [ :show ] do
      member do
        patch :move_up
        patch :move_down
      end
    end
    root to: "images#index"
  end

  namespace :api do
    resources :images, only: [ :index ]
  end

  root to: redirect("/admin/images")
end
