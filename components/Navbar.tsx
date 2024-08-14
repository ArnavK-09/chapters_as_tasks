"use client";
import Image from "next/image";
import { Card, Button } from "pixel-retroui";

export default function Navbar() {
  return (
    <Card
      bg="#fff"
      textColor="black"
      borderColor="black"
      shadowColor="#fcd34d"
      className="w-[90vw] text-center fixed top-5 z-30"
    >
      <div className="w-full flex justify-between items-center">
        <Image
          className="mr-2 apect-square h-10 w-10"
          alt="logo"
          src="https://cdn3.emoji.gg/emojis/1152-pixelorangefire.gif"
          width={1000}
          height={1000}
        />
        <div>
          <Button
            bg="#fcd34d"
            textColor="black"
            shadow="black"
            borderColor="black"
            className="flex align-middle"
          >
            <Image
              unoptimized
              alt="star"
              width={24}
              height={24}
              src="https://cdn3.emoji.gg/emojis/38270-cute-bow.gif"
              className="mr-2 apect-square h-6 w-6"
            />
            Give A Star!
          </Button>
        </div>
      </div>
    </Card>
  );
}
