/** @format */
import { FaSignature } from "react-icons/fa";

const Profile= () => {
  return (
    <div>
      <h1 className="text-2xl bg-blue-500 p-2 font-bold">Edit Profile</h1>

      <form className="space-y-4 my-4 rounded-lg bg-slate-100 p-4">
        <label className="input input-bordered flex items-center gap-2">
          <div className="bg-slate-200 flex items-center justify-center rounded-l-lg w-12 h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className=" size-5 opacity-70 ">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
          </div>
          <input type="text" className="grow" placeholder="Admin" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <div className="bg-slate-200 flex items-center justify-center rounded-l-lg w-12 h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
          </div>
          <input type="text" className="grow" placeholder="mizanurictiu@gmail.com" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <div className="bg-slate-200 flex items-center justify-center rounded-l-lg w-12 h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input type="password" className="grow" placeholder="password" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <div className="bg-slate-200 flex items-center justify-center rounded-l-lg w-12 h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input type="password" className="grow" placeholder="password confirmation" />
        </label>
        <div className="flex">
          <div className="flex w-11/12">
            <label className="input input-bordered flex items-center gap-2 w-11/12 rounded-r-none">
              <div className="bg-slate-200 flex items-center justify-center rounded-l-lg w-12 h-full">
                <FaSignature />
              </div>

              <input type="text" className="grow" placeholder="choose your signature" />
            </label>
            <button className="btn btn-info rounded-l-none">Browse</button>
            
          </div>
          <button className="btn w-1/12 btn-primary">Signature</button>
        </div>
        <button className="btn btn-sm btn-primary ">Save</button>
      </form>
      
    </div>
  );
};

export default Profile;
