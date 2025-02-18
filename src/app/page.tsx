"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("modal") === "true";

  const openModal = () => router.push("?modal=true", { scroll: false });
  const closeModal = () => router.push("/", { scroll: false });

  const toggleContent = () => {
    router.push(isOpen ? "/" : "/?modal=true", { scroll: false });
  }

  return (
    <div className="bg-[#003092] min-h-screen w-full sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* container */}
        <div className="relative flex-col justify-center items-center">

          {/* Menu icon */}
          <div className="absolute flex justify-center items-center left-[77%]">
            <button onClick={(toggleContent)}>
              <Image
                src="/menu.png"
                alt="menu icon"
                width={30}
                height={30}
              />
            </button>
          </div>

          {/* Header Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/itbtree.png"
              alt="itbtree"
              width={75}
              height={75}
            />
          </div>

          {/* Caption Image */}
          <div className="flex justify-center items-center pt-4 text-4xl font-sans font-semibold">
            Parade Wisuda ITB
          </div>

          {/* description */}
          <div className="flex justify-center text-center items-center w-full">
            <div className="w-[60%] p-4">
              Parade Wisuda ITB merupakan rangkaian acara untuk menyambut mahasiswa ITB yang telah menyelesaikan
              masa studinya di ITB dan lulus sebelum April 2025.
            </div>
          </div>

          {/* shareable media */}
          <div className="flex justify-center items-center w-full pb-4">
            {/* container */}
            <div className="flex justify-around items-center w-[30%]">

              {/* twitter */}
              <div>
                <Image
                  src="/x.png"
                  alt="x"
                  width={30}
                  height={0}
                />
              </div>

              {/* youtube */}
              <div>
                <Image
                  src="/youtube.png"
                  alt="x"
                  width={30}
                  height={0}
                />
              </div>

              {/* instagram */}
              <div>
                <Image
                  src="/instagram.png"
                  alt="x"
                  width={30}
                  height={0}
                />
              </div>
            </div>
          </div>

          {/* main content */}
          <div className="flex justify-center items-center">
            {/* content container */}
            <div className="w-[60%] grid grid-cols-1 gap-4 justify-center items-center">
              {/* Parade wisuda juli 2020 */}
              <div className="flex justify-center items-center w-full bg-[#00879E] rounded-3xl border-2 border-[#FFAB5B] border-solid text-[#FFF2DB] p-6">
                <a href="">
                  Parade Wisuda Juli 2020
                </a>
              </div>

              {/* Parade wisuda oktober 2020 */}
              <div className="flex justify-center items-center w-full bg-[#00879E] rounded-3xl border-2 border-[#FFAB5B] border-solid text-[#FFF2DB] p-6">
                <a href="">
                  Parade Wisuda Oktober 2020
                </a>
              </div>

              {/* Parade wisuda April 2021 */}
              <div className="flex justify-center items-center w-full bg-[#00879E] rounded-3xl border-2 border-[#FFAB5B] border-solid text-[#FFF2DB] p-6">
                <a href="">
                  Parade Wisuda April 2021
                </a>
              </div>

              {/* Parade wisuda Oktober 2021 */}
              <div className="flex justify-center items-center w-full bg-[#00879E] rounded-3xl border-2 border-[#FFAB5B] border-solid text-[#FFF2DB] p-6">
                <a href="">
                  Parade Wisuda Oktober 2021
                </a>
              </div>

              {/* parade wisuda april 2022 */}
              <div className="flex justify-center items-center w-full bg-[#00879E] rounded-3xl border-2 border-[#FFAB5B] border-solid text-[#FFF2DB] p-6">
                <a href="">
                  Parade Wisuda April 2022
                </a>
              </div>

              {/* parade wisuda oktober 2022 */}
              <div className="flex justify-center items-center w-full bg-[#00879E] rounded-3xl border-2 border-[#FFAB5B] border-solid text-[#FFF2DB] p-6">
                <a href="">
                  Parade Wisuda Oktober 2022
                </a>
              </div>

              {/* parade wisuda April 2023 */}
              <div className="flex justify-center items-center w-full bg-[#00879E] rounded-3xl border-2 border-[#FFAB5B] border-solid text-[#FFF2DB] p-6">
                <a href="">
                  Parade Wisuda April 2023
                </a>
              </div>
              
              {/* parade wisuda oktober 2022 */}
              <div className="flex justify-center items-center w-full bg-[#00879E] rounded-3xl border-2 border-[#FFAB5B] border-solid text-[#FFF2DB] p-6">
                <a href="">
                  Parade Wisuda Oktober 2023
                </a>
              </div>

              {/* parade wisuda April 2024 */}
              <div className="flex justify-center items-center w-full bg-[#00879E] rounded-3xl border-2 border-[#FFAB5B] border-solid text-[#FFF2DB] p-6">
                <a href="">
                  Parade Wisuda April 2024
                </a>
              </div>

              {/* parade wisuda oktober 2024 */}
              <div className="flex justify-center items-center w-full bg-[#00879E] rounded-3xl border-2 border-[#FFAB5B] border-solid text-[#FFF2DB] p-6">
                <a href="">
                  Parade Wisuda Oktober 2024
                </a>
              </div>
            </div>

          </div>

          {/* rendered content */}
          {isOpen && (
            <div className="text-lg">
              This content is controlled by the button you've clicked
            </div>
          )}
        </div>
   </div>
  );
}
