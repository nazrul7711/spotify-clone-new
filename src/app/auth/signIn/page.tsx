"use client";
import React from "react";
import styles from "@/styles/signIn.module.scss";
import { FaSpotify } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";

type InputType = {
  email: string;
  password: string;
};

const Page = () => {
  const router = useRouter();
  function logoHandler() {
    router.push("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = async (data: InputType) => {
    let res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect:false
    });
    console.log(res)
  };
  const { status, data: user } = useSession();
  console.log(status);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoParent}>
        <div className={styles.logo} onClick={logoHandler}>
          <FaSpotify size={30} />
          <div>Spotify</div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <h1>Log in to Spotify</h1>
          <button>
            <BsFacebook size={20} style={{ color: "#3498eb" }} />
            <span>Sign up with Facebook</span>
          </button>
          <button onClick={() => signIn("google")}>
            <FcGoogle size={20} />
            <span>Sign up with Google</span>
          </button>
          <button>
            <FaApple size={20} style={{ color: "white" }} />
            <span>Sign up with Apple</span>
          </button>
          <button>
            <span>Continue with email</span>
          </button>
          <span className={styles.line}></span>
          <div className={styles.inputField}>
            <div>Email or username</div>
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: "Email is required field" })}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.inputField}>
            <div>Password</div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "password is required field",
                pattern: {
                  value:
                    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:",
                },
              })}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className={styles.btn}>
            Log In
          </button>

          <p>
            Don't have an account?{" "}
            <Link href="/auth/signUp">Sign up for Spotify</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Page;
