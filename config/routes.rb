Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/auth/login", to: "authentication#login"
  get "/auth/verify", to: "authentication#verify"

  resources :users do # resources build out all the index, show... and paths where you can go to
    resources :portfolios do
      member do #allows you to make an action on a single portfolio
        get :stocks #would get all of the portfolio stocks that that user owns
      end
    end
  end

  resources :stocks do
    collection do #stock.all purchase
      get :available_stocks
      put :purchase_stocks
    end
    member do #a single will be purchase, allow you to purchase one single stock
      put :purchase
      put :sell
    end
  end

  # get "/stocks" => "stocks#fetch"
  get "/stocks_t/:stock_type" => "stocks#stocks_by_type"
  post "/portfolios/add_cash" => "portfolios#add_cash"

  get "/portfolios" => "portfolios#index"
  put "/purchase" => "stocks#purchase"
  put "/owned" =>'stocks#owned'
end
