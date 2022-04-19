import React from "react";
import {
  useAuthState,
  useSendEmailVerification
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../shaered/Loading/Loading";

const RequerdAuth = ({ children }) => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const location = useLocation(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div className="text-center">
        <p className="text-danger">Please verify your email</p>
        <button
          onClick={async () => {
            await sendEmailVerification();
            alert("Sent email");
          }}
        >
           send verify email again
        </button>
      </div>
    );
  }
  return children;
};

export default RequerdAuth;
