class OverviewVegetable < ActiveRecord::Base
	self.table_name = "overview_vegetable"
	paginates_per 50
	max_paginates_per 60

	include PgSearch
	pg_search_scope :search_by_all, :against => [:name, :code, :date], :using => { :tsearch => {:dictionary => "mandarin", :prefix => true, :any_word => true } }
=begin
	def search(query)
		if query
			search_by_all(query).order(:name, :date).page(params[:page])
		else
			order(:name, :date).page(params[:page])
		end
	end 
=end
end
