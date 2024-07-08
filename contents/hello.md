---
date: 2024-04-03 00:00:00
title: Test article
author: bluestar
desc: "life bugs"
tags:
  - bugs
---

> It's not how many times you fall that matters, it's how many times you get back up.


```py filename="src/main.py"
print("hello world")

for i in range(1,4000):
  print(i)
```

```ts

export interface PreviewState {
    resource: string,
    locked: boolean,
    startingInstruction: number,
    width: number
}

export function getDataState(): PreviewState {
    const element = document.getElementById('vscode-python-preview-data');
    if (element) {
        const dataState = element.getAttribute('data-state')
        if (dataState) {
            return JSON.parse(dataState);
        }
    }

    throw new Error(`Could not load data state`);
}

```

