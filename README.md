This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Project Information

### Tech Stack
I've utilized React-Native, Typescript, Redux Toolkit featuring RTK Query, Nativewind (a utility for Tailwind CSS), Jest, Testing-Library/React-Native, and incorporated React-Native-Reanimated for animations on List and Detail screens.

#### I've established a directory named "App" that contains various folders. Additionally, I've configured folder aliases in Babel, TypeScript, and Jest settings.

# assets (@Assets)
Holds all project assets.

# components (@Components)
Houses all project components.

# features (@Features)
Encompasses project modules such as PokeMon List and Detail.

# navigations (@Navigations)
Manages all project navigational aspects.

# services (@Api)
Deals with all project APIs.

# slicers (@Slicers)
Created specifically for adding reducer/slicer functionality for testing purposes. RTKQuery was initially sufficient for managing data in its library state.

# store (@Store)
Manages Redux Toolkit store configuration.

# Unit Testing and Integration Testing

I've incorporated five tests, including two for the Pokemon List and Detail screens, and three for the components I've developed.


# Starting the Project and Testing:
#### To run tests, execute the following command in the project's root directory in the terminal: `npm run test`. After running the tests, a coverage report will be generated.

#### To initiate the project, follow these steps:

## Step 1: Install all the dependencies with `npm install`

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
 
