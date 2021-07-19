// import { useQuery } from '@apollo/client'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import CategoryContent from '../components/categoryContent'
import {CategoryList} from '../components/categoryList'
import {CategoryHeroSection, HeroSection} from '../components/hero'
import { CATEGORY_BY_SLUG } from '../query'
// import { CATEGORY_QUERY } from '../query'

export const Category =()=> {
    // const {loading, error, data} = useQuery(CATEGORY_QUERY);
    // console.log(data);

    const {name} = useParams()

    const {error, data} = useQuery(CATEGORY_BY_SLUG, {variables: {slug: name}})
    console.log(data);

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
                      <CategoryContent data={data?.getCategoryByName} />
                        </div>
                        
                    </div>
                {/* </div> */}
            </section>
        </>
    )
}