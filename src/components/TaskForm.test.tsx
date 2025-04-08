import { render, screen } from "@testing-library/react";
import TaskForm from "./TaskForm";

describe("TaskForm Component", ()=>{
    test("renders an empty task form contining an input and button", ()=>{
        const emptyTaskForm = render(
            <TaskForm></TaskForm>
        )
        const emptyTaskFormElement = emptyTaskForm.container.querySelector(".task-form");
        const emptyTaskFormInput = emptyTaskForm.container.querySelector("input")
        const emptyTaskFormButton = emptyTaskForm.container.querySelector("button")

        expect(emptyTaskFormElement).toBeInTheDocument()
        expect(emptyTaskFormElement).toContainElement(emptyTaskFormInput)
        expect(emptyTaskFormElement).toContainElement(emptyTaskFormButton)

    })
})