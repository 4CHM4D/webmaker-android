var moment = require('moment');

var dataRepresentation = module.exports = {
    id: 'dataRepresentation',
    template: require('./index.html'),
    data: {
        isInteractive: true,
        sortOldest: false,
        sortKey: 'submitted',
        sortOptions: ['Newest', 'Oldest']
    },
    methods: Object.create(null)
};

dataRepresentation.methods.formatTime = function (unix) {
    return moment(unix).format('MMMM D, YYYY [at] h:mma');
};

dataRepresentation.methods.actionButton = function (e) {
    var self = this;

    // Delete
    if (this.countSelected > 0) {
        for (var i = 0; i < self.$data.dataSet.length; i++) {
            if (self.$data.dataSet[i].isSelected) {
                self.$dispatch('dataDelete', self.$data.dataSet[i].firebaseId);
            }
        }
    }
};

dataRepresentation.computed = {
    countSelected: function () {
        if (!this.$data) return false;
        var dataSet = this.$data.dataSet;
        var count = 0;
        for (var i = 0; i < dataSet.length; i++) {
            if (dataSet[i] && dataSet[i].isSelected) count++;
        }
        return count;
    },
    allSelected: {
        $get: function () {
            if (!this.$data) return false;

            var exists = this.$data.dataSet.length !== 0;
            var inRange = this.countSelected === this.$data.dataSet.length;

            return exists && inRange;
        },
        $set: function (toValue) {
            var dataSet = this.$data.dataSet;
            for (var i = 0; i < dataSet.length; i++) {
                if (dataSet[i]) dataSet[i].isSelected = toValue;
            }
        }
    }
};
