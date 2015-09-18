## Website Performance Optimization portfolio project

### Optimizations applied ###
1. ** Page Speed **
  1. Compressed and optimized images
  2. Minimized HTML, CSS, JavaScript code
  3. Cleared up render blocking code imports

2. ** Framerate **
  1. Cached some DOM elements in `changePizzaSizes` function call to avoid recalculation

3. ** Using build tools **
  ** Note: ** Please edit `local_config.js` to adjust development environment.
  1. Used Gulp to automate tasks like compression, minimization, etc.
  2. Also used gulp to watch for changes in code source and apply changes directly to output code.

4. ** Code quality **
  1. Changed `querySelector` and `querySelectorAll` into `getElementById` and `getElementsByClassName` respectively.
  2. Optimized loops by moving variable definition out of the loop.
  3. Dynamically generate floating pizzas based on the screen height.
