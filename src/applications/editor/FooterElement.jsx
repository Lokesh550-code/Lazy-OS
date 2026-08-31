const FooterElement = ({ content }) => {
  return (
    <div className="h-8 w-full bg-[#4a4a4a] flex items-center justify-between px-5">
      <p>ln {content.split("\n").length}</p>
      <p>{content ? content.length : 0} chars</p>
    </div>
  );
};

export default FooterElement;
