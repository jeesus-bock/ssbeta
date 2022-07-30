# SolidStart Beta

Experimentations and testing the beta tagged version of solid-start

## What has been done
1) Initialized project with npm init solid@next.
2) Changed the dependencies to beta versions. Solid-start and solid-start-node to beta and Vite -> 3 and Rollup -> 2.
3) Fixed Routes to FileRoutes in root.tsx.
4) Changed "context" to event in entry-server.tsx.


## Problem at hand
There are no errors during the HMR, build or browser console when runing yarn dev, however the rendered result is as such:
![image](https://user-images.githubusercontent.com/90532510/181919915-f4277584-4c6c-4c47-9625-456981cb2852.png)

With the document body:
```html
<body>
  <!--#-->[object Object][object Object]<!--/-->
  <!--#-->
  <!--/-->
</body>
```
