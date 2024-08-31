"use client";
import { Button } from "@nextui-org/react";
import { SwitchThemes } from "./Components/SwitchThemes";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const move = (name) => {
    router.push(name);
  };
  return (
    <main className="h-screen">
      <div className="text-center">
        <h1 className="text-4xl p-2">Next UI</h1>
      </div>
      <br />
      <div className="flex justify-center items-center flex-wrap">
        <div className="p-5">
          <Button
            size="md"
            color="secondary"
            onClick={() => move("/Components/buttons")}
          >
            Buttons
          </Button>
        </div>
        <div className="p-5">
          <Button
            size="md"
            color="warning"
            onClick={() => move("/Components/avatar")}
          >
            Avatar
          </Button>
        </div>
        <div className="p-5">
          <Button
            size="md"
            color="success"
            onClick={() => move("/Components/badge")}
          >
            Badge
          </Button>
        </div>
        <div className="p-5">
          <Button size="md" onClick={() => move("/Components/breadcrumbs")}>
            Breadcrumbs
          </Button>
        </div>
        <div className="p-5">
          <Button
            size="md"
            color="primary"
            onClick={() => move("/Components/calendar")}
          >
            Calendar
          </Button>
        </div>
        <div className="p-5">
          <Button
            size="md"
            color="danger"
            onClick={() => move("/Components/checkbox")}
          >
            CheckBox
          </Button>
        </div>
        <div className="p-5">
          <Button
            size="md"
            color="secondary"
            onClick={() => move("/Components/cards")}
          >
            Cards
          </Button>
        </div>
      </div>
    </main>
  );
}
