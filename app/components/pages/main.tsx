"use client"
import { useSelector } from "@/lib/redux";
import { CheckedPage, Game, Result } from "../organism";
import { selectPage } from "@/lib/redux/slices/pageSlice";

export default function Main() {
  const { page } = useSelector(selectPage);

  return (
    <>
      {page === "game" && <Game />}
      {page === "result" && <Result />}
      {page === "checked" && <CheckedPage />}
    </>
  )
}