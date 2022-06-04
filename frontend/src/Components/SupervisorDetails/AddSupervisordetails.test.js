import {render} from "@testing-library/react";
import AddSupervisordetails from './AddSupervisor';

describe("Input Component", () => {
    it("rendered input", () => {
        const { getByTestId } = render(<AddSupervisordetails/>);
        const input = getByTestId("department");
        expect(input).toBeTruthy();
    })
});

describe("Input Component", () => {
    it("rendered input", () => {
        const { getByTestId } = render(<AddSupervisordetails/>);
        const input = getByTestId("supervisor_email");
        expect(input).toBeTruthy();
    })
});