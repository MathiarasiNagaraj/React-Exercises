import CheckBox from "../CheckBox";
import { fireEvent, getByLabelText, render } from '@testing-library/react';


jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
  }));


describe('checkbox', () => {
    it('display chechbox true', () => {
        const { getByLabelText } = render(<CheckBox label="International" isChecked={true} />);
        const type = getByLabelText('International blogs');
        expect(type).toBeInTheDocument();
        expect(type)
    })
    describe('checkbox checked', () => {
        it('display chechbox true', () => {
            const { getByLabelText } = render(<CheckBox label="National" isChecked={true} />);
            const checkbox = getByLabelText('National blogs');
            fireEvent.click(checkbox);
            expect(checkbox.checked).toBe(true);
            fireEvent.click(checkbox);
            expect(checkbox.checked).toBe(false);
        })
        it('display chechbox false', () => {
            const { getByLabelText } = render(<CheckBox label="National" isChecked={false} />);
            const checkbox = getByLabelText('National blogs');
            fireEvent.click(checkbox);
            expect(checkbox.checked).toBe(false);
        })
    })


})