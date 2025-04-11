import { render,screen } from "@testing-library/react";
import TaskList from "./TaskList";
import {Task} from "./types.ts";
import {expect} from "vitest";

const mockTasks: Task[] = [{
    id: 123,
    text: "mock task1",
    completed: false
    },
    {
        id: 234,
        text: "mock task2",
        completed: true
    }]

describe('TaskList component', ()=>{
    test("renders an empty task list when no tasks are passed", ()=>{
        const emptyTaskList = render(
            <TaskList tasks={[]} toggleComplete={()=>{}} deleteTask={()=>{}}></TaskList>
        )
        const element = emptyTaskList.container.querySelector(".task-list")
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent('No tasks yet')
    })
    test('renders a task list with one incomplete  task passed in', ()=>{
        render(
            <TaskList tasks={mockTasks} toggleComplete={()=>{}} deleteTask={()=>{}}
            />)
        const taskItems = screen.getAllByText(/mock/i)
        expect(taskItems.length).toBe(2)
    })
})