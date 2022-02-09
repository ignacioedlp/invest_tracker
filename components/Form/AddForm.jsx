import React from "react";
import axios from "axios";

function Form() {
  const [usdars, setUsdars] = React.useState(0);
  const [dolars, setDolars] = React.useState(0);

  const handleChangeUsdars = (e) => {
    setUsdars(e.target.value);
  };

  const handleChangeDolars = (e) => {
    setDolars(e.target.value);
  };

  const submitInvest = async (e) => {
    e.preventDefault();
    await axios.post("/api/addInvest", {
      dolars,
      usdars,
    });
  };

  return (
    <div className=" mt-5 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Add invest
      </h2>
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="usdars"
            >
              USD/ARS
            </label>
            <input
              onChange={handleChangeUsdars}
              id="usdars"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="dolars"
            >
              Dolars amount
            </label>
            <input
              onChange={handleChangeDolars}
              id="dolars"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={submitInvest}
            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
