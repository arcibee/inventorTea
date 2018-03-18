import { Template } from 'meteor/templating';
import './main.html';
import { Teas } from '../lib/collection';
import { Accounts } from 'meteor/accounts-base';

// accounts config
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.body.helpers({
 
  teas() {
    return Teas.find({});
  }

});

Template.add.events({
  'submit .add-form': function() {
    event.preventDefault();
    // Get the input value

    const target = event.target;
    const text = target.text.value;

    console.log(text);
    // Insert tea into collection
   
    Meteor.call('teas.insert', text);

    // Clear form
    target.text.value = '';

    // Close modal
    $('#addModal').modal('close');

    return false;
  }
})

Template.tea.events({
  'click .delete-tea': function() {
    Meteor.call('tea-remove', this);
    return false;
  }
})