import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const THUMB_UP = 'THUMB_UP';
const THUMB_DOWN = 'THUMB_DOWN';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};
function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}
function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        text: '',
        id: id
    }
}
function thumbUp(id) {
    return {
        type: ADD_COMMENT,
        text,
        id: id,
        votes: votes +1
    }
}
function addComment(id) {
    return {
        type: ADD_COMMENT,
        text,
        id: id,
        votes: votes -1
    }
}