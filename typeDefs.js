const { gql } = require('apollo-server')

module.exports = gql`
    type User {
        _id: ID
        name: String
        email: String
        picture: String
    }

    type Note {
        _id: ID
        createdAt: String
        title: String
        content: String
        image: String
        latitude: Float
        longitude: Float
        author: User
        comments: [Comment]
    }

    type Comment {
        text: String
        createdAt: String
        author: User
    }

    input CreateNoteInput {
        title: String!
        image: String
        content: String!
        latitude: Float!
        longitude: Float!
    }

    type Query {
        me: User
        getNotes: [Note!]
    }

    type Mutation {
        createNote(input: CreateNoteInput!): Note
        deleteNote(noteId: ID!): Note
        createComment(noteId: ID!, text: String): Note
    }

    type Subscription {
        noteAdded: Note
        noteDeleted: Note
        noteUpdated: Note
    }
`