function CoreCard(props) {
  return props.data.map((item, index) => (
    <div
      key={index}
      className="w-[270px] h-[360px] border-[0.9px] rounded-[13.5px] bg-[#202020] text-white shadow-md flex flex-col items-center justify-center"
    >
      <div className="w-[152.1px] flex flex-col  justify-between gap-[11.7px]">
      <div className="w-[152.1px] h-33px text-[#F6A11F] text-[27.9px] font-semibold text-center leading-none tracking-normal">
        {item.title}
      </div>
      <div className="w-[152.1px] h-[126px] text-[18px] font-normal text-center leading-5.5 tracking-normal">
        {item.content}
      </div>
      </div>
    </div>
  ));
}

export default CoreCard;
