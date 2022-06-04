import {render} from "@testing-library/react";
import GroupRegister from './ViewGroupDetails';

describe("Search Input Component", () => {
    it("rendered input", () => {
        const { getByTestId } = render(<GroupRegister/>);
        const input = getByTestId("searchbar");
        expect(input).toBeTruthy()
    })
});