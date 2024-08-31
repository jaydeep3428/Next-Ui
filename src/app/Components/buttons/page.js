import { Button } from "@nextui-org/react";
import { CameraIcon } from "./CameraIcon";
import { UserIcon } from "./UserIcon";
import { HeartIcon } from "./HeartIcon";

export default function buttons() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl">Buttons</h1>
      </div>
      <br />
      <div className="px-2 w-full">
        <h1 className="text-3xl">Color And Size</h1>
        <br />
        <div className="flex items-center p-3 gap-3">
          <Button color="danger" size="sm">
            Click Me!
          </Button>
          <Button color="secondary" size="md">
            Click Me!
          </Button>
          <Button color="warning" size="lg">
            Click Me!
          </Button>
          <Button size="sm">Click Me!</Button>
          <Button color="primary" size="md">
            Click Me!
          </Button>
          <Button color="success" size="lg">
            Click Me!
          </Button>
        </div>
      </div>
      <br />
      <div className="px-2 w-full">
        <h1 className="text-3xl">Varients</h1>
        <br />
        <div className="flex items-center p-3 gap-3">
          <Button color="danger" size="md" variant="solid">
            Solid
          </Button>
          <Button color="secondary" size="md" variant="faded">
            Faded
          </Button>
          <Button color="warning" size="md" variant="bordered">
            Bordered
          </Button>
          <Button size="md" variant="light">
            Light
          </Button>
          <Button color="primary" size="md" variant="flat">
            Flat
          </Button>
          <Button color="success" size="md" variant="ghost">
            Ghost
          </Button>
          <Button color="danger" size="md" variant="shadow">
            Shadow
          </Button>
        </div>
      </div>
      <br />
      <div className="px-2 w-full">
        <h1 className="text-3xl">Loading Button</h1>
        <br />
        <div className="p-3">
          <Button
            isLoading
            color="secondary"
            size="md"
            spinner={
              <svg
                className="animate-spin h-5 w-5 text-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            }
          >
            Loading
          </Button>
        </div>
      </div>
      <br />
      <div className="w-full px-2">
        <h1 className="text-3xl">Button With Icon</h1>
        <br />
        <div className="flex p-3 gap-3">
          <Button color="warning" size="lg" endContent={<CameraIcon />}>
            Take a Photo
          </Button>
          <Button
            color="danger"
            variant="bordered"
            size="lg"
            startContent={<UserIcon />}
          >
            Delete User
          </Button>
        </div>
      </div>
      <br />
      <div className="px-2 w-full">
        <h1 className="text-3xl">Icon Only</h1>
        <br />
        <div className="flex p-3 gap-3">
          <Button isIconOnly color="danger" aria-label="Like">
            <HeartIcon />
          </Button>
          <Button
            isIconOnly
            color="warning"
            variant="faded"
            aria-label="Take a photo"
          >
            <CameraIcon />
          </Button>
        </div>
      </div>
      <br />
      <div className="px-2 w-full">
        <h1 className="text-3xl">Custom Style</h1>
        <br />
        <div>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Button
          </Button>
        </div>
      </div>
    </div>
  );
}
