import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";
import { BackpackItem } from "types/backpack-item";

export function MyBackpackSection({ myBackpack }: { myBackpack: BackpackItem[] }) {
  return (
    <section className="mx-auto max-w-layout py-20 mt-20" id="skills">
      <header className="mb-24">
        <h2 className="section-title">My Backpack</h2>

        <p className="max-w-xl mt-4 mb-6 text-secondary-light">
          <span className="mr-2">
            I have compiled a list of my top skills below. {"I'm"} also open to exploring new
            frontend technologies and techniques to expand my skillset.
          </span>
          <Link
            className="underline inline-flex items-center gap-2 group transition-colors hover:text-neutral-800"
            href="/about/stack"
          >
            View entire stack
            <ArrowRight className="group-hover:fill-neutral-800 transition-colors" />
          </Link>
        </p>

        <div aria-hidden className="max-w-[200px] w-full bg-accent rounded-md h-[2px]" />
      </header>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-5xl">
        {myBackpack.map((backpackItem) => {
          const list = backpackItem.list.split("\n").filter(Boolean);

          return (
            <div key={backpackItem.header} className="flex flex-col my-3 sm:my-0">
              <header className="mb-4">
                <h3 className="text-2xl font-semibold">{backpackItem.header}</h3>
              </header>

              <ul>
                {list.map((item) => (
                  <li className="my-1" key={item}>
                    <p className="text-secondary-light">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
