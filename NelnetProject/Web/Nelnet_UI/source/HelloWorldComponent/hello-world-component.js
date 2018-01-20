require('./hello-world-component.scss');

ko.components.register('hello-world-component', {
    viewModel: function (params) {
        var vm = this;
        vm.text = ko.observable();

        vm.text('Binding is working');

        return vm;
    },
    template: require('./hello-world-component.html')
});