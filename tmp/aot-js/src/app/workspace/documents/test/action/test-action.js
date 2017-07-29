/**Действие*/
var TestAction = (function () {
    /**Конструктор*/
    function TestAction() {
    }
    /**Выполнить*/
    TestAction.prototype.perform = function (form) {
        console.log('TestAction -> perform');
        var someEntity = form.entity;
        console.log(someEntity);
    };
    return TestAction;
}());
export { TestAction };
//# sourceMappingURL=test-action.js.map