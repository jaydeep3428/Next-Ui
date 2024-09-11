import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FormList() {
  const [list, setList] = useState([]);
  console.log(list);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchList = async () => {
      const data = await fetch(`${BASE_URL}/api/formlist`);
      const result = await data.json();
      setList(result.result);
    };
    fetchList();
  }, [BASE_URL]);
  return (
    <main className="overflow-auto">
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 lg:p-10">
        <div className="rounded-sm border border-stone-300 bg-white px-3 sm:px-8 py-6 shadow-default">
          <h1 className="mb-6 text-center font-bold text-2xl text-primary-500">
            Inquiry List
          </h1>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {list.map((e) => (
              <div key={e.id}>
                <Card className="py-4">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col gap-3 items-start">
                    <h4 className="font-bold uppercase text-large">{e.name}</h4>
                    <small className="text-default-500">{e.no}</small>
                    <p className="text-tiny font-bold">{e.title}</p>
                    <p className="text-tiny font-bold">{e.description}</p>
                    <p className="text-tiny font-bold">{e.date}</p>
                    <p className="text-tiny font-bold">{e.gender}</p>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="image not found"
                      src={e.image}
                      width={300}
                      height={200}
                      className="w-full h-72 object-cover rounded-xl"
                    >
                      {e.selectedImage}
                    </Image>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
