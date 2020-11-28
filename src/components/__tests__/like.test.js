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
        expect(p.textContent.split(':')[1].trim()).toBe("0");
    });
    it("Like paragraph increments when button increment is clicked ", () => {
        const button= container.querySelector("#increment");
        const p = container.querySelector("p");
        likes=parseInt(p.textContent.split(':')[1].trim(), 10);
        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(parseInt(p.textContent.split(':')[1].trim(), 10)).toBe(likes+1);
    });
    
    it("Like paragraph decrements when button decrement is clicked ", () => {
        const button= container.querySelector("#decrement");
        const p = container.querySelector("p");
        likes=parseInt(p.textContent.split(':')[1].trim(), 10);
        console.log(likes);
        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        console.log(p.textContent.split(':')[1].trim());
        //Nota: en el componente no se válida que el número de likes no sea negativo.
        //Se deberia matener en cero, si no hay likes y en la pruba se hace un condicional,
        //en este se mira que si la varibles likes es 0, al presionar decrement sigue siendo 0,
        //si no es cero, se hace la prueba como está a continuación. 
        //
        //Otra forma, sería que el botón decrement estuviera desabilitado cuando el número de likes es 0. 
        //En la pruba se miraría que si la variable likes es cero, el botón esté desabilidado, y si 
        //no es cero, se realiza la pruba haciendo el clik y verificando como sigue. 
        expect(parseInt(p.textContent.split(':')[1].trim(), 10)).toBe(likes-1);
    })

});