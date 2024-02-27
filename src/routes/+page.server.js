import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    GitHubLogin: async ({ locals }) => {
        const { data, error } = await locals.supabase.auth.signInWithOAuth({
            provider: 'github',
            // options: {
            //     redirectTo: "http://localhost:5173/auth/callback"
            // }
        });

        if (error) {
            console.log(error);
            return fail(400, {
                message: 'Something went wrong!'
            })
        }

        throw redirect(303, data.url)
    }
};