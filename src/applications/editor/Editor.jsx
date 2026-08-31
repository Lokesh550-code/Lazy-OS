import { useState } from "react"
import FooterElement from "./FooterElement"
import NavigationMenu from "./NavigationMenu"

const Editor = () => {
  const [content, setContent] = useState("");
  return (
    <div className="h-full w-full bg-[#242222] text-[#f6e7d9] font-application">
      <NavigationMenu />
      <div className="h-[calc(100%-4rem)] py-2.5 px-5">
        <textarea 
        onChange={(e) => {setContent(e.target.value)}}
        autoFocus
        className="h-full w-full resize-none focus:outline-0" value={content}></textarea>
      </div>
      <FooterElement content={content} />
    </div>
  )
}

export default Editor