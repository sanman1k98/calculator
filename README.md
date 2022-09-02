# Implementing a calculator from scratch!

> **Note**: it's a bad calculator.

Playing with the default iOS calculator and seeing if I can somehow replicate how it works. A good exercise to flex the JavaScript muscles (and cause it's a lil fun too).

The frontend was not the priority for me, I was more concerned about the architecture and design of the underlying program itself.

I did it in Lua first because that's what I was doing for like the past week straight (check out my [dotfiles](https://github.com/sanman1k98/.config)), and because I just wanted to see how my logic would work.

Took me a lil over an hour and a half to translate it from a Lua module to a JavaScript object-oriented implementation, and a bit longer than I'd like to admit to get it working as a [JavaScript module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).


## Using the calculator


> **Note**: you need to have Python 3.7 installed on your system.

The `makefile` has a convenience target "serve", which serves the files in the `page/` directory using Python 3 standard library's `http.server` module. Run `make serve` in the project root and then navigate to [`http://localhost:9090`](http://localhost:9090) to view the page.

