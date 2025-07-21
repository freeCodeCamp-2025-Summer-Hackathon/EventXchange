import userDummy from "/lib/user-dummy.js"
import profilePic from '../assets/default-pfp.png'
import background from '../assets/background.jpg'

function Profile(){
    return(
        <>  
            <h1 class="text-4xl text-orange-500"> Profile </h1>
            <div className='bg-gray-500 inline-block text-center w-50 ml-60 p-2'>


                <img src={profilePic} alt="Profile Picture" className='inline-block  rounded-full w-40 h-40 m-auto' />
            </div>
            <div class="inline-block bg-orange-500 center text-center bg-cover w-100 m-auto ml-30 p-15px">
                <p>User</p>
                <p>Join Date: (mm/dd/yyyy)</p>
                <p>User Rating: ?/10</p>
                <p>About me:</p>
            </div>


            <div>
                <h2 class="text-2xl text-orange-500">Events Held:</h2>
                <div class="text-center">
                    <div class="inline-block bg-gray-400 p-15 text-center w-90 m-10">
                        <img src={background}/>
                        <h3 class="text-lg">Event Number one</h3>
                        <p>Event Date: Tomorrow</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        <button type="button" class="bg-cyan-500 p-2 rounded-full hover:bg-sky-500">More Info!</button>
                    </div>


                    <div class="inline-block bg-gray-400 p-15 text-center w-90 m-10">
                        <img src={background}/>
                        <h3 class="text-lg">Event Number two</h3>
                        <p>Event Date: Next Week Friday</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        <button type="button" class="bg-cyan-500 p-2 rounded-full hover:bg-sky-500">More Info!</button>
                    </div>


                    <div class="inline-block bg-gray-400 p-15 text-center w-90 m-10">
                        <img src={background}/>
                        <h3 class="text-lg">Event Number three</h3>
                        <p>Event Date: Yesterday</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        <button type="button" class="bg-cyan-500 p-2 rounded-full hover:bg-sky-500">More Info!</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Profile