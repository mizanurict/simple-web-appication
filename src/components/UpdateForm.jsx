
const UpdateForm = () => {
    return (
        <div>
            <h1 className="text-2xl text-center font-bold">Update Form</h1>
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
            
            
            <div className="form-control mt-6">
            <button className="btn btn-secondary"> <input type="submit" value="Update" /> </button>
            </div>
          </form>
        </div>
        </div>
    );
};

export default UpdateForm;