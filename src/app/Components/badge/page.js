import { Avatar, Badge } from "@nextui-org/react";

export default function badge() {
  return (
    <div className="h-screen">
      <h1 className="text-center text-3xl">Badge</h1>
      <div className="p-5">
        <Badge content="5" color="primary">
          <Avatar
            radius="md"
            size="lg"
            src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
          />
        </Badge>
      </div>
      <div className="p-5">
        <h1 className="text-3xl">Size And Color</h1>
        <br />
        <div className="flex gap-3 items-center">
          <Badge content="5" size="sm" color="default">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
            />
          </Badge>
          <Badge content="5" size="md" color="primary">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </Badge>
          <Badge content="5" size="lg" color="secondary">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
            />
          </Badge>
          <Badge content="5" size="sm" color="success">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </Badge>
          <Badge content="5" size="md" color="warning">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </Badge>
          <Badge content="5" size="lg" color="danger">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          </Badge>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-3xl">Varients</h1>
        <br />
        <div className="flex gap-3 items-center">
          <Badge content="5" color="warning" variant="solid">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
            />
          </Badge>
          <Badge content="5" color="warning" variant="flat">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </Badge>
          <Badge content="5" color="warning" variant="faded">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </Badge>
          <Badge content="5" color="warning" variant="shadow">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </Badge>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-3xl">Placements</h1>
        <br />
        <div className="flex gap-4 items-center">
          <Badge content="5" color="danger" placement="top-right">
            <Avatar
              isBordered
              radius="md"
              src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
            />
          </Badge>
          <Badge content="5" color="danger" placement="bottom-right">
            <Avatar
              isBordered
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </Badge>
          <Badge content="5" color="danger" placement="top-left">
            <Avatar
              isBordered
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </Badge>
          <Badge content="5" color="danger" placement="bottom-left">
            <Avatar
              isBordered
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </Badge>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-3xl">Shapes</h1>
        <br />
        <div className="flex gap-4 items-center">
          <Badge content="5" color="danger" shape="rectangle">
            <Avatar
              isBordered
              radius="md"
              src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
            />
          </Badge>
          <Badge content="5" color="danger" shape="circle">
            <Avatar
              isBordered
              radius="full"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </Badge>
        </div>
      </div>
    </div>
  );
}
