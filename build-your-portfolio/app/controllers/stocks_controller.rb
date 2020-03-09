class StocksController < ApplicationController
  before_action :authorize_request, except: [:index]

  def index
    @stocks = Stock.all
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
    @stock = Stock.find(params[:id])
    if @stock.portfolio_id == nil
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
