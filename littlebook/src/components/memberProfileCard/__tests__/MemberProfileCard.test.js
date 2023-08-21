
import MemberProfileCard from "../MemberProfileCard";
import { render } from '@testing-library/react';

const Member = {
    name: "test name",
    username: "test user name",
    photo:" test photo"
}



describe('MemberCard', () => {
    test('display Member card', () => {

        
        const { getByText } = render(<MemberProfileCard data={Member} />);
        const name = getByText('test name');
        const username = getByText('test user name');
        
      
        expect(name).toBeInTheDocument();
        expect(username).toBeInTheDocument();
    
        
    })
}
)

