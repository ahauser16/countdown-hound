import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//   https://reactnavigation.org/docs/auth-flow/
// **Authentication Flows Tutorial:
// **Step 1 - The user opens the app.
// **Step 2 - The app loads some authentication state from encrypted persistent storage (for example, SecureStore).
// **Step 3 - When the state has loaded, the user is presented with either authentication screens or the main app, depending on whether valid authentication state was loaded.
// **Step 4 - When the user signs out, we clear the authentication state and send them back to authentication screens.

//N.B.  If you have both your login-related screens and rest of the screens in Stack navigators, we recommend to use a single Stack navigator and place the conditional inside instead of using 2 different navigators. This makes it possible to have a proper transition animation during login/logout.

const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
      <Button
        title="Go to your profile!"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

function ProfileScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Profile</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

function SignInScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
      <Button
        title="Go to Sign Up Screen"
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button
        title="Go to Help Screen"
        onPress={() => navigation.navigate("Help")}
      />
      {/* this will cause an error and rightfully so! */}
      <Button
        title="Go to Profile Screen"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

function SignUpScreen() {
  return (
    <View>
      <Text>Sign up!</Text>
    </View>
  );
}

function ResetPassword() {
  return (
    <View>
      <Text>You idiot!</Text>
    </View>
  );
}

function HelpScreen() {
  return (
    <View>
      <Text>You need a hand?</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View>
      <Text>wadya wanna know?</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          <>
            {state.isLoading ? (
              // We haven't finished checking for the token yet
              <Stack.Screen name="Splash" component={SplashScreen} />
            ) : state.userToken == null ? (
              // No token found, user isn't signed in
              //INSERT SNIPPET HERE
              <>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
              </>
            ) : (
              // User is signed in
              <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
              </>
            )}
            <Stack.Group
              navigationKey={state.userToken === true ? "user" : "guest"}
            >
              <Stack.Screen name="Help" component={HelpScreen} />
              <Stack.Screen name="About" component={AboutScreen} />
            </Stack.Group>
          </>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

//***********IMPLEMENT THIS LOGIC IF YOU WANT TO HAVE SCREENS THAT ARE ACCESSIBLE TO USERS THAT ARE SIGNED-IN OR NOT SIGNED-IN *********************/

{
  /* 
<>
  {isSignedIn ? (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </>
  ) : (
    <>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </>
  )}
  <Stack.Group navigationKey={isSignedIn ? 'user' : 'guest'}>
    <Stack.Screen name="Help" component={HelpScreen} />
    <Stack.Screen name="About" component={AboutScreen} />
  </Stack.Group>
</>
*/
}
