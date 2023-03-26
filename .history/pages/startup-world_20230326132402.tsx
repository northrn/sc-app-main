import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const featuredPost = {
    id: 1,
    title: 'We’re incredibly proud to announce we have secured $75m in Series B',
    href: '#',
    description:
      'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }
  const posts = [
    {
      id: 2,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Lindsay Walton',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]

export default function StartupWorld() {
  return (
    <div className="px-6 max-w-7xl">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a href="#" className="flex items-center text-sm font-medium text-white hover:text-gray-700">
            <ChevronLeftIcon className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a href="#" className="text-sm font-medium text-white hover:text-gray-700">
                  Home
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
                <a href="#" className="ml-4 text-sm font-medium text-white hover:text-gray-700">
                  Week 1
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
                <a href="#" aria-current="page" className="ml-4 text-sm font-medium text-white hover:text-blue-500">
                  Report
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                Report #1
            </h2>
            </div>
        </div>
        <div className="my-6 md:flex md:items-center md:justify-between">
            <div className="border-cyan-300 border-4 min-h-max max-w-md"></div>
            <p className="py-2 font-sans text-white text-justify md: pl-6">Donec sollicitudin nec neque vel suscipit. Donec elit neque, porta sed leo nec, accumsan porta leo. Suspendisse imperdiet erat a ante ornare, quis lacinia eros lobortis. Vivamus dignissim malesuada vulputate. Mauris quis sapien eget lacus venenatis bibendum. Integer nec massa gravida, bibendum enim vitae, commodo elit. Praesent vitae laoreet lacus. Nulla viverra tincidunt ornare. Maecenas nec dolor fringilla neque malesuada mollis a at magna. Cras augue nibh, pharetra ac augue non, interdum tristique nisi. Aliquam tincidunt porttitor euismod. Mauris a blandit metus. Donec mattis facilisis neque at luctus.</p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
        <time dateTime={featuredPost.datetime} className="block text-sm leading-6 text-white">
            {featuredPost.date}
        </time>
        <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {featuredPost.title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-white">{featuredPost.description}</p>
        <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
            <a
                href={featuredPost.href}
                className="text-sm font-semibold leading-6 text-cyan-200"
                aria-describedby="featured-post"
            >
                Continue reading <span aria-hidden="true">&rarr;</span>
            </a>
            </div>
            <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
            <a
                href={featuredPost.author.href}
                className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
            >
                <img src={featuredPost.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-50" />
                {featuredPost.author.name}
            </a>
            </div>
        </div>
        </article>
        <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
        <div className="-my-12 divide-y divide-gray-900/10">
            {posts.map((post) => (
            <article key={post.id} className="py-12">
                <div className="group relative max-w-xl">
                <time dateTime={post.datetime} className="block text-sm leading-6 text-gray-600">
                    {post.date}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                    </a>
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="mt-4 flex">
                <a
                    href={post.author.href}
                    className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                >
                    <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-50" />
                    {post.author.name}
                </a>
                </div>
            </article>
            ))}
        </div>
        </div>
    </div>
    </div>
  )
}
