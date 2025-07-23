import userDummy from "/lib/user-dummy.js"
import eventDummy from "/lib/event-dummy.js"
import profilePic from '../assets/default-pfp.png'
import { FaImage } from "react-icons/fa";

function Profile(){
    return(
        <>
            <div className="bg-gray-100 flex flex-col items-center gap-10">
                <h1 className="text-center text-4xl mt-5 inline-block">Profile</h1>
                <div className="flex flex-row gap-10 justify-center w-3xl">
                    <img src={profilePic} alt="Profile Picture" className="inline-block rounded-full border-3 border-orange-500 w-30 h-30" />
                    
                    <div class="border-l-3 border-blue-500 mw-[20vw] p-[15px]">
                        <p>Username: {userDummy[0].username}</p>
                        <p>Join Date: (mm/dd/yyyy)</p>
                        <p>User Rating: ?/10</p>
                        <p>About me: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum accumsan sapien consectetur ornare. Donec quis tortor viverra, tincidunt elit vel, aliquam augue. Integer volutpat neque orci, a sodales erat dictum et. Cras in enim in mauris egestas sodales sed eu est. Sed fermentum nisi magna, in suscipit nunc pharetra eu.</p>
                    </div>
                </div>
                
                <div className="flex flex-col w-[80vw] mb-[10vh]">
                    <h2 class="text-2xl">Events Held:</h2>
                    <div className="flex flex-row flex-wrap justify-evenly mt-5">
                        {eventDummy.map((item) => (
                            <div class="bg-white p-15 text-center max-w-[25vw] min-h-[40vh] shadow-md rounded-lg p-4 m-5 grow-1" key={item.id}>
                                <FaImage className="text-6xl text-gray-500 m-auto"/>
                                <h3 className="text-lg">{item.title}</h3>
                                <p>{item.start[0]}</p>
                                <p>{item.desc}</p>
                                <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 cursor-pointer w-full max-w-2xs mt-10 m-auto">More Info!</button>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default Profile