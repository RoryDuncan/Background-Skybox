Background-Skybox
===
A background that moves relative to mouse movement

 ---
#### Dependencies
* jQuery

#### Usage
First, add the class "BGSKY" to the element you want to have the effect.
``` HTML
  <div class="BGSKY">
     The background of this div will be animated relative to mouse movement!
  </div>
```
Then, give the BGSKY instance the url to an image.
```javascript
BGSKY.setBackground("HelloWorld.jpg");
 ```
