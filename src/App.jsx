/** @format */

import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold">Simple Table</h1>
     
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Md Mizanur</td>
                <td>Rahman</td>
                <td>mizanurictiu@gmail.com</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Md. Shawon</td>
                <td>Rahman</td>
                <td>shawonict@gmail.com</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Mst. Toma</td>
                <td>Khatun</td>
                <td>tomakst@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      
    </>
  );
}

export default App;
