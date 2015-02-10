// events.js

var events = {};
events.topics = {};

events.subscribe = function(topic, listener) {
    // Create the topic's object if not yet created
    if (!this.topics.hasOwnProperty(topic)) {
        this.topics[topic] = [];
    }

    // Add the listener to queue
    var index = this.topics[topic].push(listener) - 1;

    // Provide handle back for removal of topic
    return {
        remove: function() {
            delete this.topics[topic][index];
        }
    };
};

events.publish = function(topic, args) {
    // If the topic doesn't exist, or there's no listeners in queue, just leave
    if (!this.topics.hasOwnProperty(topic)) {
        return;
    }

    // Cycle through topics queue, fire!
    this.topics[topic].forEach(function(item) {
        item.apply(args || {});
    });
};

module.exports = events;
