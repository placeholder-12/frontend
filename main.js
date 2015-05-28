function AppComponent() {}

AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'ph-12'
  }),
  new angular.ViewAnnotation({
    template: '<h1>Kvalitator</h1><form action="https://github.com/login/oauth/authorize?client_id=9611a8ed755aec36ffbb&redirect_uri=127.0.0.1:8080" method="GET"><input #username /><button>Authenticate with github</button></form>'
  })
];

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(AppComponent);
});
