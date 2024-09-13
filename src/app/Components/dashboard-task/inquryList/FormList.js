import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";

export default function FormList() {
  const [list, setList] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openUpdateModal = () => setIsUpdateModalOpen(true);
  const closeUpdateModal = () => setIsUpdateModalOpen(false);

  const openDeleteModal = (id) => {
    setDeleteId(id); // Set the delete ID
    setIsDeleteModalOpen(true); // Open the modal
  };
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  // Fetch data from API
  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await fetch(`${BASE_URL}/api/formlist`);
        const result = await data.json();
        setList(result.result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false); // Set loading to false when data is fetched
      }
    };
    fetchList();
  }, [BASE_URL]);

  // Delete function
  const deleteItem = async (id) => {
    const dataId = list.find((item) => item._id === id);

    try {
      const response = await fetch(`${BASE_URL}/api/formlist/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setList(list.filter((item) => item._id !== id));
        closeDeleteModal();
        toast.error("Task Deleted.");
      }
    } catch (error) {
      console.error("Failed to delete data:", error);
    }
  };

  return (
    <main className="overflow-auto">
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 lg:p-10">
        <div className="rounded-sm border border-stone-300 bg-white px-3 sm:px-8 py-6 shadow-default">
          <h1 className="mb-6 text-center font-bold text-2xl text-primary-500">
            Inquiry List
          </h1>

          {/* Show "No Data Available" if no list items and not loading */}
          {list.length === 0 && !isLoading && (
            <div className="text-center text-lg bg-slate-200 text-default-400 rounded-md py-72">
              <p>No Data Available</p>
            </div>
          )}

          {/* Show Skeleton while loading */}
          {isLoading ? (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="rounded-lg">
                  <Card className="border-none">
                    <CardHeader className="pb-0 pt-4 px-4 flex-col gap-2 items-start">
                      <Skeleton className="rounded-lg h-6 w-full" />
                      <Skeleton className="rounded-lg h-4 w-3/4" />
                      <Skeleton className="rounded-lg h-4 w-1/2" />
                      <Skeleton className="rounded-lg h-4 w-1/2" />
                    </CardHeader>
                    <CardBody>
                      <Skeleton className="w-full h-64 rounded-lg" />
                      <Skeleton className="rounded-lg mt-4 h-6 w-full" />
                    </CardBody>
                    <CardFooter>
                      <Skeleton className="w-full rounded-lg" />
                      <Skeleton className="rounded-lg h-6 w-full" />
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {list.map((e) => (
                <div key={e.id}>
                  <Card isFooterBlurred radius="lg" className="border-none">
                    <CardHeader className="pb-0 pt-4 px-4 flex-col gap-2 items-start">
                      <h4 className="font-bold uppercase text-tiny break-all">
                        {e.name}
                      </h4>
                      <small className="text-default-500">{e.no}</small>
                      <p className="text-large font-bold">{e.title}</p>
                      <p className="text-tiny font-bold break-all">
                        {e.description}
                      </p>
                    </CardHeader>
                    <div className="px-4 my-2 flex justify-center">
                      <Image
                        alt="Uploaded Image"
                        className="w-full h-64 object-cover rounded-lg"
                        height={200}
                        src={e.image}
                        width={200}
                      />
                      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-32 w-4/5 shadow-small z-10">
                        <p className="text-tiny text-white/80 break-all">
                          {e.skills}
                        </p>
                        <Button
                          className="text-tiny text-white bg-black/20"
                          variant="flat"
                          color="default"
                          radius="lg"
                          size="sm"
                        >
                          {e.city}
                        </Button>
                      </CardFooter>
                    </div>
                    <CardBody className="px-4">
                      <div className="flex justify-between py-2">
                        <p className="text-tiny font-bold">{e.date}</p>
                        <p className="text-tiny font-bold">{e.gender}</p>
                      </div>
                      <div className="py-2 pr-1">
                        <div className="w-full flex justify-end gap-5">
                          <Button onPress={openUpdateModal} color="primary">
                            Update
                          </Button>
                          <Modal
                            isOpen={isUpdateModalOpen}
                            onOpenChange={closeUpdateModal}
                            className="text-default-700"
                          >
                            <ModalContent>
                              {(onClose) => (
                                <>
                                  <ModalHeader className="flex flex-col gap-1">
                                    Edit Inquiry Form Data
                                  </ModalHeader>
                                  <ModalBody>
                                    <form>
                                      <div>
                                        <div>
                                          <Input type="text" label="name" />
                                        </div>
                                      </div>
                                    </form>
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button
                                      color="danger"
                                      variant="light"
                                      onPress={onClose}
                                    >
                                      Cancel
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                      Update
                                    </Button>
                                  </ModalFooter>
                                </>
                              )}
                            </ModalContent>
                          </Modal>
                          <Button
                            onPress={() => openDeleteModal(e._id)}
                            color="danger"
                          >
                            Delete
                          </Button>
                          <Modal
                            isOpen={isDeleteModalOpen}
                            onOpenChange={closeDeleteModal}
                            className="text-default-700"
                          >
                            <ModalContent>
                              {(onClose) => (
                                <>
                                  <ModalHeader className="flex flex-col gap-1">
                                    DELETE MENU
                                  </ModalHeader>
                                  <ModalBody>
                                    ARE YOU SURE! YOU WANT TO DELETE IT!
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button
                                      color="primary"
                                      variant="light"
                                      onPress={onClose}
                                    >
                                      Cancel
                                    </Button>
                                    <Button
                                      color="danger"
                                      onPress={() => deleteItem(deleteId)}
                                    >
                                      Delete
                                    </Button>
                                  </ModalFooter>
                                </>
                              )}
                            </ModalContent>
                          </Modal>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
