"use client"
import React from "react";
import styles from "@/styles/signUp.module.scss";
import { FaSpotify } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useForm} from "react-hook-form";


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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();
  async function signupHandler(data: InputType) {
    // let res = await axios.post("/api/register", {
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    //   dob: `${data.year}-${data.month}-${data.day}`,
    //   gender: data.gender,
    // });
    // console.log(res);
  }
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleSubmit(signupHandler)}>
        <div className={styles.google}>
          <div className={styles.spotifylogo}>
            <FaSpotify size={40} />
            <div>Spotify</div>
          </div>
          <div>Sign up for free to start listening.</div>
          <button>
            <BsFacebook size={20} />
            <span>Sign up with Facebook</span>
          </button>
          <button>
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
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
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
          <div className={styles.button}>
           
          </div>
        </div>
        <p className={styles.link}>
          Have an account? <Link href="/auth/signIn">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default page;
