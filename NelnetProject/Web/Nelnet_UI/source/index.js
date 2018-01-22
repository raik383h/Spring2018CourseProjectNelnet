(function () {
    require('./index.scss');
    document.getElementById("app").insertAdjacentHTML('beforeend', require('./index.html'));
    // Require each component that needs to be loaded here
    require('./HelloWorldComponent/hello-world-component.js');


    ko.applyBindings();
})();