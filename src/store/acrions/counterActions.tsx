import { createAsyncThunk } from "@reduxjs/toolkit";
import counterSlice from "../reducers/counterSlice";

const delay = ( time: number, value: any ) => {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve( value );
        }, time );
    } );
};

export const addPost = createAsyncThunk("post/add", async (data: any, thunkAPI) => {
    const result = await delay( 500, {
        title: "New Post",
        content: "New Post Content",
    });

    return result;
});

export const increaseAsync = createAsyncThunk(
    "counter/increase",
     async (data: any, thunkAPI) => {
         // getState usage
        //  const state = thunkAPI.getState();
        // console.log("thunk API ", state);

            // dispatch and async usage
         setTimeout(
             () => thunkAPI.dispatch(counterSlice.actions.increase(data)),
             1000
         );
     }
);

export const decreaseAsync = createAsyncThunk(
    "cocunter/decrease",
    async (data: any, thunkAPI) => {

        setTimeout(
            () => thunkAPI.dispatch(counterSlice.actions.decrease(data)),
            1000
        );
    }
);