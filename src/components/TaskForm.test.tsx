import { render,screen,fireEvent } from "@testing-library/react";
import TaskForm from "./TaskForm";

describe("TaskForm Component", ()=>{
    test("renders an empty task form containing an input and button", ()=>{
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
    test("calls add task", ()=>{
        const addTaskMock = vi.fn()

        render(<TaskForm addTask={addTaskMock}/>)

        const inputElm = screen.getByPlaceholderText("Add a new task")
        const buttonElm = screen.getByRole("button")

        fireEvent.change(inputElm, {target: {value: "DOING THINGS"}})
        fireEvent.click(buttonElm)

        expect(addTaskMock).toHaveBeenCalledWith("DOING THINGS")
    })
})