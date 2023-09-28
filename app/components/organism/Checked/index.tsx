import { magicNumber } from "@/app/constants";
import { useDispatch, useSelector } from "@/lib/redux";
import { handleResetGame } from "@/lib/redux/slices/gameSlice/gameSlice";
import { handlePage } from "@/lib/redux/slices/pageSlice/pageSlice";
import classNames from "classnames";
import { Button } from "../../atoms";
import { selectGame } from "@/lib/redux/slices/gameSlice";


function CheckedPage() {
  const { results, checkedNumber } = useSelector(selectGame);

  const dispatch = useDispatch();

  const handlePilih = (idx: number) => {
    const temp = [...magicNumber];
    const result = temp[idx].includes(results[idx]);
    return result;
  };

  const handleBack = () => {
    dispatch(handleResetGame());
    dispatch(handlePage("game"));
  };

  return (
    <>
      <main className="overflow-y-auto flex-1 text-slate-700">
        <span>Angka yang anda pilih adalah {checkedNumber}</span>
        <div className="mt-2 flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div className="bg-[#82D675] w-[35px] h-[35px] rounded-full" />
            <span>Pilihan yang benar</span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-red-500 w-[35px] h-[35px] rounded-full" />
            <span>Yang seharusnya dipilih</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-5">
          {magicNumber.map((el, i) => (
            <div key={i}>
              <span>
                #{i + 1}{" "}
                {handlePilih(i) ? (
                  <span
                    className={classNames({
                      ["text-[#82D675]"]: true,
                      ["text-red-500"]:
                        el.includes(results[i]) && !el.includes(checkedNumber),
                    })}
                  >
                    (Dipilih)
                  </span>
                ) : (
                  ""
                )}
              </span>
              <div className="flex flex-wrap gap-3">
                {el.map((el2, i2) => (
                  <div
                    key={i2}
                    className={classNames(
                      "w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#676767] cursor-default",
                      {
                        ["bg-red-500 text-white"]:
                          magicNumber[i][i2] == checkedNumber &&
                          !handlePilih(i),
                        ["bg-[#E7E7E7]"]: magicNumber[i][i2] != checkedNumber,
                        ["bg-[#82D675] text-white"]:
                          magicNumber[i][i2] == checkedNumber && handlePilih(i),
                      }
                    )}
                  >
                    <h2 className="text-[20px]">{el2}</h2>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="min-h-[150px]" />

      <footer className="mb-12 flex-shrink-0 fixed bottom-0 w-full max-w-[425px] pe-6">
        <Button icon="back" variant="pink" onClick={handleBack}>
          Kembali
        </Button>
      </footer>
    </>
  );
}

export default CheckedPage;
