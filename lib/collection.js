import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Teas = new Mongo.Collection('teas');

Meteor.methods({
    'teas.insert'(text) {
        check(text, String); // makes sure the text is a string


        // Check if the user is logged in

        if(!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }


        Teas.insert({
            text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
          });
    },
    'tea-remove'(tea) {
        check(note._id, String);
        if(teas.owner !== Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        Teas.remove(teas._id);
    }
})