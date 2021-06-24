export const Dash =()=>{
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-md-4 px-2 ">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Orders in progress</h3>
                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Orders completed</h3>
                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className="card p-4 text-center">
                            <h3 className="card-title">Cancelled Orders</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}