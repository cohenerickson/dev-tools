# Dev Tools

Chrome dev tools made in vanilla JS.

If you encounter a problem or a issue please [open a issue here](https://github.com/cohenerickson/dev-tools/issues).

## Current Version

Dev Tools v1

# Usage/Installation

### HTML

Place the following scrpt tag in the `<head>` of your html:

```
<script type="module" src="https://raw.githack.com/cohenerickson/dev-tools/main/dist/assets/index.a4e9989f.js"></script>
```

### Bookmarklet method

Create a new bookmark and set the url to the following:
```
javascript:(()=>{this.script=document.createElement("script");this.script.type="module";this.script.src="https://raw.githack.com/cohenerickson/dev-tools/main/dist/assets/index.a4e9989f.js";document.documentElement.appendChild(this.script)})())
```
