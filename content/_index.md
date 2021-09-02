---
title: Home
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
