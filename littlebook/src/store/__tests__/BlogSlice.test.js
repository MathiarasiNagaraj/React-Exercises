import { BlogAction, BlogReducer } from "../BlogSlice";

describe('BlogSlice', () => {
    it('initialState handling', () => {
        const initialState = {
            blogs: [],
    AllBlogs: [],
    searchTerm: "",
    filterType: [],
    isEditMode: false,
    selectedBlog: {},
    isValid: true,
    message: "",
    filterEmpty: false,
    selectedBlogInEdit:{}
        }
        const action = {};
        const newState = BlogReducer(initialState, action);
        expect(newState).toEqual(initialState)
    })

    it('store data handling', () => {
        const initialState = {
            blogs: [],
    AllBlogs: [],
    searchTerm: "",
    filterType: [],
    isEditMode: false,
    selectedBlog: {},
    isValid: true,
    message: "",
    filterEmpty: false,
    selectedBlogInEdit:{}
        }

        const action = BlogAction.store([{
            title: "test blog",
            details: 'test details 1',
            photo: "test.jpg",
            type:'International'
        }])
        const newState = BlogReducer(initialState, action);
        expect(newState).toEqual({
            blogs: [{
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id:1
            }],
            AllBlogs: [{
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id:1
            }],
            searchTerm: "",
            filterType: [
                { type:'International',isChecked:true}],
            isEditMode: false,
            selectedBlog: {title: "test blog",
            details: 'test details 1',
            photo: "test.jpg",
                type: 'International',
            id:1},
            isValid: true,
            message: "",
            filterEmpty: false,
            selectedBlogInEdit:{}
          });
    });
    
    it('add', () => {
        const initialState = {
            blogs: [{
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            }],
            AllBlogs: [{
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            }],
            searchTerm: "",
            filterType: [
                { type: 'International', isChecked: true }],
            isEditMode: false,
            selectedBlog: {
                id: 1,
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International'
            },
            isValid: true,
            message: "",
            filterEmpty: false,
            selectedBlogInEdit: {}
        }

        const action = BlogAction.add({
            title: "test blog 2",
            details: 'test details 2',
            type: 'local'
           
        })
        const newState = BlogReducer(initialState, action);
        expect(newState).toEqual({
            blogs: [{
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            }, {
                title: "test blog 2",
                details: 'test details 2',
                photo: "https://source.unsplash.com/random/800x600",
                id: 2,
                type: 'local'
            }],
            AllBlogs: [{
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            }, {
                title: "test blog 2",
                details: 'test details 2',
                photo: "https://source.unsplash.com/random/800x600",
                id: 2,
                type: 'local'
            }],
            searchTerm: "",
            filterType: [
                { type: 'International', isChecked: true },
                { type: 'local', isChecked: true }
            ],
            isEditMode: false,
            selectedBlog: {
                title: "test blog 2",
                details: 'test details 2',
                photo: "https://source.unsplash.com/random/800x600",
                id: 2,
                type: 'local'
            },
            isValid: true,
            message: "",
            filterEmpty: false,
            selectedBlogInEdit: {}
        });
    });
    
    it('edit', () => {
        const initialState = {
            blogs: [{
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            }],
            AllBlogs: [{
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            }],
            searchTerm: "",
            filterType: [
                { type: 'International', isChecked: true }],
            isEditMode: false,
            selectedBlog: {
                id: 1,
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International'
            },
            isValid: true,
            message: "",
            filterEmpty: false,
            selectedBlogInEdit: {}
        }

        const action = BlogAction.edit({
            title: "test blog edited",
            details: 'test details 1',
            photo: "test.jpg",
            type: 'International',
            id: 1
           
        })
        const newState = BlogReducer(initialState, action);
        expect(newState).toEqual({
            blogs: [{
                title: "test blog edited",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            }],
            AllBlogs: [{
                title: "test blog edited",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            }],
            searchTerm: "",
            filterType: [
                { type: 'International', isChecked: true },
            ],
            isEditMode: false,
            selectedBlog: {
                title: "test blog edited",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            },
            isValid: true,
            message: "",
            filterEmpty: false,
            selectedBlogInEdit: {}
        });
    });
    it('filter', () => {
        const initialState = {
            blogs: [{
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            }],
            AllBlogs: [{
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            }],
            searchTerm: "",
            filterType: [
                { type: 'International', isChecked: true }],
            isEditMode: false,
            selectedBlog: {
                id: 1,
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International'
            },
            isValid: true,
            message: "",
            filterEmpty: false,
            selectedBlogInEdit: {}
        }

        const action = BlogAction.filter({
            type: 'International',
            isChecked:false
        })
        const newState = BlogReducer(initialState, action);
        expect(newState).toEqual({
            blogs: [],
            AllBlogs: [{
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            }],
            searchTerm: "",
            filterType: [
                { type: 'International', isChecked: false },
            ],
            isEditMode: false,
            selectedBlog: {
                title: "test blog",
                details: 'test details 1',
                photo: "test.jpg",
                type: 'International',
                id: 1
            },
            isValid: true,
            message: "",
            filterEmpty: true,
            selectedBlogInEdit: {}
        });

     });
 

    })
