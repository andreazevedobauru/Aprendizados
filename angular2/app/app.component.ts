import {Component, Input} from '@angular/core';
import {TaskEditComponent} from  './task-edit.component';
import {Task} from './task';
import {TASKS} from './task-data';

@Component({
    selector: 'my-app',
    template: `
        <h1 [id]="title" >{{ title }}</h1>
        <ul>
            <li *ngFor="let t of tasks" (click)="onClick(t)">{{t.name}}</li>
        </ul>
        <task-edit [task]="selectedTask"></task-edit>
        <!--<input type="text" name="name1" ([ngModel])="title"/>-->
        <input type="text" name="name2" [ngModel]="title" (ngModelChange)="title=$event"/>
        [] Property Binding
        () Event Binding
    `,
    directives: [TaskEditComponent]
})

export class AppComponent{
    title = 'Lista de Tarefas';
    tasks:Task[] = TASKS;
    selectedTask: Task;

    onClick(task){
        this.selectedTask = task;
    }
}