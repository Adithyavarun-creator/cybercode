import { Button, SpinnerButton } from "../components/Button";
import toast from "react-hot-toast";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../api/api";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      surname: "",
      email: "",
      company: "",
      country: "",
      postalCode: "",
      designation: "",
      address: "",
      contactNumber: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      firstname: Yup.string().required("Firstame is required"),
      surname: Yup.string().required("Surname is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required")
        .test(
          "not-personal-email",
          "Gmail, Outlook, Yahoo not allowed",
          (value) =>
            value && !value.match(/@(gmail|yahoo|outlook|hotmail)\.com$/i),
        ),
      company: Yup.string().required("Company name is required"),
      country: Yup.string().required("Country is required"),
      postalCode: Yup.string().required("Postal Code is required"),
      designation: Yup.string().required("Designation is required"),
      address: Yup.string().required("Address is required"),
      contactNumber: Yup.string().required("Contact is required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
    }),

    onSubmit: async (values) => {
      // eslint-disable-next-line no-unused-vars
      const { confirmPassword, ...data } = values;

      setLoader(true);

      try {
        // eslint-disable-next-line no-unused-vars
        const res = await toast.promise(
          Promise.all([
            registerUser(data),
            new Promise((resolve) => setTimeout(resolve, 5000)),
          ]),
          {
            loading: "Saving...",
            success: "You are Registered successfully with your details 🎉",
            error: "Failed to register ❌",
          },
        );

        navigate("/login");
      } catch (error) {
        console.error(error);
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
    <section className="hidden md:flex flex-col gap-10 justify-center items-center p-20">
      <div>
        <h2 className="text-3xl text-white font-semibold">Register</h2>
      </div>
      <div className="border rounded-2xl h-max w-[800px] p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-white">Firstname</label>
              <input
                type="text"
                name="firstname"
                placeholder="John"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname || ""}
                className="h-10 w-full pl-2 text-white rounded-xl border border-gray-400"
              />
              {formik.touched.firstname && formik.errors.firstname && (
                <span className="text-red-500">{formik.errors.firstname}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white">Surname</label>
              <input
                type="text"
                name="surname"
                placeholder="Doe"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.surname || ""}
                className="h-10 w-full pl-2 text-white rounded-xl border border-gray-400"
              />
              {formik.touched.surname && formik.errors.surname && (
                <span className="text-red-500">{formik.errors.surname}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white">Email Address (Official)*</label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@info.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email || ""}
                className="h-10 w-full pl-2 text-white rounded-xl border border-gray-400"
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-500">{formik.errors.email}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white">Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Infosys"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company || ""}
                className="h-10 w-full pl-2 text-white rounded-xl border border-gray-400"
              />
              {formik.touched.company && formik.errors.company && (
                <span className="text-red-500">{formik.errors.company}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-white">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Japan"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country || ""}
                className="h-10 w-full pl-2 text-white rounded-xl border border-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                placeholder="002233"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postalCode || ""}
                className="h-10 w-full pl-2 text-white rounded-xl border border-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white">Designation</label>
              <input
                type="text"
                name="designation"
                placeholder="HR/Tech Lead"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.designation || ""}
                className="h-10 w-full pl-2 text-white rounded-xl border border-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white">Address</label>
              <input
                type="text"
                name="address"
                placeholder="26 Richer Street"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address || ""}
                className="h-10 w-full pl-2 text-white rounded-xl border border-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                placeholder="+46-383745647"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contactNumber || ""}
                className="h-10 w-full pl-2 text-white rounded-xl border border-gray-400"
              />
            </div>
            <div>
              <label className="text-white">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password || ""}
                className="h-10 w-full pl-2 text-white rounded-xl border border-gray-400"
              />
              <p className="error">
                {formik.touched.password && formik.errors.password}
              </p>
            </div>

            <div>
              <label className="text-white">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword || ""}
                className="h-10 w-full pl-2 text-white rounded-xl border border-gray-400"
              />
              <p className="error">
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword}
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center items-center">
            {loader ? (
              <SpinnerButton width="75%" />
            ) : (
              <Button title="Register" button type="submit" width="75%" />
            )}
          </div>
        </form>
        <div className="mt-2 flex justify-center items-center cursor-pointer">
          <span className="text-white">
            Already have an account ?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Register;
