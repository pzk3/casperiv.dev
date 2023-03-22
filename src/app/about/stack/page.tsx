import { Media } from "@ronin/casper";
import Image from "next/image";
import ronin from "ronin";
import { mergeSeo } from "lib/merge-seo";

interface StackItem {
  name: string;
  url: string;
  logo: Media;
  description: string;
}

export const revalidate = 600; // 10 minutes

const pageTitle = "Stack";
const pageDescription = "The tools and stack I use daily.";

export const metadata = mergeSeo({
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
  alternates: {
    canonical: "https://caspertheghost.me/about/stack",
  },
});

async function fetchStack() {
  const [stackItems] = await ronin<StackItem[]>(
    ({ get }) =>
      (get.stackItems = {
        limitedTo: 50,
        orderedBy: {
          ascending: ["name"],
        },
      }),
  );
  return stackItems;
}

export default async function MyStack() {
  const stackItems = await fetchStack();

  return (
    <div>
      <header className="mb-5">
        <h1 className="section-title">Stack</h1>
        <p className="font-normal text-secondary-light">{pageDescription}</p>
      </header>

      <ul className="mt-2 flex flex-col bg-white border border-secondary-light/50 rounded-md overflow-hidden">
        {stackItems.map((item) => {
          return (
            <li
              key={item.name}
              className="border-b py-1 last:border-none border-secondary-light/50"
            >
              <a
                target="_blank"
                className="flex gap-5 items-start z-20 bg-white p-3 rounded-sm"
                href={item.url}
                rel="noreferrer"
              >
                <Image
                  placeholder="blur"
                  className="w-16 h-16 rounded-lg shadow-lg shadow-gray-300"
                  width={64}
                  height={64}
                  src={item.logo.src}
                  alt={item.name}
                  blurDataURL={item.logo.placeholder.base64}
                />

                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
