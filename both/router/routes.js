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

Router.route('/profile', { name: 'Profile' });

Router.route('/calorieCounter', { name: 'CalorieCounter' });

Router.route('/dietOptions', { name: 'DietOptions' });

Router.route('/foodRecalls', { name: 'FoodRecalls' });
