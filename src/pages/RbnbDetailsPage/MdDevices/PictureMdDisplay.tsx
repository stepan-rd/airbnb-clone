type Props = {};

export function PictureMdDisplay({}: Props) {
  return (
    <div className="min-h-screen" style={{ marginTop: "83px" }}>
      <div className="relative overflow-y-hidden">
        <img src="https://placehold.co/600x400" className="w-full" alt="" />
        <button className="absolute left-0 text-lg font-semibold top-1/2">{"<"}</button>
        <button className="absolute right-0 text-lg font-semibold top-1/2">{">"}</button>
      </div>
    </div>
  );
}
