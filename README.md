## Webmaker for Android

Mozilla Webmaker's mission is to help enable a new generation of digital creators and webmakers, giving people the tools and skills they need to move from using the Web to actively making the Web. To this end, the Webmaker App is an entry point to the Webmaker community that provides a radically simple interface for creating mobile application directly on device.

## Getting Started

#### Prerequisites
Before you jump into the code you'll want to download, install, and configure the following:

- [Android Studio](http://developer.android.com/sdk)
- [Node 0.12+](https://nodejs.org/) w/ [ES6 ("harmony") features enabled]()
- [NPM 2.6+](https://www.npmjs.com/)

#### Clone & Install Dependencies
```bash
git clone https://github.com/mozilla/webmaker-app
cd webmaker-app
npm install
```

#### Android
While the majority of `webmaker-app` is built using Web technologies, it runs within a native Android wrapper that is included as part of this codebase. If you would like to make changes to the wrapper or if you'd like to test the app, we recommend you use [Android Studio](http://developer.android.com/sdk/index.html).

- Install and configure [Android Studio](http://developer.android.com/sdk)
- Open Android Studio and select "Import Project"
- Select the "webmaker-app" directory

Once you have the project open, you can run it within an emulator or on any Android device with USB debugging enabled by selecting "Run 'app'" from the "Run" dropdown menu. For more information, please check out the [Android SDK documentation](http://developer.android.com/training/index.html).

#### Web
Each fragment within `webmaker-app` is actually just a web page! You can find all of the js, css, and static assets in the `./www_src/` directory. Static files in `./www_src/static/` will be copied to the main directory during build.

To run and develop in a web browser without testing on device, simply run

```bash
npm start
```

## Contact Us
IRC: `#webmaker` on `irc.mozilla.org`
Forum: [https://groups.google.com/forum/#!forum/mozilla.webmaker](https://groups.google.com/forum/#!forum/mozilla.webmaker)

