import {Component, Input} from '@angular/core';

var TASKS:Task[] = [
        {id:1,name: 'Trabalhar'},
        {id:2,name: 'Viajar'},
        {id:3,name: 'Estudar'},
        {id:4,name: 'Passear'},
        {id:5,name: 'Jogar bola'},
        {id:6,name: 'Almoçar'}
    ];

export class Task{
    id: number;
    name: string;
    
}

@Component({
    selector: 'task-edit',
    template: `
        <div *ngIf="task">
            <input type="text" [(ngModel)]="task.name" />
        </div>
    `
})

export class TaskEdit{
    @Input()
    task: Task;
}

@Component({
    selector: 'my-app',
    template: `
        <h1 [id]="title" >{{ title }}</h1>
        <ul>
            <li *ngFor="let t of tasks" (click)="onClick(t)">{{t.name}}</li>
        </ul>
        <task-edit [task]="selectedTask"></task-edit>
        <input type="text" name="name1" ([ngModel])="title"/>
        <input type="text" name="name2" [ngModel]="title" (ngModelChange)="title=$event"/>
        [] Property Binding
        () Event Binding
    `,
    directives: [TaskEdit]
})

export class AppComponent{
    title = 'Lista de Tarefas';
    tasks:Task[] = TASKS;
    selectedTask: Task;

    onClick(task){
        this.selectedTask = task;
    }
}