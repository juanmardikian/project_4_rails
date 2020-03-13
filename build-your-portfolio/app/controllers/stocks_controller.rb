class StocksController < ApplicationController
  before_action :authorize_request, except: [:index]

  def index
    @stocks = Stock.all
    render json: { status: 200, stocks: @stocks }
  end

  def stocks_by_type
    puts params

    @stocks = Stock.where(stock_type: params[:stock_type], portfolio_id: nil)
    render json: { status: 200, stocks: @stocks }
  end

  def available_stocks
    @stocks = Stock.where(portfolio_id: nil)
    render json: { status: 200, stocks: @stocks }
  end

  def purchase_stocks
    @stocks = Stock.where.not(portfolio_id: nil)
    render json: { status: 200, stocks: @stocks }
  end

  def show
    @stock = Stock.where(portfolio_id: params[:portfolio_id], id: params[:id])
    render json: @stock
  end

  def create
    @stock = Stock.new(stock_params)
    if @stock.save
      render json: { status: 201, name: @stock }
    else
      render json: { status: 422, name: @stock.errors }
    end
  end

  def update
    @stock = Stock.find(params[:id])
    @stock.update(stock_params) #taking the stock params (the form)
    render json: { status: 200, stock: @stock }
  end

  def purchase
    puts params
    @stock = Stock.where(symbol: params[:symbol], portfolio_id: nil).first
    @portfolio = @current_user.portfolios[0]
    puts @portfolio.inspect
    @price = @portfolio[:money_invested].to_f + @stock.price.to_f
    @money_spent = @portfolio[:cash_to_spare] - @stock.price.to_f
    @portfolio.update(money_invested: @price, cash_to_spare: @money_spent)

    if @current_user.portfolios[0].stocks << @stock
      @stock.update(transactions_params)
      render json: { status: 200, stock: @stock }
    else
      render json: { status: 422, error: "stock already purchased" }
    end
  end

  def sell
    @stock = Stock.find(params[:id])
    @stock.update(portfolio_id: nil)
    render json: { status: 200, stock: @stock }
  end

  def owned
    @stocks = @current_user.stocks.find_by(symbol: params[:symbol])
  end

  def destroy
    @stock = Stock.destroy(params[:id])
    render json: { status: 204 }
  end

  private

  def transactions_params
    params.permit(:portfolio_id)
  end

  def stock_params
    params.require(:stock).permit(:name, :symbol, :price)
  end
end
