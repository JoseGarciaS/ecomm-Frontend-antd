import { createSlice } from '@reduxjs/toolkit';
import { getOrder } from '../httpRequests/httpRequests';

const initialState = {
    value: getOrder('carlos_unc@unitec.edu'),
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            console.log('STATE', state);
            console.log('ACTION', action.payload);
            state.value = getOrder(action.payload);
        },
    },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
