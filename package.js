Package.describe({
  summary: "Javascript forms validation. Powerful, UX aware, and dead simple."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.use('less', 'client');
  api.add_files('parsley.min.js', 'client');
  api.add_files('parsley.less', 'client');
  api.add_files('parsley_variables.less', 'client');
  api.add_files('parsley.remote.min.js', 'client');
});
