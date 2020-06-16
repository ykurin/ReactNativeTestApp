# ReactNativeTestApp
Test application with React Native + TypeScript + MobX + React Navigation

This is an Auth app. It has Sign in screen and Profile screen with sign out button. Simple logic which should be in every mobile app.

Tried to implement MVVM architecture which we all love from native mobile development.

Also there is a **redux** branch where I tried to implement some logic using the Redux to compare with the MobX. I didn't like it, so the logic is very basic just to understand what you will deal with.

### Stack

**TypeScript** - because JS is a nightmare.

**React Navigation** - navigation between the screens.
- Repo - https://github.com/react-navigation/react-navigation
- Useful auth flow guide - https://reactnavigation.org/docs/auth-flow/

**MobX** - state management library. This adds reactive to the React. Much easier that Redux for understanding if you are a mobile developer.
If you a Xamarin developer, this is like ReactiveUI with observables and observers.
- Repo - https://github.com/mobxjs/mobx
- Mobx + React guides - https://mobx-react.js.org/ This site is more useful than the https://mobx.js.org/ which have some outdated guides.
