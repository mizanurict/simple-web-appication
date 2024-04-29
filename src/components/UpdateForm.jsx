
const UpdateForm = () => {
    return (
        <div className="my-8">
            
        <div className="mx-auto bg-slate-100 p-2 rounded-lg">
        <h1 className="text-2xl text-center font-bold">Update Form</h1>
          <form className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text"> Username</span>
              </label>
              <input type="text" name="username" defaultValue="Md. Mizanur Rahman" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Eamil</span>
              </label>
              <input type="email" name="email" defaultValue="mizanurictiu@gmail.com" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" name="password" placeholder="confirm password" className="input input-bordered" required />
            </div>
            <div>
              <h1 className="font-bold">SIGNATURE UPLOAD</h1>
              
<div className="flex items-center justify-center w-full">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Drop files here or click to upload</span></p>
            <p className="text-xs text-gray-500 dark:text-gray-400">(This is just a demo dropzone)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 

          </div>
           
            
            
            <div className="flex items-end justify-end gap-2">
              <button className="btn btn-secondary"> <input type="submit" value="Submit" /> </button>
              <button className="btn btn-error">Cancel</button>
            </div>
          </form>
        </div>
        </div>
    );
};

export default UpdateForm;