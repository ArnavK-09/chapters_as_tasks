"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Popup } from "pixel-retroui";

export default function Result() {
  const router = useRouter();
  const backToHome = () => {
    router.push("/");
  };
  router;
  const params = useSearchParams();
  return (
    <>
      <Popup
        onClose={() => backToHome()}
        isOpen={true}
        bg="#fff"
        baseBg="#ED4245"
        textColor="black"
        borderColor="black"
        className="md:px-15 px-4"
      >
        <div className="w-full md:px-16 text-center md:py-5">
          <h2 className="md:text-3xl uppercase break-words max-w-md leading-relaxed underline font-bold md:mb-6">
            Unknown Error Occured On Our Side :/
          </h2>
          <pre>{params.get("error")}</pre>
          <Button
            onClick={() => backToHome()}
            className="p-0 my-5 text-white"
            color="#fff"
            bg="#ED4245"
            shadow="#000"
          >
            <h3 className="md:text-2xl font-extrabold">Back Home</h3>
          </Button>
        </div>
      </Popup>
    </>
  );
}
