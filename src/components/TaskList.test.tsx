import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";


describe('TaskList component', ()=>{
    test("renders an empty task list when no tasks are passed", ()=>{
        const emptyTaskList = render(
            <TaskList tasks={[]}></TaskList>
        )
        const element = emptyTaskList.container.querySelector(".task-list");
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent('No tasks yet')
    })
})