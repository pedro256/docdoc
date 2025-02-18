"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface IParams {
    username: string;
    password: string;
}

export default function FormAuth() {
    const { register, handleSubmit } = useForm<IParams>()
    const router = useRouter()

    function onValid(params: IParams) {
        console.log(params)
        router.push("/app")

    }
    return (
        <form className="px-4" onSubmit={handleSubmit(onValid)}>
            <div className="py-10">
                <div className="p-2">
                    <label htmlFor="username">username</label>
                    <Input {...register('username')} required />
                </div>
                <div className="p-2">
                    <label htmlFor="password">password</label>
                    <Input {...register('password')} type="password" required minLength={5} />
                </div>
            </div>


            <div className="flex justify-end mb-8">
                <Button type="submit" className="py-4 px-8 text-end">ENTRAR</Button>
            </div>

        </form>
    )
}