/** @jsx h */
import {h} from "preact";
import {tw} from "@twind";
import {PageProps} from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";

export const handler : Handlers < Post | null > = {
    async GET(_req, ctx) {

        const getPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await getPosts.json()
        return ctx.render(posts)
    }
}

export default function Posts(props) {
    return (
        <div class={tw`flex flex-col h-screen`}>
            <Header/>
            <main class={tw`flex-grow`}>
                <div class={tw`p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto`}>
                    <h1 class={tw`my-6 text-2xl`}>Posts from Json Placeholder</h1>
                    <p class={tw`my-6`}>
                    <ul class={tw`space-y-6 lg:space-y-2`}>
                            {props
                                .data
                                .map(posts => {
                                    return <li>
                                        <a href={`/posts/${posts.id}`} title={`${posts.title}`}>{posts.title}</a>
                                    </li>
                                })}
                        </ul>
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
