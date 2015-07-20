(function ($) {
	TableView = Backbone.View.extend({
	el: $("#tableContainer"),
	model: new SeatSelection,
	collection: c,
	initialize: function () {
		//template Table
		//taken from SO
		Backbone.seatSelector.on('seat-confirmed', this.updateTable, this);
		this.render();
	},
	render: function(data){
		var source = $("#table-template").html();
		var template = Handlebars.compile(source);
		var html = template(data);
		//update the table
		document.querySelector('#userDetails').innerHTML = html;
	},
	events: {},
	updateTable: function(){
		var data = [];
		_.each(this.collection.models,function(d){
			data.push(d.attributes);
		});
		this.render(data);
	}	
	});

var tableview = new TableView;

})(jQuery);