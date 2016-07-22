import {Component, Input} from '@angular/core';
import {Task} from './task';

@Component({
    selector: 'task-edit',
    template: `
        <div *ngIf="task">
            <input type="text" [(ngModel)]="task.name" />
        </div>
    `
})

export class TaskEditComponent{
    @Input()
        task: Task;
}
