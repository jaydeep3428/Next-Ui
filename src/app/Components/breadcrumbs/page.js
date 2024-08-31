import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function breadcrumbs() {
  return (
    <div className="h-screen">
      <h1 className="text-center text-3xl">Breadcrumbs</h1>
      <div className="p-5">
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Music</BreadcrumbItem>
          <BreadcrumbItem>Artist</BreadcrumbItem>
          <BreadcrumbItem>Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>
      </div>
    </div>
  );
}
