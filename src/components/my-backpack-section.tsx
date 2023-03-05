import { BackpackItem } from "types/backpack-item";

export function MyBackpackSection({ myBackpack }: { myBackpack: BackpackItem[] }) {
  return (
    <section id="skills">
      <h2 className="section-title">My Backpack</h2>

      <p className="my-4 text-secondary-light">
        I have compiled a list of my top skills below. {"I'm"} also open to exploring new frontend
        technologies and techniques to expand my backpack.
      </p>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
        {myBackpack.map((backpackItem) => {
          const list = backpackItem.list.split("\n").filter(Boolean);

          return (
            <div key={backpackItem.header} className="flex flex-col my-3 sm:my-0">
              <header className="mb-1">
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
