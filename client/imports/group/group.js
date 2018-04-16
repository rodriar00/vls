import { Template } from 'meteor/templating';
import {groups, users} from '../data/data.js';
import './group.html';
import './group.css';

Template.group.onCreated(function helloOnCreated() {
    
  });
  
  Template.group.helpers({
   group: function() {
     var l = groups.length;
     var id = parseInt(FlowRouter.getParam('_id'));
    for(var i=0; i < l; i++ ) {
      if(groups[i]._id === id) {
        console.log(groups[i]);
        return groups[i];
        break;
      }
    }
   },

   findUserName: function(id) {
    var iD = parseInt(id);
    var l = users.length;
    for(var i=0; i<l; i++) {
      if(users[i]._id === iD) {
        return users[i].name;
        break;
      }
    }
   },

  users: function(group) {
    return group.users;
  },

  sumar: function(a,b) {
    return a+b;
  },

  moment: function(date) {
    moment.locale();
    return moment(date).format('LL');
  },
  
 //group: function() {
 //  console.log('ID: ', parseInt(FlowRouter.getParam('_id')),1);
 // return groups[0];
 //}
  

  /*
visibility: function(){
    if (Meteor.userId() == "YGkF8EQhFL53ZQ4iu"){
            
        return {visible:true};
      }
      else {
        return {visible:false};
      } 
} */
  
  });
  
  Template.group.events({
    
  });