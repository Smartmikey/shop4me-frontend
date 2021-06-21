const personalDetails =()=> {
    return (
        <>
            <fieldset className="form-group fieldset border p-3 rounded">
                        <legend className="w-auto px-2">Billing information</legend>
                        <div className="form-group row">
                            <label htmlFor="state" className="col-sm-4 col-form-label">Title</label>
                            <div className="col-sm-8">
                            <select value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control">
                                <option>Default select</option>
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Miss</option>
                                <option>Ms</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="fName" className="col-sm-4 col-form-label">First name</label>
                            <div className="col-sm-8">
                            <input value={fName} onChange={(e)=> setFName(e.target.value)}type="text" className="form-control" id="fName" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lName" className="col-sm-4 col-form-label">Last name</label>
                            <div className="col-sm-8">
                            <input  value={lName} onChange={(e)=> setLName(e.target.value)} type="text" className="form-control" id="lName" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="address" className="col-sm-4 col-form-label">Address</label>
                            <div className="col-sm-8">
                            <input  value={address} onChange={(e)=> setAddress(e.target.value)} type="text" className="form-control" id="address" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-4 col-form-label">State</label>
                            <div className="col-sm-8">
                            <select value={county} onChange={(e)=> setCounty(e.target.value)} className="form-control">
                                <option>Default select</option>
                                <option>Abia</option>
                                <option>Adamawa</option>
                                <option>Anambra</option>
                                <option>Bauchi</option>
                        
                            </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-4 col-form-label">Country</label>
                            <div className="col-sm-8">
                            <select disabled value={country} onChange={(e)=> setCountry(e.target.value)} className="form-control">
                                <option>Default select</option>
                                <option>Nigeria</option>
                        
                            </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="address" className="col-sm-4 col-form-label">Contact phone number</label>
                            <div className="col-sm-8">
                            <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="tel" className="form-control" id="address" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-group fieldset border p-3 rounded">
                        <legend className="w-auto px-2">Shipping information</legend>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-4 col-form-label">Title</label>
                            <div className="col-sm-8">
                            <select value={Stitle} onChange={(e)=> setSTitle(e.target.value)} className="form-control">
                                <option>Default select</option>
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Miss</option>
                                <option>Ms</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="fName" className="col-sm-4 col-form-label">First name</label>
                            <div className="col-sm-8">
                            <input value={SfName} onChange={(e)=> setSFName(e.target.value)}type="text" className="form-control" id="fName" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lName" className="col-sm-4 col-form-label">Last name</label>
                            <div className="col-sm-8">
                            <input  value={SlName} onChange={(e)=> setSLName(e.target.value)} type="text" className="form-control" id="lName" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="address" className="col-sm-4 col-form-label">Address</label>
                            <div className="col-sm-8">
                            <input  value={Saddress} onChange={(e)=> setSAddress(e.target.value)} type="text" className="form-control" id="address" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="state" className="col-sm-4 col-form-label">State</label>
                            <div className="col-sm-8">
                            <select value={Scounty} onChange={(e)=> setSCounty(e.target.value)} className="form-control">
                                <option>Default select</option>
                                <option>Abia</option>
                                <option>Adamawa</option>
                                <option>Anambra</option>
                                <option>Bauchi</option>
                        
                            </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-4 col-form-label">Country</label>
                            <div className="col-sm-8">
                            <select disabled value={Scountry} onChange={(e)=> setSCountry(e.target.value)} className="form-control">
                                <option>Default select</option>
                                <option>Nigeria</option>
                        
                            </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="address" className="col-sm-4 col-form-label">Contact phone number</label>
                            <div className="col-sm-8">
                            <input value={Sphone} onChange={(e)=> setSPhone(e.target.value)} type="tel" className="form-control" id="address" />
                            </div>
                        </div>
                    </fieldset>
        </>
    )
}