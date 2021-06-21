import { Button } from "../components/styled"

export const NotFound = () => {
    return (
        <>
            <div className="container">
                <div className="row align-center m-5 py-md-5">
                    <div className="col-md-6">
                        <img className="w-100" src="/page_not_found_su7k.svg" />
                    </div>
                    <div className="col-md-6 my-auto text-center">
                        <h1>Page not found</h1>
                        <Button text="Go back home" href="/" />
                    </div>
                </div>
            </div>
        </>
    )
}