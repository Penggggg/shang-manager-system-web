"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var DateSelectorComponent = (function () {
    function DateSelectorComponent() {
        this.valueChange = new core_1.EventEmitter();
    }
    DateSelectorComponent.prototype.ngOnInit = function () {
        this._dateChange();
    };
    Object.defineProperty(DateSelectorComponent.prototype, "_date", {
        get: function () {
            var _time = new Date(Number(this.value));
            return _time.getFullYear() + "-" + (_time.getMonth() + 1) + "-" + _time.getDate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateSelectorComponent.prototype, "_time", {
        get: function () {
            var _poly = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
            var _time = new Date(Number(this.value));
            var _hour = _time.getHours();
            var _min = _time.getMinutes();
            var _sh = _hour > 10 ? _hour : _poly[_hour];
            var _sm = _min > 10 ? _min : _poly[_min];
            return _sh + ":" + _sm;
        },
        enumerable: true,
        configurable: true
    });
    DateSelectorComponent.prototype._dateChange = function () {
        var _this = this;
        this.currentDate.valueChanges
            .combineLatest(this.currentTime.valueChanges, function (date, time) {
            console.log(date + " " + time + ":00");
            return date + " " + time + ":00";
        })
            .subscribe(function (date) {
            var _time = new Date(date);
            _this.valueChange.emit(String(_time.getTime()));
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DateSelectorComponent.prototype, "value", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DateSelectorComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.ViewChild('date'), 
        __metadata('design:type', forms_1.NgForm)
    ], DateSelectorComponent.prototype, "currentDate", void 0);
    __decorate([
        core_1.ViewChild('time'), 
        __metadata('design:type', forms_1.NgForm)
    ], DateSelectorComponent.prototype, "currentTime", void 0);
    DateSelectorComponent = __decorate([
        core_1.Component({
            selector: 'date-selector',
            template: "\n        <div class=\"form-inline\">\n            <input #date=\"ngModel\" class=\"form-control\" [(ngModel)]=\"this._date\" name=\"date\" type='date' />\n            <input #time=\"ngModel\" class=\"form-control\" type='time' [(ngModel)]=\"_time\" name=\"time\" />\n        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], DateSelectorComponent);
    return DateSelectorComponent;
}());
exports.DateSelectorComponent = DateSelectorComponent;
//# sourceMappingURL=dateSelector.component.js.map