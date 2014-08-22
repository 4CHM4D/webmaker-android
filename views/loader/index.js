var view = require('../../lib/view');

module.exports = view.extend({
    id: 'loader',
    template: require('./index.html'),
    ready: function () {
        var self = this;
        self.model.restore(function (err) {
            if (err) throw new Error('Could not restore user state.');

            if (window.location.pathname === '/') {
                var path = self.model.history.path;
                if (path === '/') path = '/templates';
                self.page(path);
            }

            if (window.location.pathname.indexOf('/make')) {
                self.page('/apps');
            }
        });
    }
});