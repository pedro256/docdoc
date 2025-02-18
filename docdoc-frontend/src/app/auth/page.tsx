import FormAuth from "./components/FormAuth"


export default async function AuthPage() {

    return (
        <div className="flex justify-center h-screen items-center">
            <div className="bg-background_2 sm-4 shadow  border-foreground rounded-md w-[95%] sm:w-[40%]">

                <div className="bg-foreground p-6 rounded-t">
                    <h2 className="text-2xl text-white border-b-4 border-white w-min">Autenticar</h2>
                </div>

               <FormAuth/>

                <div className="bg-foreground py-1 px-4 rounded-b flex justify-end">
                    <span className="text-white">não tenho cadastro</span>
                </div>

            </div>
        </div>
    )
}