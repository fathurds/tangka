"use client";

import { magicNumber } from "@/app/constants";
import { useDispatch, useSelector } from "@/lib/redux";
import { handleResult } from "@/lib/redux/slices/gameSlice/gameSlice";
import { handlePage } from "@/lib/redux/slices/pageSlice/pageSlice";
import React, { useState } from "react";
import { ItemCircle, Modal } from "../../molecules";
import { Button } from "../../atoms";
import { selectGame } from "@/lib/redux/slices/gameSlice";

export default function Game() {
  const [isOpen, setIsOpen] = useState(true);
  const { results, page } = useSelector(selectGame);

  const dispatch = useDispatch();

  const handleNext = (status: boolean) => {
    const temp = [...results];
    temp[page] = status ? magicNumber[page][0] : 0;
    dispatch(handleResult({ result: temp, status: "next" }));
    if (page === 5) {
      dispatch(handlePage("result"));
    }
  };

  const handleBack = () => {
    const temp = [...results];
    temp[page > 0 ? page - 1 : 0] = 0;
    dispatch(handleResult({ result: temp, status: "back" }));
  };

  return (
    <div className="max-w-[425px] mx-auto flex flex-col min-h-screen">

      <main className="flex flex-col items-center mb-10 flex-1 overflow-y-auto">
        <div className="flex flex-wrap gap-[10px] justify-between px-[20px] mt-5 min-h-[450px]">
          {magicNumber[page].map((el, i) => (
            <ItemCircle value={el} key={i} />
          ))}
        </div>
      </main>

      <div className="min-h-[150px]" />

      <footer className="mb-12 px-3 flex-shrink-0 fixed bottom-0 w-full max-w-[425px]">
        <div className="flex justify-around items-center mb-3 gap-3">
          <Button icon="x" variant="red" onClick={() => handleNext(false)}>
            Bukan
          </Button>
          <Button icon="check" variant="green" onClick={() => handleNext(true)}>
            Ya
          </Button>
        </div>

        <Button
          variant="pink"
          icon="back"
          onClick={handleBack}
          disabled={page < 1}
        >
          Kembali
        </Button>
      </footer>

      <Modal
        show={isOpen}
        title="Cara Bermain Tebak Angka (Tangka)"
        onClose={() => setIsOpen(false)}
        className="roboto"
      >
        <ol className="list-decimal px-4 mb-3">
          <li>Ingat 1 angka dari 1-40 di kepala</li>
          <li>Terdapat beberapa angka acak dalam layar</li>
          <li>
            Pilih <span className="bg-[#82D675] text-white px-3">Ya</span>
            jika angka tersebut ada di layar dan pilih{" "}
            <span className="bg-red-400 text-white px-3">Bukan</span> jika angka
            tersebut bukan yang di kepala
          </li>
          <li>
            Klik tombol{" "}
            <span className="bg-[#DDB2E4] px-3 text-white">Kembali</span> jika
            ingin kembali ke angka sebelumnya
          </li>
        </ol>

        <Button
          variant="blue"
          className="py-1 text-[30px] hover:scale-100"
          onClick={() => setIsOpen(false)}
        >
          Ok
        </Button>
      </Modal>
    </div>
  );
}
