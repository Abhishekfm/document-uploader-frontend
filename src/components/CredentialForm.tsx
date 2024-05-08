import { FieldErrors } from "react-hook-form";
import Input from "./Input";
import { AuthRoles } from "../store/ApiService/authService";

export interface FormProps {
  getValues?(name: string): any;
  errors?: FieldErrors;
  register?: any;
  setValue?(name: string, val: string): any;
}

export default function CredentialForm({
  getValues,
  errors,
  register,
  setValue,
}: FormProps) {
  return (
    <>
      <div>
        <Input
          name="email"
          register={register}
          label="Email"
          errors={errors}
          defaultValue={getValues && getValues("password")}
          type={"email"}
        />
      </div>
      <div>
        <Input
          name="password"
          type={"password"}
          register={register}
          defaultValue={getValues && getValues("password")}
          label="Password"
          errors={errors}
        />
      </div>
      {setValue && (
        <div>
          <input
            type="checkbox"
            name="role"
            id=""
            defaultChecked={
              getValues && getValues("role") === AuthRoles.ADMIN ? true : false
            }
            onChange={(e: any) => {
              if (e.target.value) {
                setValue && setValue("role", AuthRoles.ADMIN);
              } else if (!e.target.value) {
                setValue && setValue("role", AuthRoles.USER);
              }
            }}
          />
        </div>
      )}
    </>
  );
}
