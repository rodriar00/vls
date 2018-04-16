// NECESITA INSTALAR: meteor add kadira:flow-router

import '../imports/home/home.js';
import '../imports/group/group.js';
import '../imports/chat/chat.js';

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('home');
    }
});

FlowRouter.route('/group/:_id', {
    name: 'group',
    action() {
        BlazeLayout.render('group');
    }
});

FlowRouter.route('/chat/:_id', {
    name: 'chat',
    action() {
        BlazeLayout.render('chat');
    }
});