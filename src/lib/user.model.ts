import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '$env/static/private'

import prisma from './database'

const createUser = async (name: string, email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (user) {
        return {
            error: 'User already exists',
        };
    }

    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: await bcrypt.hash(password, 10),
            }
        })
        return { user }
    } catch (error) {
        return {
            error: 'Something went wrong'
        }
    }
}

const loginuser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    })

    if (!user) {
        return {
            error: 'Invalid credentials'
        }
    }

    const passwordIsValid = await bcrypt.compare(password, user.password)

    if (!passwordIsValid) {
        return {
            error: 'Invalid credentials'
        }
    }

    const jwtUser = {
        id: user.id,
        email: user.email
    }

    const token = jwt.sign(jwtUser, JWT_SECRET, {
        expiresIn: '1d'
    })

    return { token }
}

export { createUser, loginuser }