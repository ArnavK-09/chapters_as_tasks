"use client";

import { UserData, UserDummyData } from "@/app/types";
import ChapterBoard from "@/components/ChapterBoard";
import { useEffect, useState } from "react";

export default function ListedChapters() {
  const [userData, setUserData] = useState<UserData>(UserDummyData);
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")!.toString()));
  }, []);

  const refreshData = () => {
    setUserData(JSON.parse(localStorage.getItem("userData")!.toString()));
  };
  return (
    <>
      <div className="w-[90%] block mx-auto text-center">
        <div>
          <h1 className="my-14 text-3xl underline md:text-6xl tracking-wide font-bold">
            Your Study{" "}
            <strong className="text-black bg-yellow-500">Roadmap</strong>!
          </h1>
        </div>
        <div className="grid gap-12 place-items-center mx-auto">
          {userData.userChapters
            .sort((x, y) =>
              x.title!.toString().localeCompare(y.title!.toString()),
            )
            .map((chapter) => (
              <ChapterBoard
                key={chapter.id}
                data={chapter}
                refreshData={refreshData}
              />
            ))}
        </div>
      </div>
    </>
  );
}
