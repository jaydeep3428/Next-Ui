import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function avatar() {
  return (
    <div className="h-full">
      <div className="text-center text-3xl">
        <h1>Avatar</h1>
      </div>
      <div className="flex gap-3 items-center p-5">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar name="Junior" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar name="Jane" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar name="Joe" />
      </div>
      <br />
      <div className="p-5">
        <h1 className="text-3xl">Size</h1>
        <div className="flex gap-4 items-center">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            className="w-6 h-6 text-tiny"
          />
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            size="sm"
          />
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            size="md"
          />
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            size="lg"
          />
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-20 h-20 text-large"
          />
        </div>
      </div>
      <br />
      <div className="p-5">
        <h1 className="text-3xl">Border Radius And Color</h1>
        <br />
        <div className="flex gap-4 items-center">
          <Avatar
            isBordered
            color="default"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
          <Avatar
            isBordered
            color="primary"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
          <Avatar
            isBordered
            color="secondary"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <Avatar
            isBordered
            color="success"
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          />
          <Avatar
            isBordered
            color="warning"
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
          <Avatar
            isBordered
            color="danger"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
        </div>
      </div>
      <br />
      <div className="p-5">
        <h1 className="text-3xl">Radius</h1>
        <br />
        <div className="flex gap-4 items-center">
          <Avatar
            isBordered
            radius="full"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
          <Avatar
            isBordered
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          />
          <Avatar
            isBordered
            radius="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <Avatar
            isBordered
            radius="sm"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
        </div>
      </div>
      <br />
      <div className="p-5">
        <h1 className="text-3xl">Avatar Group</h1>
        <br />
        <AvatarGroup isBordered>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
      </div>
      <br />
      <div className="p-5">
        <h1 className="text-3xl">Avatar Group Max/Total Count</h1>
        <br />
        <AvatarGroup isBordered max={5} total={10}>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
      </div>
      <br />
      <div className="p-5">
        <h1 className="text-3xl">Avatar Group Grid</h1>
        <br />
        <AvatarGroup isBordered isGrid max={7}>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/300?u=a042581f4f29026707d" />
          <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026710d" />
          <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026712d" />
        </AvatarGroup>
      </div>
    </div>
  );
}
