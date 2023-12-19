import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Item = ({ faq }) => {
  return (
    <details className="group w-full  border-t border-dashed">
      <summary className="flex justify-between md:text-lg gap-4 py-3 cursor-pointer font-semibold w-full leading-5">
        {faq.question}
        <MdOutlineKeyboardArrowRight
          size={25}
          className="transition group-open:rotate-90 min-w-[1.5rem]"
        />
      </summary>
      <p
        className="px-3 pb-3 text-sm text-gray-900 leading-4"
        dangerouslySetInnerHTML={{ __html: faq.answer }}
      />
    </details>
  );
};

export default Item;
