// http://localhost:9527/user/register,POST,{username: "string", password: "string"}

const baseUrl = 'http://localhost:9527'

export const signUp = (data: any) => {
  return fetch(`${baseUrl}/user/register`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
