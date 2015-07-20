 // app={}


(function ($) {
AppModel =  Backbone.Model.extend({});
appModel = new AppModel;

SeatSelection = Backbone.Model.extend({
//Create a model to hold friend atribute
//sent from the server
  defaults: {
    user_name: '',
    seats_desired: '',
    seats_booked: '',
    seat_id: [],
    total_seats_avaliable:'' ,
    total_selected: ''
  },
  initialize: function(){
    this.on("change:seats_desired", this.validateSeatsDesired);
    this.on("change:user_name", this.newUser);
    this.on("change:seats_booked", this.validateSeatsSelected);
  },
  newUser: function(){
    if(this.hasChanged('user_name')){
      this.set('new_user',true);
    }
  },
  validateSeatsDesired: function(){
    if (this.get('seats_desired') > this.get('total_seats_avaliable')){
      alert('You are choosing seats more than available.');
      return ;
    }
  },
  validateSeatsSelected: function(){
   if(this.get('seats_booked') > this.get('seats_desired')){
   		alert("Please Select as many seats as desired");
      return ;
   }
	}
});

UserSeatSelection = Backbone.Collection.extend({
  url:'/'
});
c = new UserSeatSelection;
})();