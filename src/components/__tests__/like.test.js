import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
        ReactDOM.render(
            <Like likes={0} />,
            container
        );
    });
});


afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("Testing Like component", () => {

    it("Defaults to 1 paragraph", () => {
        const p = container.querySelector("p");
        console.log(p.textContent.split(':')[1])
        expect(p.textContent.split(':')[1].trim()).toBe("0");
    });
    // it("Checkbox status and label changes when clicked", () => {
    //     const checkbox = container.querySelector("input");
    //     const label = container.querySelector("label");
    //     act(() => {
    //         checkbox.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    //     });
    //     expect(label.textContent).toBe("Active");
    //     expect(checkbox.checked).toBe(true);
    // });

});