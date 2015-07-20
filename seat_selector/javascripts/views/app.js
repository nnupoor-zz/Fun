
var app={};

(function ($) {
	AppView = Backbone.View.extend({
	el: $("body"),
	model: appModel,
	initialize : function(){
		this.model.set({seatData: seatData})
	}
	});

	//seed data for seats
	var seatData=[
		[
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '0', rowName:'A', column : '0',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '0', rowName:'A', column : '1',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '0', rowName:'A', column : '2',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '0', rowName:'A', column : '3',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '0', rowName:'A', column : '4',side: 'L'}
		],
		[
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '1', rowName:'A', column : '0',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '1', rowName:'A', column : '1',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '1', rowName:'A', column : '2',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '1', rowName:'A', column : '3',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '1', rowName:'A', column : '4',side: 'R'}
		],[
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '2', rowName:'B',  column : '0',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '2', rowName:'B',  column : '1',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '2', rowName:'B',  column : '2',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '2', rowName:'B',  column : '3',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '2', rowName:'B',  column : '4',side: 'L'}
		],[
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '3', rowName:'B',  column : '0',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '3', rowName:'B',  column : '1',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '3', rowName:'B',  column : '2',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '3', rowName:'B',  column : '3',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '3', rowName:'B',  column : '4',side: 'R'}
		],[
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '4', rowName:'C', column : '0',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '4', rowName:'C', column : '1',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '4', rowName:'C', column : '2',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '4', rowName:'C', column : '3',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '4', rowName:'C', column : '4',side: 'L'}
		],[
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '5', rowName:'C', column : '0',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '5', rowName:'C', column : '1',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '5', rowName:'C', column : '2',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '5', rowName:'C', column : '3',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '5', rowName:'C', column : '4',side: 'R'}
		],[
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '6', rowName:'D', column : '0',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '6', rowName:'D', column : '1',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '6', rowName:'D', column : '2',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '6', rowName:'D', column : '3',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '6', rowName:'D', column : '4',side: 'L'}
		],[
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '7', rowName:'D', column : '0',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '7', rowName:'D', column : '1',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '7', rowName:'D', column : '2',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '7', rowName:'D', column : '3',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '7', rowName:'D', column : '4',side: 'R'}
		],[
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '8', rowName:'E',  column : '0',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '8', rowName:'E',  column : '1',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '8', rowName:'E',  column : '2',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '8', rowName:'E',  column : '3',side: 'L'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '8', rowName:'E',  column : '4',side: 'L'}
		],[
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '9', rowName:'E',  column : '0',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '9', rowName:'E',  column : '1',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '9', rowName:'E',  column : '2',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '9', rowName:'E',  column : '3',side: 'R'},
			{className:"available", isSelected:false, isBooked:false, userName:'', row: '9', rowName:'E',  column : '4',side: 'R'}
		]
	]

	var appview = new AppView;
	//taken from SO
	Backbone.seatSelector = _.extend({}, Backbone.Events);

})(jQuery);


