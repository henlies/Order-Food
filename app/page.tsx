"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Main() {
  type Food = {
    name: string;
    description: string;
    image: string;
  };

  const [modalImage, setModalImage] = useState('');
  const [foods, setFoods] = useState<Food[]>([]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  console.log(foods)
  // const foodMenu = [
  //   {
  //     name: 'คั่วกลิ้ง',
  //     description: 'Steamed rice with roasted chicken, served with soup.',
  //     image: '/sticky-rice.png',
  //   },
  //   {
  //     name: 'แกงเขียวหวาน',
  //     description: 'Stir-fried rice noodles with shrimp, tofu, and peanuts.',
  //     image: '/sticky-rice.png',
  //   },
  //   {
  //     name: 'ไข่พะโล้',
  //     description: 'Spicy green curry with chicken and vegetables over rice.',
  //     image: '/sticky-rice.png',
  //   },
  //   {
  //     name: 'ผัดเผ็ดหมู',
  //     description: 'Sweet sticky rice with fresh mango and coconut milk.',
  //     image: '/sticky-rice.png',
  //   },
  //   {
  //     name: 'คั่วกลิ้ง',
  //     description: 'Steamed rice with roasted chicken, served with soup.',
  //     image: '/pad-thai.png',
  //   },
  //   {
  //     name: 'แกงเขียวหวาน',
  //     description: 'Stir-fried rice noodles with shrimp, tofu, and peanuts.',
  //     image: '/pad-thai.png',
  //   },
  //   {
  //     name: 'ไข่พะโล้',
  //     description: 'Spicy green curry with chicken and vegetables over rice.',
  //     image: '/pad-thai.png',
  //   },
  //   {
  //     name: 'ผัดเผ็ดหมู',
  //     description: 'Sweet sticky rice with fresh mango and coconut milk.',
  //     image: '/pad-thai.png',
  //   },

  // ];

  useEffect(() => {
    fetch('/api/foods')
      .then(res => res.json())
      .then((data: Food[]) => setFoods(data));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-[150px] p-6 bg-[bisque]">
      <h1 className="text-gray-800 text-4xl font-extrabold mb-5 font-[var(--font-kanit)]">
        บ้านข้าวแกง
      </h1>

      {/* <p className="text-gray-700 text-lg leading-relaxed font-[var(--font-kanit)] mb-4">
        ข้าวแกง 1 อย่าง 40 บาท 2 อย่าง 50 บาท โจ๊กธรรมดา 25 บาท ใส่ไข่ 30 บาท
      </p> */}

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods.map((item, index) => (
          <li
            key={index}
            className="border bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col"
          >
            <div onClick={() => setModalImage(item.image)} className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            <div className="p-4">
              <h2 className="text-gray-800 text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {modalImage && (
          <motion.div
            key="overlay"
            onClick={() => setModalImage("")}
            className="fixed inset-0 bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 cursor-pointer"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-1/3 cursor-default"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Image
                src={modalImage}
                alt="Full Image"
                layout="responsive"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}