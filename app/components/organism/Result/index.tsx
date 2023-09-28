import { useDispatch, useSelector } from "@/lib/redux";
import { Button } from "../../atoms";
import classNames from "classnames";
import { handleChangeChecked, handleResetGame } from "@/lib/redux/slices/gameSlice/gameSlice";
import { handlePage } from "@/lib/redux/slices/pageSlice/pageSlice";
import { selectGame } from "@/lib/redux/slices/gameSlice";

function Result() {
  const { results, checkedNumber } = useSelector(selectGame);

  const result = results.reduce((a, b) => a + b);

  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(handleResetGame());
    dispatch(handlePage("game"));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(handlePage("checked"));
  };

  return (
    <>
      <main className="overflow-y-auto flex-1 flex">
        <div className="bg-[#82D675] text-white w-full justify-center items-center flex">
          <div className="flex flex-col text-center">
            <span className="text-[30px]">Jawabannya</span>
            <span
              className={classNames({
                ["text-[100px]"]: result <= 40,
                ["text-[30px]"]: result > 40,
              })}
            >
              {result > 40 ? "tidak ada" : result}
            </span>
          </div>
        </div>
      </main>

      <div className="text-[#666] mt-3">
        <div className="mt-5 mb-3">Jawabannya salah? Masukan angkamu!</div>
        <form
          className="flex justify-between gap-3 items-stretch"
          onSubmit={handleSubmit}
        >
          <input
            className="border rounded px-3 active:outline-[#82D675] focus:outline-[#82D675]"
            placeholder="Masukan Angka..."
            value={checkedNumber || ""}
            onChange={(e) => dispatch(handleChangeChecked(e.target.value))}
          />
          <Button type="submit" variant="green" icon="check">
            Submit
          </Button>
        </form>
      </div>

      <div className="min-h-[150px]" />

      <footer className="mb-12 flex-shrink-0 fixed bottom-0 w-full max-w-[425px] pe-3">
        <Button icon="back" variant="pink" onClick={handleBack}>
          Kembali
        </Button>
      </footer>
    </>
  );
}

export default Result;
