# Practice

## Replace prop drilling with context

In this example, toggling the checkbox changes the `imageSize` prop passed to each `<PlaceImage>`. 

The checkbox state is held in the top-level `App` component, but each `<PlaceImage>` needs to be aware of it.

Currently, `App` passes `imageSize` to List, which passes it to each `Place`, which passes it to the `PlaceImage`. 

Remove the `imageSize` prop, and instead pass it from the `App` component directly to `PlaceImage`.

## Behind the scenes

props ImageSize
App
List
Place
PlaceImage

ImageSize pass from the App to PlaceImage

компонентам в середине не нужно передавать ImageSize 

Here are the steps:
1. Create and export it with export const MyContext = createContext(defaultValue).
2. Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
3. Wrap children into <MyContext.Provider value={...}> to provide it from a parent.