---
title: useMounted React hook
intro: Check if your React component has mounted.
created_at: 04/04/2021
keywords: use-mount, useMount, usemounted, react hooks
---

## The hook

Check if your component has mounted. This can be useful if you're using server side rendering.

```tsx
import * as React from "react";

export function useMounted() {
  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return isMounted;
}
```
