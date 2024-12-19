import { useState } from "react";
import PropTypes from "prop-types";

export default function App() {
  const [isOpen, setIsOpen] = useState(null);

  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
      id: 1,
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
      id: 2,
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
      id: 3,
    },
  ];

  const toggleOpen = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <div className="bg-gray-100 flex flex-col gap-10 justify-center items-center h-screen w-full">
      {faqs.map((item) => (
        <Box
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          isOpen={isOpen}
          setIsOpen={toggleOpen}
        />
      ))}
    </div>
  );
}

function Box({ title, text, id, isOpen, setIsOpen }) {
  const isActive = id === isOpen;

  return (
    <div
      onClick={() => setIsOpen(id)}
      className={`${
        isActive ? "border-green-700" : "border-white"
      } bg-white border-t-4 w-[50%] grid grid-cols-[1fr_80%_1fr] rounded-lg rounded-t shadow-lg cursor-pointer duration-300 transition-all ease-in`}
    >
      <span
        className={`${
          isActive ? "text-green-700" : ""
        } flex items-center justify-center p-3 font-bold text-xl`}
      >
        {id.toString().padStart(2, "0")}
      </span>
      <p
        className={`${
          isActive ? "text-green-700" : ""
        } font-semibold p-5 text-xl`}
      >
        {title}
      </p>
      <span className="p-3 flex items-center justify-center font-bold text-xl cursor-pointer">
        {isActive ? "-" : "+"}
      </span>

      <div
        className={`${
          isActive
            ? "opacity-100 max-h-[1000px] py-5"
            : "opacity-0 max-h-0 py-0"
        } transition-all duration-500 ease-in-out overflow-hidden col-start-2`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOpen: PropTypes.number,
  setIsOpen: PropTypes.func.isRequired,
};
