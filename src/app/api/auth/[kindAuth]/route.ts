import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest } from 'next/server'

// The edge function should handle the request and ensure a response is returned
export async function GET(request: NextRequest) {
    try {
        // Handle authentication
        const response = await handleAuth(request)

        // Return the response from handleAuth if it's valid
        if (response) {
            return response
        }

        // Fallback if handleAuth doesn't return a valid response
        return new Response('Authentication failed', { status: 401 })
    } catch (error) {
        console.error('Error during authentication:', error)
        return new Response('Internal Server Error', { status: 500 })
    }
}
