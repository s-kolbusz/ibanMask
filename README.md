# ibanMask
Simple IBAN input mask in regex

### Usage

```
import ibanMask from './ibanMask.js'

const ibanField = document.getElementById('iban');

ibanField.onkeydown = function(e) {
  e.target.value = ibanMask(e.target.value);
}
```

```
<input type="text" id="iban" />
```
