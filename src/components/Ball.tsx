export function Ball({
  number,
  classy,
  ...rest
}: {
  number: number;
  classy: string;
}) {
  return (
    <div
      className={`rounded-full bg-white ${classy} font-montserrat font-bold text-lg `}
      {...rest}
    >
      {number}
    </div>
  );
}
