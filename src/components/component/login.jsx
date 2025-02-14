/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/UhJpN4Upk6x
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 space-y-4 text-center sm:px-6 sm:space-y-10 bg-red-500 dark:bg-red-900">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">欢迎</h1>
        <p className="text-gray-200 dark:text-gray-400">2024-03-23 周六</p>
      </div>
      <Card className="w-full max-w-sm">
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="text-black" htmlFor="email">
              账号
            </Label>
            <Input
              className="bg-white dark:bg-gray-800"
              id="email"
              placeholder="m@example.com"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-black" htmlFor="password">
              密码
            </Label>
            <Input
              className="bg-white dark:bg-gray-800"
              id="password"
              type="password"
            />
          </div>
          <div className="space-y-6">
            <Link href="/user">
              <Button className="w-full">登录</Button>
            </Link>
            <Link
              className="block text-center underline text-black dark:text-gray-400"
              href="/user"
            >
              忘记密码?
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
