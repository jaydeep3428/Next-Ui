import { Checkbox } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
import { PlusIcon } from "./PlusIcon";

export default function checkbox() {
  return (
    <div className="h-screen bg-black text-white">
      <h1 className="text-center text-3xl">Check-Boxes</h1>
      <div className="p-5">
        <Checkbox defaultSelected>Option</Checkbox>
      </div>
      <div className="p-5">
        <h1 className="text-3xl">Size, Color, Radius</h1>
        <br />
        <div className="flex gap-4">
          <Checkbox defaultSelected size="sm" color="default" radius="full">
            Default
          </Checkbox>
          <Checkbox defaultSelected size="md" color="primary" radius="lg">
            Primary
          </Checkbox>
          <Checkbox defaultSelected size="lg" color="secondary" radius="md">
            Secondary
          </Checkbox>
          <Checkbox defaultSelected size="sm" color="success" radius="sm">
            Success
          </Checkbox>
          <Checkbox defaultSelected size="md" color="warning" radius="none">
            Warning
          </Checkbox>
          <Checkbox defaultSelected size="lg" color="danger">
            Danger
          </Checkbox>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-3xl">Indeterminate And Linethrough</h1>
        <br />
        <div className="flex gap-5">
          <Checkbox isIndeterminate>Option</Checkbox>
          <Checkbox defaultSelected lineThrough>
            Option
          </Checkbox>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-3xl">Costum Check Icon</h1>
        <br />
        <div className="flex gap-5">
          <Checkbox defaultSelected icon={<HeartIcon />} color="danger">
            Option
          </Checkbox>
          <Checkbox defaultSelected icon={<PlusIcon />} color="warning">
            Option
          </Checkbox>
        </div>
      </div>
    </div>
  );
}
