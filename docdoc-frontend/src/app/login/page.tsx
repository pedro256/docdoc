import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="border border-black p-4 rounded">
                <h1 className="text-2xl">Login</h1>
                <p>Informe seus dados para entrar</p>
                <div className="pb-2">
                    <Label htmlFor="username">Username</Label>
                    <Input name="username" type="text" />
                </div>
                <div className="pb-2">
                    <input name="password" type="password" />
                </div>


            </div>
        </div>
    )
}