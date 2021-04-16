---
title: Updating SnailyCAD from 1.5.x to 2.0.0
created_at: April 16, 2021
updated_at: April 16, 2021
intro: How to update SnailyCAD 1.5.x to 2.0.0.
keywords: snaily-cad, CAD, fivem
---

## Updating

First run the following command

```bash
git pull origin main
```

If you get an error that includes the following text:

```txt
Please stash or commit your changes
```

Do the following:

1. **If you have translated the CAD, make sure to copy the content of the `language.json` file and keep it save.**
2. Run `git stash`
3. Run `git pull origin main`
4. Open the `src` folder, then open the `language.json` file
5. Paste the contents from the old `language.json` file into the new `language.json`
6. Done!

## Installing the dependencies

Now we'll install the dependencies.

```bash
npm install
```

## Starting

to start the CAD simply run the following command:

```bash
npm start
```

## 🎉 woohoo

After a few seconds it should log

```txt
[APP]: Running on http://localhost:<port>/
```
