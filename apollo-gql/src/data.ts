interface UserType {
    name: string
    email: string
    phone?: number
    createdAt?: Date | string
}

export const data:UserType[] = [
    {
       name:"John Doe" ,
       email:"JD@gmail.com",
       phone: 9875152,
       createdAt: new Date().toString()
    },
    {
        name:"Karen Doe" ,
        email:"KD@gmail.com",
        phone: 4624444,
        createdAt: new Date().toString()
    },
    {
        name:"Chris Doe" ,
        email:"CD@gmail.com",
        createdAt: new Date().toString()
    },
]