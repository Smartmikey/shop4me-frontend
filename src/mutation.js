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
        $city: String, $state: String, $nearestBusStop: String, $phone: String
    ) {
    updateUserDetails(userId: $userId, options: {
        firstName: $fName,
        lastName: $lName,
        dob: $dob,
        address: $address,
        city: $city,
        state: $state,
        phone: $phone,
        nearestBusStop: $nearestBusStop
    }){
            id
        firstName
        lastName
        country
        state
        phone
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
    mutation updateOrder($orderId: String!, $payment: String, $shippingFee: Float, $weight: Float, $status: String) {
  updateOrder(orderId: $orderId, options: {
    shippingFee: $shippingFee,
    weight: $weight,
    status: $status,
    payment: $payment
  }){
    id
    name
    shippingFee
    weight
  }
}
`
export const UPDATE_ORDER_PAYMENT = gql`
    mutation updateOrderPayment($orderId: String!, $payment: String) {
  updateOrder(orderId: $orderId, options: {
    payment: $payment
  }){
    id
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
    mutation createCategory($name: String!, $imageUrl: String!, $desc: String!, $storeId: [String!]!){
        createCategory(options: {
            name: $name,
            storeId: $storeId,
            desc: $desc,
            imageUrl: $imageUrl
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

export const CREATE_STORE = gql`
    mutation createStore($name: String!, $url: String!, $logoUrl: String!) {
    createStore(options: {
        name: $name,
        url:$url,
        logoUrl: $logoUrl,
    }){
      id
        name
        url
        
    }
}

`
export const DELETE_STORE = gql`
    mutation deleteStore($id: String!) {
    deleteStore(id: $id){
        message
    }
}

`
export const UPDATE_STORE = gql`
mutation updateStore($id: String!, $name: String, $url: String, $logoUrl: String) {
  updateStore(id: $id, options: {
    name: $name,
    url:$url,
    logoUrl: $logoUrl,
  }){
    id
  }
}
`
export const CREATE_TRANSACTION = gql`

mutation createTransaction($amount: String!, $trans_ref: String!, $trans_id: String!,
$flw_ref: String!, $userEmail: String!, $orderId: String!, $userId: String!, $date: String!) {
  createTransaction(option: {
    amount: $amount,
    trans_ref: $trans_ref,
    trans_id: $trans_id,
    flw_ref: $flw_ref,
    userEmail: $userEmail,
    orderId: $orderId,
    userId: $userId,
    date: $date
  }){
    id
    
  }
}
`

export const UPDATE_CATEGORY_STORE =gql`
    mutation updateCategoryStore($id: String!, $storeId: [String!]!) {
  updateCategoryStore(id: $id, options: {
    storeId: $storeId
  }){
      id
    name
    stores {
        id
      name
    }
  }
}
`