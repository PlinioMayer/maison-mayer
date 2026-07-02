import Image from "next/image";

export const Candle = ({ flame }: { flame: 1|2 }) => (
  <div className="relative">
    <Image width={70} height={120} src={`/flame-${flame}.gif`} style={{ position: 'absolute', top: -25, left: [0, 38, 43][flame] }}/>
    <Image width={150} height={75} src="/candle.png" />
  </div>
)