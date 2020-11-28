import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;
var likes;

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
    it("Like paragraph increments when button is clicked ", () => {
        const button= container.querySelector("#increment");
        const p = container.querySelector("p");
        likes=parseInt(p.textContent.split(':')[1].trim(), 10);
        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(parseInt(p.textContent.split(':')[1].trim(), 10)).toBe(likes+1);
;
    });

});