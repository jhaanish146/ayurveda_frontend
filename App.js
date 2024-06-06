import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mainpage from "./SRC/Mainpage";
import OtherPage from "./SRC/OtherPage";
import Dieseandtreatment from "./SRC/Dieseandtreatment";
import Diesedetail from "./SRC/Diesedetail";
import Herbalremendies from "./SRC/Herbalremendies";
import AddSymtoms from "./SRC/AddSymtoms";
import Fever from "./SRC/Fever";
import Login from "./SRC/Login";
import Signup from "./SRC/Signup/Signup";
import Signupenteremail from "./SRC/Signup/Signupenteremail";
import Signup_choose_user_name from "./SRC/Signup/Signup_choose_user_name";
import Signup_enter_verification_code from "./SRC/Signup/Signup_enter_verification_code";
import Signup_chossepassword from "./SRC/Signup/Signup_chossepassword";
import ForgotPassword_enter_email from "./SRC/Forgotpassword/ForgotPassword_enter_email";
import Forgot_password_enter_verification_code from "./SRC/Forgotpassword/Forgot_password_enter_verification_code";
import Forgotpassword_account_recoverd from "./SRC/Forgotpassword/Forgotpassword_account_recoverd";
import Forgotpassword_choosePaaword from "./SRC/Forgotpassword/Forgotpassword_choosePaaword";
import Welcome from "./SRC/WelcomeScreen/Welcome";
import Translate from "./SRC/Translate";
// import FileSave from "./SRC/FileSave";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
         <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Translate" component={Translate} />
         <Stack.Screen name="Diesedetail" component={Diesedetail} />
         {/* <Stack.Screen name="FileSave" component={FileSave} /> */}
        <Stack.Screen name="Welcome" component={Welcome} />
       

        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signupenteremail" component={Signupenteremail} />
        <Stack.Screen
          name="Signup_enter_verification_code"
          component={Signup_enter_verification_code}
        />
        <Stack.Screen
          name="Signup_choose_user_name"
          component={Signup_choose_user_name}
        />

        <Stack.Screen
          name="Signup_chossepassword"
          component={Signup_chossepassword}
        />

       

        {/* forgot password  */}

        <Stack.Screen
          name="ForgotPassword_enter_email"
          component={ForgotPassword_enter_email}
        />

        <Stack.Screen
          name="Forgot_password_enter_verification_code"
          component={Forgot_password_enter_verification_code}
        />

        <Stack.Screen
          name="Forgotpassword_account_recoverd"
          component={Forgotpassword_account_recoverd}
        />

        <Stack.Screen
          name="Forgotpassword_choosePaaword"
          component={Forgotpassword_choosePaaword}
        />

        {/* forgot password end  */}

        <Stack.Screen name="Fever" component={Fever} />
        <Stack.Screen name="AddSymtoms" component={AddSymtoms} />
        <Stack.Screen name="Mainpage" component={Mainpage} />
       
        <Stack.Screen name="OtherPage" component={OtherPage} />
        <Stack.Screen name="Dieseandtreatment" component={Dieseandtreatment} />
        <Stack.Screen name="Herbalremendies" component={Herbalremendies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
