import axios from "axios";
// async to prevent the program from becoming unresponsive ----> like threads
export const fetchData = async () => {
    try {
    // get data from the Api
    const response = await axios.get("https://661d850798427bbbef020a05.mockapi.io/Destination");
    // append all users to the setUsers as an array
    return(response.data);
    } catch (error) {
    console.error("Error fetching data:", error);
    }
};

export const addDestination = async (destination) => {
    try{
        // post data to Api
        const response = await axios.post("https://661d850798427bbbef020a05.mockapi.io/Destination",destination);
        // ... ---> means set all existing users to setUsers 
        return(response.data);
        // // reset name and email after successfully added the user
        // setName('');
        // setEmail('');
        // Refetch the data to update the users state with the latest data
        //fetchData();

    }catch(error){
        console.error('Error adding Destination:', error);
    }
};

 // Function to update a user
export const updateDestination = async (destinationId, updatedDestinationData) => {
try {
    const response = await axios.put(`https://661d850798427bbbef020a05.mockapi.io/Destination/${destinationId}`, updatedDestinationData);
    // const updatedUsers = users.map(user => {
    // if (user.id === userId) {
    //     return { ...user, ...response.data };
    // }
    // return user;
    // });
    // setUsers(updatedUsers);
    return(response.data)
} catch (error) {
    console.error('Error updating destination:', error);
}
};

export const deleteDestination= async (destinationId) => {
    try {
        const response = await axios.delete(`https://661d850798427bbbef020a05.mockapi.io/Destination/${destinationId}`);
        return(response.data)
        // setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
        console.error('Error deleting Destination:', error);
    }
};
