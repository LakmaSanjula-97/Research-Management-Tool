import {render} from "@testing-library/react";
import AddResearchTopic from './AddResearchTopic';

describe("Input Component", () => {
    it("rendered input", () => {
        const { getByTestId } = render(<AddResearchTopic/>);
        const input = getByTestId("coname");
        expect(input).toBeTruthy();
    })
});