Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});

Router.route('/profile', { name: 'profile' });
