import { gql } from "@apollo/client";

export const REGISTER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!){
        createUser(UserInput: {
            username: $username,
            email: $email,
            password: $password,
            }){ 
            token
        }
    }
`

export const UploadUserImage = gql`
    mutation uploadImage($file: Upload!){
        uploadProfilePic( file: $file ){
            success
        }
        
    } 
`

export const UPDATE_USER_DETAILS = gql`
    mutation updateDetails($userId: String!, $fName: String, $lName: String, $dob: String, $address: String,
        $city: String, $state: String, $nearestBusStop: String
    ) {
    updateUserDetails(userId: $userId, options: {
        firstName: $fName,
        lastName: $lName,
        dob: $dob,
        address: $address,
        city: $city,
        state: $state,
        nearestBusStop: $nearestBusStop
    }){
            id
        firstName
        lastName
        country
        state
    }
    }
`

export const CREATEORDER = gql`
    mutation createOrder($name: String!, $date: String!, $desc: String!, $price: Float!, $url: String!, $imageUrl: String!  ){
        createOrder(options: {
            name: $name, 
            desc: $desc, 
            date: $date, 
            price: $price, 
            url:$url, 
            imageUrl: $imageUrl
        } ){
            id
            name
            url
            imageUrl
            # user {
            #     email
            # }

        }
    }
`
export const UPDATE_ORDER = gql`
    mutation updateOrder($orderId: String!, $shippingFee: Float, $weight: Float, $status: String) {
  updateOrder(orderId: $orderId, options: {
    shippingFee: $shippingFee,
    weight: $weight,
    status: $status
  }){
    id
    name
    shippingFee
    weight
  }
}
`

export const DELETE_ORDER = gql`
    mutation deleteOrder($id: String!) {
    deleteOrder(id: $id){
        message
    }
}
`

export const CREATE_CATEGORY = gql`
    mutation createCategory($name: String!){
        createCategory(options: {
            name: $name
        }){
            id
            name
        }
    }
`

export const DELETE_CATEGORY = gql`
    mutation deleteCategory($id: String!) {
  deleteCategory (id: $id){
    message
  }
}

`