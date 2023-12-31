import Image from "next/image";
import Item from "./Item";

export default function Home() {
  const obj = [
    {
      question: "How much is the Enagic Kangen Ionized Water Machine in Naira?",
      answer: "At a reasonable price of 5,150,000",
    },
  ];
  return (
    <main className="pb-8">
      <div className="bg-blue-300 p-6">
        <section className="max-container flex-col md:flex-row flexBetween w-full gap-6 min-h-[60vh] mb-4">
          <h1 className="text-xl md:text-2xl font-semibold md:font-bold">
            Enagic Kangen Ionized Water <br /> Machine in Nigeria
          </h1>
          <div className="w-96">
            <Image
              src="/enagic.png"
              width={1568}
              height={1975}
              className="w-full"
              alt="Enagic Kangen Ionized Water Machine"
            />
          </div>
        </section>
      </div>
      <section className="md:w-full max-container my-8">
        <h1 className="text-xl md:text-2xl font-semibold md:font-bold w-full text-center mb-2">
          What is the Kangen Enagic Ionized Water Machine used for
        </h1>
        <p className="md:px-8 mx-auto ">
          It is mainly for transforming your ordinary tap water into healthy,
          fresh tasting alkaline drinking water. By choosing to drink alkaline
          water, you aid your body in returning to a balanced state. Kangen
          Water is a fresh, clean and great tasting way to maintain optimal
          health!
        </p>
      </section>
      <section className="md:w-full max-container">
        <h1 className="text-xl md:text-2xl font-semibold md:font-bold w-full text-center mb-2">
          FAQs
        </h1>
        {obj.map((obj_item, index) => (
          <Item key={index} faq={obj_item} />
        ))}
      </section>
    </main>
  );
}
