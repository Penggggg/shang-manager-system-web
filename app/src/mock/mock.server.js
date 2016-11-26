"use strict";
var mockServer = (function () {
    function mockServer() {
    }
    mockServer.prototype.createDb = function () {
        var newsList = [
            { id: 4, author: 'hzp', time: '1479811105472', title: '阿萨德', commentCount: 321, classify: '餐饮', visitCount: 123 },
            { id: 2, author: 'hzp', time: '1479811105472', title: '新政策', commentCount: 321, classify: '餐饮', visitCount: 123 },
            { id: 3, author: 'hzp', time: '1479811105472', title: '萨达', commentCount: 321, classify: '餐饮', visitCount: 312 }
        ];
        return { newsList: newsList };
    };
    return mockServer;
}());
exports.mockServer = mockServer;
//# sourceMappingURL=mock.server.js.map