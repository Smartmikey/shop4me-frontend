// import { useQuery } from '@apollo/client'
import {CategoryList} from '../components/categoryList'
import {HeroSection} from '../components/hero'
// import { CATEGORY_QUERY } from '../query'

export const Category =()=> {
    // const {loading, error, data} = useQuery(CATEGORY_QUERY);
    // console.log(data);

    

    //   if(loading) return <p>Loading...</p>   
    return (
        <>
            <section className="container">
                <div className="row m-5">
                    <div className="col-md-3 p-2">
                        {/* {console.log(data)} */}
                        {/* <CategoryList data={data.me} /> */}
                        <CategoryList />
                        
                    </div>
                    <div className="col-md-9 my-4 py-2">
                        <HeroSection bglink="/category banner.jpg" text="Order goods from a variety of online stores" />
                        <h2 className="py-4">Product type</h2>
                        <p>At mattis quis mi in hac proin metus velit. Id consectetur odio magnis sollicitudin purus mauris. Adipiscing purus sodales velit sem. Purus lacus faucibus feugiat diam. At in ultrices egestas sollicitudin ipsum. Sollicitudin ipsum duis faucibus lobortis malesuada. Potenti sagittis at egestas quis nunc viverra orci, volutpat. </p>
                        <h2 className="py-4">Uk Store</h2>
                        <div className="row">
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                        </div>
                        <h2 className="py-4">Uk Store</h2>
                        <div className="row">
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}