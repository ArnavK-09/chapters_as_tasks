"use client";

import { Input } from "pixel-retroui";
import Loading from "@/components/Loading";
import { convertUserChpaterToTasksWithAI } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserDummyData, type Chapter, type UserData } from "@/app/types";

export const resetUserLocalStorage = () => {
  localStorage.setItem("userData", JSON.stringify(UserDummyData as UserData));
};

export default function Hero() {
  const router = useRouter();
  const [userEnteredChapter, setUserEnteredChapter] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      resetUserLocalStorage();
    } else {
      try {
        JSON.parse(localStorage.getItem("userData")!);
      } catch {
        resetUserLocalStorage();
      }
    }
  }, []);

  const submitUserTask = async () => {
    if (!userEnteredChapter) return;
    const convertUserChpaterToTasks = convertUserChpaterToTasksWithAI.bind(
      null,
      userEnteredChapter,
    );
    setIsLoading(true);
    const dataResulted = (await convertUserChpaterToTasks()
      .catch((e) => {
        router.push(`/error?error=${e.toString()}`);
      })
      .finally(() => {
        setIsLoading(false);
        window.location.reload();
      })) as Chapter;

    appendChapterToUserDB(dataResulted);
  };
  const appendChapterToUserDB = (data: Chapter) => {
    const userData: UserData = JSON.parse(
      localStorage.getItem("userData")!.toString(),
    );
    userData.userChapters.push(data);
    localStorage.setItem("userData", JSON.stringify(userData));
  };
  return (
    <>
      <div className="w-auto mx-auto block">
        <h1 className="my-14 text-5xl md:text-7xl tracking-wide font-extrabold">
          Task-ify
          <br />
          Yours
          <br />
          <strong className="text-black bg-yellow-500">Chapters!</strong>
        </h1>
        <Input
          className="w-[70vw] md:py-4 text-sm md:text-2xl md:font-semibld md:[&>button]:h-full md:[&>button>img]:h-full md:[&>button>img]:w-full"
          textColor="black"
          borderColor="black"
          icon="/emojigg/neon.gif"
          placeholder="Type Educational Chapter Name To Task-ify....."
          onChange={(e) => setUserEnteredChapter(e.target.value.trim())}
          onIconClick={() => submitUserTask()}
          onKeyDown={(e) => {
            if (e.code == "Enter") {
              submitUserTask();
            }
          }}
        />
      </div>
      <Loading isLoading={isLoading} />
    </>
  );
}
