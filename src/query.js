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
        username
        id
        role
        orders{
            id
            name
            desc
            price
            url
            payment
            status
        }
        userDetails{
            country
            firstName
            lastName
            state
            city
            dob
            address
            nearestBusStop
        }
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
        orders{
            id
            name
            desc
            price
            url
            weight
            payment
            status
        }
        }
    }

`
export const GETUSER = gql`
    query getUser($id: String!) {
        getUsers(id: $id){
        username
        id
        email
        role
        }
    }

`