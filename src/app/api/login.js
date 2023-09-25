import toast from "react-hot-toast";

const loginApi = async (data) => {
  try {
    const res = await fetch(`https://ecombackend.softprodigyphp.in/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    });

    if (res.ok) {
      toast.success("Login success")
      return await res.json();
    } else {
      toast.error(`${res.statusText }`)
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
    return { message: 'An error occurred while logging in.' }; // Return an error message
  }
}

export default loginApi;
