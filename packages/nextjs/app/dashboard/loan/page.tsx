"use client";

import React, { useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation";
// import RequestLoanButton from "./RequestLoanButton";
// import { A } from "@/components/layout/guide";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal";
import { Button, Input } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import SharedLayout from "~~/components/SharedLayout";

// const MAX_DURATION = 12;
// const AMOUNT_MULTIPLIER = 1000000;

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, onClose } = useDisclosure();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [amount, setAmount] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [duration, setDuration] = useState(0);

  // const handleButtonClick = () => {
  //   onOpen();
  // };

  const handleClose = () => {
    onClose();
    router.push("/loans");
  };
  const handleDurationChange = (value: number | number[]) => {
    console.log("duration value:", value);
    if (typeof value == "number") setDuration(value);
    else setDuration(value[0]);
  };

  const handleAmountChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    console.log("amount value:", event.target.value);
    setAmount(event.target.value);
  };

  return (
    <SharedLayout>
      <div className="h-full px-4 py-2">
        <div className="flex h-full p-14">
          <div className="flex w-full flex-col items-center justify-center bg-white px-20 text-black">
            <div className="w-full">
              <p className="text-4xl text-information">Desembolsa tu préstamo</p>
              <span className="text-sm text-gray-400">Confirma primero estos datos</span>
            </div>
            <div className="flex h-1/2 w-full items-center justify-center text-black">
              <div className="mr-10 flex h-full w-full flex-col justify-center gap-8">
                <p>¿CUANTO NECESITAS?</p>
                <div className="flex w-full bg-stroke-2 px-10 py-2">
                  <div className="flex w-1/4 items-center justify-center text-sm text-gray-400">min. $10</div>
                  <Input
                    type="number"
                    max={500}
                    min={10}
                    placeholder="0.0"
                    labelPlacement="outside"
                    value={amount}
                    onChange={handleAmountChange}
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-2xl font-bold text-primary">$</span>
                      </div>
                    }
                    className=" w-2/3 px-10 text-4xl"
                    style={{
                      fontSize: "30px",
                      color: "#17D071",
                      fontWeight: "bolder",
                    }}
                  />
                  <div className="flex w-1/4 items-center justify-center text-sm text-gray-400">Max. $10</div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <span>¿EN CUANTOS MESES QUIERES PAGAR?</span>
                  <Slider
                    value={duration}
                    step={0.25}
                    formatOptions={{ style: "percent" }}
                    maxValue={1}
                    minValue={0}
                    onChange={handleDurationChange}
                    marks={[
                      {
                        value: 0,
                        label: "1",
                      },
                      {
                        value: 0.25,
                        label: "3",
                      },
                      {
                        value: 0.5,
                        label: "6",
                      },
                      {
                        value: 0.75,
                        label: "9",
                      },
                      {
                        value: 1,
                        label: "12",
                      },
                    ]}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="relative right-0 flex h-132 w-2/5 flex-col items-center justify-center gap-8 bg-information-active">
                <div className="flex flex-col gap-1 text-center">
                  <p className="font-urbanist text-2xl text-white">Pago Final</p>
                  <p className="text-3xl font-bold text-white">$510</p>
                  <p className="font-urbanist text-sm text-white">Interes 2%</p>
                </div>
                <Divider className="bg-white" />
                <ul className="flex flex-col items-center justify-center">
                  <li className="font-bold text-white">Fechas de pago:</li>
                  <li className="text-white">23/7/24 - 170$ </li>
                  <li className="text-white">23/8/24 - 170$ </li>
                  <li className="text-white">23/9/24 - 170$ </li>
                </ul>
              </div>
            </div>

            {/* <Button
              radius="full"
              className="px-16 py-8"
              color="primary"
              onPress={handleButtonClick}
            >
              SOLICITAR
            </Button> */}
            {/* <RequestLoanButton amount={amount * AMOUNT_MULTIPLIER} duration={duration * MAX_DURATION} /> */}
            <Modal
              isOpen={isOpen}
              onClose={handleClose}
              className="text-black"
              classNames={{ closeButton: "text-primary font-bold text-3xl" }}
            >
              <ModalContent>
                {onClose => (
                  <>
                    <ModalHeader className="flex flex-col items-center gap-5 py-12">
                      <Image src="/images/check.svg" width={50} height={50} alt="check" />
                      <span className="text-center text-3xl text-[#1744F9]">¡Ya desembolsamos tu préstamo!</span>
                    </ModalHeader>
                    <ModalBody className="px-20 ">
                      <p className="text-center">Podrás ver el detalle asds</p>
                    </ModalBody>
                    <ModalFooter className="flex justify-center py-12">
                      <Button color="primary" onPress={onClose} className="px-8 py-6 text-black" radius="full">
                        ACEPTAR
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
};

export default page;
