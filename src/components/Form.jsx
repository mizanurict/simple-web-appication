
const Form = () => {
    return (
        <div>
            <h1 className="text-2xl text-center font-bold">Simple Form</h1>
        <div className="w-2/3 mx-auto">
          <form className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Month</span>
              </label>
              <input type="month" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input type="time" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">File</span>
              </label>
              <input type="file" placeholder="upload file" required />
          
              
            </div>
            <div className="flex gap-4 my-2">
                <label htmlFor="">Male</label>
                <input type="radio" name="radio-7" className="radio radio-info" checked />
                <label htmlFor="">Female</label>
                <input type="radio" name="radio-7" className="radio radio-info" />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Text Area</span>
              </label>
              <textarea className="textarea textarea-accent" placeholder="text"></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
            </div>
            
            <div className="form-control mt-6">
            <button className="btn btn-primary"> <input type="submit" value="Submit" /> </button>
            </div>
          </form>
        </div>
        </div>
    );
};

export default Form;