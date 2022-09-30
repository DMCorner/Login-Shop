

const Explanation = () => {


    return (
        <div className=" p-3 rounded-3xl text-xl space-y-5 ">
            <div className="bg-slate-600 p-3 rounded-3xl text-center text-4xl font-bold text-white underline shadow-lg border-black border-4">
                <h1>Explanation</h1>
            </div>
            <div className="bg-slate-400 p-3 rounded-3xl text-xl">
            This project is a simple login page where the user enters a username, email and password.
            </div>
            <div className="bg-slate-400 p-3 rounded-3xl text-xl">
            In the event that the input is correct, the user will be logged in. 
            </div>
            <div className="bg-slate-400 p-3 rounded-3xl text-xl">
            If the input is wrong the app will not log in the user and will display some potential faults with the input.
            </div>
            <div>
                <div className='w-fit text-xl rounded-t-3xl bg-slate-400 p-2 '>
                    Input:
                </div>
                <div className="bg-slate-300 p-3 rounded-b-3xl rounded-r-3xl text-xl">
                    Name: Adam Admin<br></br>
                    Email: admin@admin.com<br></br>
                    Password: admin123<br></br>
                </div>
            </div>
        </div>
    )
}

export default Explanation