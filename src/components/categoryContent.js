import { CategoryHeroSection } from "./hero"

const CategoryContent = (props) => {
    console.log(props.data);
    return ( 
        <>
            {/* <div className="col-md-9 my-4 py-2"> */}
                        {/* <CategoryHeroSection bglink="/category banner.jpg" text="Order goods from a variety of online stores" /> */}
                        <div >
                            <img className="w-100" src={props.data?.imageUrl} />
                        </div>
                        <h2 className="py-4 text-capitalize">{props.data?.name} Category</h2>
                        <p>{props.data?.desc}</p>
                        <h2 className="py-4">Uk Store</h2>
                        <div className="row">
                            { props?.data?.stores?.map(e => (
                                
                                <div key={e.id} className="col-md-3 m-3 align-bottom  p-3 border rounded ">
                                <a href={e.url} target="_blank" className="text-dark text-capitalize">
                                <img src={e.logoUrl} className="w-100" />
                                <h4>{e.name}</h4></a>
                            </div>
                            ))}
                            
                            {/* <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div>
                            <div className="col-md-4 my-2">
                                <img src="/Image and Icon.png" className="w-100" />
                            </div> */}
                            
                        </div>
        </>
     );
}
 
export default CategoryContent;