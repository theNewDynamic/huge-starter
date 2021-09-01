---
title: Home
---
Styles and scripts building, media transformation, self-loaded fonts and SEO in the configuration. __Hugo__ is even more declarative with __[HUGE](https://github.com/theNewDynamic/huge/wiki)__.

```yaml
#_huge/config/scripts.yaml
scripts:
- name: hugely
  path: js/hugely.js
  params:
    placeholder: Say it Hugely!
```

```html
<head>
  {{ partial "huge/scripts/tags" "hugely" }}
</head>
```
