"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CONTACT_SCHEMA } from "~/lib/schemas";
import { useMutation } from "@tanstack/react-query";
import { TextField } from "~/components/form/text-field";
import { Button } from "~/components/button";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(CONTACT_SCHEMA),
    reValidateMode: "onChange",
  });

  const { mutate, data, isLoading, error } = useMutation<
    { message: string },
    Error,
    typeof initialValues
  >({
    onSuccess: () => reset(),
    mutationKey: ["contact-me"],
    mutationFn: async (data) => {
      const res = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });

      const json = (await res.json()) as { message: string };
      const isValidMessage = typeof json.message === "string" && json.message;
      const isFailedRequest = res.status !== 200;

      if (isFailedRequest || !isValidMessage) {
        const errorMessage = isValidMessage
          ? json.message
          : "Could not sent the email. Please try again later.";
        throw new Error(errorMessage);
      }

      return json;
    },
  });

  const buttonIntent = error ? "error" : data ? "success" : "secondary-light";
  const buttonMessage = error ? "Let's try again?!" : data ? "Sent!" : "Just send it!";

  return (
    <form className="w-full" onSubmit={handleSubmit((data) => mutate(data))}>
      <div className="flex flex-col sm:flex-row sm:gap-4">
        <TextField
          {...register("firstName")}
          autoComplete="given-name"
          onChange={(value) =>
            setValue("firstName", value, {
              shouldValidate: true,
            })
          }
          errorMessage={errors.firstName?.message}
          label="First Name"
        />
        <TextField
          {...register("lastName")}
          autoComplete="family-name"
          onChange={(value) =>
            setValue("lastName", value, {
              shouldValidate: true,
            })
          }
          errorMessage={errors.lastName?.message}
          label="Last Name"
        />
      </div>

      <TextField
        {...register("email")}
        type="email"
        autoComplete="email"
        onChange={(value) =>
          setValue("email", value, {
            shouldValidate: true,
          })
        }
        errorMessage={errors.email?.message}
        label="Email"
      />

      <TextField
        {...register("message")}
        inputElementType="textarea"
        onChange={(value) =>
          setValue("message", value, {
            shouldValidate: true,
          })
        }
        errorMessage={errors.message?.message}
        label="Message"
      />

      <div className="flex items-center gap-6 mt-5">
        <Button
          disabled={isLoading}
          extras={isLoading ? "loading" : undefined}
          className="min-w-fit"
          intent={buttonIntent}
          type="submit"
        >
          {buttonMessage}
        </Button>

        {error ? <p className="capitalize text-red-400">{error.message}</p> : null}
        {data ? <p className="capitalize text-green-400">{data.message}</p> : null}
      </div>
    </form>
  );
}
