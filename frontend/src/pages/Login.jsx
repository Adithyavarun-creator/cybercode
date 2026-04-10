import { Button, SpinnerButton } from "../components/Button";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../api/api";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required")
        .test(
          "not-personal-email",
          "Gmail, Outlook, Yahoo not allowed",
          (value) =>
            value && !value.match(/@(gmail|yahoo|outlook|hotmail)\.com$/i),
        ),

      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      try {
        setLoader(true);

        const res = await toast.promise(loginUser(values), {
          loading: "Signing in...",
          success: "Login successful 🎉",
          error: "Invalid credentials ❌",
        });

        localStorage.setItem("user", JSON.stringify(res));

        navigate("/user-dashboard");
      } catch (err) {
        console.error(err);
        navigate("/login");
      } finally {
        setLoader(false);
      }
    },
  });

  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return <Navigate to="/user-dashboard" />;
  }

  return (
    <section className="flex flex-col gap-10 justify-center items-center p-20">
      <div>
        <h2 className="text-3xl text-white font-semibold">Login</h2>
      </div>
      <div className="border rounded-2xl h-max w-[400px] md:w-[800px] p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col">
              <label className="text-white">Email Address*</label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@info.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email || ""}
                className="h-10 w-[300px] md:w-[400px] pl-2 text-white rounded-xl border border-gray-400"
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-500">{formik.errors.email}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password || ""}
                className="h-10 w-[300px] md:w-[400px] pl-2 text-white rounded-xl border border-gray-400"
              />
              <p className="error">
                {formik.touched.password && formik.errors.password}
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-center items-center">
            {loader ? (
              <SpinnerButton />
            ) : (
              <Button title="Login" type="submit" />
            )}
          </div>
        </form>
        <div className="mt-2 flex justify-center items-center cursor-pointer">
          <span className="text-white">
            Do not have an account ?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
