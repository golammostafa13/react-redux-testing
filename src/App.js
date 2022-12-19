import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthor, setFormData } from "./features/testSlice/testSlice";

function App() {
  const [isChange, setIsChange] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(state => state.testReducer);

  const [formName, setName] = useState("");
  const [formAge, setAge] = useState("");
  const [formEmail, setEmail] = useState("");

  const handleName = () => {
    setIsChange(prev => !prev);
  };

  const handleOnChangeName = (name) => {
    dispatch(setAuthor(name));
  }

  const handleFormName = (name) => {
    setName(name);
  }

  const handleFormAge = (age) => {
    setAge(age);
  }

  const handleFormEmail = (email) => {
    setEmail(email);
  }

  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const age = e.target[1].value;
    const email = e.target[2].value;

    setName("");
    setAge("");
    setEmail("");

    dispatch(setFormData({name, age, email}))
  }
  const {author} = state;

  return (
    <div className="grid place-content-center">
      <div>
        <nav className="flex my-4">
          {isChange ? (
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              onChange={(e) => handleOnChangeName(e.target.value)}
              value={author}
            />
          ) : (
            <h3 className="flex-auto text-black-700 mx-2 self-center">
              {author}
            </h3>
          )}
          <button
            className="flex-auto bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleName}
          >
            Change Name
          </button>
        </nav>
        <section className="my-3 p-4 border border-blue-500">
          <form className="w-full max-w-sm flex flex-col" onSubmit={handleForm}>
            <div className="md:flex flex-row md:items-center mb-6">
              <div className="basis-1/4">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Full Name
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  onChange={(e) => handleFormName(e.target.value)}
                  value={formName}
                />
              </div>
            </div>
            <div className="md:flex flex-row md:items-center mb-6">
              <div className="basis-1/4">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Age
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  onChange={(e) => handleFormAge(e.target.value)}
                  value={formAge}
                />
              </div>
            </div>
            <div className="md:flex flex-row md:items-center mb-6">
              <div className="basis-1/4">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Email
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  onChange={(e) => handleFormEmail(e.target.value)}
                  value={formEmail}
                />
              </div>
            </div>
            <button className=" bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
