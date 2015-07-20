(function ($) {
	SeatView = Backbone.View.extend({
	el: "#seatContainer",
	model: new SeatSelection,
	collection: c,
	initialize: function () {
		//render view
		this.render1();
		//once seats avaliable change update
		this.model.on("change:total_seats_avaliable", this.updateSeatsAvailable);
		//update seats available
		this.model.set('total_seats_avaliable',_.where(_.flatten(appModel.get('seatData')),{isBooked:false}).length);
	},
	events: {
		//listen to click on seats/ show seats/ confirm selection/ keypress
		"click a>div": "seatSelection",
		"click #select_seats":  "showSeats",
		"click #confirm": "confirmSelection",
		"keydown input": "blockSeats"
	},
	template: function(data){
		//template using handlebars
		var source = $("#seat-template").html();
		var template = Handlebars.compile(source);
		var html = template(data);
		return html;
	},
	
	render1: function(){
		//reder seats

		var seatData = appModel.get('seatData');
		//gather data fro left side
			var leftData = [], rightData=[], left=[], right=[]; 
			_.each(seatData,function(d){ var p = _.where(d,{side: 'L'}); leftData.push(p) });
			_.each(leftData, function(d){ if (d.length!==0){left.push(d)}})
		//gather data fro right	
			_.each(seatData,function(d){ var p = _.where(d,{side: 'R'}); rightData.push(p) });
			_.each(rightData, function(d){ if (d.length!==0){right.push(d)}})
		//template left/right
			var htmlLeft = this.template(left);
			var htmlRight = this.template(right);
		//add templete
			var leftRow = document.getElementById('left');
			var rightRow = document.getElementById('right');
			leftRow.innerHTML += htmlLeft;
			rightRow.innerHTML += htmlRight;
	},

	updateSeatsAvailable: function(){
			var seatData = appModel.get('seatData');
			document.querySelector("#seatAvailable").innerHTML = _.where(_.flatten(seatData),{isBooked:false}).length;
	},
	openSeats: function(){
		var div = document.querySelectorAll('#seat-list')[0];
		//making booking available
		div.setAttribute('class',"");
	},
	blockSeats: function(){
		var div = document.querySelectorAll('#seat-list')[0];
		//making booking available
		div.setAttribute('class',"inactive-list");
	},
	showSeats: function(el){
		//check whether no of seats desired <= no of seats available.
		//show seats for selection
		//check whether seats entered is a number/set to model if number
		var user_name = this.el.querySelectorAll('input')[0].value,
				seats_desired = parseInt(this.el.querySelectorAll('input')[1].value,10);

		//set user name
		if(user_name!==''){
			this.model.set('user_name',user_name);	
		}else{
			alert('Enter a User Name');
			return;
		}

		//set seats needed.
		if(!seats_desired){
			alert('Enter a Valid Value');
			return;
		}else{
			this.model.set('seats_desired',seats_desired);
			if (this.model.get('seats_desired') > this.model.get('total_seats_avaliable')){ return; }
			this.openSeats();
		}
	},
	seatSelection: function(el){
		var sel = el.currentTarget.getAttribute('data-selected'),
				buk = el.currentTarget.getAttribute('data-booked'),
		    isSelected = (sel === "true"),
				isBooked = (buk === 'true');

		if(isBooked){
			return;
		}

	  if(!isSelected){
			//select the seat
			var selected = document.querySelectorAll('.selected');
			this.model.set('seats_booked',selected.length+1);

			if(this.model.get('seats_booked')>this.model.get('seats_desired')){
				//set the selected value to previous booked value
				this.model.set('seats_booked',this.model.previous('seats_booked'));
				return;
			}
			//set attr to selected and class as selected
			el.currentTarget.setAttribute('data-selected',true);
			el.currentTarget.setAttribute('class','selected');
			//remove class selected, remove the id from model
		} 
		else{
			//deselect
			//set attr as not-selected and class as available
			el.currentTarget.setAttribute('data-selected',false);
			el.currentTarget.setAttribute('class','available');
			this.model.set('seats_booked',(this.model.get('seats_booked')-1));
		}

	},
	confirmSelection: function(){

		var self=this,
		 seatData = appModel.get('seatData'),
		//get user name and seat id.
		 selectedSeats = document.querySelectorAll('.selected'),
		 seatId=[], userName, noOfSeats, seatRow=[], seatCol=[];

			//if no selected div then return
		 if(selectedSeats.length===0){return;}

		 for(var ii=0,len=selectedSeats.length; ii<len; ii++){
		 	var e = selectedSeats[ii],
		 			r = e.getAttribute('data-row'),
					c = e.getAttribute('data-column'),
					n = e.getAttribute('data-rowName'),
					s = e.getAttribute('data-side');
			seatId.push(s+"-"+n+c);
			seatRow.push(r);
			seatCol.push(c);
			noOfSeats = selectedSeats.length;
			//setAttributes to booked
			e.setAttribute('data-booked', true);
			e.setAttribute('class', 'booked');
			//update seedData to current state of app
			seatData[parseInt(r)][parseInt(c)].userName = self.model.get('user_name');
			seatData[parseInt(r)][parseInt(c)].className = 'booked';
			seatData[parseInt(r)][parseInt(c)].isBooked = true;

			//update remaining seats
			self.model.set('total_seats_avaliable',_.where(_.flatten(seatData),{isBooked:false}).length);
		 } 
		//update model for templating table
		this.model.set('seats_booked', noOfSeats);
		this.model.set('seat_id', seatId);
		//based on classes, show selected unselected
		//update selections in model based on # of selected classes
		var data = this.model.attributes;
		//filter if its a new user or old one.
		//then add else update
		this.collection.add(data);

		//trigger event to update tableView
		Backbone.seatSelector.trigger('seat-confirmed');
	}
	});

var seatview = new SeatView;

})(jQuery);


