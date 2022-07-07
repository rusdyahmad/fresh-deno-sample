/** @jsx h */
import {h} from "preact";
import {tw} from "@twind";
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";

export default function Home() {
    return (
        <div class={tw`flex flex-col h-screen`}>
            <Header/>
            <main class={tw`flex-grow`}>
                <div class={tw`p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto`}>
                    <h1 class={tw`my-6 text-2xl`}>About</h1>
                    <p class={tw`my-6`}>
                        Welcome to `about page`. Nothing here. Thanks looking at me.
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
