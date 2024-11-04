import { Icon } from "../../components/icon";

export const Header = () => {


  const SelectComponent = () => {
    return (
      <div className="relative inline-block ">
        <select className="block appearance-none w-full bg-white  text-black-500 py-2  pr-7  leading-tight focus:outline-none font-medium cursor-pointer ">
          <option value="option1" selected>Switch Entity</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 10l5 5 5-5"
            />
          </svg>
        </div>
      </div>
    );
  };


  return (
    <header className="header common-card">
      <div className="flex justify-between items-center">
        <div className="header-left">
          <h1 className="title text-primary  text-xl font-medium">
            Zomato  Food private Limited
          </h1>
          <SelectComponent />
        </div>
        <div className="header-right  flex items-center gap-7">
          <div className="rounded-full p-2 bg-secondary/10">
            <Icon
              name={"alert"}
              size={16}
              color={"#a06dff"} // Adjust color based on active index
              className="icon"
              ariaLabel={`alert icon`}
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="avatar rounded-full  bg-secondary/10   aspect-square w-12  h-12 flex justify-center items-center text-xl text-secondary">
              AT
            </div>
            <div className="header-option">
              <h4 className="title text-primary  text-sm font-medium">
                Ashwin Trivaedi
              </h4>
              <SelectComponent />

            </div>
          </div>


        </div>
      </div>
    </header>
  )
}
