"use client";

import { Card } from "pixel-retroui";

export default function Divider() {
  return (
    <div className="px-10 w-screen overflow-x-hidden grid place-items-center">
      <Card
        bg="black"
        borderColor="black"
        shadowColor="black"
        className="h-0 w-[80%] overflow-x-hidden my-20 opacity-100"
      >
        {" "}
      </Card>
    </div>
  );
}
