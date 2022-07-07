/** @jsx h */
import {h} from "preact";
import {tw} from "@twind";
import {PageProps} from "$fresh/server.ts";
import {Handlers} from "$fresh/server.ts";

import Header from "../../islands/Header.tsx";
import Footer from "../../islands/Footer.tsx";

interface User {
    location : string;
    name : string;
    bio : string;
    avatar_url : string;
}

export const handler : Handlers < User | null > = {
    async GET(_, ctx) {
        const {username} = ctx.params;
        const resp = await fetch(`https://api.github.com/users/${username}`);
        if (resp.status === 404) {
            return ctx.render(null);
        }
        const user : User = await resp.json();
        return ctx.render(user);
    }
};

export default function Page({data} : PageProps < User | null >) {
    if (!data) {
        return <h1>User not found</h1>;
    }

    return (
        <div class={tw `flex flex-col h-screen`}>
            <Header/>
            <main class={tw `flex-grow`}>
                <div class={tw `p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto`}>

                    <figure class={tw `bg-slate-100 rounded-xl p-8 dark:bg-slate-800`}>
                        <img
                            class={tw `w-24 h-24 rounded-full mx-auto`}
                            src={data.avatar_url}
                            alt=""
                            width="384"
                            height="512"/>
                        <div class={tw `pt-6 text-center space-y-4`}>
                            <blockquote>
                                <p class="text-lg font-medium">
                                    {data.bio}
                                </p>
                            </blockquote>
                            <figcaption class={tw `font-medium`}>
                                <div class={tw `text-sky-500 dark:text-sky-400`}>
                                    {data.name}
                                </div>
                                <div class={tw `text-slate-700 dark:text-slate-500`}>
                                    {data.location}
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                </div>
            </main>
            <Footer/>
        </div>
    )
}