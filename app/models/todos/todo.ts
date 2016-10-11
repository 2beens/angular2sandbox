export class Todo {
    constructor(
        public id: number,
        public title: string,
        public text: string,
        public priority: string,
        public priorityColor: string,
        public isFinished: boolean,
        public createdAt: number,
        public finishedAt: number
    ) { }
}