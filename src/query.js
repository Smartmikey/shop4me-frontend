import {gql} from "@apollo/client"

export const CATEGORY_QUERY = gql`
    query GET_CATEGORIES {
        getCategories{
            id
            name
            slug
            stores {
                id
                name
                url
                logoUrl
                
            }
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
            phone
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

export const GET_ORDERS = gql`
    query Orders {
        getOrders{
            id
            name
            imageUrl
            status
            desc
            weight
            url
            price
            date
            payment
            userId  {
                username
            }
        }
    }

`
export const GET_CATEGORIES = gql`
    query getCategories {
        getCategories{
            id
            name
            slug
            stores {
            id
            name
            url
            logoUrl
            }
        }
        getStores{
            id
            name
            logoUrl
            url
            id
        }
    }

`

export const GET_ORDER = gql`
    query get_Order($id: String!) {
  getOrder(id: $id){
    id
    name
    imageUrl
    price
    status
    desc
    weight
    url
    date
    payment
    shippingFee
    userId  {
       email
       username
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
  transactionByOrderId(orderId: $id)

}

`

export const GET_STORE = gql`
    query getStores {
        getStores{
            id
            name
            logoUrl
            url
            
        }
 
        getCategories{
            id
            name
        }
    }
`
export const GET_SINGLE_STORE = gql`
    query getStore($id: String!) {
        getstore(id: $id){
            id
            name
            url
            logoUrl
            categoryIds {
                id
                name
            }
        }
}
`

export const GET_CATEGORY_BY_ID = gql`

query get_categories($id: String!) {
  getCategory(id: $id){
    id
    name
    slug
    stores {
        id
      name
      url
    }
  }
}

`

export const GET_TRANSACTIONS = gql`
    query transactions {
    getTransactions{
        id
        trans_id
        trans_ref
        amount 
        userEmail
        date
        orderId {
        id
        name
        }
        userId{
        username
        }
        
    }
    }
`

export const DASHBOARD_QUERY = gql`
    query getItems {
        getCategories{
            id
        }

        getOrders {
            id
            status
        }
        getStores{
            id
        }
        getUsers{
            id
        }
        getTransactions{
            id
        }
    }
`