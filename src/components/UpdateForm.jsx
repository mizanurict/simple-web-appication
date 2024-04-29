
const UpdateForm = () => {
    return (
        <div>
            <h1 className="text-2xl text-center font-bold">Update Form</h1>
        <div className="w-2/3 mx-auto">
          <form className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input type="text" name="firstName" defaultValue="Md. Mizanur" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input type="text" name="lastName" defaultValue="Rahman" className="input input-bordered" required />
            </div>
          
           

            <div className="flex gap-4 my-2">
                <label htmlFor="gender">Gender</label>
                <input type="text" name="gender" defaultValue="Male" className="input input-bordered" />
               
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Text Area</span>
              </label>
              <textarea className="textarea textarea-accent" name="textArea" defaultValue="I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience."></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" defaultValue="mizanurictiu@gmail.com" className="input input-bordered" required />
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