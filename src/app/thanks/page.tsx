import { getSponsors } from "lib/get-sponsors";
import classNames from "clsx";
import Link from "next/link";

export const revalidate = 3600; // 3600 seconds = 1 hour

export default async function App() {
  const tiers = await getSponsors();

  return (
    <>
      <h1 className="text-3xl font-bold capitalize md:text-4xl">Sponsors</h1>

      <p className="mt-2 font-normal text-secondary-light">
        A list of{" "}
        <span className="bg-gradient-to-tr bg-clip-text text-transparent from-[#1150d4] to-[#a245fc]">
          active
        </span>{" "}
        and inactive sponsors. Please contact me to get customized perks on this page.
      </p>

      <Link
        href="https://github.com/sponsors/Dev-CasperTheGhost"
        target="_blank"
        className="flex mt-3 w-fit items-center gap-2 rounded-md transition-colors py-2 px-3 border border-secondary-light/50 text-secondary hover:border-secondary focus:border-secondary group"
      >
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className="fill-[#d25e9c] group-hover:scale-125 transition-transform duration-200"
        >
          <path
            fillRule="evenodd"
            d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"
          />
        </svg>
        Become a sponsor
      </Link>

      {tiers.map((tier) => {
        return (
          <section className="my-5" key={tier.tier}>
            <h2 className="text-2xl font-bold">${tier.tier}</h2>

            <ul className="mt-2 flex flex-col bg-white border border-secondary-light/50 rounded-md overflow-hidden">
              {tier.sponsors.map((sponsor) => {
                console.log(sponsor);

                return (
                  <li
                    key={sponsor.login}
                    className={classNames("border-b last:border-none border-secondary-light/50", {
                      "z-10 p-[3px] bg-gradient-to-tr from-[#1150d4] to-[#a245fc]":
                        sponsor.isActive,
                    })}
                  >
                    <a
                      className="flex gap-5 items-center z-20 bg-white p-3 rounded-sm"
                      href={`https://github.com/${sponsor.login}`}
                    >
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        width={40}
                        height={40}
                        src={sponsor.avatarUrl}
                        alt={sponsor.login}
                      />

                      <div>
                        <h3 className="text-lg font-medium">{sponsor.name || sponsor.login}</h3>
                        <p>{sponsor.bio}</p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </>
  );
}
