The app object is instantiated on creation of the Express server. It has a middleware stack that can be customized in app.configure()(this is now deprecated in version 4.x).

To setup your middleware, you can invoke app.use(<specific_middleware_layer_here>) for every middleware layer that you want to add (it can be generic to all paths, or triggered only on specific path(s) your server handles), and it will add onto your Express middleware stack. Middleware layers can be added one by one in multiple invocations of use, or even all at once in series with one invocation. See use documentation for more details.

To give an example for conceptual understanding of Express Middleware, here is what my app middleware stack (app.stack) looks like when logging my app object to the console as JSON:

