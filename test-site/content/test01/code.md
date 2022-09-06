---
title: "Code"
date: 2022-09-06T12:30:39+02:00
draft: false
---
## Fenced code block with render hook

```js {linenos=table, linenostart=5, hl_lines=[4, "6-8"], name="arangosh demo script"}
---
run: true
bindVars: {
    attr: "foo"
}
---
db._create("coll");
db.coll.save({ foo: 123 });
db.coll.save({ foo: true });
let val = 123;
db._query(`
  FOR doc IN coll
    FILTER doc.@attr == @val // A comment!!!!
    RETURN doc
  `, {val});
```
