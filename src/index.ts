import express, { Request, Response } from "express";
import { Food } from "./schema/Food";
import { foodRouter } from "./routes/food";
import { connection } from "./utils/connection";
import { categoryRouter } from "./routes/category";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 8000;

app.use(express.json());

// const users = [
//     {
//         _id: 1,
//         name: "Narangerel",
//         age: 19,
//         email: "narangerelbumnasan@gmail.com",
//         address: {
//             current: "UB",
//             old: "DZ",
//         },
//         tags: ["user", "admin"]
//     },
//     {
//         _id: 2,
//         name: "Narantsatsaralt",
//         age: 22,
//         email: "narantsatsraltbumnasan@gmail.com",
//         address: {
//             current: "UB",
//             old: "DZ",
//         },
//         tags: ["user"]
//     },
//     {
//         _id: 3,
//         name: "Samjaadamba",
//         age: 19,
//         email: "samjaadambabumnasan@gmail.com",
//         address: {
//             current: "UB",
//             old: "DZ",
//         },
//         tags: ["user"]
//     }
// ]

// app.get('/', (_req: Request, res: Response) => {
//     //    res.send("Hello from Naka"); // text uyed
//     res.json({ message: "Hello from Nakanim" }) // json uyed
// })

// app.get('/users', (_req: Request, res: Response) => {
//     res.json({ success: true, users })
// })

// app.get('/users/:id', (req: Request, res: Response) => {
//     const { params } = req;
//     const user = users.find((user) => (user._id == params.id));
//     if (!user) {
//         res.status(404).json({ success: "error", message: "User not fount" })
//     }
//     res.json({ success: true, user });
// })

// app.put('/users/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
//     // console.log(req.body);
//     const user = users.filter((user, index) => {
//         if (user._id == Number(id)) {
//             const updatedUser = { ...user, ...req.body };
//             users[index] = updatedUser
//         }
//     })
//     res.json({ message: "successful update", users })
// });

// app.delete('/users/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
//     const unDeletedUsers = users.filter((user) => {
//         if (user._id != Number(id)) {
//             return user
//         }
//     })
//     res.json({ message: "amjilttai ustgagdlaa", unDeletedUsers })
// })

// app.post('/users', (req: Request, res: Response) => {
//     const newUser = { ...req.body };
//     const moreUsers = [...users, newUser]
//     res.json({ message: "amjilttai nemegdlee", moreUsers })
// })

app.use('/api/v1/food', foodRouter);
// app.use('/api/v2/food', foodRouter);

app.use('/api/v1/category', categoryRouter);

app.get('/', (_req: Request, res: Response) => {
    res.json({ message: "Hello from Nakanim" }) // json uyed
})

app.get('/foods', async(_req: Request, res: Response) => {
    const foods = await Food.find()
    res.json({message: "amjilttai avlaa", foods})
})

app.listen(PORT, async () => {
    await connection()
    console.log(`Server is running on ${PORT}`)
})