"use client";
import React from "react";
import { Calendar } from "@nextui-org/react";
import { parseDate, getLocalTimeZone, today } from "@internationalized/date";

export default function App() {
  return (
    <div className="h-screen">
      <h1 className="text-center text-3xl">Calendar</h1>
      <div className="flex gap-x-4 p-5">
        <Calendar aria-label="Date (No Selection)" />
        <Calendar
          aria-label="Date (Uncontrolled)"
          defaultValue={parseDate("2020-02-03")}
        />
      </div>

      <div className="p-5">
        <h1 className="text-3xl">Read Only Today Date</h1>
        <br />
        <div>
          <Calendar
            aria-label="Date (Read Only)"
            value={today(getLocalTimeZone())}
            isReadOnly
          />
        </div>
      </div>
    </div>
  );
}
