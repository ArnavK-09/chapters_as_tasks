"use client";

import { Chapter, ChapterTask, UserData } from "@/app/types";
import { Button } from "pixel-retroui";

export default function ChapterTaskStatus({
  completed,
  content,
  chapterId,
  refreshData,
}: {
  completed: boolean;
  content: string;
  chapterId: string;
  refreshData: () => void;
}) {
  const completeTask = () => {
    const userData = JSON.parse(localStorage.getItem("userData")!) as UserData;
    const chapter = userData.userChapters.findLast(
      (x) => x.id == chapterId,
    ) as Chapter;
    const task = chapter!.tasks.findLast(
      (x) => x.content === content,
    ) as ChapterTask;

    task.completed = true;

    chapter.tasks = chapter.tasks.filter((x) => x.content !== content);
    chapter.tasks.push(task);
    userData.userChapters = userData.userChapters.filter(
      (x) => x.id !== chapterId,
    );
    userData.userChapters.push(chapter);
    localStorage.setItem("userData", JSON.stringify(userData));
    refreshData();
  };

  const unCompleteTask = () => {
    const userData = JSON.parse(localStorage.getItem("userData")!) as UserData;
    const chapter = userData.userChapters.findLast(
      (x) => x.id == chapterId,
    ) as Chapter;
    const task = chapter!.tasks.findLast(
      (x) => x.content === content,
    ) as ChapterTask;

    task.completed = false;

    chapter.tasks = chapter.tasks.filter((x) => x.content !== content);
    chapter.tasks.push(task);
    userData.userChapters = userData.userChapters.filter(
      (x) => x.id !== chapterId,
    );
    userData.userChapters.push(chapter);
    localStorage.setItem("userData", JSON.stringify(userData));
    refreshData();
  };

  return (
    <>
      {completed && (
        <Button
          onClick={unCompleteTask}
          bg="#FEE70C"
          className="aspect-square px-2"
        >
          ✔
        </Button>
      )}
      {!completed && (
        <Button
          bg="#57F287"
          onClick={completeTask}
          className="aspect-square px-2"
        >
          ✔
        </Button>
      )}
    </>
  );
}
