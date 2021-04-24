---
title: useSearch React hook
intro: easily search through an array with this hook.
created_at: April 17, 2021
updated_at: April 24, 2021
keywords: use-search, search arrays, useSearch, react hooks
---

## The hook

easily search through an array with this hook. With great TypeScript support.

```tsx
import * as React from "react";

export function useSearch<T = object>(key: keyof T, items: T[]) {
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState<T[]>(items);

  // if the 'items' change, make sure we update our state.
  React.useEffect(() => {
    setFiltered(items);
  }, [items]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);

    // if there's no hits found, set filtered back to all items
    if (value.length <= 0) {
      setFiltered(items);

      // else, search on the provided 'key'
    } else {
      setFiltered(
        items.filter((v) =>
          ((v[key] as unknown) as string).toString().toLowerCase().includes(value.toLowerCase()),
        ),
      );
    }
  }

  return {
    search,
    onChange,
    filtered,
  };
}
```

## Example

[See an example here 🚀](https://codesandbox.io/s/use-search-hook-2o2q2)
