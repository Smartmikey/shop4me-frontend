import {gql} from "@apollo/client"

export const CATEGORY_QUERY = gql`
    query GET_CATEGORIES {
        getCategories{
            id
            name
            slug
        }

    }
`

export const LOGIN = gql`
    query login ($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
        }
    }

`

export const VERIFYUSER = gql`
    query verify($token: String) {
        verifyUser(token: $token){
        email
        id
        role
        }
    }
`

export const GETUSERS = gql`
    query getUsers {
        getUsers{
        username
        id
        email
        role
        }
    }

`