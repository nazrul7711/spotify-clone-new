"use client";
import React from "react";
import styles from "@/styles/signUp.module.scss";
import { FaSpotify } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import axios, { AxiosError } from "axios";

type InputType = {
  name: string;
  email: string;
  year: string;
  month: string;
  day: string;
  password: string;
  gender: string;
};

const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();
  async function signupHandler(data: InputType) {
    try {
      let res = await axios.post("/api/register", {
        name: data?.name,
        email: data?.email,
        password: data?.password,
        dob: `${data?.year}-${data?.month}-${data?.day}`,
        gender: data?.gender,
      });
      if (res.status === 200) {
        await signIn("credentials", {
          email: data?.email,
          password: data?.password,
        });
      }
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
      console.log(error);
      console.log((error as AxiosError).message);
      console.log((error as AxiosError).response?.data.message);
      //  console.log(error.data.message);
      console.log("Request failed");
    }
  }
  const currentYear = new Date().getFullYear();
  let { status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }
  if (status === "loading") {
    return <div className={styles.loading}> Loading...</div>;
  }
  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleSubmit(signupHandler)}>
        <div className={styles.google}>
          <div className={styles.spotifylogo} onClick={() => router.push("/")}>
            <FaSpotify size={40} />
            <div>Spotify</div>
          </div>
          <div>Sign up for free to start listening.</div>
          <button>
            <BsFacebook size={20} />
            <span>Sign up with Facebook</span>
          </button>
          <button onClick={() => signIn("google")}>
            <FcGoogle size={20} />
            <span>Sign up with Google</span>
          </button>
          <p>Or</p>
        </div>
        <div className={styles.general}>
          <div className={styles.email}>
            <div className={styles.title}> What's your Name?</div>
            <input
              type="text"
              {...register("name", { required: "this field is required" })}
              placeholder="Enter your Name"
            />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
          </div>
          <div className={styles.email}>
            <div className={styles.title}> What's your email?</div>
            <input
              type="text"
              {...register("email", {
                required: "email is required field",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "email entered is not correct",
                },
              })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.email}>
            <div className={styles.title}>Create password</div>
            <input
              type="password"
              {...register("password", {
                required: "password is required field",
                pattern: {
                  value:
                    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:",
                },
              })}
              placeholder="Create a password"
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          <div className={styles.title}>What's your date of birth?</div>
          <div className={styles.dob}>
            <div>
              <p>Year</p>
              <input
                type="text"
                {...register("year", {
                  required: "Enter Year",
                  max: {
                    value: currentYear - 1,
                    message:
                      "entered year should not be equal or more than current year",
                  },
                })}
                placeholder="YYYY"
              />
              {errors.year && (
                <p className={styles.error}>{errors.year.message}</p>
              )}
            </div>
            <div>
              <p>Month</p>
              <select
                id="months"
                {...register("month", { required: "Enter Month" })}
              >
                <option value="">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              {errors.month && (
                <p className={styles.error}>{errors.month.message}</p>
              )}
            </div>
            <div>
              <p>Day</p>
              <input
                type="text"
                placeholder="DD"
                {...register("day", {
                  required: "Enter Day",
                  max: {
                    value: 31,
                    message: "Not more than 31",
                  },
                })}
              />
              {errors.day && (
                <p className={styles.error}>{errors.day.message}</p>
              )}
            </div>
          </div>
          <div className={styles.title}>What's your gender?</div>
          <div className={styles.gender}>
            <label htmlFor="male">
              <input
                type="radio"
                id="male"
                value="Male"
                {...register("gender", {
                  required: "This field is mandatory",
                })}
              />
              Male
            </label>

            <label htmlFor="female">
              <input
                type="radio"
                id="female"
                value="Female"
                {...register("gender", {
                  required: "This field is mandatory",
                })}
              />
              Female
            </label>
            <label htmlFor="non-binary">
              <input
                type="radio"
                id="non-binary"
                value="NonBinary"
                {...register("gender", {
                  required: "This field is mandatory",
                })}
              />
              Non-binary
            </label>
            <label htmlFor="other">
              <input
                type="radio"
                id="Other"
                value="other"
                {...register("gender", {
                  required: "This field is mandatory",
                })}
              />
              Other
            </label>
            {errors.gender && (
              <p className={styles.error}>{errors.gender.message}</p>
            )}
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
        <p className={styles.link}>
          Have an account? <Link href="/auth/signIn">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default page;
