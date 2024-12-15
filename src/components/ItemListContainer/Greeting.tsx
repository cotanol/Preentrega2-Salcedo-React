
interface IGreeting {
    saludo: string;
}


const Greeting =  ({saludo = "Bievenido"}: IGreeting) => {

    return  (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <h1 className="text-xl font-medium text-white bg-black p-4 rounded-lg mt-10"> 
                {saludo} 
            </h1>
        </div>

    )

}

export default Greeting;