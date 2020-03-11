class PortfoliosController < ApplicationController
  before_action :authorize_request

  def index
    @portfolios = @current_user.portfolios
    render json: { status: 200, portfolios: @portfolios }
  end

  def show
    @portfolio = Portfolio.where(user_id: params[:user_id], id: params[:id])
    render json: @portfolio
  end

  def stocks
    @portfolio = Portfolio.find(params[:id])
    puts @portfolio.id
    @stocks = Stock.where(portfolio_id: @portfolio.id)
    render json: { status: 200, stocks: @stocks }
  end

  def create
    @user = User.find(params[:user_id])
    @portfolio = @user.portfolios.build(portfolio_params)
    if @portfolio.save
      render json: { status: 201, name: @portfolio }
    else
      render json: { status: 422, name: @portfolio.errors }
    end
  end

  def update
    @portfolio = Portfolio.find(params[:id])
    @portfolio.update(portfolio_params)
    render json: { status: 200, portfolio: @portfolio }
  end

  def destroy
    @portfolio = Portfolio.destroy(params[:id])
    render json: { status: 204 }
  end

  private

  def portfolio_params
    params.require(:portfolio).permit(:name)
  end
end
