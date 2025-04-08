import { render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";


describe("TaskItem Component", ()=>{
    test("renders an empty task form contining an input and button", ()=>{
        const emptyTaskForm = render(
            <TaskItem></TaskItem>
        )
        const emptyTaskFormElement = emptyTaskForm.container.querySelector(".task-task");
        const emptyTaskFormInput = emptyTaskForm.container.querySelector("input")
        const emptyTaskFormButton = emptyTaskForm.container.querySelector("button")

        expect(emptyTaskFormElement).toBeInTheDocument()
        expect(emptyTaskFormElement).toContainElement(emptyTaskFormInput)
        expect(emptyTaskFormElement).toContainElement(emptyTaskFormButton)

    })
})