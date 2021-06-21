export const Patners = (props) => {
    return (
        <>
            <div className="row text-center p-5">
            {props.patners.map((patner)=>(
                <div className="col-md-2 col-sm-6 p-2">
                    <img src={patner.url} className="w-50 align-center m-3" />
                </div>
            
            ))}
            </div>
        </>
    )
}