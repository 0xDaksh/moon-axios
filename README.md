# moon-axios
A small wrapper for integrating axios to Moon.js


## How to install:
### CommonJS:
```
npm install --save axios moon-axios
```

And in your entry file:
```
import Moon from 'moon'
import axios from 'axios'
import MoonAxios from 'moon-axios'

Moon.use(MoonAxios, axios)
```

### Script:
Just add 3 scripts in order: `moon`, `axios` and `moon-axios` to your `document`.
```html
<script src="https://unpkg.com/moon-axios"></script>
```

## Usage:
This wrapper bind `axios` to `Moon` or `this` if you're using single file component.

You can `axios` like this:
```
Moon.axios.get(api).then((response) => {
  console.log(response.data)
})

this.axios.get(api).then((response) => {
  console.log(response.data)
})

this.$http.get(api).then((response) => {
  console.log(response.data)
})
```

## License
Copyright to [Daksh Miglani](https://dak.sh) | Licensed to MIT. 
