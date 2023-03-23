export default function Badge() {
    return (
      <>
        {/* <span className="inline-flex items-center rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800">
          <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-pink-400" fill="currentColor" viewBox="0 0 8 8">
            <circle cx={4} cy={4} r={3} />
          </svg>
          Small
        </span> */}
        <span className="inline-flex items-center rounded-full bg-pink-100 px-3 py-0.5 text-sm font-medium text-pink-800">
          <svg className="-ml-1 mr-1.5 h-2 w-2 text-pink-400" fill="currentColor" viewBox="0 0 8 8">
            <circle cx={4} cy={4} r={3} />
          </svg>
          Large
        </span>
      </>
    )
  }
  