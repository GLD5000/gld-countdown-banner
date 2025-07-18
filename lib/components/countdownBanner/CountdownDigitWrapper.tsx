import CountdownDigits from "./CountdownDigits";

export default function CountdownDigitWrapper({
  time = { days: 0, hours: 0, minutes:0, seconds:0 },
}: {
  time?: Record<string, number>;
}) {
  const digits = Object.entries(time).map((entry, index) => {
    const [name, value] = entry;
    return <CountdownDigits key={`${index}digits`} value={value} name={name} />;
  });

  return <div className="flex flex-wrap w-full max-w-fit gap-2">{digits}</div>;
}
