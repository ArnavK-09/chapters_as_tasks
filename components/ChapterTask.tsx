"use client";

import { ChapterTask } from "@/app/types";
import { Card } from "pixel-retroui";
import ChapterTaskStatus from "./ChapterTaskStatus";

export default function ChapterItem({
  data,
  chapterId,
  refreshData,
}: {
  data: ChapterTask;
  chapterId: string;
  refreshData: () => void;
}) {
  return (
    <Card className="md:grid md:grid-flow-col md:grid-cols-8 px-2 md:px-5">
      <div className="col-span-1 w-full grid place-items-center">
        <ChapterTaskStatus
          refreshData={refreshData}
          chapterId={chapterId}
          completed={data.completed}
          content={data.content}
        />
      </div>
      <div className="col-span-7 mt-4 md:mt-0 w-full grid place-items-center">
        {data.content}
      </div>
    </Card>
  );
}
