"use server";

import { Chapter } from "./types";
import { nanoid } from "nanoid";

export async function convertUserChpaterToTasksWithAI(userTask: string) {
  return {
    title: userTask,
    id: nanoid(10),
    tasks: [
      {
        content: "Gravitational Constant",
        completed: false,
      },
      {
        content: "Banking Road",
        completed: false,
      },
    ],
  } as Chapter;
}
