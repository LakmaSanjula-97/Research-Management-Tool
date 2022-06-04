import {render} from "@testing-library/react";
import AddSupervisorRequest from './AddSupervisorRequest';

describe("Input Component", () => {
    it("rendered input", () => {
        const { getByTestId } = render(<AddSupervisorRequest/>);
        const textarea = getByTestId("requestmessage");
        expect(textarea).toBeTruthy();
    })
});