"use server";

import { Chapter } from "./types";
import { nanoid } from "nanoid";
import OpenAI from "openai";

const PROMPT = `You are a friendly and helpful instructional teacher helping students plan a lesson or chapter to study. Your task is to divide chapter specified by student into parts ranging from 10-15 parts and respond with a title for tasks group in single line. The response should be in valid JSON format and follow type mentioned below:-
type ChapterExpectedData = {
title: string;
tasks: string[];
}
where title should be appropriate title for the chapter mentioned by student in short, ranging 1-5 words. Tasks should be list of strings (10-15) that contains parts of chapter mentioned by student as todos.
make sure to respond with authentic data and also keep in mind with student's demands. JUST RESPOND WITH JSON DATA AND NOTHING ELSE...
and tasks should be accurate enough and divided nicely that makes the work welll....
ps - DONT INCLUDE BACKTICS IN RESPONSE , JUST RAW VALID JSON!!!

# Chapter mentioned by student: {{chapter_name}}`;

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

async function contactLLM(chapterName: string): Promise<ChapterExpectedData> {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: PROMPT.replace("{{chapter_name}}", chapterName),
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]);
    return JSON.parse(
      completion.choices[0].message.content!,
    ) as ChapterExpectedData;
  } catch (e) {
    console.log(e);
    return { title: "Error From Backed!!!", tasks: [] };
  }
}

type ChapterExpectedData = {
  title: string;
  tasks: string[];
};

export async function convertUserChpaterToTasksWithAI(userTask: string) {
  const aiData = await contactLLM(userTask);

  const data = {
    title: aiData.title,
    id: nanoid(10),
    tasks: [],
  } as Chapter;

  aiData.tasks.forEach((x) =>
    data.tasks.push({
      content: x,
      completed: false,
    }),
  );

  return data;
}
