const BASE_URL = "http://4.224.186.213/evaluation-service";

export async function authenticate() {
  const response = await fetch(`${BASE_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: import.meta.env.VITE_EMAIL,
      name: import.meta.env.VITE_NAME,
      rollNo: import.meta.env.VITE_ROLLNO,
      accessCode: import.meta.env.VITE_ACCESS_CODE,
      clientID: import.meta.env.VITE_CLIENT_ID,
      clientSecret: import.meta.env.VITE_CLIENT_SECRET,
    }),
  }); // <-- fetch() ends here

  if (!response.ok) {
    throw new Error("Authentication Failed");
  }

  const data = await response.json();

  localStorage.setItem("accessToken", data.access_token);

  return data;
}