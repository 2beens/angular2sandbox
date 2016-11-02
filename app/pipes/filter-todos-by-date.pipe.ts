import { Pipe, PipeTransform } from '@angular/core';

import { TimeSpanType } from '../models/timeSpanType';
import { Todo } from '../models/todos/todo';

@Pipe({
    name: 'filterTodosByDate'
})
export class FilterTodosByDatePipe implements PipeTransform {
    transform(todos: Todo[], timeSpanType: TimeSpanType): Todo[] {
        if(timeSpanType === TimeSpanType.All) {
            return todos;
        }
        
        let now = new Date().getTime();
        let minute = 1000 * 60;
        let day = minute * 60 * 12;
        
        let maxDuration = day;
        if(timeSpanType === TimeSpanType.Week) {
            maxDuration = day * 7;
        } else if (timeSpanType === TimeSpanType.Month) {
            maxDuration = day * 30; //depends on the month....
        }

        return todos.filter(todo => 
            now - todo.createdAt <= maxDuration
        );
    }
}