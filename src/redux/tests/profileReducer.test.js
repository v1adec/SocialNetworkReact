import profileReducer, {addPost, deletePost} from "../profileReducer";

const initialState = {
    postData: [
        {id: 1, message: 'My first react app!', likesCount: 32},
        {id: 2, message: 'I need more CSS', likesCount: 15},
        {id: 3, message: 'COOOOOOOOOOOOOOL!!!', likesCount: 15},
        {id: 4, message: 'React is cool!', likesCount: 45},
    ]
}

test('new post', () => {

    const action = addPost("New test post")
    const newState = profileReducer(initialState, action);

    expect(newState.postData.length).toBe(5)

});

test('new message text is New test post', () => {

    //1. test data
    const action = addPost("New test post")

    //2. action
    const newState = profileReducer(initialState, action);

    //3. expectation
    expect(newState.postData[4].message).toBe("New test post")


});

test('deleting one post', () => {

    //1. test data
    const action = deletePost(1);

    //2. action
    const newState = profileReducer(initialState, action);

    //3. expectation
    expect(newState.postData.length).toBe(3)


});

test("can't delete post  with id 1000", () => {

    //1. test data
    const action = deletePost(1000);

    //2. action
    const newState = profileReducer(initialState, action);

    //3. expectation
    expect(newState.postData.length).toBe(4)


});
