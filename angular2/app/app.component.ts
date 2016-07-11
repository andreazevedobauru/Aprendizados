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
        <h1>{{ title }}</h1>
        <input type="text" [(ngModel)]="title">
        <ul>
            <li *ngFor="let t of tasks" (click)="onClick(t)">{{t.name}}</li>
        </ul>
        <task-edit [task]="selectedTask"></task-edit>
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