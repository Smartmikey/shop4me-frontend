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
    mutation createOrder($name: String!, $desc: String!, $price: Float!, $url: String!, $imageUrl: String!  ){
        createOrder(options: {
            name: $name, desc: $desc, price: $price, url:$url, imageUrl: $imageUrl
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
// export const REGISTER = gql`
//     mutation Register(
//             $username: String!,
//             $email: String!,
//             $password: String!,
//             $title: String, 
//             $Stitle: String,
//             $address: String, 
//             $Saddress: String, 
//             $fName: String, 
//             $lName: String ,
//             $county:String ,
//             $country:String ,
//             $phone:String ,
//             $SfName:String ,
//             $SlName:String ,
//             $Scounty:String ,
//             $Scountry:String ,
//             $Sphone: String,
                
//     ){
//         createUser(userInput: {
//             username: $username,
//             email: $email,
//             password: $password,
//             title:    $title, 
//             Stitle: $Stitle, 
//             address: $address, 
//             Saddress: $Saddress, 
//             fName: $fName, 
//             lName: $lName ,
//             county: $county ,
//             country: $country,
//             phone: $phone,
//             Sfname: $SfName, 
//             SlName: $SlName ,
//             Scounty: $Scounty ,
//             Scountry: $Scountry ,
//             Sphone: $Sphone,
//         }){
//             id
//             username
//             email
//         }
//     }
// `