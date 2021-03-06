/** @jsx h */
import {h} from "preact";
import {tw} from "@twind";
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
    return (
        <div class={tw`flex flex-col h-screen`}>
            <Header/>
            <main class={tw`flex-grow`}>
                <div class={tw`p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto`}>
                    <p class={tw`my-6`}>
                        Welcome to `fresh`. Try update this message in the ./routes/index.tsx file, and
                        refresh.
                    </p>
                    <Counter start={3}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
