import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";
import { BackpackItem } from "types/backpack-item";

const icons = [
  <svg
    key={1}
    xmlns="http://www.w3.org/2000/svg"
    width="31.904"
    height="28.125"
    viewBox="0 0 31.904 28.125"
  >
    <path
      d="M11.821,48.723,10.5,20.6H22.9L21.577,48.723Zm19.512,0L30.015,20.6H42.407L41.089,48.723Z"
      transform="translate(-10.503 -20.598)"
      fill="#6fb8ff"
      opacity="0.5"
    />
  </svg>,
  <svg
    key={2}
    xmlns="http://www.w3.org/2000/svg"
    width="14.844"
    height="35.938"
    viewBox="0 0 14.844 35.938"
  >
    <path
      d="M7.5,4.18a15.808,15.808,0,0,1-2.021-.107,12.728,12.728,0,0,1-1.494-.283l.469-4.18q.605.078,1.162.137A10.012,10.012,0,0,0,6.66-.2,2.688,2.688,0,0,0,8.77-1.152a3.063,3.063,0,0,0,.488-2.734,9.276,9.276,0,0,0-.547-1.836q-.371-.9-.693-1.846A6.053,6.053,0,0,1,7.7-9.531a3.213,3.213,0,0,1,1.563-2.812,8,8,0,0,1,4.336-1.074v-.742A7.609,7.609,0,0,1,9.258-15.3,3.573,3.573,0,0,1,7.7-18.4a5.986,5.986,0,0,1,.313-1.924q.312-.928.684-1.855a11.129,11.129,0,0,0,.566-1.865,2.57,2.57,0,0,0-.488-2.48,2.827,2.827,0,0,0-2.109-.859q-.488,0-1.045.049t-1.162.146l-.469-4.18a12.728,12.728,0,0,1,1.494-.283A15.809,15.809,0,0,1,7.5-31.758a8.466,8.466,0,0,1,3.779.811A5.429,5.429,0,0,1,13.75-28.6a5.624,5.624,0,0,1,.43,3.721,10.164,10.164,0,0,1-.557,1.963q-.381.967-.713,1.963a6.565,6.565,0,0,0-.332,2.09,1.858,1.858,0,0,0,.518,1.289,3.91,3.91,0,0,0,1.406.938,9.4,9.4,0,0,0,2.012.566,13.485,13.485,0,0,0,2.314.2v4.18a18.039,18.039,0,0,0-2.334.146,9.752,9.752,0,0,0-2,.459,3.76,3.76,0,0,0-1.4.82,1.638,1.638,0,0,0-.518,1.211,6.473,6.473,0,0,0,.332,2.041q.332,1.006.713,1.982a10.31,10.31,0,0,1,.557,1.992A6.135,6.135,0,0,1,13.75.84a5.585,5.585,0,0,1-2.471,2.48A8.064,8.064,0,0,1,7.5,4.18Z"
      transform="translate(-3.984 31.758)"
      fill="#b391d0"
      opacity="0.5"
    />
  </svg>,
  <svg
    key={3}
    xmlns="http://www.w3.org/2000/svg"
    width="19.336"
    height="18.301"
    viewBox="0 0 19.336 18.301"
  >
    <path
      d="M15.508,32.332,10.2,24.6l2.969-2.324,6.309,6.973Zm-7.578,0L3.965,29.246l6.23-7.031,2.969,2.324Zm3.2-7.187L2.051,22.723,3.672,18l8.672,3.574Zm-1.25-1.738-.664-9.375h5l-.566,9.375Zm2.461,1.836-1.211-3.574L19.785,18l1.6,4.727Z"
      transform="translate(-2.051 -14.031)"
      fill="#f97583"
      opacity="0.5"
    />
  </svg>,
];

export function MyBackpackSection({ myBackpack }: { myBackpack: BackpackItem[] }) {
  return (
    <section className="mx-auto max-w-layout py-20 my-20 px-5 xl:px-0" id="skills">
      <header className="mb-32">
        <h2 className="section-title">My Backpack</h2>

        <p className="max-w-xl mt-4 mb-6 text-secondary-light">
          <span className="mr-2">
            I have compiled a list of my top skills below. {"I'm"} also open to exploring new
            frontend technologies and techniques to expand my skillset.
          </span>
          <br />
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

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
        {myBackpack.map((backpackItem, idx) => {
          const list = backpackItem.list.split("\n").filter(Boolean);
          const icon = icons[idx];

          return (
            <div key={backpackItem.header} className="relative flex flex-col my-3 sm:my-0">
              <header className="mb-4">
                <h3 className="relative text-2xl font-semibold w-fit">
                  {backpackItem.header}
                  <span aria-hidden className="absolute -right-2 -top-3 -z-10">
                    {icon}
                  </span>
                </h3>
              </header>

              <ul className="relative">
                {list.map((item) => (
                  <li className="my-1" key={item}>
                    <p className="text-secondary-light">{item}</p>
                  </li>
                ))}
                <li className="absolute -left-1 bottom-0 -z-10" aria-hidden>
                  {icon}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
