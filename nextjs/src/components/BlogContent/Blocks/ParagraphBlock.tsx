import { Fragment } from "react"
import { ParagraphBlockData } from "types/blogContent";

type IComp = { data: ParagraphBlockData };
export const ParagraphBlock = ({data}: IComp) => {
  if (!data.text) return null;
  return (
    <p className="mt-4" dangerouslySetInnerHTML={{__html: data.text}}></p>
  )
}