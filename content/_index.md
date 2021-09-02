---
title: Home
description: Styles and scripts building, media transformation, self-loaded fonts and SEO in the configuration. Hugo is even more declarative with HUGE.
---

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
