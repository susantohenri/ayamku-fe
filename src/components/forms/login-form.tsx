import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from "@/libs/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/auth-context-provider"

const formSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email')
    .trim(),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(3, 'Password must have min 3 characters')
});

type formType = z.infer<typeof formSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ``,
      password: ``
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_LOGIN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      }
    );

    if (response.ok) {
      const body = await response.json();
      setToken(body.access_token, body.refresh_token);
      navigate('/dashboard');
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>

                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="m@example.com"
                      id="email"
                      type="email"
                      {...field}
                    />
                  )}
                />

              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      {...field}
                    />
                  )}
                />
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>

        </CardContent>
      </Card>
    </div>
  )
}
