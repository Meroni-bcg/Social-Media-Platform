import { createSlice } from "@reduxjs/toolkit";


// This data will be accessible globally - functions to modify the global state

 const initialState = {
    mode: "light", // dark and light mode configured globally
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
         setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
         },
         
         setLogin: (state, action) => {
            state.user = action.payload.user; //setting user parameter for setLogin Function
            state.token = action.payload.token;
         },
         //user logout - no data should appear
         setLogout : (state) => {
            state.user = null;
            state.token = null;
         },

         setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            }
            else {
                console.error("user friend does not exist :(")
            }
         },

         setPosts: (state, action) => {
            state.posts = action.payload.posts;
         },
         
         setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
              if (post._id === action.payload.post._id) return action.payload.post; // only update with post that we changed "current post"
              return post;
            });
            state.posts = updatedPosts;
          },
          
    },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;