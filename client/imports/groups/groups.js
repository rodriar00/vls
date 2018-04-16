import { Template } from 'meteor/templating';
import {groups, users} from '../data/data.js';
import '../group/group.js';
import './groups.html';
import './groups.css';

var myId = 4;

Template.groups.helpers({
    notEmpty: function(array) {
        return array.length > 0;
    },
    myGroups: function() {
        var myGroups = [];
        for(var i=0; i<groups.length; i++) {
            if(groups[i].owner === myId) {
                myGroups.push(groups[i]);
            }
        }
        console.log(groups);
        return myGroups;
    },

    otherGroups: function() {
        var myGroups = [];
        for(var i=0; i<groups.length; i++) {
            if(groups[i].owner !== myId) {
                myGroups.push(groups[i]);
            }
        }
        console.log(groups);
        return myGroups;
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
});

Template.groups.events({
    'click .group': function(e) {
        var groupId = e.currentTarget.getAttribute('groupid');
        FlowRouter.go('/group/' + groupId);
    }
})