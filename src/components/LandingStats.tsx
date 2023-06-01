import Image from 'next/image'
const stats = [
    { id: 1, name: '2021 Median Pay', value: '$109,020 per year' },
    { id: 2, name: 'Hourly Rate', value: '$52.41' },
    { id: 3, name: 'Typical Entry-Level Education', value: 'Bachelor\'s degree' },
    { id: 4, name: 'Number of Jobs, 2021', value: '1,622,200' },
    { id: 5, name: 'Job Outlook, 2021-31', value: '25% (Much faster than average)' },
    { id: 6, name: 'Employment Change, 2021-31', value: '411,400' },
]

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
        alt=""
        layout="fill"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-base font-semibold leading-8 text-indigo-400">Quick Facts</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Software Developer Job Outlook and Statistics
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            The field of Software Development and Computer Science offers promising prospects. With a median pay well above the average, it is a high-demand occupation, with substantial job growth projected for 2021-2031. A Bachelor&apos;s degree is typically the minimum entry-level education.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className="text-sm leading-6">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
