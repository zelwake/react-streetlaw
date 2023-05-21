import { numberStatistics } from '@/data/landingStats'

const Panel = ({ value, text }: { value: number; text: string }) => {
  return (
    <li className="flex flex-col items-center gap-2 mb-6 last:mb-0">
      <p className="w-full sm:w-40 shadow-sl bg-streetlaw-500 text-white text-center text-4xl font-bold py-3">
        {value}
      </p>
      <p className="w-full sm:w-40 shadow-sl text-xl py-4 px-4 text-center">{text}</p>
    </li>
  )
}

const Statistics = () => {
  return (
    <ul className="sm:flex sm:gap-10">
      {numberStatistics.map((e, i) => (
        <Panel key={i} {...e} />
      ))}
    </ul>
  )
}

export default Statistics
