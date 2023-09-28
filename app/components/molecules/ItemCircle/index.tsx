interface ItemCircleProps {
  value: number;
}

function ItemCircle({ value }: ItemCircleProps) {
  return (
    <div className="w-[80px] h-[80px] bg-[#E7E7E7] rounded-full flex justify-center items-center transition-colors hover:bg-[#82D675] text-[#676767] hover:text-white cursor-default">
      <h2 className="text-[30px]">{value}</h2>
    </div>
  );
}

export default ItemCircle;
