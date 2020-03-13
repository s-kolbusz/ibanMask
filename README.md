# ibanMask
Simple IBAN input mask in regex

### Usage

```javascript
import ibanMask from './ibanMask.js'

const ibanField = document.getElementById('iban');

ibanField.onkeydown = function(e) {
  e.target.value = ibanMask(e.target.value);
}
```

```html
<input type="text" id="iban" />
```
