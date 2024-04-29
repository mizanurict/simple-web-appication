/** @format */

import Select from "react-dropdown-select";
import Multiselect from "multiselect-react-dropdown";

import Datepicker from "react-tailwindcss-datepicker";

const Form = () => {

  const options = [
    {
      value: 1,
      label: "Chocolate",
    },
    {
      value: 2,
      label: "IceCream",
    },
  ];

  return (
    <div className="grid grid-cols-8 justify-between items-center bg-slate-100 p-4 rounded-lg gap-4">
      <div className="space-y-4 p-2 bg-white rounded-lg grid col-span-4">
        <h1 className="font-semibold text-xl">React Selection</h1>
        <div>
          <h1>Single Selection</h1>
          <Select options={options} />
        </div>
        <div>
          <h1>Multiple Selection</h1>
          <Multiselect
            isObject={false}
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={["Apple", "Orange", "Banana"]}
          />
        </div>
      </div>
      <div className="space-y-4 p-2 rounded-lg bg-white grid col-span-4">
        <h1 className="font-semibold text-xl">React Selection</h1>
        <div>
          <h1>Single Selection</h1>
          <Select options={options} />
        </div>
        <div>
          <h1>Multiple Selection</h1>
          <Multiselect
            isObject={false}
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={["Apple", "Orange", "Banana"]}
          />
        </div>
      </div>
      <div className="space-y-4 p-2 rounded-lg bg-white grid col-span-8">
        <h1 className="font-semibold text-xl">Date and Time</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
          <div className="space-y-2">
          <h1>Single Date</h1>
          <input type="date" className="border p-2 rounded-md w-full" name="date" id="" />
        </div>
        <div className="space-y-2 my-2">
          <h1>Multiple Selection</h1>
          <p className="border rounded-md w-full">< Datepicker/></p>
        </div>
          </div>
          <div>
          <div className="space-y-2">
          <h1>Single Date</h1>
          <input type="date" className="border p-2 rounded-md w-full" name="date" id="" />
        </div>
        <div className="space-y-2 my-2">
          <h1>Multiple Selection</h1>
          <p className="border rounded-md w-full">< Datepicker/></p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
