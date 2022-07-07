/** @jsx h */
import {h} from "preact";
import {PageProps} from "$fresh/server.ts";
import {tw} from "@twind";
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";

export default function Greet(props : PageProps) {
    return <div class={tw `flex flex-col h-screen`}>
        <Header/>
        <main class={tw `flex-grow`}>
            <div class={tw `p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto`}>
                <h1 class={tw `my-6 text-2xl uppercase`}>{props.params.name}</h1>
                Hello {props.params.name}. Change the slug to any name.
            </div>
        </main>
        <Footer/>
    </div>
}
