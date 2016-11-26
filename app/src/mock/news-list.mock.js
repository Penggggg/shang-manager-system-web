"use strict";
var mockServer = (function () {
    function mockServer() {
    }
    mockServer.prototype.createDb = function () {
        var NewsList = [
            { author: 'hzp', time: '2016-2-1', id: 1, title: '你好', comment: 321, classify: '餐饮', visit: 123 },
            { author: 'hzp', time: '2016-2-1', id: 1, title: '你好', comment: 321, classify: '餐饮', visit: 123 },
            { author: 'hzp', time: '2016-2-1', id: 1, title: '你好', comment: 321, classify: '餐饮', visit: 123 }
        ];
        return { NewsList: NewsList };
    };
    return mockServer;
}());
exports.mockServer = mockServer;
//# sourceMappingURL=news-list.mock.js.map