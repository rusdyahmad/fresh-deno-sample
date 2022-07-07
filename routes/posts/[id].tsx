/** @jsx h */
import {h} from "preact";
import {tw} from "@twind";
import {PageProps} from "$fresh/server.ts";
import Header from "../../islands/Header.tsx";
import Footer from "../../islands/Footer.tsx";

export const handler : Handlers < Post | null > = {
    async GET(_req, ctx) {

        const id = ctx.params.id
        const getPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post = await getPost.json()
        return ctx.render(post)
    }
}

export default function Post(props : PageProps) {
    return (
        <div class={tw `flex flex-col h-screen`}>
            <Header/>
            <main class={tw `flex-grow`}>
                <div class={tw `p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto`}>
                    <h1 class={tw `my-6 text-2xl`}>{props.data.title}</h1>
                    <p class={tw `my-6`}>
                        {props.data.body}
                    </p>
                    <a
                        class={tw `mt-1 bg-green-500 border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-green-500`}
                        href="/posts">Back</a>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
