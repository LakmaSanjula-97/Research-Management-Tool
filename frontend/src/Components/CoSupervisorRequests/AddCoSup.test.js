import {render} from "@testing-library/react";
import AddCoSupRequest from './AddCoSupRequest';

describe("Input Component", () => {
    it("rendered input", () => {
        const { getByTestId } = render(<AddCoSupRequest/>);
        const input = getByTestId("inputresearcharea");
        expect(input).toBeTruthy();
    })
});

describe("TextArea Component", () => {
    it("rendered input", () => {
        const { getByTestId } = render(<AddCoSupRequest/>);
        const textarea = getByTestId("testareadescription");
        expect(textarea).toBeTruthy()
    })
});