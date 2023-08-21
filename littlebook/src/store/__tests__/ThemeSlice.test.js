import { ThemeReducer, ThemeAction } from "../ThemeSlice";

describe('ThemeSlice', () => {
    it('initial State', () => {
      const  initialState={
        mode:'light'
        }  
        const action = {};
        const newState = ThemeReducer(initialState, action);
        expect(newState).toEqual(initialState);
    })
    it('should  toggle mode', () => {
        const initialState = { mode:'light' };
        const action = ThemeAction.toggle();
    
        const newState = ThemeReducer(initialState, action);
    
        expect(newState.mode).toEqual('dark');
      });
    
})