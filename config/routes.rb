Rails.application.routes.draw do
	mount ActionCable.server => '/cable'
  get 'welcome/index'

  post '/gradient' => 'welcome#gradient'

  root to: 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
