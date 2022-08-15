import React, { Component } from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import "src/assets/css/hover.css";
import SignupView from "./views/pages/auth/SignupView";
import { CM_Nav } from "./commons/Constants";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/auth/LoginView"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const IndexPage = React.lazy(() => import("./views/pages/index/IndexPage"));
const AnjaliForm = React.lazy(() =>
  import("./views/pages/anjaliPractice/AnjaliForm")
);
const ContactUs = React.lazy(() =>
  import("./views/cm_views/footerContent/ContactUs")
);
const TermsView = React.lazy(() =>
  import("src/views/cm_views/footerContent/Terms")
);
const Support = React.lazy(() =>
  import("src/views/cm_views/footerContent/Support")
);
const Faq = React.lazy(() =>
  import("src/views/cm_views/footerContent/FaqViewLg")
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/"
              name="Index Page"
              render={(props) => <IndexPage {...props} />}
            />
            <Route
              exact
              path="/contact"
              name="contact us"
              render={(props) => <ContactUs {...props} />}
            />
            <Route
              exact
              path="/terms"
              name="terms & condition"
              render={(props) => <TermsView {...props} />}
            />
            <Route
              exact
              path="/support"
              name="support"
              render={(props) => <Support {...props} />}
            />
            <Route
              exact
              path="/faq"
              name="faq"
              render={(props) => <Faq {...props} />}
            />

            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/signup"
              name="Sign Up Page"
              render={(props) => <SignupView {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path={CM_Nav.ANJALI}
              name="anjaliForm"
              render={(props) => <AnjaliForm {...props} />}
            />
            <Route
              path=""
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />
            <Route name="Page 404" render={(props) => <Page404 {...props} />} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
