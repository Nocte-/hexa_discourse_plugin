Discourse.Category = Discourse.Category.extend({
    borderStyle: function(){
        var color = this.get('color');
        if (color) {
            return 'border-left:5px solid #' + color + ';'
        }
        else {
            return 'border-left:5px solid #ccc;'
        }
    }.property('color')
});

