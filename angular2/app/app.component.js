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
var TASKS = [
    { id: 1, name: 'Trabalhar' },
    { id: 2, name: 'Viajar' },
    { id: 3, name: 'Estudar' },
    { id: 4, name: 'Passear' },
    { id: 5, name: 'Jogar bola' },
    { id: 6, name: 'Almo�ar' }
];
var Task = (function () {
    function Task() {
    }
    return Task;
}());
exports.Task = Task;
var TaskEdit = (function () {
    function TaskEdit() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Task)
    ], TaskEdit.prototype, "task", void 0);
    TaskEdit = __decorate([
        core_1.Component({
            selector: 'task-edit',
            template: "\n        <div *ngIf=\"task\">\n            <input type=\"text\" [(ngModel)]=\"task.name\" />\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskEdit);
    return TaskEdit;
}());
exports.TaskEdit = TaskEdit;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Lista de Tarefas';
        this.tasks = TASKS;
    }
    AppComponent.prototype.onClick = function (task) {
        this.selectedTask = task;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{ title }}</h1>\n        <input type=\"text\" [(ngModel)]=\"title\">\n        <ul>\n            <li *ngFor=\"let t of tasks\" (click)=\"onClick(t)\">{{t.name}}</li>\n        </ul>\n        <task-edit [task]=\"selectedTask\"></task-edit>\n    ",
            directives: [TaskEdit]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map