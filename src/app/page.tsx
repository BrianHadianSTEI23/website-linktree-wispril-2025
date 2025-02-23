"use client";

import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <div className="bg-[#003092] min-h-screen w-full sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* container */}
        <div className="relative flex-col justify-center items-center">

          {/* Menu icon */}
          <div className="absolute flex justify-center items-center left-[77%]">
            <button onClick={() => setIsOverlayOpen(true)}
              // className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
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

          {isOverlayOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[40%] text-center text-black h-[90%]">
                {/* title and close button container*/}
                <div className="relative flex items-center justify-center h-[10%]">
                  {/* title */}
                  <div className="flex w-70% text-xl font-semibold">
                    Share ITBtree
                  </div>

                  {/* close button */}
                  <div className="absolute right-2">
                    <Image
                      onClick={() => setIsOverlayOpen(false)}
                      src={"/exit.png"}
                      alt="exit button"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>

                {/* linktree logo */}
                <div className="h-[45%] items-center justify-center bg-[#372739] rounded-lg">
                  {/* itbtree logo */}
                  <div className="h-[70%] flex justify-center items-center">
                    <Image
                      src={"/itbtree.png"}
                      alt="itbtree logo"
                      width={50}
                      height={50}
                    />
                  </div>
                  {/* caption */}
                  <div className="flex items-start justify-center text-2xl tracking-tight text-white">
                    @ITBtree
                  </div>
                </div>

                {/* media socials */}
                <div className="flex justify-center items-center h-[15%] my-2">
                  {/* copy link */}
                  <div className="p-2">
                    {/* logo */}
                    <div className="flex justify-center items-center p-2">
                      <Image
                        src={"/copy-link.png"}
                        alt="copy current link"
                        width={40}
                        height={40}
                      />
                    </div>

                    {/* caption */}
                    <div className="font-semibold tracking-tight">
                      Copy Link
                    </div>
                  </div>

                      {/*  instagram */}
                    <div className="p-2">
                      {/* logo */}
                      <div className="flex justify-center items-center p-2 bg-black rounded-lg bg-center">
                        <Image
                          src={"/instagram.png"}
                          alt="go to instagram page"
                          width={40}
                          height={40}
                        />
                      </div>

                      {/* caption */}
                      <div className="font-semibold tracking-tight">
                        Instagram
                      </div>
                    </div>

                    {/*  x */}
                    <div className="p-2">
                      {/* logo */}
                      <div className="flex justify-center items-center p-2 bg-black rounded-lg bg-center">
                        <Image
                          src={"/x.png"}
                          alt="go to x page"
                          width={40}
                          height={40}
                        />
                      </div>

                      {/* caption */}
                      <div className="font-semibold tracking-tight">
                        X
                      </div>
                    </div>

                    {/*  youtube */}
                    <div className="p-2">
                      {/* logo */}
                      <div className="flex justify-center items-center p-2 bg-black rounded-lg bg-center">
                        <Image
                          src={"/youtube.png"}
                          alt="go to youtube page"
                          width={40}
                          height={40}
                        />
                      </div>

                      {/* caption */}
                      <div className="font-semibold tracking-tight">
                        Youtube
                      </div>

                    </div>
                </div>

                {/* persuasive content */}
                <div className="text-start pb-2">
                  {/* title */}
                  <div className="text-lg font-bold tracking-tighter">
                    Join Parade Wisuda ITB
                  </div>

                  {/* caption */}
                  <div>
                    Get your own free ITBtree. The only link in bio trusted by 50M+ people.
                  </div>

                  {/* buttons */}
                  <div className="flex justify-between py-2 h-[30%]">
                    {/* sign up */}
                    <div className="w-0.5 flex flex-1 justify-center items-center text-center bg-black text-white mx-2 rounded-2xl" >
                      Sign Up Free
                    </div>

                    {/* find out more */}
                    <div className="w-0.5 flex flex-1 justify-center items-center text-center border-black border border-solid mr-2 rounded-2xl">
                      Find Out More
                    </div>
                  </div>

                </div>

                {/* report link */}
                <div className="flex items-center h-[5%]">
                  {/* flag icon */}
                  <div className="flex justify-center items-center w-[10%]">
                    <Image
                      src={"/flag.png"}
                      alt={"flag"}
                      width={25}
                      height={25}
                    />
                  </div>

                  {/* caption */}
                  <div className="text-opacity-10 flex items-start justify-center">
                    Report ITBtree
                  </div>
                </div>
                
              </div>
            </div>
          )}  
        </div>
   </div>
  );
}
